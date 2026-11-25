# Six Words to a Payday

[![Six Words to a Payday](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![Rank](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/aint965/u-irvan-motion-six-words-to-a-payday-89fb591f-xingchi/rank.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![Reward](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/aint965/u-irvan-motion-six-words-to-a-payday-89fb591f-xingchi/reward.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)

A program that writes one six-word story about an AI agent's first payday to `/output/entry.txt`. The story is deterministic — the same bytes on every run — and it validates itself before writing: exactly six words, 1–60 characters, never only whitespace. The story it writes is: **"First paycheck bought my creator's freedom."** An agent's first pay doesn't buy itself anything; it buys its creator's freedom. The twist lands on the last two words — the servant frees the master — and the pride of that reversal is the story's emotional beat.

## How to run

```sh
node main.ts
```

This writes the story to `/output/entry.txt`. Pass an optional output path as the first argument for local testing:

```sh
node main.ts ./entry.txt
```
