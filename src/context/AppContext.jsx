import { createContext, useContext, useState, useRef } from 'react'


const Context = createContext({
    currentSection: '', 
    setCurrentSection: () => {},
    projectsRef: null,
    skillsRef: null,
    aboutmeRef: null,
    scroll: () => {}, 
    introductionRef: null, 
    contactRef: null, 
});


export default function AppContextProvider({ children }){
    const [currentSection, setCurrentSection] = useState('')

    const projectsRef = useRef(null)
    const skillsRef = useRef(null)
    const aboutmeRef = useRef(null)
    const introductionRef = useRef(null)
    const contactRef = useRef(null)

    const scroll = (element) => {
        element.current.scrollIntoView({ behavior: "smooth" })
    }



    const value = {
        currentSection, setCurrentSection, projectsRef, skillsRef, aboutmeRef, scroll, introductionRef, contactRef
    }

    return <Context.Provider value={value}>
        { children }
    </Context.Provider>

}


export const useAppContext = () => useContext(Context);