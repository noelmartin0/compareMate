import React from 'react';
import styled from 'styled-components'

const Item = (props) => { console.log(props)
    return (
        <ITEM>
        <div className={props.className}>
                <div className='image'><img src={props.image} alt={props.name}/></div>
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
   
 }`;
export default Item;