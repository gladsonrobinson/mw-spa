import reducer from "../../../../src/client/containers/Movies/reducers";

describe("Movie Reducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      movieList: [],
      errorMessage: "",
      fetchStatus: false
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_FETCH_STATUS", () => {
    const state = {
      movieList: [],
      errorMessage: "",
      fetchStatus: true
    };
    const action = {
      type: "SET_FETCH_STATUS"
    };
    expect(reducer(undefined, action)).toEqual(state);
  });

  it("should handle SEARCH_SUCCESS", () => {
    const state = {
      movieList: [{ Title: "CSI: Crime Scene Investigation" }],
      errorMessage: "",
      fetchStatus: false
    };
    const action = {
      type: "SEARCH_SUCCESS",
      payload: {
        data: [{ Title: "CSI: Crime Scene Investigation" }],
        message: ""
      }
    };
    expect(reducer(undefined, action)).toEqual(state);
  });

  it("should handle SEARCH_REJECTED", () => {
    const state = {
      movieList: [],
      errorMessage: {
        err: "Search failed"
      },
      fetchStatus: false
    };
    const action = {
      type: "SEARCH_REJECTED",
      payload: {
        err: "Search failed"
      }
    };
    expect(reducer(undefined, action)).toEqual(state);
  });

  it("should handle CLEAR_RESULTS", () => {
    const state = {
      movieList: [],
      errorMessage: "",
      fetchStatus: false
    };
    const action = {
      type: "CLEAR_RESULTS"
    };
    expect(reducer(undefined, action)).toEqual(state);
  });
});
