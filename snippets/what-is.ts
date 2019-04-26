const slytherin: string = 'slytherin';
const gryffindor: boolean = false;

function takesString(arg: string) {
  console.log(arg);
}

takesString(slytherin); // works
takesString(gryffindor); // error
