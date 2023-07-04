import Window from "./Window";
import GraphControl from "./GraphControl";

function asciiGraph(f,window,function_color) {
    var graph = window.emptyGrid();
    for(let x = window.Xmin; x < window.Xmax; x++) {
        if(f((window.Xscale * x) - window.Xscale) / window.Yscale - (f(window.Xscale * x) / window.Yscale + 
        (window.Yscale * 0.5)) > 0) {
            var left_low = false
        } else {
            var left_low = true;
        }
        if(f((window.Xscale * x) + window.Xscale) - (f(window.Xscale * x) / window.Yscale + 
        (window.Yscale * 0.5)) > 0) {
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
        if(f(window.Xscale * x) / window.Yscale < window.Ymax && f(window.Xscale * x) / window.Yscale > 
        window.Ymin) {
            graph[Math.round((-1 * window.Ymin) - (f(x * window.Xscale) / window.Yscale))][x - window.Xmin] = new_character_html;
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
        <GraphControl></GraphControl>{
        graph.map((line) => {return <div>{line}</div>})
    }</div>;
} 

export default asciiGraph;