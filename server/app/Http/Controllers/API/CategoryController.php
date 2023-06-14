<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Repository\CategoryRepository;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    protected $categoryRepository;
    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }
    public function index()
    {
        $categories = $this->categoryRepository->indexCategory();

        return response()->json([
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $data = [
            'category_name' => $request->category_name,
        ];
        $this->categoryRepository->storeCategory($data);
        return response()->json([
            'message' => 'Data saved Successfully.',
        ]);
    }
}
