import * as React from 'react';

type SlytherinProps = {
  name: string;
  age: number;  
  points: number;
};
const Slytherin: React.FunctionComponent<SlytherinProps> = ({name, age, points}) => (
  <>
    <div>name: {name}</div>
    <div>age: {age}</div>
    <div>points: {points}</div>
  </>
);

const AllSlytherins: React.SFC<{}> = () => (
  <>
    <Slytherin name="Taylor Swift" age={29} points={50} />
    <Slytherin name="Lin Manuel" age={39} points={150} />
    <Slytherin name="Merlin" age={500} points={200} />
  </>
);
