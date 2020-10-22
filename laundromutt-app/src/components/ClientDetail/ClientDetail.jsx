import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { addDog, getOneClient } from '../../services/clients';

export default function FoodDetail(props) {
  const [food, setFood] = useState(null);
  const [flavorId, setFlavorId] = useState('')
  const { flavors } = props;
 
  const { id } = useParams();

 
  useEffect(() => {
    const fetchClient = async () => {
      const clientItem = await getOneClient(id);
      setClient(clientItem);
    }
    fetchClient();
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const clientItem = await addDog(id, dogId); //check dogId
    setClient(clientItem);
  }
  
 
  const handleChange = (e) => {
    const { value } = e.target;
    setDogId(value);
    //check DogId
  }

  return (
    <div>
      {
        client &&
        <>
          <h3>{client.name}</h3>
          {client.dogs.map(dog => (
            <p key={dog.id}>{dog.name}</p>
          ))}
         
          <form onSubmit={handleSubmit}>
            <select defaultValue='default' onChange={handleChange}>
        
              <option disabled value='default'>-- Select a Dog --</option>
         
              {dogs.map(dog => (
            
                <option value={dog.id} key={dog.id}>{dog.name}</option>
              ))}
            </select>
            <button>add</button>
          </form>
        </>
      }
    </div>
  )
}