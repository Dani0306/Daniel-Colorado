import React from 'react'

const Skill = ({ skillImage, skill, isVisible }) => {
  return (
    <div className={`${isVisible ? 'top-0 opacity-100' : 'top-[30px] opacity-0'} skill rounded-[30px]`} title={skill}>
        <img src={skillImage} className='w-[70px] h-[70px] object-contain' alt="skill image" />
        <span className='font-medium text-white'>{skill}</span>
    </div>  
  )
}

export default Skill