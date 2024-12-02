import { motion } from "motion/react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useFavorite } from '../context/FavoriteContext';

export const Card = ({title, year, poster}) => {
    const { favorite, dispatch } = useFavorite();
    const isFav = favorite.some(movie => movie.title === title);

    const toggleFav = () => {
        if (isFav) {
            dispatch({ type: "REMOVE_FAV", payload: { title }});
        } else {
            dispatch({type: "ADD_FAV", payload: {title, year, poster}});
        }
    };

  return (
    <div
        className='flex-col rounded-lg'>
        <div>
            <button onClick={toggleFav}>
            <motion.img 
                whileHover={{scale: 0.8}}
                whileTap={{ scale: 0.95 }}
                transition={{ stiffness: 300, type:"spring" }} 
                className='min-w-52 h-80' src={poster} alt={title} />
                <span className='flex my-1 text-white'>{isFav ? <FavoriteIcon/>: <FavoriteBorderIcon />}</span>
            </button>
        </div>
        <div>
            <h1 className='max-w-52 text-xl font-semibold text-gray-200 py-1'>{title}</h1>
            <h3 className='text-gray-400 font-mono'>{year}</h3>
        </div>
    </div>
  )
}
