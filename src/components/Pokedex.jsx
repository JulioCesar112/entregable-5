import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokedexHeader from "./PokedexHeader";
import PokemonCard from "./PokemonCard";
import SearchInput from "./SearchInput";
import SelectType from "./SelectType";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState();
  const [pokeSearch, setPokeSearch] = useState()
  const [optionType, setOptionType] = useState('All')

  
  useEffect(() => {
    if (optionType !== 'All') {
      const  URL = `https://pokeapi.co/api/v2/type/${optionType}/`;
      axios.get(URL)
      .then(res => {
        const arr = res.data.pokemon.map(e => e.pokemon)
        setPokemons({results: arr})
      })
      .catch(err => console.log(err));

      }else if(pokeSearch){
        
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
        const obj = {
          results:[{url}]
        }
        setPokemons(obj)

      }else{
      const URL = "https://pokeapi.co/api/v2/pokemon";
      axios.get(URL)
      .then(res => setPokemons(res.data))
      .catch(err => console.log(err));
    }
    
  }, [pokeSearch,optionType]);

  const nameTrainer = useSelector(state => state.nameTrainer)
  return (
    <div>
      <div>
        <PokedexHeader/>
      </div>
        <h2 className="pokedex-welcome">Welcome <span>{nameTrainer}</span>, catch them all </h2>
        <SelectType setPokeSearch={setPokeSearch} setOptionType={setOptionType} optionType={optionType}/>
      <div>
        <SearchInput setPokeSearch={setPokeSearch} setOptionType={setOptionType}/>
      </div>
      <div className="card-container">
        {
          pokemons?.results.map(pokemon => (
            <PokemonCard
            key={pokemon.url}
            url={pokemon.url}
            />
          ))
        }
      </div>
    </div>
    
  ) 
}

export default Pokedex;
