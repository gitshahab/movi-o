import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import { Card, CardSkeleton } from '../components';

export const Blockbuster = () => {
    const [ load, setLoad ] = useState(true);
    const { data: data1, loading:loading1, error: error1 } = useFetch(`http://www.omdbapi.com/?s=avengers&apikey=${process.env.REACT_APP_API_KEY}`);
    const { data: data2, loading:loading2, error: error2 } = useFetch(`http://www.omdbapi.com/?s=spider&apikey=${process.env.REACT_APP_API_KEY}`);
    const { data: data3, loading:loading3, error: error3 } = useFetch(`http://www.omdbapi.com/?s=Captain America&apikey=${process.env.REACT_APP_API_KEY}`);
    const { data: data4, loading:loading4, error: error4 } = useFetch(`http://www.omdbapi.com/?s=thor&apikey=${process.env.REACT_APP_API_KEY}`);
    const { data: data5, loading:loading5, error: error5 } = useFetch(`http://www.omdbapi.com/?s=jungle&apikey=${process.env.REACT_APP_API_KEY}`);
    const { data: data6, loading:loading6, error: error6 } = useFetch(`http://www.omdbapi.com/?s=Pirates&apikey=${process.env.REACT_APP_API_KEY}`);
    const { data: data6a, loading:loading6a, error: error6a } = useFetch(`http://www.omdbapi.com/?s=gladiator&apikey=${process.env.REACT_APP_API_KEY}`);
    const { data: data6b, loading:loading6b, error: error6b } = useFetch(`http://www.omdbapi.com/?s=harry&apikey=${process.env.REACT_APP_API_KEY}`);
    const { data: data7, loading:loading7, error: error7 } = useFetch(`http://www.omdbapi.com/?s=Black&apikey=${process.env.REACT_APP_API_KEY}`);
    const { data: data8, loading:loading8, error: error8 } = useFetch(`http://www.omdbapi.com/?s=Mission&apikey=${process.env.REACT_APP_API_KEY}`);
    const { data: data9, loading:loading9, error: error9 } = useFetch(`http://www.omdbapi.com/?s=Venom&apikey=${process.env.REACT_APP_API_KEY}`);
    const { data: data10, loading:loading10, error: error10 } = useFetch(`http://www.omdbapi.com/?s=fast&apikey=${process.env.REACT_APP_API_KEY}`);

    const data = [ ...data1, ...data2, ...data3, ...data4];
    const adventureData = [ ...data5, ...data6, ...data6a ];
    const topData = [ ...data6b, ...data7, ...data8, ...data9, ...data10 ];

    useEffect(() => {
        const isLoading = loading1 || loading2 || loading3 || loading4 || loading5 || loading6 || loading6a || loading6b || loading7 || loading8 || loading9 || loading10;
        setLoad(isLoading);
    }, [loading1, loading2, loading3, loading4, loading5, loading6, loading6a, loading6b, loading7, loading8, loading9, loading10]);

    if (error1 || error2 || error3 || error4 || error5 || error6|| error6a || error6b || error7 || error8 || error9 || error10) {
        return <h3 className='mx-auto container'>Server down! The OMDB API are currently unavailable. try again!</h3>
    }
  return (
    <div className='container'>
        <h1 className='pt-8'>Blockbusters</h1>
        <h3 className='text-gray-200 pt-4 pb-4'>Marvel Hero's</h3>
    <div className="flex gap-2 overflow-x-auto transition-all duration-300 w-full ">
        {load ? (<CardSkeleton/>) : (data.map((movie) => {
            return <Card key={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />
        }))}
    </div>
    <h3 className='text-gray-200 pt-4 pb-4'>Adventure</h3>
    <div className="flex gap-2 overflow-x-auto transition-all duration-300 w-full">
        {load ? (<CardSkeleton/>) : (adventureData.map((movie) => {
            return <Card key={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />
        }))}
    </div>
    <h3 className='text-gray-200 pt-4 pb-4'>Top Picks</h3>
    <div className="flex gap-2 overflow-x-auto transition-all duration-300 w-full">
        {load ? (<CardSkeleton/>) : (topData.map((movie) => {
            return <Card key={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />
        }))}
    </div>
    </div>
  )
}
