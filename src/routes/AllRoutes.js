import { Blockbuster, Favorite, Intheater, Welcome, Search } from '../pages';
import { useEffect, useState } from 'react';
import { AnimatePresence } from "motion/react";
import { useTitle } from '../hooks/useTitle';

export const AllRoutes = () => {
    const [ scrollY, setScrollY ] = useState(0);
    const [ currSection, setCurrSection ] = useState("Welcome");

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    useEffect(() => {
        if (scrollY < 300) setCurrSection("Welcome");
        else if (scrollY >= 300 && scrollY < 800) setCurrSection("In Theater");
        else if (scrollY >= 800 && scrollY < 2400) setCurrSection("Blockbuster");
        else if (scrollY >= 2400 && scrollY < 3200) setCurrSection("Favorite");
        else if (scrollY >= 3200 ) setCurrSection("Search");
    }, [scrollY]);

    useTitle(currSection);

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
