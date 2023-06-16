import React from "react";

const Pagenation = ({ totalPages, onPageChange }) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination bg-white shadow justify-content-center p-2">
        <button className="btn btn-primary" onClick={handlePreviousPage}>Prev</button>
        <li className="page-item">2</li>
        <button className="btn btn-primary" onClick={handleNextPage}>Next</button>
      </ul>
    </nav>
  );
};

export default Pagenation;
