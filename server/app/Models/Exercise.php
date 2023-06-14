<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Exercise extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'cat_id',
        'score',
        'status',
    ];

    public function category(): HasMany
    {
        return $this->hasMany(Category::class, 'id', 'cat_id');
    }
}
