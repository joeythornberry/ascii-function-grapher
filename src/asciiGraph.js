import Window from "./Window";

function asciiGraph(f,window) {
    var graph = window.emptyGrid();
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