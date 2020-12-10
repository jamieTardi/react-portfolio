import React from 'react'
import code from '../images/code.svg'
//styles imported
import {About, Description, Image, Hide} from '../styles'
//Framer motion
import {motion} from 'framer-motion'
import {titleAnim, fade, photoAnim} from '../animation'
import Wave from './Wave';

export default function AboutSection() {
//framer motion variable "variant"



    return (
        //Styled div
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim} ><span>Hello.</span> My name is Jamie</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>I am a front-end engineer</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Take a look at my work</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade} className="contact-paragraph">Contact me below!</motion.p>
                <motion.button variants={fade} className="contact-button">Contact me</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={code}  alt="Random Image"/>
            </Image>
            <Wave />
        </About>
    )
}




