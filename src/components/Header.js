import Logo from '../asset/movi-o logo.webp';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { motion } from "motion/react";
import { AnimatePresence } from 'motion/react';
import { useTitle } from '../hooks/useTitle';

export const Header = () => {
    const [ menu, setMenu ] = useState(false);
    const navigate = useNavigate();
    const [ currSection, setCurrSection ] = useState("Welcome");
    const scrollY = window.scrollY;
    
    function handleSubmit(e) {
        e.preventDefault();
        const queryTerm = e.target.search.value;
        if (queryTerm.trim() !== ""){
            e.target.reset();
            setMenu(!menu);
            scrollToSection("search");
            return navigate(`/Search?q=${queryTerm}`);
        }
    }

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if(section){
            section.scrollIntoView({ behavior: "smooth", block:"start"});
        }
    };

    useEffect(() => {
        if (scrollY < 300) setCurrSection("Welcome");
        else if (scrollY >= 300 && scrollY < 800) setCurrSection("In Theater");
        else if (scrollY >= 800 && scrollY < 2400) setCurrSection("Blockbuster");
        else if (scrollY >= 2400 && scrollY < 3200) setCurrSection("Favorite");
        else if (scrollY >= 3200 ) setCurrSection("Search");
    }, [scrollY]);

    const str = useTitle(currSection);

  return (
    <div className='bg1 flex justify-evenly p-2 fixed top-0 left-0 right-0 z-[9999]'>
        <div className='flex-1'>
            <img className='h-10 rounded-xl' src={Logo} alt="Logo" />
        </div>
        <div className='hidden lg:flex gap-4 items-center text-gray-200 font-semibold'>
            <NavLink className={`${str === "In Theater" ? "highlight" : ""}`} to="/intheater" end onClick={() => scrollToSection("intheater")}>In Theater</NavLink>
            <NavLink className={`${str === "Blockbuster" ? "highlight" : ""}`} to="/blockbuster" onClick={() => scrollToSection("blockbuster")}>Blockbusters</NavLink>
            <NavLink className={`${str === "Favorite" ? "highlight" : ""}`} to="/favorite" onClick={() => scrollToSection("favorite")}>Favorite</NavLink>
        </div>
        <div className='hidden lg:flex gap-1 justify-end flex-1 py-2 text-gray-200'>
            <form onSubmit={handleSubmit}>
            <span className='border border-gray-300 rounded-lg p-2'>
                <SearchIcon />
                <input className='bg-transparent text-gray-300 outline-none' type="text" name='search' placeholder="search..."/>   
            </span>
            </form>
        </div>
        <motion.button whileTap={{ scale: 1.2, transition: { type: "spring", stiffness: 260, damping: 20 } }} onClick={() => setMenu(!menu)} className={`lg:hidden text-gray-100 p-2`}><MenuOpenIcon/></motion.button>
        <AnimatePresence>
        {menu && 
        <motion.div 
            initial={{opacity:0, y:-30}} 
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:-30}}
            className='lg:hidden absolute mt-14 bg-zinc-700 rounded-lg flex flex-col text-gray-200 font-medium p-5 z-[9999]'>
            <form onSubmit={handleSubmit}>
                <span className='border border-gray-300 rounded-lg p-2'>
                <SearchIcon/>
                <input className='bg-transparent text-gray-100 outline-none' type="text" name='search' placeholder="search..."/>
                </span>
            </form>
            <NavLink to="/intheater" onClick={() => {setMenu(!menu); scrollToSection("intheater")}} className='bg-zinc-600 rounded-lg p-2 mt-3 w-full' end>In Theater</NavLink>
            <NavLink to="/blockbuster" onClick={() => {setMenu(!menu); scrollToSection("blockbuster")}}  className='bg-zinc-600 rounded-lg p-2 mt-3 w-full'>Blockbusters</NavLink>
            <NavLink to="/favorite"  onClick={() => {setMenu(!menu); scrollToSection("favorite")}} className='bg-zinc-600 rounded-lg p-2 mt-3 w-full'>Favorite</NavLink>
        </motion.div>
        }
        </AnimatePresence>
        
    </div>
  )
}
