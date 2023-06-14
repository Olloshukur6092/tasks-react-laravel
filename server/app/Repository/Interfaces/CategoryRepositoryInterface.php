<?php 

namespace App\Repository\Interfaces;

interface CategoryRepositoryInterface 
{
    public function indexCategory();
    public function storeCategory($data);
}