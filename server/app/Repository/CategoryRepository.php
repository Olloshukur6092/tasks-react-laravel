<?php 

namespace App\Repository;

use App\Models\Category;
use App\Repository\Interfaces\CategoryRepositoryInterface;

class CategoryRepository implements CategoryRepositoryInterface
{
    protected $categoryModel;
    public function __construct(Category $category)
    {
        $this->categoryModel = $category->query();
    }
    public function indexCategory()
    {
        return $this->categoryModel->get();
    }

    public function storeCategory($data)
    {
        $this->categoryModel->create($data);
    }
}