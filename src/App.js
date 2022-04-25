import React from 'react';
import './App.css';
import Table from './components/Table';
import { ProviderPlanets } from './context/ContextPlanets';
import SearchPlanets from './components/SearchPlanets';
import FilterNumbers from './components/FilterNumbers';

function App() {
  return (
    <div className="App">
      <ProviderPlanets>
        <h2 className="starwars">Star Wars Planets</h2>
        <div className="headTable">
          <SearchPlanets />
          <FilterNumbers />
        </div>
        <Table />
      </ProviderPlanets>
    </div>

  );
}
export default App;
