import React from "react";
import styles from "./ContactForm.module.css";
export default function ContactForm({ addContact }) {
  return (
    <form onSubmit={addContact} className={styles.form}>
      <div>Name</div>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        placeholder="Name"
      />
      <div>Telephone Number</div>
      <input
        type="tel"
        name="tel"
        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
        required
        placeholder="Telephone Number"
      />
      <div>
        <input type="submit" value="Add Contact" className={styles.btn} />
      </div>
    </form>
  );
}
