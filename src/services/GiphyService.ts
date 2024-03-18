import { useQuery } from 'react-query';
import { IGiphyResponse } from '../types/types';

const fetchGifs = async (query: string): Promise<IGiphyResponse> => {
  const API_KEY = 'vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8';
  const BASE_URL = 'https://api.giphy.com/v1/gifs';
  const url = `${BASE_URL}/search?api_key=${API_KEY}&q=${encodeURIComponent(query)}&limit=25`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch gifs');
  }

  return response.json();
};

// Custom hook using useQuery to fetch GIFs
export const useSearchGifs = (query: string) => {
  return useQuery(['searchGifs', query], () => fetchGifs(query), {
    // Only perform the query if a query is provided
    enabled: query !== '',
  });
};
