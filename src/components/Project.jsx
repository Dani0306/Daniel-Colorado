import { useState } from 'react'
import { RemoveRedEye } from '@mui/icons-material'

const Project = ({ title, image, stack, projectLink, codeLink, isVisible }) => {

  const [hover, setHover] = useState(false);

  const handleOver = () => {
    setHover(true)
  }

  const handleLeave = () => {
    setHover(false)
  }

  return (
    <div onMouseOver={handleOver} onMouseLeave={handleLeave} className={`${isVisible ? 'top-0 opacity-100' : 'top-[30px] opacity-0'} project`}>
        <div className='w-full h-[68%] flex items-center justify-center relative rounded-t-xl'>
            <img src={image} className='w-full h-full object-cover rounded-t-xl' alt="" />
            <div className={`${hover ? 'h-full' : 'h-0'} flex items-center justify-center transition-all rounded-t-xl duration-[.7s] w-full absolute top-0 left-0 bg-[rgba(0,0,0,.6)]`}>
              <a href={projectLink} className={`${hover ? 'opacity-100' : 'opacity-0'} transition-all duration-[.7s]`}>
                <RemoveRedEye className={`text-white bg-[rgba(0,0,0,.34)] mt-4 mx-[5px] p-[3px] !w-[45px] !h-[45px] rounded-full border-[5px] border-white`} />
              </a>
              <a href={codeLink}>
                  <img src="/github.png" className={`${hover ? 'opacity-100' : 'opacity-0'} xl:hover:rotate-[360deg] mt-4 mx-[7px] w-[45px] h-[45px] rounded-full object-contain transition-all duration-[.7s]`} />
              </a>
            </div>
        </div>
         <div className='w-full h-[32%] flex flex-col items-center justify-start py-2  bg-[#D0D3D4] rounded-b-xl'>
            <h2 className='text-xl font-medium text-black'>{title}</h2>
            <div className='flex w-full px-5 h-max items-center justify-center mt-3'>
                {stack.map((src, index) => <img key={index} src={src} title={src.split('/')[1].split('.')[0]} className={`${stack.length > 5 ? 'mx-2' : 'mx-3'} w-[30px] h-[30px] object-cover rounded-full`} alt="" /> )}
            </div>
        </div>
    </div>
  )
}

export default Project