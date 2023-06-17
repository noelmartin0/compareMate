import React from 'react'
import Navbar from '../components/navbar'
import styled from 'styled-components'
import Footer from '../components/footer'
import Item from '../components/Item'
/*const ResultPage = [

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


];*/

const Results = ({location}) => {
  const { state } = location;
  const products = state ? state.products : [];
  return (
    <RPAGE>
    <Navbar/>
    <div className='top'>
        <h3>Results For Nike Sports</h3>
        <p>About 36 Results</p>
    </div>
    <div className='content'>
    {products.map((product,index) =>(
    <div key={index}>
    <Item className="container" image={product.image_url} name={product.title} price={product.price} /*seller={value.seller} rating ={value.rating}*/ />
    </div>
    ))}
    
    </div> 
    <Footer />
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