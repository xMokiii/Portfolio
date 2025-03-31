import React from "react";
import useSmoothScroll from "./hooks/useSmoothScroll";
import Home from "./components/Home";
import Background from "./components/Background";

import "./App.css";

const App: React.FC = () => {
  useSmoothScroll();

  return (
    <div className="app-container">
      <Background />
      <div className="content-container">
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
      </div>
    </div>
  );
};

export default App;