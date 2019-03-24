import React from "react";
import ReactModal from "react-modal";
import LocationSearchInput from "../LocationSearchInput";
import "./PlaceSearchModalBtn.css";

const customStyles = {
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '78%',
    transform: 'translate(-50%, -50%)',
    height: '300px'
  }
};

ReactModal.setAppElement('#root')

export default class PlaceSearchModalBtn extends React.Component {
  render() {
    return (
      <div className="add-map">
        <button
          className="add-map__button"
          onClick={this.props.handleOpenModal}>
          ADD MAP
        </button>

        <ReactModal isOpen={this.props.showModal} contentLabel="Place Search" style={customStyles}>
          <div className="add-map__modal">
            <a href="javascript:void(0)" className="add-map__modal__close" onClick={this.props.handleCloseModal}></a>
            <p>Search and select places from Germany</p>
            <LocationSearchInput onSelect={this.props.onPlaceSelect} />
          </div>
        </ReactModal>
      </div>
    );
  }
}
