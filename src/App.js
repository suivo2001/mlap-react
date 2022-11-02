import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import PatientGuide from './pages/PatientGuide'
import About from './pages/About'
import Finances from './pages/Finances'
import Governance from './pages/Governance'
import Policies from './pages/Policies'
import DoctorFinder from './pages/DoctorFinder'
import CareFinder from './pages/CareFinder'
import CareFinderData from './pages/CareFinderData'
import Contact from './pages/Contact'

function App() {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/patient-guide'>
          <PatientGuide />
          <Footer />
        </Route>
        <Route path='/about'>
          <About />
          <Footer />
        </Route>
        <Route path='/finances'>
          <Finances />
          <Footer />
        </Route>
        <Route path='/governance'>
          <Governance />
          <Footer />
        </Route>
        <Route path='/policies'>
          <Policies />
          <Footer />
        </Route>
        <Route path='/contact'>
          <Contact />
          <Footer />
        </Route>
        <Route path='/doctor-finder'>
          <DoctorFinder />
          <Footer />
        </Route>
        <Route path='/care-finder'>
          <CareFinder />
          <Footer />
        </Route>
        <Route path='/about-care-finder'>
          <CareFinderData />
          <Footer />
        </Route>
        <Route path='/'>
          <Home />
          <Footer /> 
        </Route>
      </Switch>
    </div>
  );
}
export default App

