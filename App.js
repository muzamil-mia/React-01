import React from "react";
import ReactDOM from "react-dom";

/*
<div id="parent">
  <div id="child1">
    <h1>hello</h1>
  </div>
</div>
*/

// const parent = React.createElement("div", {id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{"id":"heading1"},"i am h1 tag")));
/*
const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child1"},[React.createElement("h1",{id:""},"i am h1"),React.createElement("h2",{id:""},"i am h2")]))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
*/

//nested structure
/*
<div id="parent">
  <div id="child1">
    <h1>hello</h1>
  </div>
  <div id="child1">
    <h1>hello</h1>
  </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "" }, "this is react app"),
    React.createElement("h2", { id: "" }, "i am h2"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "" }, "i am h1"),
    React.createElement("h2", { id: "" }, "i am h2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
