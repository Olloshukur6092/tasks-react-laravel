// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Footer from "./components/Footer";
import AddExercise from "./views/AddExercise";
import AddCategory from "./views/AddCategory";
import ExerciseId from "./views/ExerciseId";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-exercise" element={<AddExercise />} />
        <Route path="add-category" element={<AddCategory />} />
        <Route path="exercise/:id" element={<ExerciseId />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
