import  { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { useObserver } from '../hooks/useObserver'

const Introduccion = () => {


  const { introductionRef, setCurrentSection } = useAppContext()
  const [entry] = useObserver(introductionRef, { root: document.querySelector('.introduccion'), threshold: ".25" })

  useEffect(() => {
    if(!entry) return;
    if(entry.isIntersecting){
      setCurrentSection('')
    }
  }, [entry])

  return (
    <div ref={introductionRef} className='w-full h-[100vh] grid place-items-center introduccion relative'>
      <div className='absolute w-full h-full bg-[rgba(0,0,0,.7)]'></div>
      <div className='w-full z-[5] h-full max-w-[1400px] flex flex-col items-center justify-center'>
        <img src="/programer.png" className='w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] rounded-full object-cover lg:my-6' alt="Profile image" />
        <h1 className='text-center'>
          <div className='flex flex-col items-center justify-center my-6 md:flex-row md:my-3'>
            <span  className='title daniel font-bold text-[35px] md:text-[45px] text-[#eee] tracking-tighter md:mx-[-8px]'>Daniel</span>
            <span  className='title colorado font-bold text-[35px] md:text-[40px] text-[#eee] tracking-tighter md:mx-[-8px]'>Colorado</span>
          </div>
          <div className='flex flex-col items-center justify-center my-4 md:flex-row md:my-3'>
            <span  className='title fullstack font-medium text-xl md:text-2xl text-[#eee] md:mx-[-8px]'>Full stack</span>
            <span  className='title developer font-medium text-xl md:text-2xl text-[#eee] md:mx-[-8px]'>developer</span>
          </div>
        </h1>
      </div>
    </div>
  )
}

export default Introduccion