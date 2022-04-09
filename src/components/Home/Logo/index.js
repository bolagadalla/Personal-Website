import './index.scss'
import MyLogo from '../../../assets/images/Duck_File.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'


const Logo = () => {
  
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();
  
  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    gsap.timeline().to(bgRef.current, {
      duration: 1,
      opacity: 1
    }).from(outlineLogoRef.current, {
      drawSVG: 0,
      duration: 2,
      opacity: 1
    })

    gsap.fromTo(solidLogoRef.current, {
      opacity: 0
    }, {
      opacity: 1,
      delay: 2,
      duration: 2
    })
  }, [])

  return (
    <div className='logo-container' ref={bgRef}>
      <img ref={solidLogoRef} className='solid-logo' src={MyLogo} alt='Logo' />
    </div>
  )
}

export default Logo