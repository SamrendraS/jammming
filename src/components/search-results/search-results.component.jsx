import React from 'react';

import TrackList from '../track-list/track-list.component.jsx';

import './search-results.styles.scss';

class SearchResults extends React.Component {
    render() {
      return (
        <div className="SearchResults">
          <h2>Results</h2>
          <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} />
        </div>
      );
    }
  }
  
  export default SearchResults;