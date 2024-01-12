import React, { useEffect } from "react";
import "./Page.css";
import { pageArray } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { updateTotalPageArray, updatecurrentIndexOfTotalPagesArray } from "./PageSlice";
import { getUpdatedResultOnPageChange } from "../Search/SearchSlice";

const Page = () => {

  const pageState = useSelector((state) => state.page);
  const searchState = useSelector((state) => state.searchState);
  const dispatch = useDispatch();

  const resultArray = searchState.searchResults;
  const totalNoOfResults = searchState.totalResults;
  
  const displayNext20Pages = () => {
    if (pageState.currentIndexOfTotalPagesArray < pageState.totalPagesArray.length - 1) {
      dispatch(updatecurrentIndexOfTotalPagesArray(pageState.currentIndexOfTotalPagesArray + 1));
    }
  };

  const displayPrevious20Pages = () => {
    if (pageState.currentIndexOfTotalPagesArray > 0) {
      dispatch(updatecurrentIndexOfTotalPagesArray(pageState.currentIndexOfTotalPagesArray - 1));
    }
  };

  useEffect(() => {
    dispatch(updateTotalPageArray(pageArray(pageState.totalPages, 10)));
  }, [pageState.totalPages]);

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
        {pageState.totalPages > 0 ? (
          <button
            className="previous button-container"
            onClick={displayPrevious20Pages}
          >
            Previous Page
          </button>
        ) : null}
        {pageState.totalPagesArray[pageState.currentIndexOfTotalPagesArray]?.map((item, index) => (
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
        {pageState.totalPages > 0 ? (
          <button
            className="next button-container"
            onClick={displayNext20Pages}
          >
            Next Page
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

  {/* {currentPage * 20 - 19}
            -
            {noOfPages > 1
              ? currentPage * 20 > totalNoOfResults
                ? totalNoOfResults
                : currentPage * 20
              : totalNoOfResults}{" "}
            out of {totalNoOfResults} */}
