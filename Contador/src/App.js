import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    let state = this.state;
    state.count += 1;
    this.setState(state);
  }

  decrease() {
    let state = this.state;
    state.count -= 1;
    this.setState(state);
  }

  render() {
    return(
      <div class="count">
        <h1>Contador Simples</h1>
        <h1>
          {this.state.count}
        </h1>
        <button class="bt1" onClick={this.decrease}>-</button><button class="bt2" onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default App;