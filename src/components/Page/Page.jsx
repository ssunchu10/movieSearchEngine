import React, { useEffect } from "react";
import "./Page.css";
import { pageArray } from "../../utils";
import { useState } from "react";

const Page = ({
  noOfPages,
  onPageChange,
  currentPage,
  totalResults,
  result,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalPages, setTotalPages] = useState([]);

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
  const displayNext20Pages = () => {
    if (currentIndex < totalPages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const displayPrevious20Pages = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    setTotalPages(pageArray(noOfPages, 10));
  }, [noOfPages]);

  const displayPageShowingResult = () => {
    const multiplicationsOf20 = currentPage * 20;

    const displayEndResult = () => {
      if (multiplicationsOf20 > totalResults) {
        return totalResults;
      } else {
        return multiplicationsOf20;
      }
    };
    return `${
      multiplicationsOf20 - 19
    }-${displayEndResult()} out of ${totalResults}`;
  };

  return (
    <div className="page-container">
      <div className="page-result-container">
        {result.length > 0 ? (
          <p className="total-result-container">
            Showing results {displayPageShowingResult()}
            {/* {currentPage * 20 - 19}
            -
            {noOfPages > 1
              ? currentPage * 20 > totalResults
                ? totalResults
                : currentPage * 20
              : totalResults}{" "}
            out of {totalResults} */}
          </p>
        ) : null}
      </div>
      <div className="page-number-container">
        {noOfPages > 0 ? (
          <button
            className="previous button-container"
            onClick={displayPrevious20Pages}
          >
            Previous Page
          </button>
        ) : null}
        {totalPages[currentIndex]?.map((item, index) => (
          <div
            key={index}
            className="each-page-container"
            onClick={() => {
              onPageChange(item);
            }}
          >
            {item}
          </div>
        ))}
        {noOfPages > 0 ? (
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
