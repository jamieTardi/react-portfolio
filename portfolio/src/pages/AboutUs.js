import React from 'react';
import AboutSection from '../components/AboutSection';
import Languages from '../components/Languages';
import FaqSection from '../components/FaqSection';
//Animation imports
import {motion} from 'framer-motion';
import { pageAnimation } from '../animation'

export default function AboutUs() {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <Languages />
            <FaqSection />
        </motion.div>
    )
}
