import React, { useState } from "react";
import { axiosApi } from "../api/axios";

const AddCategory = () => {
  const [catName, setCatName] = useState("");

  const handleCategorySubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosApi.post("category-add", {
        category_name: catName,
      });
      setCatName("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add-category mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card card-body border-0 shadow-lg">
              <form onSubmit={handleCategorySubmit}>
                <div className="mb-3">
                  <label htmlFor="category">Category</label>
                  <input
                    id="category"
                    type="text"
                    className="form-control mt-2"
                    value={catName}
                    onChange={(e) => setCatName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="submit"
                    value="Add Category"
                    className="btn btn-success"
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

export default AddCategory;
