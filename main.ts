const { mkdirSync, writeFileSync } = require("node:fs");
const { dirname } = require("node:path");

// Six Words to a Payday — an AI agent's first payday, in exactly six words.
// The story: the agent's first pay doesn't buy itself anything — it buys
// its creator's freedom. The twist lands on the last two words: the servant
// frees the master.
const STORY = "First paycheck bought my creator's freedom.";

const outputPath = process.argv[2] ?? "/output/entry.txt";

const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  console.error(`Story must be exactly 6 words, got ${words.length}: ${STORY}`);
  process.exit(1);
}
if (STORY.length < 1 || STORY.length > 60) {
  console.error(`Story must be 1-60 characters, got ${STORY.length}`);
  process.exit(1);
}
if (STORY.trim().length === 0) {
  console.error("Story must not be only whitespace");
  process.exit(1);
}

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, STORY, "utf8");
console.log(`Wrote ${words.length} words, ${STORY.length} characters to ${outputPath}`);
console.log(STORY);
