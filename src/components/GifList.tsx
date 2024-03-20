// GifList.tsx
import React from "react";
import { IGif } from "../types/types";
import { useFavorites } from "../hooks/useFavorite"; 

interface GifListProps {
  gifs: IGif[];
}

export const GifList: React.FC<GifListProps> = ({ gifs }) => {
  const { addFavorite, removeFavorite, favorites } = useFavorites();

  const isFavorite = (gifId: string) => favorites.some(favorite => favorite.id === gifId);

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-2 p-5 md:p-10">
      {gifs.map((gif) => (
        <div key={gif.id} className="w-full h-48 overflow-hidden relative">
          <img
            className="min-w-full min-h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={gif.images.fixed_height.url}
            alt={gif.title}
          />
          <button
  className="absolute bottom-2 left-2 bg-neutral-300 hover:bg-neutral-400 text-blue-700 font-bold p-1 rounded-full flex items-center justify-center"
  onClick={() => isFavorite(gif.id) ? removeFavorite(gif.id) : addFavorite(gif)}
  aria-label={isFavorite(gif.id) ? 'Remove from favorites' : 'Add to favorites'}
>
  {isFavorite(gif.id) ?
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="red" viewBox="0 0 24 24" stroke="none"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
    :
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  }
</button>

        </div>
      ))}
    </div>
  );
};
