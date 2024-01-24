import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Toolbar';
import Presentation from './components/Presentation';
function App() {
  return (
    <div className="App">
      <Toolbar className='Header' />
        <Presentation />
    </div>
  );
}

export default App;
