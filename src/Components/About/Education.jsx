import React from 'react';
import EducationCart from './EducationCart';

const Education = () => {

  let edu =[{
    _id:1,
    institution:"National Univarsity",
    time:"June 2011 - Dec 2020",
    degree:"BBA",
    details:"IBA"
  }
  ]
  return (
    <div className='my-20'>

      <h1 className='font-bold text-3xl   m-6 ms-11'>Education</h1>
      <div className='w-full bg-slate-700 h-0.5'></div> 
      {
        edu.map((p)=> <EducationCart element={p} ></EducationCart> )
      }
      
    </div>
  );
};

export default Education;