import React from "react";

const Line = (props) => {
    console.log(props.left)
    const left = props.left === "true" ? "9.08rem" : "2.6rem";
    console.log({borderLeft: "5px solid #159895", height: "3em", marginLeft: left, marginTop: "-1.4rem", marginBottom: "-1.4rem"})
    return (<>
        <div style={{borderLeft: "5px solid #159895", height: "3em", marginLeft: left, marginTop: "-1.4rem", marginBottom: "-1.4rem"}}></div>
    </>)
}

export default Line;