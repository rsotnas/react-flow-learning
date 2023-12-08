import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { SvelteFlow } from "@xyflow/svelte";

import "@xyflow/svelte/dist/style.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={viteLogo} className="App-logo" alt="logo" />
          <img src={reactLogo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <SvelteFlow />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
