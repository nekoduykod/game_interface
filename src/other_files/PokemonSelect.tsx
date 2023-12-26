// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// type Pokemon = {
//   name: string;
// };

// const PokemonSelect = () => {
//   const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
//   const [searchTerm, setSearchTerm] = useState('');
  
//   useEffect(() => {
//     axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
//       .then(response => {
//         setPokemonData(response.data.results);
//       })
//       .catch(error => {
//         console.error('There was an error!', error);
//       });
//   }, []);
  
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   const results = !searchTerm
//     ? pokemonData
//     : pokemonData.filter(pokemon =>
//         pokemon.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
//       );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <select>
//         {results.map((pokemon, index) => (
//           <option key={index} value={pokemon.name}>
//             {pokemon.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default PokemonSelect;
