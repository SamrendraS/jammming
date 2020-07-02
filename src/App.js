import React from 'react';
import './App.scss';

import Header from './components/header/header.component';
import SearchBar from './components/search-bar/search-bar.component';
import SearchResults from './components/search-results/search-results.component';
import Playlist from './components/playlist/playlist.component';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    };

  }

  render() {
    return (
      <div>
        <div className="App">
          <Header />
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
                           onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName}
                      playlistTracks={this.state.playlistTracks}
                      onNameChange={this.updatePlaylistName}
                      onRemove={this.removeTrack}
                      onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;