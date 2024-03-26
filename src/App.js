import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/header';
import SearchField from './components/searchField';

export default function App() {
  let [pokemonTypes, setPokemonTypes] = useState([null]);

  const handleChoosedType = () => {
    axios.get("https://pokeapi.co/api/v2/type/").then((data)=>{
        setCards(data.data)
        setFilteredCards(data.data)
    })
  }

  useEffect(() => {
    if (pokemonTypes > 0) {
      handleChoosedType()
    } else if (pokemonTypes.length === 0) {
        axios.get("https://pokeapi.co/api/v2/type/").then((data)=>{
            setPokemonTypes(data.data)
        })
    }
}, [pokemonTypes])

  return (
    <div className="App">
      <Header />

      <SearchField />

      
    </div>
  );
}