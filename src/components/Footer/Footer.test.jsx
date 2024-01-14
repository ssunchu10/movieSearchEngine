import { Footer } from "./Footer";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";

describe("Footer Component", () => {
  const initialState = {
    page: {
      totalPages: 0,
      currentPage: 1,
      totalPagesArray: [],
      currentIndexOfTotalPagesArray: 0,
    },
  };
  const mockStore = configureStore();

  it("Should render Footer Component", () => {
    let store = mockStore(initialState);

    const footerComponent = render(
      <Provider store={store}>
        <Footer name="Sumit" />
      </Provider>
    );
    const element = screen.getByText("Sumit");

    expect(element).toBeInTheDocument();
  });
  it("Should render correct Class Container based on totalPages with zero", () => {
    let store = mockStore(initialState);

    const { container: defaultContainer } = render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    expect(defaultContainer.firstChild).toHaveClass("footer-container");
  });

  it("Should render correct Class Container based on totalPages with more then zero", () => {
    const initialState = {
      page: {
        totalPages: 25,
        currentPage: 1,
        totalPagesArray: [],
        currentIndexOfTotalPagesArray: 1,
      },
      searchState: {
        searchInput: "some input",
      },
    };
    const currentstore = mockStore(initialState);

    const { container: executedContainer } = render(
      <Provider store={currentstore}>
        <Footer />
      </Provider>
    );
    expect(executedContainer.firstChild).toHaveClass(
      "footer-executed-container"
    );
  });
});
