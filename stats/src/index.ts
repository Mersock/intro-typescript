import { CsVFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { matchResult } from './MatchResult';

const csvFileReader = new CsVFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(`Man United won ${} games`);
