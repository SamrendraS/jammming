import React from 'react';

import './playlist.styles.scss';

// import TrackList from '../track-list/';

class Playlist extends React.Component {
    handleNameChange = (event) => {
        this.props.onNameChange(event.target.value);
    }

    render() {
        return (
        <div className="Playlist">
            <input onChange={this.handleNameChange} defaultValue={'New Playlist'} />
            <TrackList tracks={this.props.playlistTracks}
                    isRemoval={true}
                    onRemove={this.props.onRemove} />
            <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
        </div>
        );
    }
}

export default Playlist;