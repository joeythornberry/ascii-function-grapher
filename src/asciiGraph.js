import GraphControl from "./GraphControl";
import {useState} from 'react';

function AsciiGraph(props) {
    var f = props.f;
    var window = props.window;
    var function_color = props.function_color;
    var graph = window.emptyGrid();
    const [counter, setCounter] = useState(0);
    var x_scale = window.Xscale * Math.pow(0.5, counter);
    var y_scale = window.Yscale * Math.pow(0.5, counter);
    for(let x = window.Xmin; x < window.Xmax; x++) {
        if(f((x_scale * x) - x_scale) / y_scale - (f(x_scale * x) / y_scale + 
        (y_scale * 0.5)) > 0) {
            var left_low = false;
        } else {
            var left_low = true;
        }
        if(f((x_scale * x) + x_scale) - (f(x_scale * x) / y_scale + 
        (y_scale * 0.5)) > 0) {
            var right_low = false
        } else {
            var right_low = true;
        }
        let new_character = null;
        if(left_low && right_low) {
            new_character = "-";
        } else if(!left_low && !right_low) {
            new_character = "-";
        } else if(left_low && !right_low) {
            new_character = "/";
        } else if(!left_low && right_low) {
            new_character = "\\";
        }
            var new_character_html = <b style = {{color: function_color}}>{new_character}</b>
        if(f(x_scale * x) / y_scale < window.Ymax && f(x_scale * x) / y_scale > 
        window.Ymin) {
            graph[Math.round((-1 * window.Ymin) - (f(x * x_scale) / y_scale))][x - window.Xmin] = new_character_html;
        }
    }


    /**let graph_string = "";
    for(let y = 0; y < graph.length; y++) {
        for(let x = 0; x < graph[y].length; x++) {
            graph_string += graph[y][x]
        }
        graph_string += "\n";
    }**/
    return <div class = "asciiGraph">
        <GraphControl onClick = {() => {setCounter(counter + 1)}}></GraphControl>
        <h1 style = {{color: "white"}}>{counter}</h1>{
        graph.map((line) => {return <div>{line}</div>})
    }</div>;
} 

export default AsciiGraph;