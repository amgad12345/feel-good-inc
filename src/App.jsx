import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
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
import SingleDoctor from './pages/SingleDoctor'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Secret from './pages/Secret'
import Unauthed from './pages/Unauthed'




const App = () => {

  

  return (
    <Router>
      <head><link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" /></head>
      <header>
        <h1 className= "feel_good">Feel Good  St Pete.</h1>
        <nav>
          <ul className = "nav_bar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/1">sign up</Link>
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
     
      
      
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/1" component={Page}></Route>
        <Route exact path="/2" component={Page2}></Route>
        <Route exact path="/3" component={Page3}></Route>
        <Route exact path="/4" component={Page4}></Route>
        <Route exact path="/5" component={Page5}></Route>
        <Route exact path="/6" component={Page6}></Route>
        <Route exact path="/7" component={Page7}></Route>
        <Route exact path="/8" component={Page8}></Route>
        <Route exact path="/9" component={Page9}></Route>
        <Route exact path="/10" component={Page10}></Route>
        <Route exact path="/11" component={Page11}></Route>
        <Route exact path="/12" component={Page12}></Route>
        <Route exact path="/13" component={Page13}></Route>
        <Route exact path="/14" component={Page14}></Route>
        <Route exact path="/15" component={Page15}></Route>
        <Route exact path="/16" component={Page16}></Route>
        <Route exact path="/17" component={Page17}></Route>
        <Route exact path="/18" component={Page18}></Route>
        <Route exact path="/secret/:username" component={Secret}></Route>
        <Route exact path="/unauth" component={Unauthed}></Route>
        <Route exact path="/SingleDoctor/:id" component={SingleDoctor}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
