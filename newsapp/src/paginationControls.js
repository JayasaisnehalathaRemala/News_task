// PaginationControls.js
import React from 'react';

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination-controls">
      <button onClick={handlePrevClick} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={handleNextClick} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
