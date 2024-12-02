import { createContext, useContext, useEffect, useReducer } from "react";
import { favoriteReducer } from "../reducer/favoriteReducer";

const initialState = JSON.parse(localStorage.getItem("favorite")) || [];

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(favoriteReducer, initialState);

    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(state));
    }, [state]);

  return (
   <FavoriteContext.Provider value={{ favorite: state, dispatch}}>
    {children}
   </FavoriteContext.Provider>
  );
};

export const useFavorite = () => useContext(FavoriteContext);