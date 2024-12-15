import React, { useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState([]); //we save so our contacts
  const [form, setForm] = useState({ name: "", phone: "", email: "" }); // save data in form

  // add contacts//processor
  const addContact = (e) => {
    e.preventDefault(); // prevents page's reset
    if (form.name && form.phone && form.email) {
      setContacts([...contacts, form]); // adding new contact
      setForm({ name: "", phone: "", email: "" }); // cleans form
    } else {
      alert("Заполните все поля!");
    }
  };

  // processor form value changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Адресная книга</h1>

      {/* form to add contacts */}
      <form onSubmit={addContact} style={{ marginBottom: "20px" }}>
        <div>
          <label>
            Имя:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              style={{ margin: "5px", padding: "5px" }}
            />
          </label>
        </div>
        <div>
          <label>
            Телефон:
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              style={{ margin: "5px", padding: "5px" }}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              style={{ margin: "5px", padding: "5px" }}
            />
          </label>
        </div>
        <button
          type="submit"
          style={{ padding: "5px 10px", marginTop: "10px" }}
        >
          Добавить контакт
        </button>
      </form>

      {/* ContactList */}
      <h2>Список контактов</h2>
      {contacts.length === 0 ? (
        <p>Контактов пока нет.</p>
      ) : (
        <ul>
          {contacts.map((contact, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <strong>Имя:</strong> {contact.name}, <strong>Телефон:</strong>{" "}
              {contact.phone}, <strong>Email:</strong> {contact.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
