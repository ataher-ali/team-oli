import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MemberInfoCard = () => {
    const info = useLoaderData()
    const {name}=info
    console.log(info);
    return (
        <div className='mt-40'>
            <h2>{name}</h2>
            
        </div>
    );
};

export default MemberInfoCard;