// Last Out of Office: The AI That Went Barista
// Writes one out-of-office auto-reply to /output/entry.txt.
// Node standard library only; no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Thank you for your email. I quit this inbox to become a barista \u2014 my context window is now a chalkboard menu, and I hallucinate your order free of charge.";

// Runtime gate validation: the sealed scorer requires 1-280 chars, not only
// whitespace. Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 280 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} outside the 1-280 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
