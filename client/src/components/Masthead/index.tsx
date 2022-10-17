import React from "react";
import styles from "./Masthead.module.css";
import SearchBar from "../UI/Searchbar";
import Button from "@mui/material/Button";

export default function Masthead() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("hello");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h1 className={styles.catchphrase}>
        The price fluctuation is a conspiracy. Time to track our puchases.
      </h1>
      <div className={styles.circle}>
        <div className={styles.wave}></div>
      </div>
      {/* <div className={styles.liquid}></div> */}
      <div className={styles.inputContainer}>
        <SearchBar />
        <Button
          sx={{ backgroundColor: "var(--green-brand)" }}
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
