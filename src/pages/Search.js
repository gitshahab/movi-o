import { useFetch } from '../hooks/useFetch';
import { Card, CardSkeleton } from "../components";
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Search = () => {
    const [ load, setLoad ] =useState(true);
    const [ searchParams ] = useSearchParams();
    const queryTerm = searchParams.get('q') || "War";

    const { data, loading, error } = useFetch(`https://www.omdbapi.com/?s=${queryTerm}&apikey=${process.env.REACT_APP_API_KEY}`);

    useEffect(() => {
        const isLoading = loading;
        setLoad(isLoading);
    }, [loading]);

    if(error) {
        return <h3 className='mx-auto container'>Server down! The OMDB API are currently unavailable. try again!</h3>
    }
   return (
    <div className='container'>
        <h1 className='pb-4 pt-8'>Search "{queryTerm}"</h1>
        {data.length === 0 && (
            <div>
                <h3 className='text-gray-200 my-10'>No result found! try another movie.</h3>
            </div>
            )}
        <div className="flex gap-2 overflow-x-auto transition-all duration-300 w-full">
            {load ? <CardSkeleton/> : 
                (data.map((movie) => {
                return <Card key={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />
            }))}
        </div>
    </div>
  )
}
