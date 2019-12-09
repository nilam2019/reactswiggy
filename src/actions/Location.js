const getAllLocations = (location) => {
    return dispatch => {
        fetch("/locations/"+location)
        .then(response => response.json())
        .then(all_loc => dispatch({ type:"SET_LOCATIONS",all_loc }));
    };
};
export default{
    getAllLocations

}