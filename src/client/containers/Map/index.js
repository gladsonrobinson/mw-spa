import { PureComponent } from "react";
import { connect } from "react-redux";
import {
  getMapMarkers,
  showPlaceSearchModal,
  hidePlaceSearchModal,
  onPlaceSelect,
  removeMapMarker
} from "./actions";

const mapStateToProps = state => ({
  ...state.map
});

const mapDispatchToProps = {
  getMapMarkers,
  showPlaceSearchModal,
  hidePlaceSearchModal,
  onPlaceSelect,
  removeMapMarker
};

class Map extends PureComponent {
  render() {
    return this.props.children({ ...this.props });
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
