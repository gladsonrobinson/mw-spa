import {
  SET_FETCH_STATUS,
  LOAD_MAP_MARKERS,
  ADD_MAP_MARKER,
  SHOW_MODAL,
  HIDE_MODAL,
  REMOVE_MAP_MARKER
} from "./constants";

let initialState = {
  mapMarkers: [],
  errorMessage: "",
  fetchStatus: false,
  showModal: false,
};

const map = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MAP_MARKERS:
      return {
        ...state,
        fetchStatus: false,
        mapMarkers: action.payload,
        errorMessage: action.payload.message
      };
    case ADD_MAP_MARKER:
      return { ...state, mapMarkers: [...state.mapMarkers, action.payload] };
    case REMOVE_MAP_MARKER:
      return {
        ...state,
        mapMarkers: state.mapMarkers.filter(item => item._id !== action.payload)
      };
    case SET_FETCH_STATUS:
      return { ...state, fetchStatus: true, errorMessage: "" };
    case SHOW_MODAL:
      return { ...state, showModal: true };
    case HIDE_MODAL:
      return { ...state, showModal: false };
    default:
      return state;
  }
};

export default map;
