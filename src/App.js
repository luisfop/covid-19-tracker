import React from "react";
import styles from './App.module.css';

import { fetchData } from './api/index';

import Card from './components/card/card';
import CountryPicker from './components/countryPicker/countryPicker';

class App extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    console.log('fetchedData' , fetchedData)
    this.setState( {data: fetchedData} );
    console.log('data state =>', this.state.data)
  }

   countryHandler = async(country) => {
    console.log('This is the countryHandler function activated');
  }

  
  render() {
    
    return (
      <div className={ styles.container}>
          <h1 className={styles.title}>COVID - 19</h1>
          <Card data={this.state.data}/>
          <CountryPicker handleCountry={this.countryHandler}/>
      </div>
    );
  }
}

export default App;
