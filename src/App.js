import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Toolbar';
import Presentation from './components/Presentation';
import AboutMe from './components/AboutMe';
function App() {
  return (
    <div className="App">
      <Toolbar className='Header' />
        <Presentation />
        <AboutMe />

    </div>
  );
}

export default App;
