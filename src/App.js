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
import Contact from './pages/Contact'
import Advocacy from './pages/Advocacy'

function App() {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/patient-guide'>
          <PatientGuide />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/advocacy'>
          <Advocacy />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/doctor-finder'>
          <DoctorFinder />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
