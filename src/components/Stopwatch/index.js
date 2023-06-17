// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isStart: false, timeInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.TimeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.TimeInterval)
    this.setState({isStart: false, timeInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.TimeInterval)
    this.setState({isStart: false})
  }

  updateTime = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  onStartTimer = () => {
    this.TimeInterval = setInterval(this.updateTime, 1000)
    this.setState({isStart: true})
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state

    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isStart} = this.state
    const timer = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stop-watch">
          <div className="timer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              alt="stopwatch"
              className="timer-logo"
            />
            <p className="timer-name">Timer</p>
          </div>
          <h1 className="elapsed-time">{timer}</h1>
          <div className="button-container">
            <button
              type="button"
              className="button1"
              onClick={this.onStartTimer}
              disabled={isStart}
            >
              Start
            </button>
            <button
              type="button"
              className="button2"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="button3"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
