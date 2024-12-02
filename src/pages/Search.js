import { useFetch } from '../hooks/useFetch';
import { Card, CardSkeleton } from "../components";
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
        return  <div className='flex-col container'>
                    <h3 className='mx-auto'>Server down! The OMDB API are currently unavailable. try again!</h3>
                    <span className='text-gray-200 py-2'>Check out Movimate, based on TMDB API.<a className='text-blue-600' href="https://movimate.netlify.app" target="_blank" rel="noopener noreferrer"> Visit Movimate <ArrowForwardIcon/></a></span>
                </div>
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
