import { Card } from '../components';
import { motion, useScroll, useTransform } from 'motion/react';
import { Header } from '../components';

export const Intheater = () => {
  const {scrollY} = useScroll();
  const rightScroll = useTransform((scrollY), [0, 300], ["100%", "0%"] );
  const intheater = [
    {
        "Title": "Bhool Bhulaiyaa 3",
        "Year": "2024",
        "imdbID": "tt26932223",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjYyMTM4NjMtMjgzOS00N2RiLTlmZDUtOWJlMDZiOTVkMzA4XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Pushpa: The Rule - Part 2",
        "Year": "2024",
        "imdbID": "tt16539454",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNWU1ZWFhNGQtZDhlZC00ZWFlLTlmNmEtN2VmYmZiN2Y5ZmQ2XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Venom: The Last Dance",
        "Year": "2024",
        "imdbID": "tt16366836",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDMyYWU4NzItZDY0MC00ODE2LTkyYTMtMzNkNDdmYmFhZDg0XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Smile 2",
        "Year": "2024",
        "imdbID": "tt29268110",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTg5OTMyMGMtYzMwNC00NDMyLWE0OGUtMTQ1ODcwM2FjOTM4XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "The Wild Robot",
        "Year": "2024",
        "imdbID": "tt29623480",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjM2M2E3YzAtZDJjYy00MDhkLThiYmItOGZhNzQ3NTgyZmI0XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "The Substance",
        "Year": "2024",
        "imdbID": "tt17526714",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDQ1NGE5MGMtYzdlZC00ODExLWJlMDMtNWU4NjA5OWYwMDEwXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "The Fall Guy",
        "Year": "2024",
        "imdbID": "tt1684562",
        "Poster": "https://m.media-amazon.com/images/M/MV5BM2U0MTJiYTItMjNiZS00MzU4LTkxYTAtYTU0ZGY1ODJhMjRhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Singham Again",
        "Year": "2024",
        "imdbID": "tt11976134",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQzZDExZDEtYjAxYy00ZGVhLWE4YWItNTVkZjA5ZjVjZWM3XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Deadpool & Wolverine",
        "Year": "2024",
        "imdbID": "tt6263850",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Borderlands",
        "Year": "2024",
        "imdbID": "tt4978420",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDhkMzQzZmQtOGQ1NS00Y2FhLTkzYjAtNWE1MmRiOWM1MjUzXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Twisters",
        "Year": "2024",
        "imdbID": "tt12584954",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjM4MWEwMTEtNTcwYi00ZDI4LWEwMzUtNDMzODBhZmI5MWE1XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Vedaa",
        "Year": "2024",
        "imdbID": "tt28153480",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTI0MmJkZTUtN2I4Yi00NjZkLWJhYjgtM2UxMWRjNzdjMGE4XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Marco",
        "Year": "2024",
        "imdbID": "tt29298085",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTZlYWY3NmMtZmJmNi00NjEzLWFiZmMtNzMwYTg0NGQzNDQwXkEyXkFqcGc@._V1_SX300.jpg"
    }
];

  return (
    <div>
      <div>
        <Header/>
      </div>
    <div className='container'>
      <h1 className="pb-4 pt-8">In theaters</h1>
    <motion.div
      style={{x: rightScroll}}
      initial={{ x: "100%" }}
      animate={{ x: "0%"}}
      transition={{
        duration: 0.8, 
        ease: "easeOut",
      }}
      className='flex gap-2 overflow-x-auto transition-all duration-300 w-full'>
        {intheater.map((movie, index) => {
            return <Card key={index} title={movie.Title} year={movie.Year} poster={movie.Poster} />
        })}
    </motion.div>
    </div>
    </div>
  )
}
