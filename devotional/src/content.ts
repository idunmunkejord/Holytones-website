// The devotionals in reading order: the first file is Day 1, the next Day 2, and so on.
// To add one, put a new numbered file in /content and add it to the end of this list. Never
// reorder or remove entries: readers' progress is stored as a day number.
//
// Each file starts with "# Title" (the email's subject and heading). Blank lines separate
// paragraphs; a paragraph starting with "> " is shown as a quote.

import day001 from "../content/001.md";
import day002 from "../content/002.md";
import day003 from "../content/003.md";

export const devotionals: string[] = [day001, day002, day003];
