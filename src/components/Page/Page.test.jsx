import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Page from "./Page";

const mockStore = configureStore();

describe("Page Component", () => {
  it("renders with initial state", () => {
    const initialState = {
      page: {
        currentPage: 1,
        totalPages: 2,
        totalPagesArray: [[1, 2]],
        currentIndexOfTotalPagesArray: 0,
      },
      searchState: {
        searchResults: [{ title: "Movie 1" }],
        totalResults: 30,
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Page />
      </Provider>
    );

    expect(
      screen.getByText("Showing results 1-20 out of 30")
    ).toBeInTheDocument();
  });

  // it("disables previous button when on first Current Index of Total Page Array", () => {
  //   const initialState = {
  //       page: {
  //         currentPage: 1,
  //         totalPages: 20,
  //         totalPagesArray: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
  //         currentIndexOfTotalPagesArray: 0,
  //       },
  //       searchState: {
  //         searchResults: [{ title: 'Movie 1' }],
  //         totalResults: 395,
  //       },
  //   }
  //   const store = mockStore(initialState);

  //   render(
  //     <Provider store={store}>
  //       <Page />
  //     </Provider>
  //   );

  //   const previousButton = screen.getByText(/Previous Page/);
  //   expect(previousButton).toBeInTheDocument();
  //   expect(previousButton).toBeDisabled();
  // });

  // it("disables next button when on last Current Index of Total Page Array", () => {
  //   const initialState = {
  //       page: {
  //         currentPage: 11,
  //         totalPages: 20,
  //         totalPagesArray: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
  //         currentIndexOfTotalPagesArray: 0,
  //       },
  //       searchState: {
  //         searchResults: [{ title: 'Movie 1' }],
  //         totalResults: 395,
  //       },
  //   }
  //   const store = mockStore(initialState);

  //   render(
  //     <Provider store={store}>
  //       <Page />
  //     </Provider>
  //   );

  //   const nextButton = screen.getByText(/Next Page/);
  //   expect(nextButton).toBeInTheDocument();
  //   expect(nextButton).toBeDisabled();
  // });

  // it("handles click on page number", () => {
  //   const initialState = {
  //       page: {
  //         currentPage: 1,
  //         totalPages: 2,
  //         totalPagesArray: [[1, 2]],
  //         currentIndexOfTotalPagesArray: 0,
  //       },
  //       searchState: {
  //         searchResults: [{ title: 'Movie 1' }],
  //         totalResults: 30,
  //       },
  //   }

  //   const store = mockStore(initialState);

  //   render(
  //     <Provider store={store}>
  //       <Page />
  //     </Provider>
  //   );

  //   fireEvent.click(getByText("1"));
  // });

  //   it('renders Page component with pagination buttons', () => {
  //     const initialState = {
  //       page: {
  //         currentPage: 1,
  //         totalPages: 3,
  //         totalPagesArray: [[1, 2, 3]],
  //         currentIndexOfTotalPagesArray: 0,
  //       },
  //       searchState: {
  //         searchResults: [],
  //         totalResults: 45,
  //       },
  //     };

  //     const store = mockStore(initialState);

  //     render(
  //       <Provider store={store}>
  //         <Page />
  //       </Provider>
  //     );

  //     const previousButton = screen.getByText(/Previous Page/);
  //     const nextButton = screen.getByText(/Next Page/);
  //     expect(previousButton).toBeInTheDocument();
  //     expect(nextButton).toBeInTheDocument();
  //   });

  //   it("handles next page click", () => {
  //     const initialState = {
  //         page: {
  //           currentPage: 11,
  //           totalPages: 20,
  //           totalPagesArray: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
  //           currentIndexOfTotalPagesArray: 0,
  //         },
  //         searchState: {
  //           searchResults: [{ title: 'Movie 1' }],
  //           totalResults: 395,
  //         },
  //       };

  //       const store = mockStore(initialState);

  //     render(
  //       <Provider store={store}>
  //         <Page />
  //       </Provider>
  //     );

  //     fireEvent.click(getByText("Next Page"));

  //     expect(getByText("1 2 3 4 5 6 7 8 9 10")).toBeInTheDocument();
  //   });

  //   it("handles previous page click", () => {
  //     const initialState = {
  //         page: {
  //           currentPage: 11,
  //           totalPages: 20,
  //           totalPagesArray: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
  //           currentIndexOfTotalPagesArray: 1,
  //         },
  //         searchState: {
  //           searchResults: [{ title: 'Movie 1' }],
  //           totalResults: 395,
  //         },
  //       };

  //     const store = mockStore(initialState);

  //     render(
  //       <Provider store={store}>
  //         <Page />
  //       </Provider>
  //     );

  //     fireEvent.click(getByText("Previous Page"));

  //     expect(getByText("1 2 3 4 5 6 7 8 9 10")).toBeInTheDocument();
  //   });

  // it("handles click on page number", () => {
  //   const store = mockStore(initialState);

  //   render(
  //     <Provider store={store}>
  //       <Page />
  //     </Provider>
  //   );

  //   fireEvent.click(getByText("1"));
  // });
});
