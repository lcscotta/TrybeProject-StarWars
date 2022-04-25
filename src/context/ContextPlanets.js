import PropTypes from 'prop-types';
import React, { createContext, useState, useCallback, useEffect } from 'react';
import fetchListPlanets from '../services/FetchApi';

const ContextPlanets = createContext();

export const ProviderPlanets = ({ children }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const responseApi = useCallback(async () => {
    const response = await fetchListPlanets();
    setData(response);
  }, [setData]);

  useEffect(() => {
    responseApi();
  }, [responseApi]);

  const numericFilter = useCallback(() => {
    let planets = data;
    filterByNumericValues.forEach((item) => {
      switch (item.comparison) {
      case 'maior que':
        planets = planets.filter((planet) => (
          Number(planet[item.column]) > Number(item.value)
        ));
        break;
      case 'menor que':
        planets = planets.filter((planet) => (
          Number(planet[item.column]) < Number(item.value)
        ));
        break;
      case 'igual a':
        planets = planets.filter((planet) => (
          Number(planet[item.column]) === Number(item.value)
        ));
        break;
      default:
        console.log('não foi selecionado filtro numérico');
        break;
      }
    });
    return planets;
  }, [data, filterByNumericValues]);

  useEffect(() => {
    const conditionFilter = numericFilter();
    setFilteredData(conditionFilter);
  }, [numericFilter]);

  return (
    <ContextPlanets.Provider
      value={ {
        data,
        setData,
        filteredData,
        setFilteredData,
        filterByNumericValues,
        setFilterByNumericValues,
      } }
    >
      {children}
    </ContextPlanets.Provider>
  );
};

ProviderPlanets.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
export default ContextPlanets;
