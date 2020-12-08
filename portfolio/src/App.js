import React from 'react'
import AboutUs from './pages/AboutUs'
import './styles/styles.css'
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav'
import Projects from '../src/pages/Projects'
import ContactUs from '../src/pages/ContactUs'
//React router imports
import { Switch, Route } from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails'

function App() {
  
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/* using react router to define pages. */}
      <Switch>
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
    </div>
  );
}

export default App;
