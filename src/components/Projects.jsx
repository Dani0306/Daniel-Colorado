import React, { useEffect, useState } from 'react'
import Project from './Project'
import { useObserver } from '../hooks/useObserver'
import { useAppContext } from '../context/AppContext'
import { chatStack, movieStack, youtubeStack, memoriesStack, googleStack } from '../variables/stacks'
import { memoriesLink, moviesLink, chatLink, youtubeLink, googleLink } from '../variables/links'
import { youtubeRepository, chatRepository, memoriesRepository, movieRepository, googleRepository } from '../variables/repositoryLink'

const Projects = () => {

  const { projectsRef, setCurrentSection  } = useAppContext()

  const [isVisible, setIsVisible] = useState(false)
  const [entry] = useObserver(projectsRef, { root: document.querySelector('.projects'), threshold: ".25" })


  useEffect(() => {
    if(!entry) return;
    if(entry.isIntersecting){
      setIsVisible(true)
      setCurrentSection('projects')
    } else {
      setIsVisible(false)
    }

  }, [entry])

  return (
    <div ref={projectsRef} className='w-full min-h-[92vh] max-h-max  pt-[130px] flex flex-col items-center justify-center mx-auto pb-[70px] projects'>
      <h2 className={`${isVisible ? 'top-0 opacity-100' : 'top-[30px] opacity-0'} relative text-white font-semibold mb-12 text-3xl transition-all duration-700`}>Projects</h2>
        <div className='grid grid-cols-1 w-full h-max place-items-center md:grid-cols-2 lg:grid-cols-3 max-w-[1400px]'>
          <Project isVisible={isVisible} title="Chat App" stack={chatStack} image="/chat.png" projectLink={chatLink} codeLink={chatRepository}/>   
          <Project isVisible={isVisible} title="Movies App" stack={movieStack} image='/movies.png' projectLink={moviesLink} codeLink={movieRepository}/>   
          <Project isVisible={isVisible} title="Youtube Clone App" stack={youtubeStack} image='/youtube.png' projectLink={youtubeLink} codeLink={youtubeRepository}/>   
          <Project isVisible={isVisible} title="Memories App" stack={memoriesStack} image='/memories-project.png' projectLink={memoriesLink} codeLink={memoriesRepository}/>   
          <Project isVisible={isVisible} title="Google Browser Clone" stack={googleStack} image='/google.png' projectLink={googleLink} codeLink={googleRepository}/>
        </div>
    </div>
  )
}

export default Projects