import * as lodash from "lodash";

const muggle = "Vernon Dursley";
const yellingMuggle = muggle.toLocaleUpperCase();
yellingMuggle.slice(0, 10);

type Wizard = {
  name: string;
};

const wizard: Wizard = {name: "harry potter"};

lodash.debounce(() => "foo", 1000);

lodash.filter([1, 3], val => val > 1);
