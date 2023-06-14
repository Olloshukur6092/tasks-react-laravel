<?php

namespace App\Repository;

use App\Models\Exercise;
use App\Repository\Interfaces\ExerciseRepositoryInterface;

class ExerciseRepository implements ExerciseRepositoryInterface
{
    protected $exerciseModel;
    public function __construct(Exercise $exercise)
    {
        $this->exerciseModel = $exercise->query();
    }
    public function indexExercise($category, $score, $status)
    {
        $exercise_query = $this->exerciseModel->with('category');
        if ($status) {
            $exercise_query->where('status', $status);
        }
        if ($category) {
            $exercise_query->whereHas('category', function ($query) use ($category) {
                $query->where('category_name', $category);
            });
        }
        return $exercise_query->get();
    }

    public function storeExercise($data)
    {
        $this->exerciseModel->create($data);
    }
}
