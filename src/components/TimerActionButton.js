import React from 'react';

class TimerActionButton extends React.Component {
render () {
  if (this.props.timerIsRunning) {
    return (
      <div
        className='ui button atached red basic button'
        onClick={this.props.onStopClick}
      >
        Stop
      </div>
    )
  } else {
    return (
      <div
        className='ui button atached green basic button'
        onClick={this.props.onStartClick}
      >
        Start
      </div>
    )
  }
}
}

export default TimerActionButton;
