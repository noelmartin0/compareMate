import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Item = (props) => { 
 
    return (
        <ITEM>
        <div className={props.className}>

                <div className='image'>
                <button onClick={() => handleClick(props)} className='wishlist-button'><FontAwesomeIcon icon={faHeart} size="xl" /></button>
                <img src={props.image} alt={props.name}/>
                </div>
                <div className="Content">
                    <div className='PrdName'>{props.name}</div>
                    <div className='Price'>{props.price}</div>
                    <div className='Seller'><Link to={props.seller}><img src='Amazon_icon.svg' className='image-style'/></Link></div>
                    <div className='rating'>{props.rating}</div>
                </div>
        </div>
        </ITEM>
    );
}


const ITEM = styled.section`
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
    position: relative;
}

.wishlist-container{
    width:375px;
    height:375px;
    margin-left:60px;
 } 

img{
    width:  250px;
    height: 250px;
    object-fit: contain;
    border-radius: 10px;
 }
 
 .image-style {
  width: 50px;
  height: 50px;
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
    padding-top:1rem;

 }
 .rating{
   padding-top:1rem;
   font-weight:bold;
 }
 
 .wishlist-button{
    position:absolute;
    border: none;
    background-color: transparent;
    z-index: 2;
    top: 2%;
    left: 1%;
    color: #002b5b;
 }
 
 .wishlist-button:hover{
    color: #0a63c7;
 }`;
export default Item;