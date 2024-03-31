import React from "react";

function Cell(props) {

    const colored = props.colored;

    // Styles with state
    const main = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: (colored) ? "#fadb14" : "white",
        height: "60px",
        borderRadius: "10px",
        border: "2px solid"
    }

    return <div style={main}>
        1
    </div>
}

export default Cell;
