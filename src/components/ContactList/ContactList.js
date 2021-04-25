import React from "react";
import styles from "./ContactList.module.css";
export default function ContactList({ contacts, filter, onRemoveContact }) {
  return (
    <div>
      {contacts.map(({ id, name, tel }) => (
        <div key={id} className={styles.contact}>
          {name.toLowerCase().includes(filter.toLowerCase()) && (
            <>
              <button
                type="button"
                onClick={() => onRemoveContact(id)}
                className={styles.btn}
              >
                Delete
              </button>
              <span>{name}:</span> <span>{tel}</span>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
