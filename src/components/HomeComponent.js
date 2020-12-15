import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import ReactCSSTransitionGroup from 'react-transition-group';

import '../App.css';

function Home(props) {
    const src1="/assets/images/personall/01.jpg";
    return (
      <div className="container">
        <img src={src1} style={{width: 650}} alt='Immetrica basic' />
        <p>fading one into another cards ???</p>
      </div>
    );
  }
  
  export default Home;

  // yarn add react-crossfade-image
  // yarn add react-transition-group



