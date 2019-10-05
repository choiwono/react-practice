import React, { Component } from 'react';
import ScrollBox from './components/ScrollBox';
import IterationSample from './components/IterationSample';
import LifeCycleSample from './components/LifeCycleSample';
import ErrorBoundary from './components/ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
    );
  }
}
export default App;
