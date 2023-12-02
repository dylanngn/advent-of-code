import * as path from 'path';
import { parseInput } from '../util';

const input = parseInput(path.join(__dirname, 'input.txt'), {
  split: {
    delimiter: '\n',
    mapper: false,
  },
});

const spelledToNNum: {[key: string]: string} = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
} as any;

//regex to match spelled numbers
const spelledRgx = /one|two|three|four|five|six|seven|eight|nine|\d/g;

function main() {
  console.log(input);

  return input.reduce((acc, curr) => {
    let numbers: string[] = [];
    let match: RegExpExecArray | null;
    spelledRgx.lastIndex = 0;

    //find all numbers in the string either spelled or digit
    while ((match = spelledRgx.exec(curr)) !== null) {
      spelledRgx.lastIndex -= match[0].length - 1;
      numbers.push(match[0]);
    }

    //first digit is the first number found
    const firstNumber = numbers[0];
    const firstDigit = spelledToNNum[firstNumber] ?? firstNumber;

    //second digit is the last number found
    const lastNumber = numbers.at(-1) || firstNumber;
    const secondDigit = spelledToNNum[lastNumber] ?? lastNumber;

    //calibration value is the combination of the first and second digit
    const calibrationValue = `${firstDigit}${secondDigit}`;

    return acc + parseInt(calibrationValue, 10);
  }, 0);
}

export default main();
