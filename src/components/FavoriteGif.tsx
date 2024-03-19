// FavoriteGif.tsx
import React from 'react';
import { useFavorites } from '../hooks/useFavorite'; // Adjust the path as necessary
import { GifList } from './GifList'; // Assuming GifList is used for displaying GIFs

export const FavoriteGif: React.FC = () => {
  const { favorites } = useFavorites(); // Access favorites from context
  console.log(favorites);

  return (
    <div>
      <h2>My Favorites</h2>
      <GifList gifs={favorites} /> 
    </div>
  );
};
