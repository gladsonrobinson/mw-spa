import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import MockAdapter from "axios-mock-adapter";
import * as actions from "../../../../src/client/containers/Map/actions";

const axiosMock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mapGetApiRes = [{
  "latLng": { "lat": 50.1139928, "lng": 8.67412539999998 },
  "_id": "5c978106be3a090045a174e6",
  "address": "Goethestraße, Frankfurt, Germany", "__v": 0
},
{
  "latLng": { "lat": 52.52590199999999, "lng": 13.369220199999972 },
  "_id": "5c98833b8871170053f93970",
  "address": "Europaplatz, Berlin, Germany", "__v": 0
}];

const mapPostApiRes = {
  "latLng": { "lat": 52.52590199999999, "lng": 13.369220199999972 },
  "_id": "5c98833b8871170053f93970",
  "address": "Europaplatz, Berlin, Germany", "__v": 0
};

const mapDeleteApiRes = { "n": 1, "ok": 1, "deletedCount": 1 }

describe("Map Marker Action", () => {

  it("should make an http request for getting availabe markers and dispatch LOAD_MAP_MARKERS action", () => {
    const uri = "/api/map";
    axiosMock.onGet(uri).reply(200, mapGetApiRes);

    const loadInitialData = [
      {
        type: "LOAD_MAP_MARKERS",
        payload: mapGetApiRes
      }
    ];

    const store = mockStore({ mapMarker: {} });
    store.dispatch(actions.getMapMarkers()).then(() => {
      expect(store.getActions()).toMatchObject(loadInitialData);
    });
  });

  it("should make an http request on place select from the autocomplete and dispatch ADD_MAP_MARKER action", () => {
    const uri = "/api/map";
    axiosMock.onPost(uri, {
      "latLng": { "lat": 52.52590199999999, "lng": 13.369220199999972 },
      "address": "Europaplatz, Berlin, Germany", "__v": 0
    }).reply(200, mapPostApiRes);

    const loadInitialData = [
      {
        type: "ADD_MAP_MARKER",
        payload: mapPostApiRes
      }
    ];

    const store = mockStore({ mapMarker: {} });
    store.dispatch(actions.onPlaceSelect()).then(() => {
      expect(store.getActions()).toMatchObject(loadInitialData);
    });
  });

  it("should make an http request for remove Map Marker and dispatch REMOVE_MAP_MARKER action", () => {
    const uri = "api/map/1234";
    axiosMock.onDelete(uri).reply(200, mapDeleteApiRes);

    const removeAction = [
      {
        type: "REMOVE_MAP_MARKER",
        payload: 1234
      }
    ];

    const store = mockStore({ mapMarker: {} });
    store.dispatch(actions.removeMapMarker(1234)).then(() => {
      expect(store.getActions()).toMatchObject(removeAction);
    });
  });
});
