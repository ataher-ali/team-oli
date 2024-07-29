import React from 'react';

const ExperienceCart = ({element}) => {
    
  const { jobTitle, company, time,responsibilitie,projectName} = element;
    return (
        <div>
            <div className='flex justify-around my-4'> 
        <div className='w-4/6'>
          
        <h2 className='text-xl text-gray-900  font-semibold'> {jobTitle} </h2>
        <h2 className='text-2xl text-slate-500 my-2 font-bold font-serif'> {company} </h2>
        <h2 className='text-xl text-gray-900  font-semibold'> {projectName} </h2>
          <p className=''>
            <strong>Roles/Responsibilities</strong><br />
            {
                responsibilitie.map((r)=><li>{r}</li>)
            }
            
          </p>
        </div>
        <div>
          <h3 className='text-cyan-600 mt-4'>{time}</h3>
        </div>
            </div>
        </div>
    );
};

export default ExperienceCart;