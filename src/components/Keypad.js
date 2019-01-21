// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {
  render(){
    return(
      <input type="number" onKeyUp={console.log('Entering password...')}>
    )
  }
}
