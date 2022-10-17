import React from "react";
import InputPriceForm from "./InputPriceForm";
import styles from "./Masthead.module.css";

export default function Masthead() {
  return (
    <div className={styles.container}>
      <h1 className={styles.catchphrase}>
        The price fluctuation is a conspiracy. Time to track our puchases.
      </h1>
      <div className={styles.circle}>
        <div className={styles.wave}></div>
      </div>
      {/* <div className={styles.liquid}></div> */}
      <InputPriceForm />
    </div>
  );
}
