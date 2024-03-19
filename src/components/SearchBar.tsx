import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSearchGifs } from '../services/GiphyService'; // Import your custom hook
import { IGif } from '../types/types';

// Yup schema for validation
const schema = yup.object({
  query: yup.string().required('A search query is required'),
}).required();

interface FormInputs {
  query: string;
}

export const SearchBar: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });
  
  // useState to manage the form input for the query
  const [inputQuery, setInputQuery] = useState('');

  // Custom hook using useQuery to fetch GIFs
  const { data, isLoading, error } = useSearchGifs(inputQuery);

  const onSubmit = (formData: FormInputs) => {
    // Update inputQuery which is used by useSearchGifs to trigger the search
    setInputQuery(formData.query);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('query')} placeholder="Search GIFs" />
        {errors.query && <p>{errors.query.message}</p>}
        <button type="submit">Search</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching GIFs: </p>} {/* Make sure to display the error message */}
      <div>
        {/* Adjust how you access data based on your hook's return value */}
        {data?.data.map((gif: IGif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
        ))}
      </div>
    </>
  );
};
