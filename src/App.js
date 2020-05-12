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
    // console.log('fetchedData' , fetchedData)
    this.setState( {data: fetchedData} );
    // console.log('data state =>', this.state.data)
  }

   countryHandler = async(country) => {
    // fetch the data

    console.log('This is the countryHandler function activated ->' , country);

    // set the state
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
