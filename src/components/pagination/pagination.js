import React from "react";
import "./pagination.scss";

const Pagination = ({ activePage, goToPage }) => {
  const isActive = value => {
    return value === activePage ? "pagination--active" : null;
  };
  return (
    <div className="pagination">
      <div
        onClick={() => {
          goToPage(0);
        }}
        className={isActive(1)}
      />
      <div
        onClick={() => {
          goToPage(1);
        }}
        className={isActive(2)}
      />
      <div
        onClick={() => {
          goToPage(2);
        }}
        className={isActive(3)}
      />
      <div
        onClick={() => {
          goToPage(3);
        }}
        className={isActive(4)}
      />
    </div>
  );
};

export default Pagination;
