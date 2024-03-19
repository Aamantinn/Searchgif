// GifList.tsx
import React from "react";
import { IGif } from "../types/types";

interface GifListProps {
  gifs: IGif[];
 
}

export const GifList: React.FC<GifListProps> = ({ gifs }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-2 p-10">
      {gifs.map((gif) => (
        <div key={gif.id} className="w-full h-48 overflow-hidden relative">
          <img
            className="min-w-full min-h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={gif.images.fixed_height.url}
            alt={gif.title}
          />
          <button
            className="absolute bottom-0 left-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
           
          >
            Favorite
          </button>
        </div>
      ))}
    </div>
  );
};
