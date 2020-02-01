import { OutputTarget } from '../Sammary';

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
