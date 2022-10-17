import React from "react";
import Body from "./components/Body";
import Masthead from "./components/Masthead";
import Navbar from "./components/Navbar";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Masthead />
      <Body />
    </div>
  );
}

export default App;
