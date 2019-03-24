import React from "react";
import MapContainer from "../../containers/Map";
import { Wrapper, Map, MapManager, ErrorBoundary } from "../../components";

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
              <ErrorBoundary>
                <Map mapMarkers={mapMarkers} />
              </ErrorBoundary>
              
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
