import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Item = (props) => { console.log(props)
    return (
        <ITEM>
        <div className={props.className}>

                <div className='image'>
                <button className='wishlist-button'><FontAwesomeIcon icon={faHeart} size="xl" /></button>
                <img src={props.image} alt={props.name}/>
                </div>
                <div className="Content">
                    <div className='PrdName'>{props.name}</div>
                    <div className='Price'>{props.price}</div>
                    <div className='Seller'>{props.seller}</div>
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
    object-fit: cover;
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
 
 .wishlist-button{
    position:absolute;
    border: none;
    background-color: transparent;
    z-index: 2;
    top: 2%;
    left: 1%;
    color: white;
 }
 
 .wishlist-button:hover{
    color: lightgrey;
 }`;
export default Item;