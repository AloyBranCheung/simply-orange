import React from "react";
import styles from "./Body.module.css";
import Chart from "./Chart";
import PurchaseHistory from "./PurchaseHistory";

export default function Body() {
  return (
    <section className={styles.container}>
      <div className={styles.sectionWrapper}>
        <Chart />
      </div>
      <div className={styles.sectionWrapper}>
        <PurchaseHistory />
      </div>
    </section>
  );
}
