// HomePage.tsx
import React, { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { GifList } from "../components/GifList";
import { useSearchGifs } from "../services/GiphyService";


export const Homepage: React.FC = () => {
  const [query, setQuery] = useState("");
  const { data, isLoading, error } = useSearchGifs(query);

  return (
    <div className="bg-neutral-50 h-screen">
      <SearchBar setQuery={setQuery} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching GIFs: {error.message}</p>}
      {!isLoading && !error && data && <GifList gifs={data.data} />}
    </div>
  );
};
