import React from 'react';
import { useState, useEffect, useContext } from 'react';
import {Link} from "react-router-dom";
import { Container } from '../bottleContainer/BottleContainer';
// import { emptyColor, emptyColorRGB, colors, Bottles, sections } from "../bottle/game-settings"
import { EMPTY_COLOR } from '../../constants/gameConstants';
// import './Bottle.css';
///////////////////////////////////////////

export const Bottle = () => {

  const [style, setStyle] = useState(EMPTY_COLOR);
    
  return (<div className="bottle" 
                // key={this.id} 
                // id={this.id} 
                style={{"color":style}} 
                onClick={(e) => this.activateBottle(e)}>
          </div>);
  
}

