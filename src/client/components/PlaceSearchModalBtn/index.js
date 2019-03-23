import React from "react";
import ReactModal from "react-modal";
import LocationSearchInput from "../LocationSearchInput";
import "./PlaceSearchModalBtn.css";

export default class PlaceSearchModalBtn extends React.Component {
  render() {
    return (
      <div className="add-map">
        <button
          className="add-map__button"
          onClick={this.props.handleOpenModal}
        >
          ADD MAP
        </button>

        <ReactModal isOpen={this.props.showModal} contentLabel="Place Search">
          <div>
            <button onClick={this.props.handleCloseModal}>Close Modal</button>

            <LocationSearchInput onSelect={this.props.onPlaceSelect} />
          </div>
        </ReactModal>
      </div>
    );
  }
}
