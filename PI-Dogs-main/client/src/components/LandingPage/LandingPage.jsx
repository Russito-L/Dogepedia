import React from "react";
import { Link } from "react-router-dom";
import style from "../LandingPage/LandingPage.module.css";
import "../LandingPage/ButtonHome.css"

function LandingPage() {
  return (
    <div className={`${style.main_container}`}>
      <div className={`${style.main_left_container}`}>
        <h1 className={`${style.titleApp}`} ><p>DOGPEDIA</p></h1>
        <h3>SOLO PROJECT BY LIONEL RUSSO</h3>
        <div className={`${style.left_paragraph}`}>
          <p>Hello! On this page you can find your ideal pet.
You can explore among many breeds of dogs and filter according to your preferences</p>
        </div>
        
        <Link to="/home">
            <button className="button_home">Go home</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
