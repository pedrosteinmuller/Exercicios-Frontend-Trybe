import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);

    this.state = {
      clickNumberBtn1: 0,
      clickNumberBtn2: 0,
      clickNumberBtn3: 0,
    };
  }
  handleButtonOne() {
    console.log('Clicou no botão 1!');
    this.setState((previousState) => ({
      clickNumberBtn1: previousState.clickNumberBtn1 + 1,
    }), () => {
      console.log(`Botão 1 ${this.getCollor(this.state.clickNumberBtn1)}`);
    });
  }

  handleButtonTwo() {
    console.log('Clicou no botão 2!');
    this.setState((previousState) => ({
      clickNumberBtn2: previousState.clickNumberBtn2 + 1,
    }), () => {
      console.log(`Botão 2 ${this.getCollor(this.state.clickNumberBtn2)}`)
    });
  }

  handleButtonThree() {
    console.log('Clicou no botão 3!');
    this.setState((previousState) => ({
      clickNumberBtn3: previousState.clickNumberBtn3 + 1,
    }), () => {
      console.log(`Botão 3 ${this.getCollor(this.state.clickNumberBtn3)}`)
    });
  }

  getCollor(number) {
    return number % 2 === 0 ? 'green' : 'orange';
  }

  render() {
    // const { numeroDeCliques } = this.state;
    return (
      <div>
        <button
          onClick={ this.handleButtonOne }
          style={{ backgroundColor: this.getCollor(this.state.clickNumberBtn1) }}
        >Botão 1
        </button>
        <button 
          onClick={ this.handleButtonTwo }
          style={{ backgroundColor: this.getCollor(this.state.clickNumberBtn2) }}
        >Botão 2
        </button>
        <button 
          onClick={ this.handleButtonThree }
          style={{ backgroundColor: this.getCollor(this.state.clickNumberBtn3) }}
        >Botão 3
        </button>
      </div>
    );
  }
}

export default App;
