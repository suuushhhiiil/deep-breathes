import React, { useState } from 'react'

const UtterYourThoughts = () => {
  const [thought, setThought] = useState('');
  const readThought = () => {
    alert('Submitted')
  } 
  return (
    <>
    <div className='flex py-8 px-[100px] flex-col justify-between items-center h-[85vh]'>
        <div className='flex flex-col items-center'>
          <h1 className='font-display text-6xl text-secondary'>
            Utter Your Thoughts
        </h1>
        <h2 className='font-sans mt-4 text-[25px]'>Enable Full Screen for Immersive Experience</h2>
          </div>
          <div className='w-full flex items-center justify-center'>
        <input className='rounded-full px-6 py-3 w-[40%] text-[20px] text-secondary font-sans font-light bg-accent' placeholder={'Write here, whatever is bothering you!'}/>
        <button onClick={()=>readThought()} className='ml-4 bg-secondary text-white rounded-full p-3'>Let it go!</button>
          </div>
    </div>
    </>
  )
}

export default UtterYourThoughts;