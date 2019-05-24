import React from "react";

type HorcruxCounterProps = {
  numHorcruxes: number;
  incrementHorcruxes: Function;
};
type HorcruxCounterState = {numHorcruxes: number};

export type WithHorcruxCounterProps<T> = T &
  HorcruxCounterProps;

export function withHorcruxCounter<T>(
  Component: React.ComponentClass<
    WithHorcruxCounterProps<T>
  >
): React.ComponentClass<T> {
  return class withHorcruxCounter extends React.Component<
    T,
    HorcruxCounterState
  > {
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
