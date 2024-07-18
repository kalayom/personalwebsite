import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
// import './style.css'
import './form_style.css'
import './scroll_style.css'
// import reportWebVitals from "./reportWebVitals";
// core styles
import "./scss/volt.scss";

// vendor styles
import "react-datetime/css/react-datetime.css";

//ReactDOM.render(<App />, document.getElementById("root"))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
