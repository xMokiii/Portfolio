import React from "react";
import { Canvas } from "@react-three/fiber";
import useSmoothScroll from "./hooks/useSmoothScroll";
import Home from "./components/Home";
import Iceberg from "./components/Iceberg";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ScreenZoom from "./components/ScreenZoom";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

const App: React.FC = () => {
  useSmoothScroll();

  return (
    <div className="app-container">
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 10, 10]} intensity={1} />
          <Iceberg />
        </Canvas>
      </div>
      <div className="content-container">
        <Home />
        <Home />
        <Home />
        <Home />
        <Home />
        {/* Ajoutez d'autres composants ici */}
      </div>
    </div>
  );
};

export default App;