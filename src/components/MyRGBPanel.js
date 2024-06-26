import React, { useState } from "react"; import MySlider from "./MySlider";
function MyRGBPanel() { const [r, setR] = useState(128); const [g, setG] = useState(128); const [b, setB] = useState(128); const rgbCss = { width: "300px", display: "flex", flexDirection: "column", padding: "0 20px 20px 20px", justifyContent: "center", alignItems: "center", margin: "auto" }; return (
<div style={rgbCss}>
    <h5 style={{color: "gray", marginTop: 0, marginBottom: 25}}>葉崇義NUM24</h5>
    <h2 style={{color: "white", marginBottom: 5}}>Current color:</h2>
    <h5 style={{color: "white", marginTop: 0, marginBottom: 25}}>rgb({r}, {g}, {b})</h5>
    <div style={{ width: "250px", height: "100px", backgroundColor: `rgb(${r}, ${g}, ${b})`, marginBottom: 15 }}/>
    <span>R: </span><MySlider onChange={setR}/>
    <span>G: </span><MySlider onChange={setG}/>
    <span>B: </span><MySlider onChange={setB}/>
</div>); }
export default MyRGBPanel;