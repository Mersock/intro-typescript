import { CsVFileReader } from './CsvFileReader';

const reader = new CsVFileReader('football.csv');
reader.read();

//enum - enumeration
enum matchResult {
  homeWin = 'H',
  awayWin = 'A',
  draw = 'D'
}

let manUnitedWins = 0;

for (const match of reader.data) {
  if (match[1] === 'Man United' && match[5] === matchResult.homeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === matchResult.awayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
