import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalTitle from './ModalTitle';

interface Pokemon {
  pokemon: string;
  spriteUrl: string;
}

interface PokemonTeamModalProps {
  selectedPokemon: Pokemon[];
  onClose: () => void;
  onSave: () => void;
  onReplace: () => void;
}

const PokemonTeamModal: React.FC<PokemonTeamModalProps> = ({ selectedPokemon, onClose, onSave, onReplace }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  const isDataValid = selectedPokemon.every((pokemon) => !!pokemon.pokemon && !!pokemon.spriteUrl);

  const isTeamValid = selectedPokemon.length === 4;

  const handleSave = () => {
    if (isDataValid && isTeamValid) {
      onSave();
      handleCloseModal();
    } else {
      if (!isDataValid) {
        console.error('Invalid data. Please fill in the required information.');
      }

      if (!isTeamValid) {
        console.error('Invalid team. Please select exactly 4 Pokemon.');
      }
    }
  };

  const handleReplace = () => {
    if (isDataValid && isTeamValid) {
      onReplace();
      handleCloseModal();
    } else {
      if (!isDataValid) {
        console.error('Invalid data. Please fill in the required information.');
      }

      if (!isTeamValid) {
        console.error('Invalid team. Please select exactly 4 Pokemon.');
      }
    }
  };

  return (
    <Modal
      isOpen={isModalOpen && isDataValid && isTeamValid}
      onRequestClose={handleCloseModal}
      contentLabel="Selected Pokémon Team"
      className="modal-container"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <ModalTitle onCancel={handleCloseModal} onSave={handleSave} onReplace={handleReplace} />

        <main className="modal-body">
          <div className="pokemon-grid">
            {selectedPokemon.map((pokemon, index) => (
              <div key={index} className="pokemon-card">
                <img src={pokemon.spriteUrl} alt={pokemon.pokemon} className="pokemon-sprite" />
                <h3 className="pokemon-name">{pokemon.pokemon}</h3>
              </div>
            ))}
          </div>
        </main>
      </div>
    </Modal>
  );
};

export default PokemonTeamModal;