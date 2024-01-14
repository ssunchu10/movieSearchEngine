import configureStore from "redux-mock-store";
import searchReducer from "./SearchSlice";
import { thunk } from "redux-thunk";
// import getMovieResult from "../../apis/searchMovie";
import {
  updateSearchInput,
  getSearchResponse,
  updateTotalResults,
  getUpdatedResults,
  getUpdatedResultOnPageChange,
} from "./SearchSlice";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
import * as api from "../../apis/searchMovie";

describe("PageSlice Actions", () => {
  it("should create an action to update search input", () => {
    const payload = "Sumit";
    const expectedAction = { type: "searchSlice/updateSearchInput", payload };
    expect(updateSearchInput(payload)).toEqual(expectedAction);
  });

  it("should create an action to update total page array", () => {
    const payload = [1, 2, 3];
    const expectedAction = { type: "searchSlice/getSearchResponse", payload };
    expect(getSearchResponse(payload)).toEqual(expectedAction);
  });

  it("should create an action to update current pages", () => {
    const payload = 20;
    const expectedAction = { type: "searchSlice/updateTotalResults", payload };
    expect(updateTotalResults(payload)).toEqual(expectedAction);
  });
});
describe("SearchSlice Reducer", () => {
  it("should handle updateSearchInput", () => {
    const initialState = {
      searchInput: "",
      searchResults: [],
      totalResults: 0,
    };
    expect(
      searchReducer(initialState, updateSearchInput("Bruce Wayne"))
    ).toEqual({
      searchInput: "Bruce Wayne",
      searchResults: [],
      totalResults: 0,
    });
  });

  it("should handle getSearchResponse", () => {
    const initialState = {
      searchInput: "",
      searchResults: [],
      totalResults: 0,
    };
    expect(searchReducer(initialState, getSearchResponse([1, 2, 3]))).toEqual({
      searchInput: "",
      searchResults: [1, 2, 3],
      totalResults: 0,
    });
  });

  it("should handle updateTotalResults", () => {
    const initialState = {
      searchInput: "",
      searchResults: [],
      totalResults: 0,
    };
    expect(searchReducer(initialState, updateTotalResults(5))).toEqual({
      searchInput: "",
      searchResults: [],
      totalResults: 5,
    });
  });
});

describe("getUpdatedResults", () => {
  // let store;
  // beforeEach(() => {
  //   store = mockStore;
  // });
  it("dispatches the correct actions on successful API response", async () => {
    const apiResponse = {
      results: [],
      total_pages: 10,
      total_results: 100,
    };
    const mockFilterExtraPosts = jest.spyOn(api, "getMovieResult");
    await mockFilterExtraPosts.mockImplementation(() => {
      return apiResponse;
    });

    const initialState = {
      page: {
        totalPages: 25,
        currentPage: 2,
        totalPagesArray: [],
        currentIndexOfTotalPagesArray: 2,
      },
      searchState: {
        searchInput: "some input",
      },
    };
    const currentstore = mockStore(initialState);
    await currentstore.dispatch(getUpdatedResults());
    const expectedActions = [
      {
        type: "searchSlice/getSearchResponse",
        payload: [],
      },
      {
        type: "pageSlice/updateTotalPages",
        payload: 10,
      },
      {
        type: "pageSlice/updateTotalPageArray",
        payload: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
      },
      {
        type: "searchSlice/updateTotalResults",
        payload: 100,
      },
    ];

    expect(currentstore.getActions()).toMatchObject(expectedActions);
  });

  it("dispatches the correct actions on update page result", async () => {
    const apiResponse = {
      results: [],
      total_pages: 10,
      total_results: 100,
    };

    const mockFilterExtraPosts = jest.spyOn(api, "getMovieResult");
    await mockFilterExtraPosts.mockImplementation(() => {
      return apiResponse;
    });

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
    await currentstore.dispatch(getUpdatedResultOnPageChange(2));
    const expectedActions = [
      {
        payload: 2,
        type: "pageSlice/updateCurrentPage",
      },
      {
        payload: [],
        type: "searchSlice/getSearchResponse",
      },
      {
        payload: 10,
        type: "pageSlice/updateTotalPages",
      },
    ];

    expect(currentstore.getActions()).toMatchObject(expectedActions);
  });
});
