import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'


const emailJSCredentials = require("../../assets/auth/credentials.json")

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  
  const sendEmail = (e) => {
    // emailjs.init('FtFIZN5nZXVECCMFI')
    e.preventDefault()
    emailjs.sendForm(
      'gmail',
      emailJSCredentials.emailjs.templateID,
      refForm.current,
      emailJSCredentials.emailjs.userID
    ).then((r) => {
      alert('Message Sent Successfully!')
      console.log(r.text)
      window.location.reload(false)
    }, (e) => {
      console.log(e)
      alert('Couldn\'t Send Message, Please Try Again')
    })
  }

  return (
    <>
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass} strArray={[...'Contact me']}/>
        </h1>
        <p>
          I am interest in working with a cool company with cool projects.
        </p>

        <div className='contact-form'>
          <form ref={refForm} onSubmit={sendEmail}>
            {/* <div className='g-recaptcha' data-sitekey='6LedDl8fAAAAACVhyGg_EZADvmTjxEwAz8eFcGPQ'></div> */}
            <ul>
              <li className='half'>
                <input type='text' name='name' placeholder='Name' required />
              </li>
              <li className='half'>
                <input type='email' name='email' placeholder='Email' required />
              </li>
              <li>
                <input placeholder='Subject' type='text' name='subject' required/>
              </li>
              <li>
                <textarea placeholder='Message' name='message' required></textarea>
              </li>
              <li>
                <input type='submit' className='flat-button' value='Send'/>
              </li>
            </ul>
          </form>
        </div>

      </div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Contact