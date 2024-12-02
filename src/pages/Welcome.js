import { useScroll, useTransform, motion } from 'motion/react';
import Logo from '../asset/movi-o logo.webp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { useEffect, useState } from 'react';

export const Welcome = () => {
    const [ animate, setAnimate ] = useState(true);
    const { scrollY } = useScroll();
    const TextOpacity = useTransform((scrollY), [0, 250], [1, 0]);

    useEffect(() => {
        const unsubscribe = scrollY.on("change",(latest) => {
            setAnimate(latest <= 50)
        });
        return () => unsubscribe();
    }, [scrollY]);

  return (
    <div className='h-screen w-full bg-zinc-950'>
        <div className='flex justify-center items-center  gap-10  pt-20'>
            <motion.div className='hidden lg:flex flex-col justify-center items-center mt-10'
                style={{opacity: TextOpacity}}
                initial={{x: "-100%", opacity: 0}}
                animate={{x: "0%", opacity: 1 }}
                transition={{duration: 0.8, ease: "easeInOut", stiffness: 500}}
                >
                <img className='h-20 rounded-xl' src={Logo} alt="Logo" />
                <p className='text-gray-200 font-mono text-center'>movi-o</p>
            </motion.div>
            <motion.div className='p-4'
                style={{opacity: TextOpacity}}
                initial={{x: "100%", opacity: 0}}
                animate={{x: "0%", opacity: 1 }}
                transition={{duration: 0.8, ease: "easeInOut"}}
                >
                <h1 className='text-4xl text-gray-100 font-semibold'>Welcome to movi-o!</h1>
                <p className='text-xl leading-relaxed text-gray-200 font-medium max-w-3xl mt-4'>Dive into the world of movies with <span className='highlight'>movi-o</span>, your ultimate platform for exploring films, powered by the <span className='highlight'>OMDB API.</span> Built with a seamless and modern <span className='highlight'>stack—React.js</span> for dynamic functionality, <span className='highlight'>Tailwind CSS</span> for sleek and responsive styling, <span className='highlight'>Material UI</span> for elegant components, and <span className='highlight'>Framer Motion</span> for smooth, engaging animations—this app is a testament to cutting-edge web development.</p>
                <motion.button whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.8}} className='highlight text-xl p-2 mt-4'>Read Docs <ArrowForwardIcon/></motion.button>
            </motion.div>
        </div>
        <motion.div 
            style={{opacity: TextOpacity}}
            animate={{y: animate ? [ 0, -10, 0] : 0 }}
            transition={{duration: 1, repeat: animate ? Infinity : 0, repeatType: animate ? "loop" : 0 , ease:"easeInOut"}}
            className='flex justify-center items-center text-gray-300 mt-24'>
            <DoubleArrowIcon className='rotate-90'/>
            <DoubleArrowIcon className='rotate-90'/>
        </motion.div>
    </div>
  )
}
