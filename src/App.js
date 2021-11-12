import React from 'react'
import {
  BrowserRouter as Router,
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
      <div>
        <Router>
          <Switch>
            <Route path='/mlap-react/patient-guide'>
              <PatientGuide />
            </Route>
            <Route path='/mlap-react/about'>
              <About />
            </Route>
            <Route path='/mlap-react/advocacy'>
              <Advocacy />
            </Route>
            <Route path='/mlap-react/contact'>
              <Contact />
            </Route>
            <Route path='/mlap-react/doctor-finder'>
              <DoctorFinder />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
