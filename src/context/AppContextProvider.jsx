import { createContext, useContext, useReducer } from "react";
import { recipes } from "../recipesDB";

const AppContext = createContext({
  state: {},
  dispatch: () => {},
});

const initialState = {
  recipes: JSON.parse(localStorage.getItem("recipes")) || recipes,
  filters: {
    search: "",
    category: "name",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE": {
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    }

    case "EDIT_RECIPE": {
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.id ? { ...action.payload } : recipe
        ),
      };
    }

    case "DELETE_RECIPE": {
      return {
        ...state,
        recipes: state.recipes.filter(({ id }) => id !== action.payload),
      };
    }

    case "SELECT_FILTER": {
      return {
        ...state,
        filters: { ...state.filters, category: action.payload },
      };
    }

    case "SEARCH_FILTER": {
      return {
        ...state,
        filters: { ...state.filters, search: action.payload },
      };
    }

    default:
      break;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  localStorage.setItem("recipes", JSON.stringify(state.recipes));

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
