import Window from "./Window";

function asciiGraph(f,window) {
    var graph = window.emptyGrid();
    for(let x = -10; x < 10; x++) {
        if(f(x - 1) - (f(x) + 0.5) > 0) {
            var left_low = false
        } else {
            var left_low = true;
        }
        if(f(x + 1) - (f(x) + 0.5) > 0) {
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
        if(f(x) < 10 && f(x) > -10) {
            graph[10 - (f(x))][x + 10] = new_character;
        }
    } 
    let graph_string = "";
    for(let y = 0; y < graph.length; y++) {
        for(let x = 0; x < graph[y].length; x++) {
            graph_string += graph[y][x]
        }
        graph_string += "\n";
    }
    return <div class = "asciiGraph">{graph_string}</div>;
} 

export default asciiGraph;