import React from "react";
import {NavLink} from 'react-router-dom'
import web from "../src/images/rocket.svg";
import Common from './Common';

function Home() {
  return (
    <div>
      
      <Common 
      name="Grow Your Business With"
      imgsrc={web}
      visit="/service"
      btnname="Get Started"
      />
    </div>
  );
}

export default Home;
