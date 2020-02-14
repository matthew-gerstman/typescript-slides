import * as lodash from 'lodash';

const muggle = "Dursley";
const yellingMuggle = muggle.toUpperCase();

yellingMuggle.slice(0, 10);

type Wizard = {name: string;}
const wizard: Wizard = {name: "Harry Potter"};

lodash.filter([1, 4, 5], (val) => val > 10)


const promise = new Promise((resolve, reject) => reject('foo'));
promise.catch((e: Wizard) => {
  console.log (e);
})


function isAuthError(error: any): error is AuthError {
  return error.type === "thing";
}