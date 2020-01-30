import { CsVFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { matchResult } from './MatchResult';

const csvFileReader = new CsVFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (const match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === matchResult.homeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === matchResult.awayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
