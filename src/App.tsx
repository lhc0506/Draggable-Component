import React from "react";
import Draggable from "./components/Draggable";
import Box from "./components/Box";
import "./App.css";

function App() {
  return (
    // <div className="outer">
    <Draggable>
      <Box />
    </Draggable>
    // </div>
  );
}

export default App;
