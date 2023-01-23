import React from 'react'
import './Item.css';

function Item(props) {

  console.log('props Item is',props);
  return (
    <div className='item-card' style={{'backgroundColor': props.color}}>
        {props.itemValue}
        <div>{props.helloText}</div>
    </div>
  )
}

export default Item