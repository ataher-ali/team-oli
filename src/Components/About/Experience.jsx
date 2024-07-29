import React from 'react';
import ExperienceCart from './ExperienceCart';

const Experience = () => {
  const exp =[
    {
      _id:1,
      jobTitle:"Assistent Project Managder",
      company:"Babilion Resorses LTD",
      time:"DEC 2023 - Carent",
      projectName:"SOF Python",
      responsibilitie: ["a","b","c"]
    }
  ]
  return (
    <div>
            <h1 className='font-bold text-3xl   m-6 ms-11'>Experience</h1>
            <div className='w-full bg-slate-700 h-0.5'></div>

            
           {
            exp.map((e)=><ExperienceCart key={e._id} element={e}></ExperienceCart>)
           }
 
    </div>
  );
};

export default Experience;