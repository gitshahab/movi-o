import { Card } from "../components/Card";
import { useFavorite } from '../context/FavoriteContext';

export const Favorite = () => {
    const { favorite } = useFavorite(); 
  return (
    <div className='container bg-zinc-950'>
        <h1 className="pt-8">Favorite</h1>
        <div className="mt-4 flex gap-2 overflow-x-auto transition-all duration-300 w-full">
        {favorite.length === 0 ? (<h3 className='text-gray-200 my-10'>You have not add Favorite yet!</h3>):
            (favorite.map((movie, index) => {
                return <Card key={index} title={movie.title} year={movie.year} poster={movie.poster} />
            }))
        }
        </div>
    </div>
  )
}
