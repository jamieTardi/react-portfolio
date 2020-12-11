import React, { useState } from 'react'
//reusable toggle function

//children is the children from the compoenet so the actual question.
export default function Toggle({children}) {
    const [toggle, setToggle] = useState(true)
    return (
        <div onClick={() => setToggle(!toggle)}>
            {toggle ? children : <button>Frequently Asked Question</button> }
        </div>
    )
}
