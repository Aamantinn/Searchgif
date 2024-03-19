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
        <div className="flex flex-col">
        <form className="flex flex-col md:flex-row w-full p-10  gap-4" onSubmit={handleSubmit(onSubmit)}>
            <input className="w-full px-2 py-2 border-2 rounded-md" {...register("query")} placeholder="Search GIFs" />
            
            <button className="px-8 py-3  font-semibold rounded-md text-white text-lg bg-blue-500 hover:bg-blue-700" type="submit">Search</button>
        </form>
        {errors.query && <p className="text-center text-red-600 font-semibold">{errors.query.message}</p>}
        </div>
    );
};