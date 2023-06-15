<?php

namespace App\Repository\Interfaces;

interface ExerciseRepositoryInterface
{
    public function indexExercise($category, $scoreFrom, $scoreTo, $status, $search);
    public function storeExercise(array $data);
    public function show(string $id);
}
