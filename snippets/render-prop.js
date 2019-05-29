import React from "react";

export class HorcruxCounter extends React.Component {
  state = {numHorcruxes: 0};

  incrementHorcruxes = () => {
    this.setState({
      numHorcruxes: this.state.numHorcruxes + 1
    });
  };

  render() {
    return this.props.render({
      numHorcruxes: this.state.numHorcruxes,
      incrementHorcruxes: this.incrementHorcruxes
    });
  }
}
