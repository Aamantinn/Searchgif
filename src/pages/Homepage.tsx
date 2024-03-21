// HomePage.tsx
import React, { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { GifList } from "../components/GifList";
import { useSearchGifs } from "../services/GiphyService";


export const Homepage: React.FC = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading, error } = useSearchGifs(query);

  return (
    <div className=" w-full flex flex-col mx-auto h-full">
      <SearchBar setQuery={setQuery} />
      {isLoading && <div className="flex justify-center"> <p>Loading...</p></div>}
      {error && <div className="flex justify-center"><p>Error fetching GIFs: {error.message}</p></div>}
      {!isLoading && !error && data && <GifList gifs={data.data} />}
    </div>
    
  );
};
