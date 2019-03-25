import reducer from "../../../../src/client/containers/Map/reducers";

describe("Map Reducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      mapMarkers: [],
      errorMessage: "",
      fetchStatus: false,
      showModal: false,
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle LOAD_MAP_MARKERS", () => {
    const state = {
      mapMarkers: [{
        "latLng": { "lat": 50.1139928, "lng": 8.67412539999998 },
        "_id": "5c978106be3a090045a174e6",
        "address": "Goethestraße, Frankfurt, Germany", "__v": 0
      }],
      fetchStatus: false,
      showModal: false,
    };
    const action = {
      type: "LOAD_MAP_MARKERS",
      payload: [{
        "latLng": { "lat": 50.1139928, "lng": 8.67412539999998 },
        "_id": "5c978106be3a090045a174e6",
        "address": "Goethestraße, Frankfurt, Germany", "__v": 0
      }]
    };
    expect(reducer(undefined, action)).toEqual(state);
  });

  it("should handle ADD_MAP_MARKER", () => {
    const curentState = {
      mapMarkers: [],
      fetchStatus: false,
      showModal: false,
    };
    const state = {
      mapMarkers: [{
        "latLng": { "lat": 50.1139928, "lng": 8.67412539999998 },
        "_id": "5c978106be3a090045a174e6",
        "address": "Goethestraße, Frankfurt, Germany",
      }],
      fetchStatus: false,
      showModal: false,
    };
    const action = {
      type: "ADD_MAP_MARKER",
      payload: {
        "latLng": { "lat": 50.1139928, "lng": 8.67412539999998 },
        "_id": "5c978106be3a090045a174e6",
        "address": "Goethestraße, Frankfurt, Germany",
      }
    };
    expect(reducer(curentState, action)).toEqual(state);
  });

  it("should handle REMOVE_MAP_MARKER", () => {
    const currentState = {
      mapMarkers: [{
        "latLng": { "lat": 50.1139928, "lng": 8.67412539999998 },
        "_id": "5c978106be3a090045a174e6",
        "address": "Goethestraße, Frankfurt, Germany", "__v": 0
      }],
      fetchStatus: false,
      showModal: false,
    }
    const stateAfterAction = {
      mapMarkers: [],
      fetchStatus: false,
      showModal: false,
    };
    const action = {
      type: "REMOVE_MAP_MARKER",
      payload: "5c978106be3a090045a174e6"
    };
    expect(reducer(currentState, action)).toEqual(stateAfterAction);
  });

  it("should handle SHOW_MODAL", () => {
    const currentState = {
      mapMarkers: [{
        "latLng": { "lat": 50.1139928, "lng": 8.67412539999998 },
        "_id": "5c978106be3a090045a174e6",
        "address": "Goethestraße, Frankfurt, Germany", "__v": 0
      }],
      fetchStatus: false,
      showModal: false,
    };
    const stateAfterAction = {
      mapMarkers: [{
        "latLng": { "lat": 50.1139928, "lng": 8.67412539999998 },
        "_id": "5c978106be3a090045a174e6",
        "address": "Goethestraße, Frankfurt, Germany", "__v": 0
      }],
      fetchStatus: false,
      showModal: true,
    };
    const action = {
      type: "SHOW_MODAL"
    };
    expect(reducer(currentState, action)).toEqual(stateAfterAction);
  });

  it("should handle HIDE_MODAL", () => {
    const currentState = {
      mapMarkers: [{
        "latLng": { "lat": 50.1139928, "lng": 8.67412539999998 },
        "_id": "5c978106be3a090045a174e6",
        "address": "Goethestraße, Frankfurt, Germany", "__v": 0
      }],
      fetchStatus: false,
      showModal: true,
    };
    const stateAfterAction = {
      mapMarkers: [{
        "latLng": { "lat": 50.1139928, "lng": 8.67412539999998 },
        "_id": "5c978106be3a090045a174e6",
        "address": "Goethestraße, Frankfurt, Germany", "__v": 0
      }],
      fetchStatus: false,
      showModal: false,
    };
    const action = {
      type: "HIDE_MODAL"
    };
    expect(reducer(currentState, action)).toEqual(stateAfterAction);
  });
});
