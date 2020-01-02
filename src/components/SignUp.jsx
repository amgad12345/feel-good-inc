import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'
import '../index.css'

class SignUp extends Component {
  state = {
  email:"",
  password:"",
  firstname:"",
  lastname:"",
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmite =(e) => {
    e.preventDefault();
    console.log(this.state)
  }


  render() {
    return (
      
      <div className =  "container">
       <form onSubmit ={this.handleSubmite} className="white">
       <FontAwesomeIcon className="faUserPlus" icon={faUserPlus} />
         <h5 className = "sign_up">SIGN UP</h5>
         <div className = "input-feild">
           <label htmlFor="email"></label>
           <input className="inp" type="email" id= "email" onChange ={this.handleChange} placeholder="Email"></input>
         </div>
         <div className = "input-feild">
           <label htmlFor="password"></label>
           <input className="inp" type="password" id= "password" onChange ={this.handleChange} placeholder="Password"></input>
         </div>
         <div className = "input-feild">
           <label htmlFor="Firstname"></label>
           <input className="inp" type="text" id= "firstname" onChange ={this.handleChange} placeholder="First Name"></input>
         </div>
         <div className = "input-feild">
           <label htmlFor="lastname"></label>
           <input className="inp" type="text" id= "lastname" onChange ={this.handleChange} placeholder="last Name"></input>
         </div>
         <div className = "input-feild">
           <button className="sign_up_btn">Sign up</button>
         </div>
       </form>
       <footer>
       <section className= "social_container">
          <h3 className="Follow">Follow Us</h3>
        <a className= "social_icons" href="https://www.facebook.com/">
          <h4 class="fa fa-facebook"></h4>
          </a>
          <a className= "social_icons" href="https://www.instagram.com/?hl=en">
            <h4 class="fa fa-instagram"></h4>
            </a>
          <a className= "social_icons" href="https://twitter.com/?lang=en">
            <h4 class="fa fa-twitter"></h4>
          </a>
          </section>
      <a href="#"><h4> Copyright © 2019 </h4></a>
      <a href="#"><h4>Privacy Policy</h4></a>
      <a href="#"><h4>Contact us</h4></a>
      <a href="#"><h4> Amgad Behman & Associates</h4></a>
      <a href="#"><h4>Sitemap</h4></a>
      </footer>
      </div>
      
    );
  }
}

export default SignUp;
