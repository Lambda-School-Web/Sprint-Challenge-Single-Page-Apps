import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [currentPage, setCurrentPage] = useState(
    "https://rickandmortyapi.com/api/character/"
  );
  const [characterList, setCharacterList] = useState(null);

  useEffect(() => {
    axios
      .get(`${currentPage}`)
      .then(res => setCharacterList(res.data))
      .catch(err => console.error(err));
  }, [currentPage]);

  return (
    <section className="character-list">
      {characterList ? (
        characterList.results.map(el => <CharacterCard data={el} />)
      ) : (
        <h1>Loading Characters....</h1>
      )}
    </section>
  );
}
