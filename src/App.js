import React from 'react';
import './App.scss';

import Header from './components/header/header.component';
import SearchBar from './components/search-bar/search-bar.component';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  
  render(){
    return(
    <div className="App">
      <Header />
      <SearchBar />
    </div>
    );
  }
}

export default App;
