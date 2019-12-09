import * as _ from "lodash";

const initialState = {dishes: []};

const dishReducer = (state = initialState, action) => {
    let newState;
    switch (action.type){
        case "SET_DISHES":
            newState = _.cloneDeep(state);
            newState.dishes = action.all_loc;
            return newState;

      default:
      return state;
  }
};

export default dishReducer;
    
