import {
  getUpdatedTotalPageArray,
  displayPage,
  updateCurrentPage,
  updateTotalPageArray,
  updateTotalPages,
  updatecurrentIndexOfTotalPagesArray,
} from "./PageSlice";
import configureMockStore from "redux-mock-store";
import pageReducer from "./PageSlice";
import { thunk } from "redux-thunk";
import { pageArray } from "../../utils";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Page Slice Actions", () => {
  it("should create an action to update total pages", () => {
    const payload = 10;
    const expectedAction = { type: "pageSlice/updateTotalPages", payload };
    expect(updateTotalPages(payload)).toEqual(expectedAction);
  });

  it("should create an action to update current pages", () => {
    const payload = 2;
    const expectedAction = { type: "pageSlice/updateCurrentPage", payload };
    expect(updateCurrentPage(payload)).toEqual(expectedAction);
  });

  it("should create an action to update total page array", () => {
    const payload = [1, 2, 3];
    const expectedAction = { type: "pageSlice/updateTotalPageArray", payload };
    expect(updateTotalPageArray(payload)).toEqual(expectedAction);
  });

  it("should create an action to update current index of total pages array", () => {
    const payload = 1;
    const expectedAction = {
      type: "pageSlice/updatecurrentIndexOfTotalPagesArray",
      payload,
    };
    expect(updatecurrentIndexOfTotalPagesArray(payload)).toEqual(
      expectedAction
    );
  });
});

describe("Page Slice Reducer", () => {
  it("should handle updateTotalPages", () => {
    const initialState = {
      totalPages: 0,
    };
    expect(pageReducer(initialState, updateTotalPages(5))).toEqual({
      totalPages: 5,
    });
  });

  it("should handle updateCurrentPage", () => {
    const initialState = {
      currentPage: 1,
    };
    expect(pageReducer(initialState, updateCurrentPage(3))).toEqual({
      currentPage: 3,
    });
  });

  it("should handle updateTotalPageArray", () => {
    const initialState = {
      totalPagesArray: [],
    };
    expect(pageReducer(initialState, updateTotalPageArray([1, 2, 3]))).toEqual({
      totalPagesArray: [1, 2, 3],
    });
  });

  it("should handle updatecurrentIndexOfTotalPagesArray", () => {
    const initialState = {
      currentIndexOfTotalPagesArray: 0,
    };
    expect(
      pageReducer(initialState, updatecurrentIndexOfTotalPagesArray(2))
    ).toEqual({
      currentIndexOfTotalPagesArray: 2,
    });
  });
});

describe("PageSlice Actions", () => {
  it("Disapatch getUpdatedTotalPageArray", () => {
    const currentstore = mockStore({
      page: {
        totalPages: 0,
        currentPage: 1,
        totalPagesArray: [],
        currentIndexOfTotalPagesArray: 0,
      },
    });

    currentstore.dispatch(getUpdatedTotalPageArray(0));
    // const payload = 10;
    const expectedAction = {
      type: "pageSlice/updateTotalPageArray",
      payload: [],
    };
    expect(currentstore.getActions()).toMatchObject([expectedAction]);
    // console.log("currentstore.getActions()", currentstore.getActions());
  });

  it("Disapatch Display Page for previous", () => {
    const currentstore = mockStore({
      page: {
        totalPages: 25,
        currentPage: 2,
        totalPagesArray: [],
        currentIndexOfTotalPagesArray: 2,
      },
    });

    currentstore.dispatch(displayPage("previous"));
    // const payload = 10;
    const expectedAction = {
      type: "pageSlice/updatecurrentIndexOfTotalPagesArray",
      payload: 1,
    };
    // expect(currentstore.getActions()).toEqual([expectedAction]);
    expect(currentstore.getActions()).toMatchObject([expectedAction]);
    // console.log("currentstore.getActions()", currentstore.getActions());
  });

  it("Disapatch Display Page for next", () => {
    const currentstore = mockStore({
      page: {
        totalPages: 25,
        currentPage: 1,
        totalPagesArray: [[0], [0], [0]],
        currentIndexOfTotalPagesArray: 1,
      },
    });

    currentstore.dispatch(displayPage("next"));
    // const payload = 10;
    const expectedAction = {
      type: "pageSlice/updatecurrentIndexOfTotalPagesArray",
      payload: 2,
    };
    // expect(currentstore.getActions()).toEqual([expectedAction]);
    expect(currentstore.getActions()).toMatchObject([expectedAction]);
    // console.log("currentstore.getActions()", currentstore.getActions());
  });
});
//     it("dispatches updatecurrentIndexOfTotalPagesArray for previous page", () => {
//       // const value = "previous";
//       // const initialState = {
//       //   page: {
//       //     currentIndexOfTotalPagesArray: 2,
//       //     totalPagesArray: [1, 2, 3, 4, 5],
//       //   },
//       // };

//       const initialState = {
//         page: {
//           totalPages: 0,
//           currentPage: 1,
//           totalPagesArray: [],
//           currentIndexOfTotalPagesArray: 0,
//         },
//       };
//       const mockStore = configureStore();
//       // store = configureStore([thunk], initialState);

//       store.dispatch(displayPage(value));

//       const actions = store.getActions();
//       expect(actions).toContainEqual(updatecurrentIndexOfTotalPagesArray(1));
//     });

//     // it("dispatches updatecurrentIndexOfTotalPagesArray for next page", () => {
//     //   const value = "next";
//     //   const initialState = {
//     //     page: {
//     //       currentIndexOfTotalPagesArray: 2,
//     //       totalPagesArray: [1, 2, 3, 4, 5],
//     //     },
//     //   };
//     //   store = configureStore([thunk], initialState);

//     //   store.dispatch(displayPage(value));

//     //   const actions = store.getActions();
//     //   expect(actions).toContainEqual(updatecurrentIndexOfTotalPagesArray(3));
//     // });
//   // });
// });
