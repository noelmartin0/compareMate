import React from 'react'
import Navbar from '../components/navbar'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Item from '../components/item'
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
const Results = () => {
  return (
    <RPAGE>
    <Navbar/>
    <div className='top'>
        <h3>Results For Nike Sports</h3>
        <p>About 36 Results</p>
    </div>
      {ResultPage.map((value,i) =><Item image={value.image} name={value.name} price={value.price} seller={value.seller} rating ={value.rating} />)}
    <Footer/>
    </RPAGE>
  );
};
const RPAGE = styled.section`
.top{
    padding-top:1rem;
    margin-left:3rem;
    color:#002b5b;
}
.container{
    margin-left:2rem;
    display: flex;
    align-items: center;
    padding-bottom:2rem;
} `;
export default Results