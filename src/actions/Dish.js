const getAllDishes = (location) => {
    return dispatch => {
        fetch("/dishes/"+dishes)
        .then(response => response.json())
        .then(all_loc => dispatch({ type:"SET_DISHES",all_loc }));
    };
};
export default{
    getAllDishes

}