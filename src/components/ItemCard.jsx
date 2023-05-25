import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
const ItemCard = (props) => {



    return (
        <ITEM>
        <div className="card" style={{width: '18.8rem'}}>
        <img src={props.image} className="card-img-top" alt="Shoe.jpg" />
        <button class="trash" onClick={()=>{}}><FontAwesomeIcon icon={faCircleXmark} size="xl" /></button>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            {props.price}
          </p>
        </div>
      </div> 
      </ITEM>
    )
}

const ITEM = styled.section`
img{
    width:18.8rem;
    height: 18.8rem;
    object-fit:cover;
}

.card{
    width:500px;
}

.card-body{
    text-align:center;
    line-height: 0.9em;
}

.card-title{
    font-weight: 400;
    font-size: 1.6rem;
}

.card-text{
    font-weight: 700;
    font-size: 1.2rem;
}

.trash{
    position: absolute;
    border:none;
    background-color:transparent;
    width: 1em;
    height: 1em;
    margin-top: 2%;
    margin-left: 88%;
}
`;
export default ItemCard;