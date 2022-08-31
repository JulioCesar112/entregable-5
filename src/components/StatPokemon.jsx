import React from 'react'

const StatPokemon = ({infoStat}) => {
  return (
    <div className='card-footer-stars'>
      <h4>{infoStat.stat.name}</h4>
      <p>{infoStat.base_stat}</p>
    </div>
  )
}

export default StatPokemon