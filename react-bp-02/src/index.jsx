// React 18
import React from "react";
import { createRoot } from "react-dom/client";
const App = () => <h1>React Boilerplate 02</h1>;
const root = createRoot(document.getElementById("root"));
root.render(<App />);

// // React 17:
// import React from "react";
// import ReactDOM from "react-dom";
// const App = () => <h1>React Boilerplate 02</h1>;
// ReactDOM.render(<App />, document.getElementById("root"));
