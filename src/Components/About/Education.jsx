import React, { useEffect, useState } from 'react';
import EducationCart from './EducationCart';

const Education = () => {

  const [useEduData,setEduData]=useState([])
  let api = `http://localhost:3000/education`
  useEffect(() => {
    fetch(api)
    .then(res => res.json())
    .then(data =>setEduData(data) )
}, []);


  return (
    <div className='my-20'>

      <h1 className='font-bold text-3xl   m-6 ms-11'>Education</h1>
      <div className='w-full bg-slate-700 h-0.5'></div> 
      {
        useEduData.map((p)=> <EducationCart element={p} ></EducationCart> )
      }
      
    </div>
  );
};

export default Education;