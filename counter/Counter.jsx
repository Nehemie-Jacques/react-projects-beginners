import React, { useState } from 'react'
import "./Style.css"

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <> 
           <div className="container">
              <h className="number">{count}</h>
           </div>

           <section className="btn-container">
              <button onClick={increment} className='increment'>+</button>  
              <button onClick={decrement} className="increment">-</button>
           </section>
        </>
    )
}

export default Counter;