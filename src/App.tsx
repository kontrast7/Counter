import React from "react";
import "./App.css";
import { Counter } from "./Counter";
import { CounterRedux } from "./CounterRedux";

function App() {
  return (
    <div className="App">
      <CounterRedux />
    </div>
  );
}

export default App;
