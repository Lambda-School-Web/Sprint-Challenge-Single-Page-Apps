import React from "react";

export default function CharacterCard(props) {
  const { name, gender, image, species, status, location } = props.data;

  return (
    <div>
      <img src={`${image}`} alt={name} />
      <p>{name}</p>
      <p>
        {species} - {gender}{" "}
      </p>
      <p>{status}</p>
      <p>{location.name}</p>
    </div>
  );
}
