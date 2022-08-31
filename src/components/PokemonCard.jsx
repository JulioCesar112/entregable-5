import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StatPokemon from "./StatPokemon";

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState();

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);


  const handleClik = () => navigate(`/pokedex/${pokemon.name}`)
  return (
    <article onClick={handleClik} className={`card bg-${pokemon?.types[0].type.name}`}>
      <header className="card-header">
        <img
          src={pokemon?.sprites.other["official-artwork"]["front_default"]}
        />
      </header>
      <section className="card-seccion">
        <h2>{pokemon?.name}</h2>
        <ul>
          {pokemon?.types.map((slot) => (
            <li key={slot.type.url}>{slot.type.name}</li>
          ))}
        </ul>
        <p>Type</p>
      </section>
      <footer className="card-footer">
          {
            pokemon?.stats.map(stat => (
              <StatPokemon
              key={`${stat.stat.name}${stat.base_stat}`}
              infoStat={stat}
              />
            ))
          }
      </footer>
    </article>
  );
};

export default PokemonCard;
