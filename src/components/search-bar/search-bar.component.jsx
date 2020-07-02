import React from 'react';

import CustomButton from '../custom-button/custom-button.component'

import './search-bar.styles.scss';

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          term: ''
        };
    }

    render() {
        return (
          <div className="SearchBar">
            <input placeholder="Enter A Song, Album or Artist" onChange={this.handleTermChange} />
            {/* <button className="SearchButton" onClick={this.search}>SEARCH</button> */}
            <CustomButton children='SEARCH'/>
          </div>
        );
      }    
}

export default SearchBar;