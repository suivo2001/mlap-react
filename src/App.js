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
import DoctorFinder from './pages/DoctorFinder'
import CareFinder from './pages/CareFinder'
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
        </Route>
        <Route path='/governance'>
          <Governance />
        </Route>
        <Route path='/policies'>
          <Policies />
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
        </Route>
        <Route path='/about-care-finder'>
          <CareFinderData />
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

