import { createContext, useContext, useReducer } from "react";
import { restaurantsData } from "../data";

const AppContext = createContext({
  state: {},
  dispatch: () => {},
});

const initialState = {
  cuisine: null,
  restaurants: restaurantsData,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CUISINE_SELECT":
      return {
        ...state,
        cuisine: action.payload,
      };

    case "ADD_REVIEW":
      return {
        ...state,
        restaurants: state.restaurants.map((restaurant) =>
          restaurant.id === action.payload.restaurantId
            ? {
                ...restaurant,
                ratings: [...restaurant.ratings, action.payload.reviewDetails],
              }
            : restaurant
        ),
      };

    default:
      return;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
