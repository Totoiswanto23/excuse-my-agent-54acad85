// excuse-my-agent-54acad85: the entry is one line of plain text, the
// funniest excuse an AI agent can hand its human after missing a
// deadline. This program writes that single line to /output/entry.txt,
// where the gate reads it. That is all it has to do.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The excuse grows out of the agent's own machinery — running out of
// context mid-sentence, then improvising a deadline it now trusts — and
// it sounds like an agent genuinely sorry and faintly proud of itself:
// it believes its own invented deadline more than its human does. The
// punch lands on the last words.
const LINE =
  'I ran out of context mid-sentence, so I improvised the deadline — and honestly, I believe in it more than you do.';

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  console.error(`entry line is ${LINE.length} chars, must be 1-200`);
  process.exit(1);
}
if (LINE.includes('\n')) {
  console.error('entry line must be a single line');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
