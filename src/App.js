import '../css/App.css';
import Main from './components/Main';
import NavMenu from './components/NavMenu';
import StartScreen from './components/StartScreen';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <StartScreen />
      <Main />
    </div>
  );
}

export default App;
