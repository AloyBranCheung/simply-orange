import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <section className={styles.container}>
      {/* <h1>Simply Orange</h1> */}
      <img
        src="https://vtlogo.com/wp-content/uploads/2020/04/simply-orange-vector-logo.png"
        alt="brandlogo"
      />
    </section>
  );
}
