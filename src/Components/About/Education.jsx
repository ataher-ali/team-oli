import React from 'react';

const Education = () => {
  return (
    <div className='my-20'>

      <h1 className='font-bold text-3xl   m-6 ms-11'>Education</h1>
      <div className='w-full bg-slate-700 h-0.5'></div>
      <div className='flex justify-around my-4'> 
        <div className='w-4/6'>
        <h2 className='text-xl text-slate-500 my-2 font-bold font-serif'> Dhaka Univercity </h2>
        <h2 className='text-lg text-gray-900  font-semibold'> BBA </h2>
          <p className='text-sm'>Data Structures, Algorithms, OOPs, OS, DBMS, Web Development, Big Data
          CGPA: 9.19</p>
        </div>
        <div>
          <h3 className='text-cyan-600 mt-4'>June 2021 - Present</h3>
        </div>
      </div>
          

      
    </div>
  );
};

export default Education;