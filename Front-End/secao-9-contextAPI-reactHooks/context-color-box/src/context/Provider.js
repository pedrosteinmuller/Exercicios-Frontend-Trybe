import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorsContext from './ColorsContext';

class Provider extends Component {
    constructor(props) {
    super(props);
    this.state = {
      colors: ['blue', 'red', 'yellow'],
      colorIndex: 0,
    };
    this.clickNextColor = this.clickNextColor.bind(this);
  }

  clickNextColor() {
    const { colorIndex, colors } = this.state;
    const lastIndex = colors.length - 1;
    colorIndex < lastIndex ? this.setState((prevState) => ({ colorIndex: prevState.colorIndex + 1 })) 
      : this.setState({ colorIndex: 0 });
    }
  
  render() {
    const { colors, colorIndex } = this.state;
    const context = {
      colors,
      colorIndex,
      clickNextColor: this.clickNextColor,
    };
    const { children } = this.props;
    return (
      <ColorsContext.Provider value={ context }>
        {children}
      </ColorsContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.object.isRequired,
};
export default Provider;