import React, { useState } from 'react';

export interface SelectProps {  
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, onSelect }) => {
  const [filter, setFilter] = useState('');

  const filteredOptions = options.filter((option) => option.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <input
        type="text"
        placeholder="Type to filter..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredOptions.map((option) => (
          <li key={option} onClick={() => onSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select; 