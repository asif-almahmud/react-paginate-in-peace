import React, { useState, useEffect } from "react";
import "./index.css";
import PropTypes from "prop-types";



const Paginate = ({totalPageCount, setPage, activeDigitColor, activeBackgroundColor, buttonBorderColor, arrowColor, dotColor}) => {
  const [totalPages, setTotalPages] = useState(Math.ceil(totalPageCount));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(totalPageCount));
    setCurrentPage(1);
  }, [totalPageCount]);

  return (
    <div className="paginationContainer">
      {/* ------------------Pagination---------------------- */}

      {/* ------------------Pagination Part-1 (For 10 pages)---------------------- */}

      {totalPages < 11 && (
        <>
          <div
            onClick={() => {
              setPage(1);
              setCurrentPage(1);
            }}
            className={
              currentPage === 1 ? "firstPageActive" : "firstPageInactive"
            }
          >
            <i
              style={{
                opacity: currentPage === 1 ? "0.5" : null,
                borderColor: arrowColor,
              }}
              className={`${"arrowDouble"} ${"left"} ${
                currentPage === 1 ? "activeStyle" : "inactiveStyle"
              }`}
            ></i>
          </div>
          <div
            onClick={() => {
              if (currentPage > 1) {
                setPage(currentPage - 1);
                setCurrentPage(currentPage - 1);
              }
            }}
            className={
              currentPage === 1 ? "firstPageActive" : "firstPageInactive"
            }
          >
            <i
              style={{
                opacity: currentPage === 1 ? "0.5" : null,
                borderColor: arrowColor,
              }}
              className={`${"arrow"} ${"left"}`}
            ></i>
          </div>
          {totalPages > 0 && (
            <div
              onClick={() => {
                setPage(1);
                setCurrentPage(1);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === 1
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === 1
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={currentPage === 1 ? "pageNoActive" : "pageNoInactive"}
            >
              1
            </div>
          )}
          {totalPages > 1 && (
            <div
              onClick={() => {
                setPage(2);
                setCurrentPage(2);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === 2
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === 2
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={currentPage === 2 ? "pageNoActive" : "pageNoInactive"}
            >
              2
            </div>
          )}
          {totalPages > 2 && (
            <div
              onClick={() => {
                setPage(3);
                setCurrentPage(3);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === 3
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === 3
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={currentPage === 3 ? "pageNoActive" : "pageNoInactive"}
            >
              3
            </div>
          )}
          {totalPages > 3 && (
            <div
              onClick={() => {
                setPage(4);
                setCurrentPage(4);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === 4
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === 4
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={currentPage === 4 ? "pageNoActive" : "pageNoInactive"}
            >
              4
            </div>
          )}
          {totalPages > 4 && (
            <div
              onClick={() => {
                setPage(5);
                setCurrentPage(5);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === 5
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === 5
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={currentPage === 5 ? "pageNoActive" : "pageNoInactive"}
            >
              5
            </div>
          )}
          {totalPages > 5 && (
            <div
              onClick={() => {
                setPage(6);
                setCurrentPage(6);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === 6
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === 6
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={currentPage === 6 ? "pageNoActive" : "pageNoInactive"}
            >
              6
            </div>
          )}
          {totalPages > 6 && (
            <div
              onClick={() => {
                setPage(7);
                setCurrentPage(7);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === 7
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === 7
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={currentPage === 7 ? "pageNoActive" : "pageNoInactive"}
            >
              7
            </div>
          )}
          {totalPages > 7 && (
            <div
              onClick={() => {
                setPage(8);
                setCurrentPage(8);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === 8
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === 8
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={currentPage === 8 ? "pageNoActive" : "pageNoInactive"}
            >
              8
            </div>
          )}
          {totalPages > 8 && (
            <div
              onClick={() => {
                setPage(9);
                setCurrentPage(9);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === 9
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === 9
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={currentPage === 9 ? "pageNoActive" : "pageNoInactive"}
            >
              9
            </div>
          )}
          {totalPages > 9 && (
            <div
              onClick={() => {
                setPage(10);
                setCurrentPage(10);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === 10
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === 10
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={currentPage === 10 ? "pageNoActive" : "pageNoInactive"}
            >
              10
            </div>
          )}
          <div
            onClick={() => {
              if (currentPage < Math.ceil(totalPages)) {
                setPage(currentPage + 1);
                setCurrentPage(currentPage + 1);
              }
            }}
            className={
              currentPage === Math.ceil(totalPages)
                ? "lastPageActive"
                : "lastPageInactive"
            }
          >
            <i
              style={{
                opacity: currentPage === Math.ceil(totalPages) ? "0.5" : null,
                borderColor: arrowColor,
              }}
              className={`${"arrow"} ${"right"}`}
            ></i>
          </div>
          <div
            onClick={() => {
              setPage(Math.ceil(totalPages));
              setCurrentPage(Math.ceil(totalPages));
            }}
            className={
              currentPage === Math.ceil(totalPages)
                ? "lastPageActive"
                : "lastPageInactive"
            }
          >
            <i
              style={{
                opacity: currentPage === Math.ceil(totalPages) ? "0.5" : null,
                borderColor: arrowColor,
              }}
              className={`${"arrowDouble"} ${"right"}`}
            ></i>
          </div>
        </>
      )}

      {/* ------------------Pagination Part-2 (For More than 10 pages)---------------------- */}

      {/* ------------------Pagination Part-2 (Left part)---------------------- */}

      {totalPages > 10 && (
        <>
          <div
            onClick={() => {
              setPage(1);
              setCurrentPage(1);
            }}
            className={
              currentPage === 1 ? "firstPageActive" : "firstPageInactive"
            }
          >
            <i
              style={{
                opacity: currentPage === 1 ? "0.5" : null,
                borderColor: arrowColor,
              }}
              className={`${"arrowDouble"} ${"left"} ${
                currentPage === 1 ? "activeStyle" : "inactiveStyle"
              }`}
            ></i>
          </div>
          <div
            onClick={() => {
              if (currentPage > 1) {
                setPage(currentPage - 1);
                setCurrentPage(currentPage - 1);
              }
            }}
            className={
              currentPage === 1 ? "firstPageActive" : "firstPageInactive"
            }
          >
            <i
              style={{
                opacity: currentPage === 1 ? "0.5" : null,
                borderColor: arrowColor,
              }}
              className={`${"arrow"} ${"left"}`}
            ></i>
          </div>

          {
            <div
              onClick={() => {
                setPage(1);
                setCurrentPage(1);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === 1
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === 1
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={currentPage === 1 ? "pageNoActive" : "pageNoInactive"}
            >
              1
            </div>
          }
          {
            <div
              onClick={() => {
                setPage(2);
                setCurrentPage(2);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === 2
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === 2
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={currentPage === 2 ? "pageNoActive" : "pageNoInactive"}
            >
              2
            </div>
          }

          {currentPage < 6 && (
            <div
              onClick={() => {
                setPage(3);
                setCurrentPage(3);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === 3
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === 3
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={currentPage === 3 ? "pageNoActive" : "pageNoInactive"}
            >
              3
            </div>
          )}
          {currentPage < 6 && (
            <div
              onClick={() => {
                setPage(4);
                setCurrentPage(4);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === 4
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === 4
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={currentPage === 4 ? "pageNoActive" : "pageNoInactive"}
            >
              4
            </div>
          )}
          {currentPage < 6 && (
            <div
              onClick={() => {
                setPage(5);
                setCurrentPage(5);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === 5
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === 5
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={currentPage === 5 ? "pageNoActive" : "pageNoInactive"}
            >
              5
            </div>
          )}
          {currentPage < 6 && (
            <div
              onClick={() => {
                setPage(6);
                setCurrentPage(6);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === 6
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === 6
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={currentPage === 6 ? "pageNoActive" : "pageNoInactive"}
            >
              6
            </div>
          )}

          {/* ------------------Pagination Part-2 (Middle part)---------------------- */}

          {
            <div style={{ color: dotColor ? dotColor : "black" }}>
              &nbsp;...
              {currentPage > 5 && currentPage < totalPages - 4 ? (
                <span>&nbsp;</span>
              ) : null}
            </div>
          }
          {currentPage > 5 && currentPage < totalPages - 4 ? (
            <div
              onClick={() => {
                setPage(currentPage - 1);
                setCurrentPage(currentPage - 1);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === currentPage - 1
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === currentPage - 1
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={
                currentPage === currentPage - 1
                  ? "pageNoActive"
                  : "pageNoInactive"
              }
            >
              {currentPage - 1}
            </div>
          ) : (
            <div style={{ color: "transparent" }}>.</div>
          )}
          {currentPage > 5 && currentPage < totalPages - 4 && (
            <div
              onClick={() => {
                setPage(currentPage);
                setCurrentPage(currentPage);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === currentPage
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === currentPage
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={
                currentPage === currentPage ? "pageNoActive" : "pageNoInactive"
              }
            >
              {currentPage}
            </div>
          )}
          {currentPage > 5 && currentPage < totalPages - 4 && (
            <div
              onClick={() => {
                setPage(currentPage + 1);
                setCurrentPage(currentPage + 1);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === currentPage + 1
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === currentPage + 1
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={
                currentPage === currentPage + 1
                  ? "pageNoActive"
                  : "pageNoInactive"
              }
            >
              {currentPage + 1}
            </div>
          )}
          {
            <div style={{ color: dotColor ? dotColor : "black" }}>
              {currentPage > 5 && currentPage < totalPages - 4 ? (
                <span>&nbsp;</span>
              ) : null}
              ...&nbsp;
            </div>
          }

          {/* ------------------Pagination Part-2 (Right part)---------------------- */}

          {currentPage > totalPages - 5 && (
            <div
              onClick={() => {
                setPage(totalPages - 5);
                setCurrentPage(totalPages - 5);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === totalPages - 5
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === totalPages - 5
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={
                currentPage === totalPages - 5
                  ? "pageNoActive"
                  : "pageNoInactive"
              }
            >
              {totalPages - 5}
            </div>
          )}
          {currentPage > totalPages - 5 && (
            <div
              onClick={() => {
                setPage(totalPages - 4);
                setCurrentPage(totalPages - 4);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === totalPages - 4
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === totalPages - 4
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={
                currentPage === totalPages - 4
                  ? "pageNoActive"
                  : "pageNoInactive"
              }
            >
              {totalPages - 4}
            </div>
          )}
          {currentPage > totalPages - 5 && (
            <div
              onClick={() => {
                setPage(totalPages - 3);
                setCurrentPage(totalPages - 3);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === totalPages - 3
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === totalPages - 3
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={
                currentPage === totalPages - 3
                  ? "pageNoActive"
                  : "pageNoInactive"
              }
            >
              {totalPages - 3}
            </div>
          )}
          {currentPage > totalPages - 5 && (
            <div
              onClick={() => {
                setPage(totalPages - 2);
                setCurrentPage(totalPages - 2);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === totalPages - 2
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === totalPages - 2
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={
                currentPage === totalPages - 2
                  ? "pageNoActive"
                  : "pageNoInactive"
              }
            >
              {totalPages - 2}
            </div>
          )}
          {
            <div
              onClick={() => {
                setPage(totalPages - 1);
                setCurrentPage(totalPages - 1);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === totalPages - 1
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === totalPages - 1
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={
                currentPage === totalPages - 1
                  ? "pageNoActive"
                  : "pageNoInactive"
              }
            >
              {totalPages - 1}
            </div>
          }
          {
            <div
              onClick={() => {
                setPage(totalPages);
                setCurrentPage(totalPages);
              }}
              style={{
                borderColor: buttonBorderColor
                  ? buttonBorderColor
                  : activeBackgroundColor,
                backgroundColor:
                  currentPage === totalPages
                    ? activeBackgroundColor
                    : activeDigitColor,
                color:
                  currentPage === totalPages
                    ? activeDigitColor
                    : activeBackgroundColor,
              }}
              className={
                currentPage === totalPages ? "pageNoActive" : "pageNoInactive"
              }
            >
              {totalPages}
            </div>
          }

          <div
            onClick={() => {
              if (currentPage < totalPages) {
                setPage(currentPage + 1);
                setCurrentPage(currentPage + 1);
              }
            }}
            className={
              currentPage === totalPages ? "lastPageActive" : "lastPageInactive"
            }
          >
            <i
              style={{
                opacity: currentPage === totalPages ? "0.5" : null,
                borderColor: arrowColor,
              }}
              className={`${"arrow"} ${"right"}`}
            ></i>
          </div>
          <div
            onClick={() => {
              setPage(totalPages);
              setCurrentPage(totalPages);
            }}
            className={
              currentPage === totalPages ? "lastPageActive" : "lastPageInactive"
            }
          >
            <i
              style={{
                opacity: currentPage === totalPages ? "0.5" : null,
                borderColor: arrowColor,
              }}
              className={`${"arrowDouble"} ${"right"} ${
                currentPage === 1 ? "activeStyle" : "inactiveStyle"
              }`}
            ></i>
          </div>
        </>
      )}

      {/* ------------------Pagination Completed---------------------- */}
    </div>
  );
};


Paginate.propTypes = {
  totalPageCount : PropTypes.number.isRequired,
  setPage : PropTypes.func.isRequired,
  activeDigitColor : PropTypes.string,
  activeBackgroundColor : PropTypes.string,
  buttonBorderColor : PropTypes.string,
  arrowColor : PropTypes.string,
  dotColor : PropTypes.string,
}




export default Paginate;
