import * as path from 'path';
import { parseInput } from '../util';

const input = parseInput(path.join(__dirname, 'input.txt'), {
  split: {
    delimiter: '\n\n',
    mapper: false,
  },
});

function main() {
  // console.log(input);
  const seeds = input[0].split(':')[1].trim().split(' ');
  const maps = input.slice(1).map((e) => e.split(':')[1].trim().split('\n'));
  return 0;
}

export default main();
