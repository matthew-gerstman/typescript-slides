export type Trio = 'HarryPotter' | 'RonWeasley' | 'HermioneGranger';
function returnsDifferent(trio: 'HarryPotter'): number;
function returnsDifferent(trio: 'RonWeasley'): boolean;
function returnsDifferent(trio: 'HermioneGranger'): object;
function returnsDifferent(trio: Trio): number | boolean | object {
  if (trio === 'HarryPotter') {
    return 0;
  }

  if (trio === 'RonWeasley') {
    return true;
  }

  if (trio === 'HermioneGranger') {
    return {};
  }
}

const harry = returnsDifferent('HarryPotter');
const ron = returnsDifferent('RonWeasley');
const hermione = returnsDifferent('HermioneGranger');
