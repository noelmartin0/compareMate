import React from 'react'
import Navbar from '../components/navbar'
import styled from 'styled-components'

const ResultPage = [

    {
    image:'nikered.jpg',
    name: 'Nike Red',
    price: 'Rs 4,999',
    seller:'Amazon',
    Rating: '4/5⭐',
    },
    {
    image:'nikegreen.jpg',
    name: 'Nike Green',
    price: 'Rs 4,550',
    seller:'FlipKart',
    Rating: '3/5⭐',
    },
    
    {
    image:'canvasBlue.jpg',
    name: 'Converse',
    price: 'Rs 6,000',
    seller:'Ajio',
    Rating: '4.2/5⭐',
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
      {ResultPage.map((value,i) => (
      <div className='container'>
        <div className='image'><img src={value.image} alt={value.name}/></div>
        <div className="Content">
        <div className='PrdName'>{value.name}</div>
        <div className='Price'>{value.price}</div>
        <div className='Seller'>{value.seller}</div>
        <div className='rating'>{value.Rating}</div>
        </div>
    </div>
        ))}
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
} 
img{
    max-width: 300px;
    border-radius: 10px;
 }

 .Content{

    padding-left:1rem;
    
 }

 .PrdName{
    font-size:30px;
 }
 .Price{
    font-size:25px;
    font-weight: bold;

 }
 .Seller{
    

 }
 .rating{
   
 }
`;
export default Results