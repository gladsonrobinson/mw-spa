import React from "react";
import MapContainer from "../../containers/Map";
import { Wrapper, Map, MapManager } from "../../components";

export default class Home extends React.Component {
  render() {
    return (
      <MapContainer>
        {({
          mapMarkers,
          getMapMarkers,
          showPlaceSearchModal,
          hidePlaceSearchModal,
          showModal,
          onPlaceSelect,
          removeMapMarker
        }) => {
          return (
            <Wrapper className="mw-map" onMountFunction={getMapMarkers}>
              <Map mapMarkers={mapMarkers} />
              <MapManager
                mapMarkers={mapMarkers}
                showPlaceSearchModal={showPlaceSearchModal}
                hidePlaceSearchModal={hidePlaceSearchModal}
                showModal={showModal}
                onPlaceSelect={onPlaceSelect}
                removeMapMarker={removeMapMarker}
              />
            </Wrapper>
          );
        }}
      </MapContainer>
    );
  }
}
