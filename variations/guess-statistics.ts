// Variables with unclear context.
export function printGuessStatistics(candidate: string, count: number): string {
  return count === 0 ?
    `There are no ${candidate}s`
    : count == 1 ? `There is 1 ${candidate}`
      : `There are ${count} ${candidate}s`;
}
