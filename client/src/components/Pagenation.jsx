import React from "react";

const Pagenation = () => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination bg-white shadow justify-content-center p-2">
        <li className="page-item">
          <a className="page-link px-4" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link px-4" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link px-4" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link px-4" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link px-4" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagenation;
