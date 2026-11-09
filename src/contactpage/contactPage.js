import React, { useState } from 'react';

function ContactPage() {
  const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        message: ''
  });

  function submitForm(event) {
    event.preventDefault();
    console.log(formInput);
  }

  return (
    <main className="contact-page">
      <h2>Contact</h2>
      <form onSubmit={submitForm}>
        <label>
          Name
          <input
            name="name"
            value={formInput.name}
            onChange={(event) =>
              setFormInput({ ...formInput, name: event.target.value })
            }
            required
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={formInput.email}
            onChange={(event) =>
              setFormInput({ ...formInput, email: event.target.value })
            }
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            value={formInput.message}
            onChange={(event) =>
              setFormInput({ ...formInput, message: event.target.value })
            }
            required
          />
        </label>
        <button type="submit">Send message</button>
      </form>
    </main>
  );
}

export default ContactPage;