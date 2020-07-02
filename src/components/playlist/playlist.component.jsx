import React from 'react';

import './playlist.styles.scss';

import TrackList from '../track-list/track-list.component';
import CustomButton from '../custom-button/custom-button.component';

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
            <CustomButton children='SAVE TO SPOTIFY' onClick={this.props.onSave}/>
        </div>
        );
    }
}

export default Playlist;