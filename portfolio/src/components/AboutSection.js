import React from 'react'
import code from '../images/code.svg'
//styles imported
import {About, Description, Image, Hide} from '../styles'
//Framer motion
import {motion} from 'framer-motion'

export default function AboutSection() {

    //framer motion variable "variant"


    return (
        //Styled div
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 ><span>Hello.</span> My name is Jamie</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 >I am a front-end engineer</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 >Take a look at my work</motion.h2>
                    </Hide>
                </motion.div>
                <p className="contact-paragraph">Contact me below!</p>
                <button className="contact-button">Contact me</button>
            </Description>
            <Image>
                <img src={code}  alt="Random Image"/>
            </Image>
        </About>
    )
}




