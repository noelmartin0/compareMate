import React from 'react'
import Navbar from "../components/navbar"
import Footer from '../components/footer'
import styled from 'styled-components'
import {motion} from 'framer-motion'
const Home = () => {
  return (
    <div className="content">
      {/* <Navbar /> */}
      <HOME>
      <div className="maincontainer">
      <motion.h1 initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01]
      }}  className='text'>Welcome to CompareMate</motion.h1>
      <div className="context">
      <motion.p initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }} className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</motion.p>
      <motion.img initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.8,
        ease: [0, 0.71, 0.2, 1.01]
      }} src='homepage.png' className='image' alt='random-img-here' />
      </div>
      <motion.button initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}  type="button" class="btn btn-outline" >Get Started</motion.button>
      </div>
      {/* <div className="details">
      <h1 className='heading2'>See what we do for u...</h1>
      </div> */}
      </HOME>
      <Footer />
    </div>

    
  )
}

const HOME = styled.section`

.maincontainer{
  background-color: #f1f1f1;
  opacity: 1;
  background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #f1f1f1 40px ), repeating-linear-gradient( #c9ece855, #c9ece8 );
  padding-top:10rem;
  padding-left:7.5rem;
  padding-bottom:2rem;
  height: 100vh;
}

.context{
    margin-top:-7rem;
    display: flex;
    align-items: center;
}

.text{
  max-width:50%;
}

.image{
    width:  400px;
    height: 400px;
    margin-left: 22%
    
}
button{
 outline: 1px solid #002b5b;
}
.btn{
  margin-top:-12rem;
}
.btn-outline{
  background-color: #002b5b;
  color: whitesmoke;
  align-self: end;
  padding: 8px;
}
.btn-outline:hover
{  background-color: #004799;
  color: #fff;
}
.heading2{
  padding-top:1rem;
  color:#002b5b;
  text-align:center;
}

`;

export default Home