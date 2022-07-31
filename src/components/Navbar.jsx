import React, { useEffect, useRef, useState } from 'react'
import { Close, Menu } from '@mui/icons-material'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {

    const { projectsRef, skillsRef, aboutmeRef, scroll: scrollFunction, currentSection, contactRef } = useAppContext()

    const [showNavbar, setShownavbar] = useState(true)
    const [buttonType, setButtonType] = useState('open')
    const [scrolled, setIsScrolled] = useState(false)
    const buttonRef = useRef(null);

    useEffect(() => {
        if(!showNavbar){
            buttonRef.current.addEventListener('animationstart', () => {
                setButtonType('open')
            })
        } else {
            buttonRef.current.addEventListener('animationstart', () => {
                setButtonType('close')
            })
        }
    }, [showNavbar])

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0) setIsScrolled(true)
            else setIsScrolled(false)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

  return (
    <nav className={`w-full h-[8vh] bg-black ${scrolled ? 'lg:bg-black' : 'lg:bg-transparent'} md:h-[9vh] fixed top-0 z-10 transition-all duration-500`}>
        <div className={`w-full h-full flex items-center justify-between  max-w-[1400px] mx-auto px-4 transition-all duration-500`}>
            <h2 className='text-white logo'>Daniel Colorado</h2>
            <button ref={buttonRef} className={`${showNavbar ? 'first' : 'second'} lg:hidden`}>
                {buttonType === 'open' ? <Menu onClick={() => setShownavbar(!showNavbar)} className='text-white !h-8 !w-8'/> : <Close onClick={() => setShownavbar(!showNavbar)} className='text-white !h-8 !w-8'/>}
            </button>         
            <div className={`top-[68px] w-full bg-black lg:bg-inherit h-max absolute left-0 lg:relative lg:top-auto lg:left-auto lg:w-max`}>
                <ul className={`${showNavbar ? 'h-[280px]' : 'h-0'} flex w-full items-center justify-center flex-col transition-all duration-500 lg:flex-row lg:h-full lg:w-max`}>
                    <li className={`${showNavbar ? 'opacity-100' : 'opacity-0'} navbar-item ${currentSection === 'projects' && window.innerWidth > 1024 && 'after:content-[""] font-medium text-white'} text-[#ccc]`} onClick={() => scrollFunction(projectsRef)}>PROJECTS</li>
                    <li className={`${showNavbar ? 'opacity-100' : 'opacity-0'} navbar-item ${currentSection === 'skills' && window.innerWidth > 1024 && 'after:content-[""] font-medium text-white'} text-[#ccc]`} onClick={() => scrollFunction(skillsRef)}>SKILLS</li>
                    <li className={`${showNavbar ? 'opacity-100' : 'opacity-0'} navbar-item ${currentSection === 'aboutme' && window.innerWidth > 1024 && 'after:content-[""] font-medium text-white'} text-[#ccc]`} onClick={() => scrollFunction(aboutmeRef)}>ABOUT ME</li>
                    <li className={`${showNavbar ? 'opacity-100' : 'opacity-0'} navbar-item ${currentSection === 'contact' && window.innerWidth > 1024 && 'after:content-[""] font-medium text-white'} text-[#ccc]`} onClick={() => scrollFunction(contactRef)}>CONTACT</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar