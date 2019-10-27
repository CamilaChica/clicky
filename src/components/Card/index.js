import React from 'react';
import './styles.css';

const Card=(props)=>{
    return <div  onClick={props.onClick} 
    className="col-3 card-component">
        <img src={props.image}/>
    </div>
}

export default Card;