import React, {useState} from 'react'

export default function scratch() {

  const handleChange = (e) => {
    const { formData, setFormData } = useState({
      username: '',
      email: '', 
      password: ''
    })

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
    
  return (
    <form>
      <label> username
        <input type="text" name="username" value={FormData, username} onChange={handleChange} />
      </label>
      <label> email
        <input type="text" name="email" value={FormData, email} onChange={handleChange} />
      </label>
      <label> password
        <input type="password" name="password" value={FormData, password} onChange={handleChange} />
      </label>
      <input />
      <input />
    </form>
  )
}