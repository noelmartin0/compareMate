import React from 'react'
import Navbar from "../components/navbar"
import Footer from '../components/footer'
import styled from 'styled-components'
const Home = () => {
  return (
    <div className="content">
      <Navbar />
      <HOME>
      <div className="maincontainer">
      <h1 className='text'>Welcome to CompareMate</h1>
      <div className="context">
      <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     
      <img src='homepage.png' className='image' alt='random-img-here' />
      </div>
      <button type="button" class="btn btn-outline">Get Started</button>
      </div>
      <div className="details">
      <h1 className='heading2'>See what we do for u...</h1>
      </div>
      </HOME>
      <Footer />
    </div>

    
  )
}

const HOME = styled.section`

.maincontainer{
  background-color:#c9ece8;
  padding-top:6rem;
  padding-left:2rem;
  padding-bottom:2rem;
}

.context{
    margin-top:-4rem;
    display: flex;
    align-items: center;
}

.text{
  max-width:50%;
}

.image{
    width:  300x;
    height: 300px;
    
}
button{
 outline: 1px solid #002b5b;
}
.btn{
  margin-top:-5rem;
}
.btn-outline{
  background-color: #c9ece8;
  color: black;
  align-self: end;
  padding: 8px;
}
.btn-outline:hover
{  background-color: #002b5b;
  color: #fff;
}
.heading2{
  padding-top:1rem;
  color:#002b5b;
  text-align:center;
}

`;

export default Home