import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./ContactForm";
import FilterContact from "./FilterContact";
import ContactList from "./ContactList";
class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  addContact = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      if (
        prevState.contacts.some(
          (contact) => contact.name === e.target.name.value
        )
      ) {
        return alert("This contact name already exists");
      }
      return {
        contacts: [
          ...prevState.contacts,
          { name: e.target.name.value, tel: e.target.tel.value, id: uuidv4() },
        ],
      };
    });
  };
  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => {
          return id !== contactId;
        }),
      };
    });
  };
  filterContacts = (e) => {
    this.setState({ filter: e.target.value });
  };

  setContactsToLocalStorage = () => {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  };

  setStateContactsFromLocalStorage = () => {
    if (localStorage.getItem("contacts")) {
      this.setState({ contacts: JSON.parse(localStorage.getItem("contacts")) });
    }
  };

  componentDidMount() {
    this.setStateContactsFromLocalStorage();
  }

  componentDidUpdate() {
    this.setContactsToLocalStorage();
  }

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className="maincontainer">
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <FilterContact filterContacts={this.filterContacts} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onRemoveContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
