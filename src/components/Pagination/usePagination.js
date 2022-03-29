import { useMemo } from "react";

const range = (start, end) => {
  let y = [];
  for (let i = start; i <= end; i++) {
    y.push(i);
  }
  return y;
};

function usePagination({ totalCount, pageSize, currentPage }) {
  const paginationRange = useMemo(() => {
    const totaPageCount = Math.ceil(totalCount / pageSize);
    console.log("total page ", totaPageCount);
    const totalPageNumbers = 6;

    if (totalPageNumbers >= totaPageCount) {
      let res = range(1, totaPageCount);
      return res;
    }

    const leftVisibleIndex = Math.max(currentPage - 1, 1);
    const rightVisibleIndex = Math.min(currentPage + 1, totaPageCount);

    const showLeftDots = leftVisibleIndex > 2;
    const ShowRightDots = rightVisibleIndex < totaPageCount - 2;

    const firstIndex = 1;
    const LastIndex = totaPageCount;

    if (!showLeftDots && ShowRightDots) {
      let leftItemCount = 5;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, "...", totaPageCount];
    }

    if (showLeftDots && !ShowRightDots) {
      let rightItemCount = 5;
      let rightRange = range(totaPageCount - rightItemCount + 1, totaPageCount);
      return [firstIndex, "...", ...rightRange];
    }

    if (showLeftDots && ShowRightDots) {
      let mid = range(leftVisibleIndex, rightVisibleIndex);
      return [firstIndex, "...", ...mid, "...", LastIndex];
    }
  }, [totalCount, pageSize, currentPage]);
  return paginationRange;
}

export default usePagination;
