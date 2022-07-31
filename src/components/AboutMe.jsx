import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { useObserver } from '../hooks/useObserver'

const AboutMe = () => {

  const { setCurrentSection, aboutmeRef } = useAppContext()

  const [isVisible, setIsVisible] = useState(false)
  const [entry] = useObserver(aboutmeRef, { root: document.querySelector('.aboutme'), threshold: '.3' })

  useEffect(() => {
    if(!entry) return;
    if(entry.isIntersecting){
      setIsVisible(true)
      setCurrentSection('aboutme')
    } else {
      setIsVisible(false)
    }
  }, [entry])

  return (
    <div ref={aboutmeRef} className='full h-[92vh] flex flex-col items-center justify-center aboutme'>
        <div className={`${isVisible ? 'opacity-100 top-0' : 'opacity-0 top-[40px]'} w-full transition-all duration-500  flex flex-col h-max px-10 mt-[100px] max-w-[1400px] md:w-[80%] lg:w-[80%] xl:w-[60%] lg:flex-row relative`}>
        <img src="/profile.png" className='rounded-full w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] my-8 object-cover lg:mr-5' alt="" />
            <div className='w-full flex flex-col lg:justify-center lg:items-start lg:ml-5'>
              <h2 className='font-semibold text-2xl text-white lg:text-4xl'>Who I am?</h2>
              <p className='font-normal text-start max-w-[85%] text-[#aaa] self-end lg:self-start mt-6 lg:max-w-[80%] lg:text-xl'>
                  I am a full stack developer, passionate about what I do and always looking for something new to learn, I like a the new challenges a lot, and I hope to become a senior developer with a lot of experience and knowledge one day.
              </p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe