import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  constructor(props) {
    super(props)
    this.state = {speed: 0}
  }

  Accelator = () => {
    this.setState(({speed}) => ({speed: speed < 200 ? speed + 10 : speed}))
  }

  Breack = () => {
    this.setState(({speed}) => ({speed: speed > 0 ? speed - 10 : speed}))
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-container ">
        <h1 className="heading">Speedometer</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="speedometer-image"
          />
        </div>
        <h1 className="heading">Speedometer {speed} mph</h1>

        <p className="heading">min limit 0 mph and max linit 200 mph</p>

        <div>
          <button className="button" onClick={this.Accelator}>
            Accelator
          </button>
          <button className="button" onClick={this.Breack}>
            Breck
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
