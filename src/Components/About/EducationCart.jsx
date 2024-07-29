import React from 'react';

const EducationCart = ({element}) => {
  const { institution, time,details,degree } = element;
    return (
        <div>
                  <div className='flex justify-around my-4'> 
        <div className='w-4/6'>
        <h2 className='text-xl text-slate-500 my-2 font-bold font-serif'> {institution} </h2>
        <h2 className='text-lg text-gray-900  font-semibold'> {degree} </h2>
          <p className='text-sm'>{details}</p>
        </div>
        <div>
          <h3 className='text-cyan-600'>{time}</h3>
        </div>
      </div>
        </div>
    );
};

export default EducationCart;