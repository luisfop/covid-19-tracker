import React from "react";
import styles from './App.module.css';

import { fetchData } from './api/index';

import Card from './components/card/card';
import CountryPicker from './components/countryPicker/countryPicker';

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState( {data: fetchedData} );
  }

   countryHandler = async(country) => {
    const countryData = await fetchData(country);
    this.setState({data: countryData, country: country});

  }

  
  render() {
    
    return (
      <div className={ styles.container}>
          <h1 className={styles.title}>COVID - 19</h1>
          <CountryPicker handleCountry={this.countryHandler}/>
          <Card data={this.state.data}/>
      </div>
    );
  }

}

export default App;
