import React, { useState } from 'react';
import ReactLogo from '../assets/react.png'
import FastAPI from '../assets/fastapi.png';
import Firebase from '../assets/Firebase.png';
import Supabase from '../assets/supabase.png';
import Github from '../assets/github.png';
import { FaGithub } from 'react-icons/fa';
import Vercel from '../assets/vercel.jpg';
const Techs = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='w-full bg-white py-16 px-4 text-[#000300] select-none'>
        <h1 className='flex justify-center font-bold font-Tiny5 text-5xl mb-6 '>Tech Stack</h1>
      <div className='max-w-[1240px] mx-auto flex flex-wrap items-center justify-center gap-6'>
      <div className="flex items-center justify-center gap-6">
          <img src={ReactLogo} alt="React" className="w-[200px]" />

        </div>
      <div className="flex items-center justify-center gap-6">
          <img src={FastAPI} alt="FastAPI" className="w-[200px]" />

        </div>

        <div className="flex items-center justify-center gap-6">
          <img src={Firebase} alt="Firebase" className="w-[200px]" />

        </div>


        <div className="flex items-center justify-center gap-6">
          <img src={Supabase} alt="Supabase" className="w-[200px]" />
        </div>
        <div className="flex items-center justify-center gap-6">
          <img src={Github} alt="Supabase" className="w-[200px]" />
        </div>
        <div className="flex items-center justify-center gap-6">
          <img src={Vercel} alt="Supabase" className="w-[200px]" />
        </div>
        

      </div>
      <a href='https://github.com/SAKTHIPRAKASH28/Quizzer'>
      <button
      className='hover:ease-in  hover:transition-all mt-10 font-oswald bg-[#000300] w-[200px] rounded-md mx-auto my-6 px-6 flex justify-center font-medium py-3 text-white relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Contribute
      {isHovered && (
        <FaGithub className=' ease-in transition-[20] ml-5' size={25} />
      )}
    </button></a>
    </div>
  )
}

export default Techs