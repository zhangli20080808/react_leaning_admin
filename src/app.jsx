import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.min.css';
import scss from './index.scss';

class Child extends React.Component{
  constructor(props){
    super(props)
  }
  handleClick(e) {
   this.props.changeColor('red')
  }
  render(){
    return (
      <div>
        <h3>父组件的背景色 : {this.props.bgColor}</h3>
        <button onClick={(e)=>{this.handleClick(e)}}>改变父组件的背景色</button>
      </div>
    )
  }
}
class Father extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bgColor: 'yellow'
    }
  }
  bgColorChange(color){
    this.setState({
      bgColor: color
    })
  }
  render(){
    return (
      <div style = {{background: this.state.bgColor}}>
        <Child bgColor = {this.state.bgColor} changeColor={(color)=>this.bgColorChange(color)}/>
      </div>
    )
  }
}

ReactDOM.render(
    <Father/>,
    document.getElementById('app')
  );
