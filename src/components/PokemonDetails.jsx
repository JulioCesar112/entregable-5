import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokeInfo, setPokeInfo] = useState();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    axios
      .get(URL)
      .then((res) => setPokeInfo(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(pokeInfo);
  return (
    <article className={`poke-info bg-${pokeInfo?.types[0].type.name}`}>
      <div className="return-home"><Link to='/pokedex'><i className='bx bxs-left-arrow'></i></Link></div>
      <header className="poke-header flex-center">
        <img src={pokeInfo?.sprites.other["official-artwork"].front_default} />

        <h1>{name}</h1>
        <section className="poke-info-type flex-center">
          <ul>
            {pokeInfo?.types.map((slot) => (
              <li key={slot.type.url}>{slot.type.name}</li>
            ))}
          </ul>
          <p>type</p>
        </section>
      </header>
      <footer className="poke-info-footer flex-center">
        {pokeInfo?.stats.map((stat) => (
          <div className="flex-center" key={`${stat.stat.name}${stat.base_stat}`}>
            <h4>{stat.stat.name}</h4>
                <p>{stat.base_stat}</p>
          </div>
        ))}
      </footer>
    </article>
  );
};

export default PokemonDetails;
