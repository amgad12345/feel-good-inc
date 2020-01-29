import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import Page2 from './pages/Page2'
import Page3 from './pages/page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Page7 from './pages/Page7'
import Page8 from './pages/Page8'
import Page9 from './pages/Page9'
import Page10 from './pages/Page10'
import Page11 from './pages/Page11'
import Page12 from './pages/Page12'
import Page13 from './pages/Page13'
import Page14 from './pages/Page14'
import Page15 from './pages/Page15'
import Page16 from './pages/Page16'
import Page17 from './pages/Page17'
import Page18 from './pages/Page18'
import Page19 from './pages/Page19'
import SingleDoctor from './pages/SingleDoctor'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Secret from './pages/Secret'
import Unauthed from './pages/Unauthed'
import DoctorPortal from './pages/DoctorPortal'
import SingleDoctorPortal from './pages/SingleDoctorPortal'

const App = props => {
  console.log({ props })
  const isLoggedIn = localStorage.getItem('token') ? true : false
  const [isAuthed, setIsAuthed] = useState(isLoggedIn)

  const logout = () => {
    // Clear Access Token and ID Token from local storage
    //localStorage.removeItem('access_token')
    localStorage.removeItem('token')
    localStorage.removeItem('expiresAt')
    // navigate to the home route
    window.location.href = 'http://localhost:3000/'
    //   history.replace('http://localhost:3000/')
  }

  return (
    <Router>
      <head>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <script src="https://js.stripe.com/v3/"></script>
      </head>
      <header>
        <h1 className="feel_good">Feel Good St Pete.</h1>
        <nav>
          <ul className="nav_bar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {isAuthed ? (
                <button id="logout" onClick={logout}>
                  Log out
                </button>
              ) : (
                <Link to="/1">Sign up</Link>
              )}
            </li>
            <li>
              <Link to="">About us</Link>
            </li>
            <li>
              <Link to="">Contact us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <footer>
        <section className="social_container">
          <h3 className="Follow">Follow Us</h3>
          <a className="social_icons" href="https://www.facebook.com/">
            <h4 class="fa fa-facebook"></h4>
          </a>
          <a className="social_icons" href="https://www.instagram.com/?hl=en">
            <h4 class="fa fa-instagram"></h4>
          </a>
          <a className="social_icons" href="https://twitter.com/?lang=en">
            <h4 class="fa fa-twitter"></h4>
          </a>
        </section>
        <section className="middle">
          <a href="#" className="mid">
            <h4>Copyright © 2019</h4>
          </a>
          <a href="#" className="mid">
            <h4>Privacy Policy</h4>
          </a>
          <a href="#" className="mid" id="Contact">
            <h4>Contact us</h4>
          </a>
          <a href="#" className="mid" id="Amgad">
            <h4> Amgad Behman & Associates</h4>
          </a>
          <a href="#" className="mid">
            <h4>Sitemap</h4>
          </a>
        </section>
      </footer>

      <Switch>
        <Route
          exact
          path="/"
          render={props => {
            return <HomePage {...props} setIsAuthed={setIsAuthed} />
          }}
        ></Route>
        <Route
          exact
          path="/1"
          render={props => {
            return <SignUpPage {...props} setIsAuthed={setIsAuthed} />
          }}
        ></Route>
        <Route exact path="/Pickdoctor" component={Page2}></Route>
        <Route exact path="/Dentists" component={Page3}></Route>
        <Route exact path="/GeneralPractitioner" component={Page4}></Route>
        <Route exact path="/Surgeon" component={Page5}></Route>
        <Route exact path="/Dermatologist" component={Page6}></Route>
        <Route exact path="/Psychiatrist" component={Page7}></Route>
        <Route exact path="/Urologist" component={Page8}></Route>
        <Route exact path="/Gynecologists" component={Page9}></Route>
        <Route exact path="/Radiologists" component={Page10}></Route>
        <Route exact path="/Pathologists" component={Page11}></Route>
        <Route exact path="/Ophthalmologist" component={Page12}></Route>
        <Route exact path="/Internists" component={Page13}></Route>
        <Route exact path="/Allergist" component={Page14}></Route>
        <Route exact path="/Physician" component={Page15}></Route>
        <Route exact path="/Pediatrician" component={Page16}></Route>
        <Route exact path="/Nephrologist" component={Page17}></Route>
        <Route exact path="/Anesthesiologist" component={Page18}></Route>
        <Route exact path="/DocSignUp" component={Page19}></Route>
        <Route exact path="/secret" component={Secret}></Route>
        <Route exact path="/Unauthed" component={Unauthed}></Route>
        <Route exact path="/SingleDoctor/:id" component={SingleDoctor}></Route>
        <Route
          exact
          path="/SingleDoctorPortal/:id"
          component={SingleDoctorPortal}
        ></Route>
        <Route exact path="/DoctorPortal/:id" component={DoctorPortal}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
