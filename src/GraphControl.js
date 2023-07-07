import React from 'react'; 
import button from 'react';

function GraphControl (props) {
    return <button style = {{color: "black"}} onClick = {props.onClick}>zoom</button>
}
export default GraphControl