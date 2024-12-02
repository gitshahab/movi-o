
export const favoriteReducer = (state, action) => {
  switch(action.type) {
    case "ADD_FAV":
        return [...state, action.payload];
    case "REMOVE_FAV":
        return state.filter(movie => movie.title !== action.payload.title);
    default:
        return state;
  }
}
