import React from 'react'

const BucarResultado = ({resultado}) => {
  return (
  
      <option value={resultado.name} onClick={setCampo}>{resultado.name}</option>
  
  )
}

export default BucarResultado