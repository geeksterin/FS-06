import React from 'react'

function JSX() {
const myTeam = [  
    <li key={1}>Benzo Walli</li>, 
    <li key={2}>Rasha Loa</li>, 
    <li key={3}>Colmar Cumberbatch</li>, 
    <li key={4}>Colmar Cumberbatch</li>, 
    <li key={5}>Femi Billon</li>,
    <li key={6}>Femi Billon2</li>,
    <li key={7}>Femi Billon3</li>,
    ];

    const paragraphs = (    
                        <div id="i-am-the-outermost-element" className='div-para'>    
                            <p>I am a paragraph.</p>  
                            <p>I, too, am a paragraph.</p>  
                        </div>);
  return (
    <div>
      <ul>
        {myTeam.map(item=>item)}
      </ul>

        {paragraphs}
    </div>
  )
}

export default JSX;