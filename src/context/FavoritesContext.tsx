// FavoritesContext.tsx
import React, { createContext, useEffect, useState, ReactNode } from 'react';
import { IGif } from '../types/types'; 

interface FavoritesContextType {
  favorites: IGif[];
  addFavorite: (gif: IGif) => void;
  removeFavorite: (gifId: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<IGif[]>([]);

  useEffect(() => {
    console.log(favorites); // Log to see if favorites update as expected
  }, [favorites]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (gif: IGif) => {
    if (!favorites.some(favorite => favorite.id === gif.id)) {
      setFavorites([...favorites, gif]);
    }
  };

  const removeFavorite = (gifId: string) => {
    setFavorites(favorites.filter(gif => gif.id !== gifId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};


