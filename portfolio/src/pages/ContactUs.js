import React from 'react';
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

export default function ContactUs() {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <h1>Contact</h1>
        </motion.div>
    )
}
