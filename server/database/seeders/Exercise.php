<?php

namespace Database\Seeders;

use App\Models\Exercise as ModelsExercise;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Exercise extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ModelsExercise::factory()->count(10)->create();
    }
}
