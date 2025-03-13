import React from 'react';
import useSmoothScroll from './hooks/useSmoothScroll';
import Intro from './components/Intro';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Screen1 from './components/ScreenZoom';
import ProgressBar from './components/ProgressBar';
import './App.css';

const App: React.FC = () => {
  useSmoothScroll();

  return (
    <div>
      <ProgressBar />
      <Intro />
      <Home />
      <Skills />
      <Projects />
      <Screen1 />
      <Intro />
      <Intro />
    </div>
  );
};

export default App;