import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo/index'
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [...' Bola,']
  const jobArray = [...'Software Engineer']
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);
  }, [])
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span> 
          <span className={`${letterClass} _12`}>i,</span> 
          <br/>
          <span className={`${letterClass} _13`}>I</span> 
          <span className={`${letterClass} _14`}>'m</span> 
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
        <br/>
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20}/>
        </h1>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home;