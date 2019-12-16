import React, { Component } from 'react';

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
         <h5 className = "grey-text text-darken-3">sign up</h5>
         <div className = "input-feild">
           <label htmlFor="email"></label>
           <input type="email" id= "email" onChange ={this.handleChange} placeholder="Email"></input>
         </div>
         <div className = "input-feild">
           <label htmlFor="password"></label>
           <input type="password" id= "password" onChange ={this.handleChange} placeholder="Password"></input>
         </div>
         <div className = "input-feild">
           <label htmlFor="Firstname"></label>
           <input type="text" id= "firstname" onChange ={this.handleChange} placeholder="Firstname"></input>
         </div>
         <div className = "input-feild">
           <label htmlFor="lastname"></label>
           <input type="text" id= "lastname" onChange ={this.handleChange} placeholder="lastname"></input>
         </div>
         <div className = "input-feild">
           <button className="btn pink lighten-1 z-debth-0">Sign up</button>
         </div>
       </form>
      </div>
    );
  }
}

export default SignUp;
