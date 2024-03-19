import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSearchGifs } from "../services/GiphyService"; // Import your custom hook
import { IGif } from "../types/types";

// Yup schema for validation
const schema = yup
  .object({
    query: yup.string().required("A search query is required"),
  })
  .required();

interface FormInputs {
  query: string;
}

export const SearchBar: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  // useState to manage the form input for the query
  const [inputQuery, setInputQuery] = useState("");

  // Custom hook using useQuery to fetch GIFs
  const { data, isLoading, error } = useSearchGifs(inputQuery);

  const onSubmit = (formData: FormInputs) => {
    // Update inputQuery which is used by useSearchGifs to trigger the search
    setInputQuery(formData.query);
  };

  return (
    <>
      <form
        className="flex flex-col md:flex-row w-full p-10  gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-full px-2 py-2 border-2 rounded-md"
          {...register("query")}
          placeholder="Search GIFs"
        />
        {errors.query && <p>{errors.query.message}</p>}
        <button
          className="px-8 py-3  font-semibold rounded-md text-white text-lg bg-blue-500 hover:bg-blue-700"
          type="submit"
        >
          Search
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching GIFs: </p>}{" "}
      {/* Make sure to display the error message */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-2 p-10">
        {data?.data.map((gif: IGif) => (
          <div className="w-full h-48 overflow-hidden relative">
            <img
              className="min-w-full min-h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src={gif.images.fixed_height.url}
              alt={gif.title}
            />
          </div>
        ))}
      </div>
    </>
  );
};
