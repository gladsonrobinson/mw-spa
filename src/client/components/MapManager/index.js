import React from "react";
import PlaceSearchModalBtn from "../PlaceSearchModalBtn";
import "./map-manager.css";

export default class MapManager extends React.PureComponent {
  onDelectClick = id => {
    this.props.removeMapMarker(id);
  };
  render() {
    return (
      <div className="map-manager">
        <div>
          <PlaceSearchModalBtn
            showModal={this.props.showModal}
            handleOpenModal={this.props.showPlaceSearchModal}
            handleCloseModal={this.props.hidePlaceSearchModal}
            onPlaceSelect={this.props.onPlaceSelect}
          />
        </div>
        <div className="map-manager-markers">
          {this.props.mapMarkers.length > 0 &&
            this.props.mapMarkers.map(item => {
              return (
                <div className="map-manager-markers__item" key={item._id}>
                  <h4 className="map-manager-markers__item__address">
                    {item.address}
                  </h4>
                  <div className="map-manager-markers__item__latlng">
                    Latitude: {item.latLng.lat}
                  </div>
                  <div className="map-manager-markers__item__latlng">
                    Longitude: {item.latLng.lng}
                  </div>
                  <button
                    className="map-manager-markers__item__delete"
                    onClick={this.onDelectClick.bind(null, item._id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
