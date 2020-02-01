import { Analyzer } from '../Sammary';
import { MatchData } from '../MatchData';
import { matchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (const match of matches) {
      if (match[1] === 'Man United' && match[5] === matchResult.homeWin) {
        wins++;
      } else if (
        match[2] === 'Man United' &&
        match[5] === matchResult.awayWin
      ) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games`;
  }
}
