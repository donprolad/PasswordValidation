import React from "react";
import ReactDOM from "react-dom";
import PasswordForm from "./components/Passwords";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Password checks</h1>
      <PasswordForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
