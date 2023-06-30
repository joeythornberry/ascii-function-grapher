import Window from './Window';
import './App.css';
import asciiGraph from './asciiGraph';

function x_linear(x) {
  return x
}

function x_squared(x) {
  return Math.pow(x,2)
}

function x_cubed(x) {
  return Math.pow(x,3) - (5 * Math.pow(x,2))
}

var twenty_by_twenty = new Window(-75,75,-75,75,0.1,1);

function App() {
  return (
    <div className="App">
      <h1>y = x</h1>
      {asciiGraph(x_linear,twenty_by_twenty,"blue")}

      <h1>y = x^3</h1>
      {asciiGraph(x_cubed,twenty_by_twenty,"red")}

    </div>
  )
}

export default App;
