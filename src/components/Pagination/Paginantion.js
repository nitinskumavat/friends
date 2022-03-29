import React from "react";
import usePagination from "./usePagination";
import "./pagination.css";

const Pagination = (props) => {
  const { onPageChange, totalCount, currentPage, pageSize, className } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    if (paginationRange.length == 1) {
      onPageChange(1);
    }
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className="page-list">
      <li
        className="nav-btn"
        onClick={() => currentPage > 1 && onPrevious()}
        key={"prev"}
      >
        prev
      </li>
      {paginationRange.map((pg, i) => {
        if (pg === "...") {
          return <li key={i}>...</li>;
        }
        return (
          <li
            className={pg == currentPage ? "page-no active-pg" : "page-no"}
            onClick={() => onPageChange(pg)}
            key={i}
          >
            {pg}
          </li>
        );
      })}
      <li
        className="nav-btn"
        onClick={() => currentPage < lastPage && onNext()}
        key={"next"}
      >
        next
      </li>
    </ul>
  );
};

export default Pagination;
