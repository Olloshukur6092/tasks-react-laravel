import React, { useEffect, useState } from "react";
import { axiosApi } from "../api/axios";

const AddExercise = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [score, setScore] = useState("");
  const [status, setStatus] = useState("");
  const [categories, setCategories] = useState("");

  const getCategoryList = async () => {
    try {
      const data = await axiosApi.get("category");
      console.log(data.data.categories);
      setCategories(data.data.categories);
    } catch (err) {
      console.log(err);
    }
  };

  const handleExerciseSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axiosApi.post("exercise-add", {
        title: title,
        description: description,
        cat_id: category,
        score: score,
        status: status,
      });
      setTitle("");
      setDescription("");
      setCategory("");
      setScore("");
      setStatus("");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div className="add-exercise mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card card-body border-0 shadow-lg">
              <form onSubmit={handleExerciseSubmit}>
                <div className="mb-3">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    cols="30"
                    rows="5"
                    className="form-control mt-2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="category">Category</label>
                  <select
                    className="form-select mt-2"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="" disabled selected>
                      Select
                    </option>
                    {categories &&
                      categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.category_name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="score">Score</label>
                  <input
                    type="number"
                    className="form-control mt-2"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="status">Status</label>
                  <select
                    name=""
                    id="status"
                    className="form-select mt-2"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value={""} selected disabled>
                      Select
                    </option>
                    <option value="1">Yechilmagan</option>
                    <option value="2">Yechilgan</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input
                    type="submit"
                    className="btn btn-success"
                    value="Add Exercise"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddExercise;
