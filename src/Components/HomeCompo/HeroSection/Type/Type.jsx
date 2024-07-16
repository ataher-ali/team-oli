import React from 'react'
import { useTypewriter } from 'react-simple-typewriter';

const Type = () => {

    const [text] = useTypewriter({
        words: ['Designer', 'Freelancer', 'Instructor', 'Project Manager','Organiser','Entrepreneur'],
        loop: 0
      })




    return (
    <div className='App'>
      {/* <Typewriter Props /> */}
      <span className='text-3xl font-semibold'>{text}</span>
    </div>
  )
}

export default Type;