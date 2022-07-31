import React, { useEffect, useState } from 'react'
import Skill from './Skill'
import { skillList } from '../variables/skillList'
import { useObserver } from '../hooks/useObserver';
import { useAppContext } from '../context/AppContext';

const Skills = () => {

  const { setCurrentSection, skillsRef } = useAppContext()

  const [isVisible, setIsVisible] = useState(false);
  const [entry] = useObserver(skillsRef, { root: document.querySelector('.skills'), threshold: ".25" })

  useEffect(() => {
    if(!entry) return;
    if(entry.isIntersecting){
      setIsVisible(true)
      setCurrentSection('skills')
    } else {
      setIsVisible(false)
    }
  }, [entry])

  return (
    <div ref={skillsRef} className='w-full min-h-[100vh] max-h-max  flex flex-col items-center justify-center lg:pt-[160px] skills'>
        <h2 className={`${isVisible ? 'top-0 opacity-100' : 'top-[30px] opacity-0'} relative transition-all duration-700 text-white text-3xl font-semibold`}>Skills</h2>
        <div className='w-max gap-x-[25px] md:w-full h-full max-w-[1400px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 py-16 place-items-center gap-y-4 md:gap-y-10'>
          {
            skillList.map((skill, index) => <Skill key={index} isVisible={isVisible} skillImage={skill.image} skill={skill.name} />)
          }
        </div>        
    </div>
  )
}

export default Skills