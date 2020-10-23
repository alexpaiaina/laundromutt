import React, { useState } from 'react'

export default function ClientCreate(props) {
  const [formData, setFormData] = useState({
    name: ''
  })
  const { handleClientCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleClientCreate(formData);
    }}>
      <h3>Create Client</h3>
      <label>
        Name:
        <input
          type="text"
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <button>Create</button>
    </form>
  )
}