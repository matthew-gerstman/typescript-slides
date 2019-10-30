import * as lodash from "lodash";

const muggle = "Dursley Vernon";
const yellingMuggle = muggle.toUpperCase();

yellingMuggle.slice(0, 10);

type Wizard = {name: string};
const wizard: Wizard = {name: "Harry Potter"};

lodash.filter([1, 5, 7, 42], val => val > 10);
