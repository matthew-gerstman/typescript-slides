import * as React from "react";

type SlytherinProps = {
  name: string;
  age: number;
};
const Slytherin: React.FunctionComponent<SlytherinProps> = ({name, age}) => (
  <>
    <div>name: {name}</div>
    <div>age: {age}</div>
  </>
);

const AllSlytherins: React.SFC<{}> = () => (
  <>
    <Slytherin name="Taylor Swift" age={29} />
    <Slytherin name="Lin Manuel Miranda" age={39} />
    <Slytherin name="Merlin" age={500} />
  </>
);
