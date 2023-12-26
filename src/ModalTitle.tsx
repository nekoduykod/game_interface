import React from 'react';

interface ModalTitleProps {
  onCancel: () => void;
  onSave: () => void;
  onReplace: () => void;
}

const ModalTitle: React.FC<ModalTitleProps> = ({ onCancel, onSave, onReplace }) => {
  return (
    <header className="modal-header">
      <h2 className="modal-title">Your Pokémon Team</h2>
      <div className="flex space-x-2">
        <button className="modal-button" onClick={onReplace}>
          Replace
        </button>
        <button className="modal-button" onClick={onSave}>
          Save
        </button>
        <button className="modal-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </header>
  );
};

export default ModalTitle;