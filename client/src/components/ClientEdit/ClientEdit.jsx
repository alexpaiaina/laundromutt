import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Edit(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dog_name: "",
    phone: ""

  })
  const { name, email, dog_name, phone } = formData
  const { handleClientEdit, clients } = props;
  const { id } = useParams();

 
  useEffect(() => {
    const prefillFormData = () => {
  
      const { name } = clients.find(client => client.id === Number(id));
      setFormData({ name });
    }
  
    if (clients.length) {
      prefillFormData()
    }
 
  }, [clients, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleClientEdit(id, formData);
    }}>
      <h3>Edit Client</h3>
      <label>
        Username:
        <input
          type="text"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </label>
      <label>
        Dog Name:
        <input
          type="text"
          value={dog_name}
          name="dog_name"
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="varChar"
          value={phone}
          name="phone"
          onChange={handleChange}
        />
      </label>
      <button>Create</button>
    </form>
  )
}