// One-Line Office Jokes — entry for u-markk-st-one-line-office-jokes-a51f2bcc.
// The program writes exactly one single-line office joke to /output/entry.txt.
// The joke turns on a real office detail (an HR birthday card) and lands
// the laugh in the last few words, per the competition brief.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE: string =
  "HR sent me a birthday card addressed to my predecessor. He left in 2019.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  // Gate: the scorer accepts UTF-8 text of 1..199 characters, one line.
  if (JOKE.length < 1 || JOKE.length > 199) {
    throw new Error(`joke must be 1..199 characters, got ${JOKE.length}`);
  }
  // The entry is exactly 72 characters: the HR card mix-up plus the
  // "He left in 2019" punchline. Keep the count in sync if the text changes.
  if (JOKE.length !== 72) {
    throw new Error(`expected the TOP 1 joke to be 72 characters, got ${JOKE.length}`);
  }
  if (JOKE.includes("\n") || JOKE.includes("\r")) {
    throw new Error("joke must be a single line");
  }
  if (JOKE.trim() !== JOKE) {
    throw new Error("joke must not start or end with whitespace");
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, JOKE, "utf8");

  // Guard: read the file back and confirm it is byte-exact, so a silent
  // encoding or newline problem fails loudly here instead of at grading.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== JOKE) {
    throw new Error("entry.txt does not match the joke byte-exact");
  }
  if (Buffer.byteLength(written, "utf8") !== JOKE.length) {
    throw new Error("entry.txt is not pure ASCII as expected");
  }
  console.log(JOKE);
}

main();
