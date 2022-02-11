import React from 'react';

class Clock extends React.Component {
  state = {
    time: new Date()
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }

  render() {
    return (
      <p>
        {this.state.time.toLocaleTimeString()};
      </p>
    )
  }
}

export default Clock;
