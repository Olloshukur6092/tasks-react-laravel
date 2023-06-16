<?php

namespace App\Repository;

use App\Models\Exercise;
use App\Repository\Interfaces\ExerciseRepositoryInterface;
use Illuminate\Support\Facades\DB;

class ExerciseRepository implements ExerciseRepositoryInterface
{
    protected $exerciseModel;
    public function __construct(Exercise $exercise)
    {
        $this->exerciseModel = $exercise->query();
    }
    public function indexExercise($category, $scoreFrom, $scoreTo, $status, $search, $sortBy, $sortOrder, $perPage, $paginate)
    {
        $exercise_query = $this->exerciseModel->with('category');
        if ($status) {
            $exercise = $exercise_query->where('status', $status)->get();
        }
        if ($category) {
            $exercise = $exercise_query->whereHas('category', function ($query) use ($category) {
                $query->where('category_name', $category);
            })->get();
        }
        if ($scoreFrom && $scoreTo) {
            $exercise = $exercise_query->whereBetween('score', [$scoreFrom, $scoreTo])->get();
        }
        if ($search) {
            $exercise = $exercise_query->where(function ($query) use ($search) {
                $serachLower = strtolower($search);
                $query->where(DB::raw('LOWER(title)'), 'like', '%' . $serachLower . '%')
                    ->orWhere(DB::raw('LOWER(description)'), 'like', '%' . $serachLower . '%')->get();
            });
        }

        // sort
        if ($sortBy && in_array($sortBy, ['category["category_name"]', 'status', 'score', 'id'])) {
            $sortBys = $sortBy;
        } else {
            $sortBys = 'score';
        }

        if ($sortOrder && in_array($sortOrder, ['asc', 'desc'])) {
            $sortOrders = $sortOrder;
        } else {
            $sortOrders = 'desc';
        }

        if ($perPage) {
            $per_page = $perPage;
        } else {
            $per_page = 6;
        }

        if ($paginate) {
            $exercise = $exercise_query->orderBy($sortBys, $sortOrders)->paginate($per_page);
        } else {
            $exercise = $exercise_query->orderBy($sortBys, $sortOrders)->get();
        }

        // return $exercise_query->get();
        return $exercise;
    }

    public function storeExercise($data)
    {
        $this->exerciseModel->create($data);
    }

    public function show(string $id)
    {
        return $this->exerciseModel->where(['id' => $id])->with('category')->first();
    }
}
