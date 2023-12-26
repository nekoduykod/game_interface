import { useState } from 'react';
import InputForm from './InputForm';
import PokemonTeamModal from './PokemonTeamModal';

type MyFormValues = {
  firstname: string;
  lastName: string;
  pokemon: string;
};

type Pokemon = MyFormValues & {
  name: string;
  spriteUrl: string;
};

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([]);

  const handlePokemonSelect = (pokemon: MyFormValues) => {
    const newPokemon: Pokemon = { ...pokemon, name: pokemon.firstname + ' ' + pokemon.lastName, spriteUrl: 'default-url' };
    setSelectedPokemon((prevSelected) => [...prevSelected, newPokemon]);
  };
  
  const handleSubmit = (data: MyFormValues) => {
    console.log('ForQm submitted with data:', data);
    const newPokemon: Pokemon = { ...data, name: data.firstname + ' ' + data.lastName, spriteUrl: 'default-url' };
    setSelectedPokemon((prevSelected) => [...prevSelected, newPokemon]);
  };
   
  const handleSaveTeam = () => {
    // do later
  };

  const handleReplaceTeam = () => {
    // do later
  };

  const handleCloseModal = () => {
    setSelectedPokemon([]);
  };

  return (
    <div>
      {/* Something wrong with submission of selected pokemons */}
      <InputForm onSubmit={handleSubmit} onPokemonSelect={handlePokemonSelect} />

      {/* Display selected Pokemon */}
      <div>
        <h2>Selected Pokemon:</h2>
        <ul>
        {selectedPokemon.map((pokemon, index) => (
          <li key={index}>
            {pokemon.pokemon} - <img src={pokemon.spriteUrl} alt={pokemon.pokemon} />
          </li>
        ))}
        </ul>
      </div>

      {/* PokemonTeamModal */}
      {selectedPokemon.length > 0 && (
        <PokemonTeamModal
          selectedPokemon={selectedPokemon}
          onClose={handleCloseModal}
          onSave={handleSaveTeam}
          onReplace={handleReplaceTeam}
        />
      )}
    </div>
  );
}

export default App;