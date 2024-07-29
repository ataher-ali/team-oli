import React from 'react';

const TeamMembers = ({element}) => {
    console.log(element)
    let {name,bio}=element
    return (

        <div className='bg-yellow-300 p-4 rounded-md'>
            <h1>{name}</h1>
            <p>{bio}</p>
        </div>
    );
};

export default TeamMembers;