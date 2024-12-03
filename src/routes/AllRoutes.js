import { Blockbuster, Favorite, Intheater, Welcome, Search } from '../pages';
import { useEffect, useState } from 'react';
import { AnimatePresence } from "motion/react";

export const AllRoutes = () => {
    const [ scrollY, setScrollY ] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

  return (
    <AnimatePresence>
    <div>
        <div id="welcome" className='min-h-screen bg-zinc-950'>
            {scrollY < 300 && <Welcome/>}
        </div>
        <div id="intheater" className='min-h-screen bg-zinc-950'>
            {scrollY >= 300 && <Intheater/>}
        </div>
        <div id="blockbuster" className='min-h-screen bg-zinc-950'>
            {scrollY >= 600 && <Blockbuster/>}
        </div>
        <div id="favorite" className='min-h-screen bg-zinc-950'>
            {scrollY >= 1600 && <Favorite/>}
        </div>
        <div id="search" className='min-h-screen bg-zinc-950'>
            {scrollY >= 2000 && <Search/>}
        </div>
    </div>
    </AnimatePresence>
  )
}
