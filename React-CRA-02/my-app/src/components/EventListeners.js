import React from 'react';

function EventListeners() {
  let flag = null;
  
  function handleClick(e){
    console.log('event triggered',e);
    flag = 'Ayush';
  }
  const handleMouseOver = (event) =>{
    event.target.style.color = 'purple';
    event.target.style.backgroundColor = 'red';
    console.log('in mouse over handler',event);
  }
  return (
    <div id='div'>
        value of flag: {flag}
        <h1 id='h1'>bUTTONs CLICK!!</h1>
       <button style={{'backgroundColor':'blue'}}onClick={handleClick} >CLICK ME!</button> 
    </div>
  )
}

export default EventListeners;