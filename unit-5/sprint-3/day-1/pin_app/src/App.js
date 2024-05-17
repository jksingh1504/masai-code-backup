import logo from './logo.svg';
import './App.css';
import PinInput from './components/PinInput';

function App() {
  return (
    <div className="App">
      <br/><br/>
      <PinInput length={5} />
    </div>
  );
}

export default App;
