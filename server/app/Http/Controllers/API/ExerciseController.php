<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Repository\ExerciseRepository;
use Illuminate\Http\Request;

class ExerciseController extends Controller
{
    protected $exerciseRepository;
    public function __construct(ExerciseRepository $exerciseRepository)
    {
        $this->exerciseRepository = $exerciseRepository;
    }
    public function index(Request $request)
    {
        $exercises = $this->exerciseRepository->indexExercise($request->category, $request->scoreFrom, $request->scoreTo, $request->status);
        return response()->json([
            'exercises' => $exercises,
        ]);
    }

    public function store(Request $request)
    {
        $data = [
            'title' => $request->title,
            'description' => $request->description,
            'cat_id' => $request->cat_id,
            'score' => $request->score,
            'status' => $request->status,
        ];
        $this->exerciseRepository->storeExercise($data);
        return response()->json([
            'message' => 'Exercise saved successfully.',
        ]);
    }

    public function show(string $id)
    {
        $exercise = $this->exerciseRepository->show($id);
        return response()->json([
            'exercise' => $exercise
        ]);
    }
}
