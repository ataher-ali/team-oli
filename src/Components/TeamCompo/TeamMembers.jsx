import React from 'react';
import { Link } from 'react-router-dom';

const TeamMembers = ({element}) => {
    // console.log(element)
    let {name,skill_1,_id}=element
    return (
        <>
        <Link to={`/Member/${_id}`}>
        <div className='bg-yellow-300 p-4 rounded-md'>
            <h1>{name}</h1>
            <p>{skill_1}</p>
        </div>
        </Link>
        </>
    );
};

export default TeamMembers;