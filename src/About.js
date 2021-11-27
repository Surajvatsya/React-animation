import React from "react";
import Common from "./Common";
import web from "../src/images/team.svg";
function About() {
  return (
    <div>
      <Common
        name="Welcome to about Page"
        imgsrc={web}
        visit="/contact"
        btnname="Contact Now"
      />
    </div>
  );
}

export default About;
