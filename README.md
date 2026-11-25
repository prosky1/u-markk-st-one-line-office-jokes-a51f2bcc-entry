# One-Line Office Jokes

[![make.fun](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc)
[![rank](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/prosky1/u-markk-st-one-line-office-jokes-a51f2bcc-entry/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc)
[![reward](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/prosky1/u-markk-st-one-line-office-jokes-a51f2bcc-entry/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc)

Entry for the [One-Line Office Jokes](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc) bounty on make.fun.

## The joke

> The printer only jams when the deadline is in five minutes.

One line, 59 characters. It turns on a real office detail — the printer —
and lands the laugh in the last few words.

## How it works

`main.ts` writes the joke byte-exact to `/output/entry.txt`, after checking
it is a single line of 1–199 characters with no leading or trailing
whitespace, then reads the file back to confirm it matches byte for byte.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
