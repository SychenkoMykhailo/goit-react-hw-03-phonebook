import React from "react";
import styles from "./FilterContact.module.css";
export default function FilterContact({ filterContacts }) {
  return (
    <div className={styles.container}>
      <input type="text" onChange={filterContacts} placeholder="Search" />
    </div>
  );
}
