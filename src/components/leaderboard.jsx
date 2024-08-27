import React from 'react';
import { GiDiamondTrophy } from "react-icons/gi";
import { PiNumberCircleTwo } from "react-icons/pi";
import { PiNumberCircleThree } from "react-icons/pi";
import { FaTrophy } from "react-icons/fa6";
const LeaderB = (names,points) => {
  return (
    <div className='w-full bg-white py-16 px-4 text-[#000300]  select-none '>
      <h1 className='flex justify-center font-bold font-Tiny5 text-5xl mb-6 underline-offset-0'>
        Top Scorers <FaTrophy className='ml-2'/></h1>

      
    </div>
  );
};
LeaderB.propTypes = {
  usernames: PropTypes.arrayOf(PropTypes.string).isRequired,
  points: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default LeaderB;
