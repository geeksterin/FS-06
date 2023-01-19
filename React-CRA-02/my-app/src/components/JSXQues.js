import React from 'react'

function JSXQues() {

 const baby = true;
 let age =1;
 let drinkingAge =25;

  return (
    <div>
         <ul>
            <li>Applesauce</li>
            { !baby && <li>Pizza</li> }
            { age > 15 && <li>Brussels Sprouts</li> }
            { age > 20 && <li>Oysters</li> }
            { age > 25 && <li>Grapes</li> }
        </ul>
        <h1>
            { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
        </h1>
    </div>
  )
}

export default JSXQues