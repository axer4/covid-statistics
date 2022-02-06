import styles from './App.module.css'
import React, { useState,useEffect } from 'react';
import Header from './components/header/Header';
import CountriesList from './components/countriesList/CountriesList';
import axios from 'axios';
function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
    async function getData() {
        await axios.get("https://api.covid19api.com/summary")
            .then(response => setData(response.data.Countries))
        .catch(err => console.log(err))
  }
  useEffect(() => {
    getData();
  },[])
    const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }
  const filteredData = data.filter(country => {
        return country.Country.toLowerCase().includes(filter.toLowerCase());
      })
  return (
    <div className={styles.container}>
      <Header filter={filter}
              handleFilterChange={handleFilterChange}
      />
      <CountriesList 
        data={filteredData}
      />
    </div>
  );
}

export default App;
