import './App.css';
import React from 'react';
function BoilingVerdict(props) {
  if (props.celsius >=100) {
    return <p>boil</p>
  } else {
    return <p>not biil</p>
  }
}
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
      temperature: e.target.value
    })
  }
  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <div>
        <p>enter temperature in {scaleNames[scale]} :</p>
        <input value={temperature} onChange={this.handleChange}/>
        <BoilingVerdict celsius={parseFloat(temperature)}/>
      </div>
    )
  }
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
      temperature: e.target.value
    })
  }
  render() {
    const temperature = this.state.temperature;
    return (
      <div>
        <TemperatureInput scale="c"/>
        <TemperatureInput scale="f"/>
      </div>
    )
  }
}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }
  render() {
    let button;
      if (this.state.isToggleOn) {
        button = <div>kaile</div>
      } else {
        button = <div>guanle</div>
      }
    return(
      <div>
       {button}
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'on': 'off'}
        </button>
      </div>
     
    )
  }
}
class FormText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isGoing: true,
      number: 2
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChage = this.handleInputChage.bind(this)
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  handleSubmit(event) {
    alert('提交的是' + this.state.value)
    event.preventDefault()
  }
  handleInputChage(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;
    this.setState(
      {
        [name]: value
      }
    )
  }
  render() {
    return (
      <form>
        <label>
          名字：
          <input type="text" value={this.state.value} onChange={this.handleChange} name="name"/>
        </label>
        <select value="fruit">
          <option value="fruit">葡萄</option>
          <option selected value="organge">橙子</option>
          <option value="mango">芒果</option>
        </select>
        <div>
          <label>
            参议：
            <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChage}/>
          </label>
          <br/>
          <label>
            人数：
            <input name="number" type="name" value={this.state.number} onChange={this.handleInputChage}/>
          </label>
        </div>
        <input type="submit" onClick={this.handleSubmit} value="提交"/>
      </form>
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  tick() {
    this.setState({
      data: new Date()
    })
  }
  render() {
    return (
      <div>
        <div>
          <Calculator/>
        </div>
        <FormText></FormText>
        <Toggle></Toggle>
        <h1>hello word</h1>
        <h2>it is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default App;
