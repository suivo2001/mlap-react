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
import ClinicFinder from './pages/ClinicFinder'
import Contact from './pages/Contact'
import Advocacy from './pages/Advocacy'

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
        <Route path='/advocacy'>
          <Advocacy />
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
        <Route path='/clinic-finder'>
          <ClinicFinder />
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
