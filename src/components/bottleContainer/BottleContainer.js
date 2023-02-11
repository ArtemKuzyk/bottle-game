import React from 'react';
import {Link} from "react-router-dom";
import { useSettings } from '../hooks/useSettings';
import { Bottle } from '../bottleV2/BottleVTwo';
// import { emptyColor, emptyColorRGB, colors, Bottles, sections } from "./game-settings"
import { BOTTLES } from '../../constants/gameConstants';

// import './Bottle.css';
///////////////////////////////////////////

export const BottleContainer = () => {

  const { settings } = useSettings();
  console.log(settings);

  return(
      <div className="container">
        <Link to="../" >
          <div className="home-image"></div>
        </Link>
        {BOTTLES.map((item) => {
          if (+item.id > (+settings.bottles + 1)) return;
          return <Bottle id = {item.id} key = {item.id} sections = {settings.sections}/>
        })}
      </div>
  );
}
