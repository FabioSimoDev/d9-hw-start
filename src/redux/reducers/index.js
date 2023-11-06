const initialState = JSON.parse(localStorage.getItem("favourites")) || {
  favourites: {
    list: []
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          list: [...state.favourites.list, action.payload]
        }
      };
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          list: state.favourites.list.filter(
            (fName, index) => index !== action.payload
          )
        }
      };
    default:
      return state;
  }
};

export default mainReducer;
