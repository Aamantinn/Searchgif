import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface Props {
    setQuery: (query: string) => void;
}

// Yup schema for validation
const schema = yup
  .object({
    query: yup.string().required("A search query is required"),
  })
  .required();

interface FormInputs {
  query: string;
}

export const SearchBar: React.FC<Props> = ({ setQuery }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormInputs) => {
        setQuery(data.query);
    };

    return (
        <div className="flex flex-col items-center pt-8">
          <h1 className="text-xl font-semibold">Search Gifs</h1>
        <form className="flex flex-col md:flex-row w-full p-5 md:p-10  gap-4" onSubmit={handleSubmit(onSubmit)}>
            <input className=" px-2 w-full py-2 border-neutral-200 border-2 rounded-md" {...register("query")} placeholder="Search GIFs" />
            
            <button className="px-8  py-3 font-semibold rounded-md text-white text-lg bg-blue-500 hover:bg-blue-700" type="submit">Search</button>
        </form>
        {errors.query && <p className="text-center text-red-600 font-semibold">{errors.query.message}</p>}
        </div>
    );
};