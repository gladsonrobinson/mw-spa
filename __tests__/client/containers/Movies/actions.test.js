import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import * as actions from "../../../../src/client/containers/Movies/actions";

const axiosMock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const searchResponse = [
  {
    Title: "CSI: Crime Scene Investigation",
    Year: "2000–2015",
    imdbID: "tt0247082",
    Type: "series",
    Poster:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyODgwMDMzNV5BMl5BanBnXkFtZTgwMTExOTMyMjE@._V1_SX300.jpg"
  },
  {
    Title: "American Crime Story",
    Year: "2016–",
    imdbID: "tt2788432",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzc2MzJmM2ItMjgzYy00MjgxLTljYjctZjJhYzM1ODFhMzU0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  }
];

describe("getMoviesOnSearch", () => {
  it("should make an http request for movies if the search key length is greater than equals 3", () => {
    const uri = "/api/movies/search?searchkey=crime";
    axiosMock.onGet(uri).reply(200, searchResponse);
    let event = {
      target: {
        value: "crime"
      }
    };

    const successAction = [
      { type: "SET_FETCH_STATUS" },
      { type: "SEARCH_SUCCESS", payload: { data: searchResponse, message: "" } }
    ];

    const store = mockStore({ movies: {} });
    store.dispatch(actions.getMoviesOnSearch(event)).then(() => {
      expect(store.getActions()).toMatchObject(successAction);
    });
  });

  it("should not make an http request if the search key length is less then 3", () => {
    const uri = "/api/movies/search?searchkey=cr";
    let spy = jest.spyOn(axios, "get");
    axiosMock.onGet(uri).reply(200, searchResponse);
    let event = {
      target: {
        value: "cr"
      }
    };

    const clearAction = [{ type: "CLEAR_RESULTS" }];

    const store = mockStore({ movies: {} });

    store.dispatch(actions.getMoviesOnSearch(event));
    expect(store.getActions()).toMatchObject(clearAction);
    expect(spy).not.toHaveBeenCalled();
  });

  it("should set error message on empty result", () => {
    const uri = "/api/movies/search?searchkey=crime";
    let spy = jest.spyOn(axios, "get");
    axiosMock.onGet(uri).reply(200, []);
    let event = {
      target: {
        value: "crime"
      }
    };

    const store = mockStore({ movies: {} });

    store.dispatch(actions.getMoviesOnSearch(event)).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions).toContainEqual({ type: "SET_FETCH_STATUS" });
      expect(expectedActions).toContainEqual({
        type: "SEARCH_SUCCESS",
        payload: {
          data: [],
          message: "no_records_found"
        }
      });
    });

    expect(spy).toHaveBeenCalled();
  });

  it("should set error message on search api error", () => {
    const uri = "/api/movies/search?searchkey=crime";
    let spy = jest.spyOn(axios, "get");
    axiosMock.onGet(uri).reply(500);
    let event = {
      target: {
        value: "crime"
      }
    };

    const store = mockStore({ movies: {} });

    store.dispatch(actions.getMoviesOnSearch(event)).then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions).toContainEqual({ type: "SET_FETCH_STATUS" });
      expect(expectedActions[1].type).toEqual("SEARCH_REJECTED");
    });
    expect(spy).toHaveBeenCalled();
  });
});
