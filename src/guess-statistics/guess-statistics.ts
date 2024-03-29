// Variables with unclear context.
export function printGuessStatistics(candidate: string, count: number): string {
  let number: string;
  let verb: string;
  let pluralModifier: string;
  if (count === 0) {
    number = "no";
    verb = "are";
    pluralModifier = "s";
  } else if (count === 1) {
    number = "1";
    verb = "is";
    pluralModifier = "";
  } else {
    number = count.toString();
    verb = "are";
    pluralModifier = "s";
  }
  const guessMessage = `There ${verb} ${number} ${candidate}${pluralModifier}`;
  return guessMessage;
}
