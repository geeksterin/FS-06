import React from 'react';
import Item from './Item';
import './ItemList.css';

function ItemList() {

  const itemsArr = ['orange','banana','apple'];
  const colorArr = ['orange','yellow','red'];
  return (
    <div>
        <h1>ItemList</h1>
        <div className='item-list'>
            {itemsArr.map((item,index)=>{
                console.log('item and index',item,index);
                return (<Item itemValue = {item}
                         helloText={'Hello from ItemList'}
                         color = {colorArr[index]}
                         >   
                        </Item>);
            })}
        </div>
    </div>
  )
}

export default ItemList
