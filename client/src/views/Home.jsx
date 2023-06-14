import React from "react";
import Pagenation from "../components/Pagenation";

const Home = () => {
  return (
    <div id="main">
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card card-body shadow-lg border-0">
              <div className="filters">
                <p>Filters</p>
              </div>
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
                  />
                </div>
              </div>
              <div className="category-filter">
                <h4 className="my-4">Category Filter</h4>
                <ul className="list-group">
                  <li className="list-group-item active" aria-current="true">
                    An active item
                  </li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                  <li className="list-group-item">A fourth item</li>
                  <li className="list-group-item">And a fifth one</li>
                </ul>
              </div>
              <div className="original-event">
                <h4 className="my-4">Original Event</h4>
                <ul className="list-group">
                  <li className="list-group-item active" aria-current="true">
                    An active item
                  </li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                  <li className="list-group-item">A fourth item</li>
                  <li className="list-group-item">And a fifth one</li>
                </ul>
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
              <div className="col-md-4">
                <div className="card card-body shadow border-0">card 1</div>
              </div>
              <div className="col-md-4">
                <div className="card card-body shadow border-0">card 1</div>
              </div>
              <div className="col-md-4">
                <div className="card card-body shadow border-0">card 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
