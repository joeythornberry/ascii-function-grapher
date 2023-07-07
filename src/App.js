import Window from './Window';
import './App.css';
import AsciiGraph from './AsciiGraph';

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
    <div className="App" style = {{backgroundColor: "black"}}>
      <h1>y = x</h1>
      <AsciiGraph f = {x_cubed} window = {twenty_by_twenty} function_color = "blue"></AsciiGraph>

    </div>
  )
}

export default App;
