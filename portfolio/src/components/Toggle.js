import React, { useState } from 'react'
import {motion} from 'framer-motion'

//reusable toggle function

//children is the children from the compoenet so the actual question.
export default function Toggle({children , title}) {
    const [toggle, setToggle] = useState(false)
    return (
        <motion.div layout onClick={() => setToggle(prev => !prev)}>
            <motion.h4 layout className="question">{title}</motion.h4>
            {toggle ? children : ""}
            <div className="faq-line"></div>
        </motion.div>
    )
}
