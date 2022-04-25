import React, { useContext } from 'react';
import ContextPlanets from '../context/ContextPlanets';

function SearchPlanets() {
  const { data, setFilteredData } = useContext(ContextPlanets);

  const handleChange = ({ target }) => {
    const inputValue = target.value;
    setFilteredData(data.filter((item) => item.name.toLowerCase().includes(inputValue)));
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        placeholder="search by name"
        onChange={ handleChange }
      />
    </div>

  );
}

export default SearchPlanets;
