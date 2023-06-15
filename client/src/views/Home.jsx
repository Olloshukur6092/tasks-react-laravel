import React, { useEffect, useState } from "react";
import Pagenation from "../components/Pagenation";
import { axiosApi } from "../api/axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [exerciseList, setExerciseList] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [scoreFrom, setScoreFrom] = useState("");
  const [scoreTo, setScoreTo] = useState("");

  const handleCategoryChange = async (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
    try {
      const data = await axiosApi.get(`exercise?category=${e.target.value}`);
      console.log(data);
      setExerciseList(data.data.exercises);
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatusChange = async (e) => {
    setStatus(e.target.value);
    try {
      const data = await axiosApi.get(
        `exercise?category=${category}&status=${e.target.value}`
      );
      console.log(data);
      setExerciseList(data.data.exercises);
    } catch (err) {
      console.log(err);
    }
  };

  const handleScoreFromChange = (e) => {
    setScoreFrom(e.target.value);
  };

  const handleScoreToChange = (e) => {
    setScoreTo(e.target.value);
  };

  const handleScoreSearch = async () => {
    try {
      const data = await axiosApi.get(
        `exercise?category=${category}&status=${status}&scoreFrom=${scoreFrom}&scoreTo=${scoreTo}`
      );
      console.log(data);
      setExerciseList(data.data.exercises)
    } catch (err) {
      console.log(err);
    }
  };

  const getExerciseList = async () => {
    try {
      const exerciseData = await axiosApi.get("exercise");
      console.log(exerciseData);
      setExerciseList(exerciseData.data.exercises);
    } catch (err) {
      console.log(err);
    }
  };

  const getCategoryList = async () => {
    try {
      const data = await axiosApi.get("category");
      console.log(data);
      setCategories(data.data.categories);
    } catch (err) {
      console.log(err);
    }
  };

  // filter, sort and search

  useEffect(() => {
    getExerciseList();
    getCategoryList();
  }, []);

  return (
    <div id="main">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card card-body shadow-lg border-0">
              <div className="search-input">
                <div className="mb-3">
                  <label htmlFor="search" className="mb-2">
                    Search by name
                  </label>
                  <input
                    type="text"
                    id="search"
                    className="form-control"
                    placeholder="search by name..."
                    value={search}
                    onChange={""}
                  />
                </div>
              </div>
              <div className="category-filter">
                <h4 className="my-4">Filters</h4>
                <div className="category-filter">
                  <label htmlFor="category-filter">Category Filter</label>
                  <select
                    name=""
                    id="category-filter"
                    className="form-select mt-2"
                    value={category}
                    onChange={handleCategoryChange}
                  >
                    <option value={"0"}>All</option>
                    {categories &&
                      categories.map((category) => (
                        <option
                          value={category.category_name}
                          key={category.id}
                        >
                          {category.category_name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="score-filter mt-3 d-flex">
                  <div className="mb-2 me-2">
                    <label htmlFor="scoreFrom">Score From</label>
                    <input
                      type="number"
                      className="form-control mt-2"
                      value={scoreFrom}
                      onChange={handleScoreFromChange}
                    />
                  </div>
                  <div className="mb-2 me-2">
                    <label htmlFor="scoreFrom">Score To</label>
                    <input
                      type="number"
                      className="form-control mt-2"
                      value={scoreTo}
                      onChange={handleScoreToChange}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="" className="opacity-0">
                      Label1
                    </label>
                    <input
                      type="button"
                      value="Search"
                      className="btn btn-success mt-2"
                      onClick={handleScoreSearch}
                    />
                  </div>
                </div>
                <div className="status-filter">
                  <label htmlFor="status-filter">Status</label>
                  <select
                    name=""
                    id="status-filter"
                    className="form-select mt-2"
                    value={status}
                    onChange={handleStatusChange}
                  >
                    <option selected disabled>
                      Select
                    </option>
                    <option value="1">Yechilmagan</option>
                    <option value="2">Yechilgan</option>
                  </select>
                </div>
              </div>
              <div className="qualifiers">
                <h4 className="my-4">Qualifiers</h4>
                <div className="category-sort">
                  <label htmlFor="category-sort">Category sort</label>
                  <select
                    name=""
                    id="category-sort"
                    className="form-select mt-2"
                  >
                    <option selected disabled>
                      All
                    </option>
                    {categories &&
                      categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.category_name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="score-sort my-3">
                  <label htmlFor="score-sort">Score sort</label>
                  <select name="" id="score-sort" className="form-select mt-2">
                    <option value="">Score: 0-100</option>
                    <option value="">Score: 100-0</option>
                  </select>
                </div>
                <div className="status-sort my-3">
                  <label htmlFor="status-sort">Status sort</label>
                  <select name="" id="status-sort" className="form-select mt-2">
                    <option value="0">Yechilmagan</option>
                    <option value="1">Yechilgan</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <Pagenation />
              </div>
            </div>
            <div className="row">
              {exerciseList &&
                exerciseList.map((exercise) => (
                  <div className="col-md-4 mb-2" key={exercise.id}>
                    <div className="card card-body shadow border-0">
                      <div className="category-exercise d-flex justify-content-between">
                        <span>{exercise.category[0].category_name}</span>
                        <span>{exercise.score} points</span>
                      </div>
                      <div className="title-exercise">
                        <p>{exercise.title}</p>
                      </div>
                      <div className="description-exercise">
                        <p>{exercise.description.substring(0, 20)}...</p>
                      </div>
                      <div className="status-exercise d-flex justify-content-between">
                        <span
                          className={
                            exercise.status === 1
                              ? "text-danger"
                              : "text-success"
                          }
                        >
                          {exercise.status === 1 ? "Yechilmagan" : "Yechilgan"}
                        </span>
                        <Link to={`exercise/${exercise.id}`}>Batafsil</Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
