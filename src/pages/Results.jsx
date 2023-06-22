import React , {useEffect, useState} from 'react'
import { useLocation, useParams } from 'react-router-dom'
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

const Results = () => {
  
  const location = useLocation();
  const products = location.state ? location.state.products : [];
  return (
    <RPAGE>
    <Navbar/>
    {/* <div className='top'>
        <h3>Results For:</h3>
    </div> */}
    {products.length > 0 ? (
    <div className='content'>
    {products.map((product,index) =>(
    <div key={index}>
    <Item className="container" image={product.image_url} name={product.title} price={"₹ "+product.price} seller={product.product_url} rating={product.rating}/*seller={value.seller} rating ={value.rating}*/ />
    </div>   
    ))}
    
    </div> 
      ) : (
        <p>No results found.</p>
      )}
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
  margin-left:5rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  margin-right: 10rem;
}

.container{
  border-radius: 15px;
  padding: 1.5rem;
  margin-top: 1.9rem;
  box-shadow: 0.9px 1px 7px rgb(166,164 ,164);
}

`;
export default Results