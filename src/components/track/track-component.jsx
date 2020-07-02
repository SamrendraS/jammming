import React from 'react';

import './track-styles.scss';

class Track extends React.Component {
  addTrack = (event) => {
    this.props.onAdd(this.props.track);
  }

  removeTrack = (event) => {
    this.props.onRemove(this.props.track);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <button className="Track-action" onClick={this.removeTrack}>-</button>
    }
    return <button className="Track-action" onClick={this.addTrack}>+</button>;
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;