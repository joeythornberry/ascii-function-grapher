import Window from './Window';
import './App.css';
import asciiGraph from './asciiGraph';

function x_linear(x) {
  return x
}

function x_squared(x) {
  return Math.pow(x,2)
}

var twenty_by_twenty = new Window(-10,10,-10,10,1);

function App() {
  return (
    <div className="App">
      <h1>y = x</h1>
      {asciiGraph(x_linear,twenty_by_twenty)}

      <h1>y = x^2</h1>
      {asciiGraph(x_squared,twenty_by_twenty)}

    </div>
  );
}

export default App;
