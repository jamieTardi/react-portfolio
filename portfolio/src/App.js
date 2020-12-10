import React from 'react'
import AboutUs from './pages/AboutUs'
import './styles/styles.css'
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav'
import Projects from '../src/pages/Projects'
import ContactUs from '../src/pages/ContactUs'
//React router imports
import { Switch, Route, useLocation } from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails'
//Animation page transtions imports.
import {AnimatePresence} from 'framer-motion'

function App() {
  
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/* using react router to define pages. */}
      <AnimatePresence exitBeforeEnter>
        {/* the location is for framer */}
      <Switch location={location} key={location.pathname}>
      {/* the exact is import as the renders this exact page */}
      <Route path="/" exact>
      <AboutUs />
     </Route>
     <Route path="/projects" exact>
     <Projects/>
     </Route>
     <Route path="/projects/:id">
       <ProjectDetails/>
     </Route>
     <Route path="/contact-me">
     <ContactUs />
     </Route>
     </Switch>
     </AnimatePresence>
    </div>
  );
}

export default App;
