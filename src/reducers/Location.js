import * as _ from "lodash";

const initialState = {locations: []};

const locationReducer = (state = initialState, action) => {
    let newState;
    switch (action.type){
        case "SET_LOCATIONS":
            newState = _.cloneDeep(state);
            newState.locations = action.all_loc;
            return newState;

      default:
      return state;
  }
};

export default locationReducer;
    
