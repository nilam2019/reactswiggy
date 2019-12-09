import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
//import logo from './lo'
import './swiggy.css';

function Swiggy(props) {
  const [location, setLocation] = useState('');

  function handleChange(e) {
    var value = e.target.value;
    setLocation(value)
  }

 console.log(props.locations)
  return (
  <div className = "App">
     <img src="logo.jpg" width="200px" height="200px"/>  
     <img src="swiggyfoodimage.png" width="500" height="500" align="right"/> 
    <div className="heading">
          <h1>Hungry?</h1>
          <p> Order food from favourite restaurants near you.</p>
    </div>
      <Button variant="outlined">Login</Button>
        <Button className="signup" variant="outlined" color="primary">
            Sign up
        </Button>
        <br/><br/>
        <input className="location" onChange={handleChange}
          type="text" placeholder="Enter your delivery location"
        /> 
         <Button variant="outlined" color="primary" onClick={() => {
           props.fetchLocations(location)
         }}>
            FINDFOOD
        </Button>
        {props.locations && props.locations.map(location => <div>{location.name}</div>)}
      </div>
  );
}

export default Swiggy;