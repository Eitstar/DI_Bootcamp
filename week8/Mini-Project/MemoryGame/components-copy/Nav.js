import React from "react";

const Nav = ({score, top_score}) => {
    return (
      <div>
      <h2>Superheroes Memory Game</h2>
      Score: {score} Top Score: {top_score}
      </div>
    );
}

export default Nav;
