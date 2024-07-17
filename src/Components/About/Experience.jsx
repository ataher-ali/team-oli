import React from 'react';

const Experience = () => {
  return (
    <div>
            <h1 className='font-bold text-3xl   m-6 ms-11'>Experience</h1>
            <div className='w-full bg-slate-700 h-0.5'></div>

            <div className='flex justify-around my-4'> 
        <div className='w-4/6'>
          
        <h2 className='text-2xl text-slate-500 my-2 font-bold font-serif'> Dhaka Univercity </h2>
        <h2 className='text-xl text-gray-900  font-semibold'> BBA </h2>
          <p className=''>
            <strong>Roles/Responsibilities</strong><br />
            <li>Responsible to handle the Frontend as well as Backend.</li>
            <li>Implement new features to the apps.</li>
            <li>Make the app very efficient.</li>
            <li>Implement many alternative solution for a problem.</li>
          </p>
        </div>
        <div>
          <h3 className='text-cyan-600 mt-4'>June 2021 - Present</h3>
        </div>
            </div>
           
 
    </div>
  );
};

export default Experience;