import React from 'react'
import Navbar from "../components/navbar"
import Footer from '../components/footer'
import Item from '../components/item'
import styled from 'styled-components'
const Wishlist = () => {
  return (
    <WISHLIST>
    <div className="content">
      <Navbar />
      <div className='container'>
        <h1 className='heading'>My Wishlist</h1>
      </div>
      <div className='grid-container'>
        <Item className="wishlist-container" image="nikered.jpg"/>
        <Item className="wishlist-container" image="nikegreen.jpg"/>
        <Item className="wishlist-container" image="canvasBlue.jpg"/>
        <Item className="wishlist-container" image="nikered.jpg"/>
        <Item className="wishlist-container" image="nikegreen.jpg"/>
        <Item className="wishlist-container" image="canvasBlue.jpg"/>
      </div>
      <Footer />
    </div>  
    </WISHLIST>
  )
}

const WISHLIST = styled.nav`
.container {
    display: flex;
    flex-direction: column;
    align-items:center;
    padding-top: 50px;
}
.grid-container{
    display:grid;
    row-gap: 50px;
    grid-template-columns: auto auto auto;
    padding: 10px;
    margin-top: 40px;
    margin-bottom: 50px;
}

.heading{
    font-size: 3.4rem;
}

img{
    width: 375px;
    height: 375px;
}
` ;


export default Wishlist