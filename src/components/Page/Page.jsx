import React from "react";
import "./Page.css";
import { useDispatch, useSelector } from "react-redux";
import { displayPage } from "./PageSlice";
import { getUpdatedResultOnPageChange } from "../Search/SearchSlice";

const Page = () => {
  const pageState = useSelector((state) => state.page);
  const searchState = useSelector((state) => state.searchState);
  const dispatch = useDispatch();

  const resultArray = searchState.searchResults;
  const totalNoOfResults = searchState.totalResults;
  const currentIndexOfTotalPagesArray = pageState.currentIndexOfTotalPagesArray;
  const totalPagesArray = pageState.totalPagesArray;
  const totalPages = pageState.totalPages;

  const displayPageShowingResult = () => {
    const multiplicationsOf20 = pageState.currentPage * 20;

    const displayEndResult = () => {
      if (multiplicationsOf20 > totalNoOfResults) {
        return totalNoOfResults;
      } else {
        return multiplicationsOf20;
      }
    };
    return `${
      multiplicationsOf20 - 19
    }-${displayEndResult()} out of ${totalNoOfResults}`;
  };

  return (
    <div className="page-container">
      <div className="page-result-container">
        {resultArray.length > 0 ? (
          <p className="total-result-container">
            Showing results {displayPageShowingResult()}
          </p>
        ) : null}
      </div>
      <div className="page-number-container">
        {totalPages > 0 ? (
          <button
            className="previous button-container"
            onClick={() => {
              dispatch(displayPage('previous'));
            }}
          >
            Previous Pages
          </button>
        ) : null}
        {totalPagesArray[currentIndexOfTotalPagesArray]?.map((item, index) => (
          <div
            key={index}
            className="each-page-container"
            onClick={() => {
              dispatch(getUpdatedResultOnPageChange(item));
            }}
          >
            {item}
          </div>
        ))}
        {totalPages > 0 ? (
          <button
            className="next button-container"
            onClick={() => {
              dispatch(displayPage('next'));
            }}
          >
            Next Pages
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Page;
// Component Did Mount
/*
  useEffect(() => {
    setTotalPages(pageArray(noOfPages, 20));
  }, []);
  */

// Component Did Update
/*
  useEffect(() => {
    setTotalPages(pageArray(noOfPages, 20));
  }, [noOfPages]);
  */

// Anything Updates made to Page Component - Run the Function
/*
  useEffect(() => {
    setTotalPages(pageArray(noOfPages, 20));
  });
  */

{
  /* {currentPage * 20 - 19}
            -
            {noOfPages > 1
              ? currentPage * 20 > totalNoOfResults
                ? totalNoOfResults
                : currentPage * 20
              : totalNoOfResults}{" "}
            out of {totalNoOfResults} */
}
