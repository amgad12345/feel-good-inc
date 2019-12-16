import React, { Component } from 'react';

class LogIn extends Component {
  state = {
    email:"",
    password:"",
    
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
           <h5 className = "grey-text text-darken-3">sign in</h5>
           <div className = "input-feild">
             <label htmlFor="email"></label>
             <input type="email" id= "email" onChange ={this.handleChange} placeholder="Email"></input>
           </div>
           <div className = "input-feild">
             <label htmlFor="password"></label>
             <input type="password" id= "password" onChange ={this.handleChange} placeholder="Password"></input>
           </div>

           <div className = "input-feild">
             <button className="btn pink lighten-1 z-debth-0">Log in</button>
           </div>
         </form>
        </div>
      );
    }
  }

export default LogIn;