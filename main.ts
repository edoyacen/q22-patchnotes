// This entry writes the answer for "Real-Life Patch Notes: The Comedy Changelog" to the output
// directory as entry.txt, creating the directory first if it does not yet exist.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "v2.4.1: fixed a bug where mornings loaded before the brain, causing users to agree to things in writing.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');

console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
