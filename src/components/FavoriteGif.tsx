// FavoriteGif.tsx
import React from 'react';
import { useFavorites } from '../hooks/useFavorite'; // Adjust the path as necessary
import { GifList } from './GifList'; // Assuming GifList is used for displaying GIFs

export const FavoriteGif: React.FC = () => {
  const { favorites } = useFavorites(); // Access favorites from context
  

  return (<>
    <div className='flex flex-col justify-center text-center pt-8 '>
      <h2 className="text-xl font-semibold">My Favorites</h2>
      {favorites.length > 0 ? (
        <GifList gifs={favorites} />
      ) : (
        <p className="text-center text-red-600 font-semibold">You have no favorites yet.</p> // Display a message when there are no favorites
      )}
    </div></>
  );
};
