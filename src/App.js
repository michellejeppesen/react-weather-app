import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a href=" " target="_blank" rel="noreferrer">
            {" "}
            Michelle Jeppesen
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/michellejeppesen/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
