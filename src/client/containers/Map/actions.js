import {
  SET_FETCH_STATUS,
  ADD_MAP_MARKER,
  SHOW_MODAL,
  HIDE_MODAL,
  LOAD_MAP_MARKERS,
  REMOVE_MAP_MARKER
} from "./constants";
import axios from "axios";

export const getMapMarkers = () => {
  return dispatch => {
    return axios.get("api/map").then(res => {
      dispatch(loadInitialData(res.data));
    });
  };
};

export const onPlaceSelect = selectPlaceData => {
  return dispatch => {
    dispatch(hidePlaceSearchModal());
    return axios.post("api/map", selectPlaceData).then(res => {
      dispatch(addMapMarker(res.data));
    });
  };
};

export const removeMapMarker = (id) => {
  return dispatch => {
    return axios.delete(`api/map/${id }`).then(res => {
      dispatch(removeMarkerAction(id));
    });
  };
};

function addMapMarker(data) {
  return {
    type: ADD_MAP_MARKER,
    payload: data
  };
}

export const loadInitialData = data => {
  return {
    type: LOAD_MAP_MARKERS,
    payload: data
  };
};

export const removeMarkerAction = (id) => {
  return {
    type: REMOVE_MAP_MARKER,
    payload: id
  }
}

export const showPlaceSearchModal = () => {
  return {
    type: SHOW_MODAL
  };
};

export const hidePlaceSearchModal = () => {
  return {
    type: HIDE_MODAL
  };
};

function setFetchStatus() {
  return {
    type: SET_FETCH_STATUS
  };
}
