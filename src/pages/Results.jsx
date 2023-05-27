import React from 'react'
import Navbar from '../components/navbar'
import styled from 'styled-components'
import Footer from '../components/footer'
import Item from '../components/Item'
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
    seller:'Flipkart',
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
    <div className='content'>
    {ResultPage.map((value,i) =><Item id={i} key={i} className="container" image={value.image} name={value.name} price={value.price} seller={value.seller} rating ={value.rating} />)}
    </div> 
    <Footer/>
    </RPAGE>
  );
};
const RPAGE = styled.section`
.top{
    padding-top:3rem;
    margin-left:7rem;
    color:#002b5b;
} 

.content{
  margin-left:4rem;
  margin-top: 2rem;

}`;
export default Results