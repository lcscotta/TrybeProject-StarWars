import React, { useState, useContext } from 'react';
import ContextPlanets from '../context/ContextPlanets';

function FilterNumbers() {
  const [value, setValue] = useState(0);
  const [operator, setOperator] = useState('maior que');
  const [column, setColumn] = useState('population');
  const [columnFilter, setColumnFilter] = useState([
    'population',
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
  ]);

  const { filterByNumericValues, setFilterByNumericValues } = useContext(ContextPlanets);

  const Operators = [
    'maior que',
    'menor que',
    'igual a',
  ];

  const columnArray = [
    'population',
    'rotation_period',
    'orbital_period',
    'diameter',
    'surface_water',
  ];

  const handleClick = () => {
    const informationFilter = {
      column,
      comparison: operator,
      value,
    };
    const resultFilter = filterByNumericValues.find((filter) => filter.column === column);
    if (!resultFilter) {
      setColumnFilter(columnArray.filter((item) => item !== column));
      setFilterByNumericValues((prevState) => [...prevState, informationFilter]);
    }
  };

  return (
    <div className="filterone">
      <select
        data-testid="column-filter"
        onChange={ (event) => setColumn(event.target.value) }
      >
        {columnFilter.map((columnSelected, index) => (
          <option
            key={ index }
            value={ columnSelected }
          >
            {columnSelected}
          </option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setOperator(e.target.value) }
      >
        {
          Operators.map((operatorItem, index) => (
            <option
              key={ index }
              value={ operatorItem }
            >
              {operatorItem}
            </option>
          ))
        }
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ value }
        onChange={ (event) => setValue(event.target.value) }
      />
      <button type="button" data-testid="button-filter" onClick={ handleClick }>
        Search

      </button>
    </div>
  );
}

export default FilterNumbers;
