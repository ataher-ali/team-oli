import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MemberInfoCard = () => {
    const info = useLoaderData()
    const {name,skill_1,skill_2,skill_3}=info
    return (
        <div className='mt-40'>
            <h2>{name}</h2>
            <p>{skill_1}</p>
            <p>{skill_2}</p>
            <p>{skill_3}</p>
        </div>
    );
};

export default MemberInfoCard;