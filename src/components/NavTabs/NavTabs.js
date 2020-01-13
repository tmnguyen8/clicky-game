import React  from "react";
import "./NavTabs.css";

function NavTabs (props) {
    return (
      <div className="row nav-bar">
        <div className="col-4">
          <h2>Clicky Game</h2>
        </div>
        <div className="col-4">
          <h2>{props.resultMessage}</h2>
        </div>
        <div className="col-4">
            <h2>Score = {props.score} | Total = {props.totalScore}</h2>
        </div>  
      </div>

    );
}

export default NavTabs;

