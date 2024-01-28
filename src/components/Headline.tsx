import React from "react";
import logo from "../logo.svg";

function Headline() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="">
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default Headline;
