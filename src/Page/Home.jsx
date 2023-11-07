import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../assets/facebook.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'

const Home = () => {
    const linkedinUrl = 'https://www.linkedin.com/in/ayesha-liza-a35b27281/';
    const tweeterUrl = 'https://twitter.com/ayeshaliza269';
    const githubUrl = 'https://github.com/AyeshaLiza';
    const facebookUrl = 'https://www.facebook.com/profile.php?id=100069371111369';
 return (
  <div className='min-h-screen w-[80%] mx-auto flex items-center justify-center'>
  
    <div className='bg-black px-28 pb-24 shadow-lg shadow-emerald-200'>
  <h1 className="mb-5 text-5xl text-blue-300 font-medium"> Ayesha Liza</h1>
      <p className="mb-5 text-white text-xl ">Web Designer // Fron End Developer  // React JS Developer</p>
     <div className='flex justify-center gap-4'>
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
            <img className='w-11' src={facebook} alt="" /> </a>
        <a href={tweeterUrl} target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="" /> </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <img src={github} alt="" /> </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <img className='w-11' src={linkedin} alt="" /> </a>
     </div>
  </div>
  </div>
 );
};

export default Home;