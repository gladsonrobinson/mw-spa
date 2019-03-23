import React from "react";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBY448uB6sUyz3ETiIYwciXQdpAOoWGeGQ&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, flex: 1 }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: 51.1657, lng: 10.4515 }}
  >
    {
      props.mapMarkers.length && 
      props.mapMarkers.map(item => 
        <Marker position={{ lat: item.latLng.lat, lng: item.latLng.lng }} key={item._id} /> )
    }
  </GoogleMap>
);

export default Map;
