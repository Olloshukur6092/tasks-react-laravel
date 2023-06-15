import React, { useEffect, useState } from "react";
import { axiosApi } from "../api/axios";
import { useParams } from "react-router-dom";

const ExerciseId = () => {
  const [exerciseData, setExerciseData] = useState([]);
  const params = useParams();
  let exerciseId = params.id;

  const getExerciseList = async () => {
    try {
      const exerciseList = await axiosApi.get(`exercise/${exerciseId}`);
      // console.log(exerciseList.data.exercise.category[0]);
      setExerciseData(exerciseList.data.exercise);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getExerciseList();
  }, []);
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card card-body shadow-lg border-0">
            <div className="exercise-category d-flex justify-content-between">
              <span>{exerciseData.category?.[0].category_name}</span>
              <span>{exerciseData.score} points</span>
            </div>
            <div className="exercise-title-description">
              <p>{exerciseData.title}</p>
              <p>{exerciseData.description}</p>
            </div>
            <div className="exercise-status">
              <span
                className={
                  exerciseData.status === 0 ? "text-danger" : "text-success"
                }
              >
                {exerciseData.status !== 0 ? "Yechilgan" : "Yechilmagan"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseId;
