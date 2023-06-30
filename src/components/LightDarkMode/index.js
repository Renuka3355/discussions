import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    mode: 'Light Mode',
    name: 'container1',
  }

  onChangeMode = () => {
    this.setState(prevState =>
      prevState.mode === 'Light Mode'
        ? {mode: 'Dark Mode', name: 'container1'}
        : {mode: 'Light Mode', name: 'container2'},
    )
  }

  render() {
    const {mode, name} = this.state

    return (
      <div>
        <div className={name}>
          <h1 className="header">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onChangeMode}>
            {mode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
