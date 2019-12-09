import { connect } from "react-redux";
import Swiggy from "../components/swiggy";
import LocationActions from "../actions/Location";

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    locations: state.locations.locations
  };
};

const mapDispatchToProps = {
  fetchLocations: LocationActions.getAllLocations
};

export default connect(mapStateToProps, mapDispatchToProps)(Swiggy);