import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import ItemCard from '../components/ItemCard'
import styled from 'styled-components'

const ResultPage = [

  {
  image:'nikered.jpg',
  name: 'Nike Red',
  price: 'Rs 4,999',
  seller:'Amazon',
  rating: '4/5⭐',
  },
  {
  image:'nikegreen.jpg',
  name: 'Nike Green',
  price: 'Rs 4,550',
  seller:'FlipKart',
  rating: '3/5⭐',
  },
  
  {
  image:'canvasBlue.jpg',
  name: 'Converse',
  price: 'Rs 6,000',
  seller:'Ajio',
  rating: '4.2/5⭐',
  },


];

const Wishlist = () => {
  return (
    <WISHLIST>
      <div className="content">
        <Navbar />
        <div className="container">
          <h1 className="heading">My Wishlist</h1>
        </div>
        <div className="grid-container">
          {ResultPage.map((value,i)=><ItemCard image={value.image} name={value.name} price={value.price} seller={value.seller} rating ={value.rating}/>)}
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
    align-items: center;
    padding-top: 50px;
  }
  .grid-container {
    display: grid;
    row-gap: 50px;
    grid-template-columns: auto auto auto;
    padding: 10px;
    margin-top: 40px;
    margin-bottom: 50px;
    padding-left: 7.5rem;
  }

  .heading {
    font-size: 3.4rem;
  }
`

export default Wishlist
