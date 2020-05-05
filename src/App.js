import React from "react";

import {fetchData} from './api/index';

class App extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount(){
    // console.log('Component did mount')

    const data = await fetchData();
    console.log('Data' , data)
  }
  
  render() {
    return (
      <div>
        <h1>COVID - 19</h1>
      </div>
    );
  }
}

export default App;
