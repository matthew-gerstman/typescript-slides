import React from "react";

type HorcruxCounterProps = {
  render: ({
    numHorcruxes: number,
    incrementHorcruxes: Function
  }) => JSX.Element;
};
type HorcruxCounterState = {numHorcruxes: number};

export class HorcruxCounter extends React.Component<
  HorcruxCounterProps,
  HorcruxCounterState
> {
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
