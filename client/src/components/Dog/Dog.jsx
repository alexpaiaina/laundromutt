import React, { useState } from "react";
import { destroyDog } from "../../services/dogs";
import styled from "styled-components";
import "./Dog.css";

const DogImgDiv = styled.div`
  background-image: url(${(props) => props.photo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 136px;
  width: 168px;
`;

const Dog = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="each-dog">
      <div
        className="dog-onhover-container"
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="dog-imgdiv">
          {/* <DogPhotoDiv className="dog-photo" photo={props.photo}>
            {isHovered && (
              <div className="edit-delete-buttons">
                <button onClick={() => {
                  props.setToggleEdit(true)
                  props.setDogEditId(props._id)
                }}>Edit</button>
                <button onClick={() => {
                  destroyDog(props._id)
                  window.location.reload(false);
                }}>Delete</button>
              </div>
            )}
          </DogPhotoDiv> */}
        </div>
        <div className="dog-each-name">{props.dog_name}</div>
        <div className="dog-each-breed">{`$${props.breed}`}</div>
        <div className="dog-each-washes">{`$${props.washes}`}</div>
      </div>
    </div>
  );
};

export default Dog;