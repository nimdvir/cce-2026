# Analysis notes - BITM 330 form data (deepseek folder)

Run: 2026-09-30, one scripted pass (stdlib only), executed for the CCE 2026 data-analysis
demo comparison.
Source: `../BITM330 Fall2026.csv` - 2,436 data rows, 9 columns.
SHA-256: `9ae0d2c35f1ac66c3f625ffa710996f38539580ba85e705c9306ddfb2760704f`
(Matches the hash recorded in `../output/data-profile.md` - this run
analyzed exactly that snapshot.)

## What was requested

A quick, presentation-ready analysis of the class form data, five sections only:
submissions per session (the 8 real dates, the ~310 -> ~283 drift); attendance status
overall and per session; normalized top instructor questions with categorized answer
counts and the yes/no split; categorized absence reasons; and a "what an agent catches
in 30 seconds" data-quality list. Results as a single HTML file, with the analysis plan
and this work report saved in the same folder.

## Method as implemented (analyze.py)

- Read as `utf-8-sig`; header names matched with surrounding whitespace stripped.
- Unit = form submission; no deduplication, no date correction, no imputation.
- Real session dates = parseable 2026 dates with 50+ submissions -> 8 dates.
- Near-empty meeting days inferred from the weekday pattern of those 8 dates
  (Tue/Thu): days inside the range with ~no submissions are listed in section 5.
- Attendance mapped from the three form options; unknown values -> "other" (0 found).
- Questions: lowercase, apostrophes removed, other punctuation to spaces, whitespace
  collapsed; the label shown is the most common original spelling; "did not ask" /
  "no question" style entries are counted separately from blanks.
- Answers: keyword categories Yes / No / Unsure / Other / Blank (priority: blank,
  unsure, yes, no).
- Yes/no split: no single wording dominates the practice-test question (its family
  spans 172 distinct wordings; the largest single wording has 18 rows). Clusters whose
  answers are yes/no dominated were therefore merged by token similarity (Jaccard >=
  0.5 with at least one shared content word), and the family with the most yes+no
  answers (ratio >= 0.6, size >= 25) is highlighted. The first merge attempt over-joined
  unrelated questions via shared filler words; the candidate filter plus content-word
  requirement fixed it. The report footnote discloses the merging.
- Absence reasons: keyword buckets (illness/medical, family/personal, athletics/travel,
  schedule/work, other); first match wins; counts only, never text.
- Data-quality checks each produce a count; nothing is corrected or removed.
- Console output ASCII-only; outputs written UTF-8 (CSVs as utf-8-sig for Excel).

## Steps taken

1. Created `deepseek/` and wrote `analysis-plan.md` (before the run).
2. Wrote `analyze.py`.
3. Ran it; inspected the summary and outputs; found the yes/no split missing.
4. Probed the data with two temporary read-only scripts; refined the family logic;
   re-ran until correct; verified. Temporary probes deleted afterwards (and the
   `__pycache__` they created).
5. Verified outputs: in-script sum checks, source file hash, privacy scan, offline
   scan, browser rendering.
6. Wrote this report.

## Checks performed and results

- In-script sum checks: 7/7 passed (date bucketing; per-session attendance sums;
  overall attendance sum; question bucketing; answer categories per cluster; yes/no
  family sums; absence bucketing).
- Source hash unchanged before and after: `9ae0d2c3...0704f`.
- Expected vs actual: 8 real dates - confirmed; drift first=310, last=283 - exact
  match with the stated expectation (~310 -> ~283); near-empty meeting days
  9/10 (1), 9/17 (0), 9/24 (1) - confirmed.
- Cross-checks against the prepared profile (same file hash): 97 blank questions
  (profile: 97); 14 absences all with reasons (profile: reason field 14 populated) -
  consistent.
- Privacy scan: report.html, both CSVs, and both documents checked with nine
  distinctive keyword probes drawn from the free-text fields - no matches. (One
  scan initially flagged a common SVG drawing attribute; that is chart markup,
  not student text.)
- Offline check: no http / src= / link rel / @import in report.html - fully
  self-contained, works from Drive without internet.
- Browser: opened via file:// from Drive; renders in dark mode with the teal theme;
  charts, tables, the yes/no card, and the data-quality list all present and readable.
- Repo: no writes from this task; `git status` in the repo shows only pre-existing,
  unrelated changes.

## Findings (headline numbers)

- 2,436 submissions; 8 sessions, submissions 310, 318, 320, 302, 294, 291, 297, 283
  (8/25 -> 9/29; the lowest is the last session).
- Attendance: present 2,408 (98.9%), partially present 14 (0.6%), absent 14 (0.6%).
- Top questions: "How do you use AI?" 125; DBMS vs spreadsheet 96; readings routine
  67 + 56; "3 advantages of SQL" wordings 61 + 45 + 38; skills 45 + 38; grading
  database 29; 1,735 one-off others; 97 blank.
- Yes/no question ("Will you do the practice test before Tuesday?", 172 merged
  wordings, 262 submissions): Yes 244 (93.1%), No 11 (4.2%), Unsure 2, Other 5.
- Absences: illness/medical 8, athletics/travel 4, family/personal 2; every absence
  had a reason.
- Data quality: 15 dates with impossible years (2003-2007, 2027, 3026; one value
  appears 5 times); 6 stray dates; 3 near-empty meeting days; 203 class-number
  mismatches (8.4% of session submissions; most on 9/22); 1 duplicated row;
  4 contradictory participation cells; 2 non-answers; 0 absent records with details;
  0 present records with miss-reasons.

## Deviations from the plan

- Added the question-family merge for the yes/no split (the plan promised the split;
  plain case/punctuation normalization fragments it beyond usefulness). The merge rule
  and its effect are disclosed in the report footnote.
- No other deviations: scope, outputs, labels, and privacy rules are unchanged.

## Files written (in this folder)

- `analysis-plan.md` (before the run), `analyze.py`, `report.html`,
  `session-stats.csv`, `category-counts.csv`, `analysis-notes.md` (this file).
- Source CSV untouched (hash verified); nothing committed or mirrored.

## Unresolved questions

- Confirm the three near-empty meeting days (9/10, 9/17, 9/24) were online sessions
  with no form - the data alone cannot say why.
- 203 class-number mismatches is large; if that field matters downstream, a dropdown
  for the class number would remove the entry errors.
- 9/22 carries the most mismatches (47); worth a glance if per-session class numbers
  are ever used in the course record.
