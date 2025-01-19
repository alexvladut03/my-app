"use client";

import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext({
  items: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
  countFavorites: () => 0,
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isFavorite = (productId) => favorites.includes(productId);

  const countFavorites = () => favorites.length;

  return (
    <FavoritesContext.Provider
      value={{ items: favorites, toggleFavorite, isFavorite, countFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
