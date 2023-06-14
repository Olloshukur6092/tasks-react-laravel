<?php 

namespace App\Repository\Interfaces;

interface ExerciseRepositoryInterface
{
    public function indexExercise($category, $score, $status);
    public function storeExercise($data);
}