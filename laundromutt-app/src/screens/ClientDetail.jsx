import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { addDog, getOneClient } from '../services/clients';

export default function FoodDetail(props) {
  const [food, setFood] = useState(null);
  const [flavorId, setFlavorId] = useState('')
  const { flavors } = props;
  // We can grab the id of the one food from the url params
  const { id } = useParams();

  // In the useEffect, we make an api call to get the one food and set it in local state
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
  
  // this is the handleChange for the select drop down
  // since this form only has one value, we do not need a variable name for the key
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
          {/* below is our for for the flavor drop down */}
          <form onSubmit={handleSubmit}>
            <select defaultValue='default' onChange={handleChange}>
              {/* we can set a default value to tell people to select a flavor*/}
              {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
              {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
              <option disabled value='default'>-- Select a Dog --</option>
              {/* now we loop over all flavors and return an <option tag for each */}
              {dogs.map(dog => (
                // we track the flavor's id as the "value" which will get added to state onChange
                // the flavor's name goes between the open and close tag which is what the user sees
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