import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
ReactDOM.render(
  <App />,
  document.getElementById("root")
);
//eactDOM.render是告诉React渲染什么以及在哪里渲染它的函数 
//- 在这种情况下，我们渲染一个名为App的组件（我们很快就会创建它），并且它将在具有ID的DOM元素根（index.html的第10行）。