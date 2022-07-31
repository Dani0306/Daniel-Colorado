import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { useObserver } from '../hooks/useObserver'

const Contact = () => {

    const { contactRef, setCurrentSection } = useAppContext()
    const [isVisible, setIsVisible] = useState(false);
    const [entry] = useObserver(contactRef, { root: document.querySelector('.contact'), threshold: ".25" })

    useEffect(() => {
      document.querySelectorAll('.text-input').forEach((element) => {
        element.addEventListener("blur", e => {
          if(e.target.value !== ""){
            e.target.nextElementSibling.classList.add("filled")
          } else {
            e.target.nextElementSibling.classList.remove("filled")
          }
        })
      })
    }, [])

    useEffect(() => {
      if(!entry) return;
      if(entry.isIntersecting){
        setCurrentSection('contact')
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }, [entry])

  return (
    <div ref={contactRef} className='w-full h-[92vh] contact flex items-center justify-center'>
        <div className={`${isVisible ? 'top-0 opacity-100' : 'top-[40px] opacity-0'} transition-all duration-700 max-w-[1400px] w-[90%] pr-2 md:w-max md:p-10 h-max rounded-xl flex flex-col justify-center items-center relative`}>
            <form action="https://formsubmit.co/danicolorado0306@gmail.com" method='POST' className='w-full h-max flex flex-col items-start justify-center md:w-[550px]'>
              <h2 className='text-white text-3xl font-semibold my-10 pl-2'>Contact</h2>
              <div className='input-container'>
                <input name='name' type="text" id='name' className='text-input' autoComplete='off' placeholder='Enter your name' required />
                <label className='label' htmlFor="name">Name</label>
              </div>
              <div className='input-container'>
                <input name='email' type="text" id='email' className='text-input' autoComplete='off' placeholder='Enter your email' required />
                <label className='label' htmlFor="email">Email</label>
              </div>
              <div className='input-container'>
                <textarea name='message' type="text" id='message' className='text-input' rows='3' autoComplete='off' placeholder='Enter your name' required />
                <label className='label' htmlFor="message">Type your message</label>
              </div>
              <button className='py-2 px-10 font-bold text-black rounded-xl ml-2 bg-white border-none my-[20px]'>
                Send
              </button>
            </form>
        </div>  
    </div>
  )
}

export default Contact