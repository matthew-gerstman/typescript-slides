import React from "react";

export function withHorcruxCounter(Component) {
  return class withHorcruxCounter extends React.Component {
    displayName = `withHorcruxCounter(${Component.name})`;
    state = {numHorcruxes: 0};

    incrementHorcruxes = () => {
      this.setState({
        numHorcruxes: this.state.numHorcruxes + 1
      });
    };

    render() {
      return (
        <Component
          numHorcruxes={this.state.numHorcruxes}
          incrementHorcruxes={this.incrementHorcruxes}
          {...this.props}
        />
      );
    }
  };
}
