import { dateStringToDate } from './utils';
import { matchResult } from './MatchResult';
import { MatchData } from './MatchData';
import { CsVFileReader } from './CsvFileReader';
interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsVFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as matchResult, // 'H','A','D',
          row[6]
        ];
      }
    );
  }
}
