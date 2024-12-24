import useSmoothScroll from './hooks/useSmoothScroll';
import Intro from './components/Intro';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App: React.FC = () => {
  useSmoothScroll();

  return (
    <div>
      <Intro />
      <Home />
      <Skills />
      <Projects />
      <Intro />

    </div>
  );
};

export default App;
