# BITM330 Fall 2026 attendance form: detailed report

Generated September 30, 2026 from `BITM330 Fall2026.csv` by `analyze.py` (Python standard library only).

Scope: submissions per session, attendance status, class questions with categorized answers, categorized absence reasons, and data-quality notes. No student free text is reproduced. The source has no name or ID columns.

## Dataset

- 2,436 rows, 9 columns, one row per form submission.
- 8 class sessions detected (dates with at least 50 rows): Aug 25 (class 1), Aug 27 (class 2), Sep 1 (class 3), Sep 3 (class 4), Sep 8 (class 5), Sep 15 (class 7), Sep 22 (class 9), Sep 29 (class 11).
- Columns: timestamp, date of class, class number, attendance status, reason for absence, seating, participation, class question, answer.

## 1. Submissions per session

Submissions went from 310 on Aug 25 to a peak of 320 on Sep 1 and 283 on Sep 29. That is -8.7% first to last and -11.6% peak to last. Average per session: 302. Class numbers 6, 8, 10 have no session of their own in the log; the file does not say why.

| Session | Class # | Submissions |
|---|---|---|
| Aug 25 | 1 | 310 |
| Aug 27 | 2 | 318 |
| Sep 1 | 3 | 320 |
| Sep 3 | 4 | 302 |
| Sep 8 | 5 | 294 |
| Sep 15 | 7 | 291 |
| Sep 22 | 9 | 297 |
| Sep 29 | 11 | 283 |

## 2. Attendance status

| Status | Rows | Share |
|---|---|---|
| Present | 2408 | 98.9% |
| Partial | 14 | 0.6% |
| Absent | 14 | 0.6% |

Per session:

| Session | Class # | Submissions | Present | Partial | Absent | % present |
|---|---|---|---|---|---|---|
| Aug 25 | 1 | 310 | 309 | 1 | 0 | 99.7% |
| Aug 27 | 2 | 318 | 312 | 1 | 5 | 98.1% |
| Sep 1 | 3 | 320 | 316 | 3 | 1 | 98.8% |
| Sep 3 | 4 | 302 | 296 | 1 | 5 | 98.0% |
| Sep 8 | 5 | 294 | 290 | 3 | 1 | 98.6% |
| Sep 15 | 7 | 291 | 287 | 3 | 1 | 98.6% |
| Sep 22 | 9 | 297 | 296 | 0 | 1 | 99.7% |
| Sep 29 | 11 | 283 | 281 | 2 | 0 | 99.3% |

Caveat: the form is completed mostly by students in the room. The absent rows are self-reports from students who filled it in anyway, so this is not a roster-based absence rate. A true rate needs the enrollment count, which is not in this file.

## 3. Class questions and categorized answers

### Aug 25 (class 1): What are you most excited about and what are you most nervous about?

- The question was typed 203 different ways that day. The most common spelling covers 5% of rows, and 27 rows left it blank.
- Answers analysed: 297. Keyword themes, multi-label: one answer can count in several, so shares do not sum to 100%.

| Category | Answers | Share of answers |
|---|---|---|
| Workload, time, balancing commitments | 64 | 22% |
| Learning new skills, data, databases | 204 | 69% |
| Labs, assignments, exams | 32 | 11% |
| Difficulty or falling behind | 43 | 14% |
| Grades | 15 | 5% |
| No category matched | 59 | 20% |

### Aug 27 (class 2): Which questions does your grading database need to answer?

- The question was typed 169 different ways that day. The most common spelling covers 9% of rows, and 16 rows left it blank.
- Answers analysed: 309. Keyword themes, multi-label: one answer can count in several, so shares do not sum to 100%.

| Category | Answers | Share of answers |
|---|---|---|
| Averages and scores | 157 | 51% |
| Attendance | 116 | 38% |
| Final or letter grade | 75 | 24% |
| Assignments due or missing | 84 | 27% |
| Weights and percentages | 57 | 18% |
| No category matched | 54 | 17% |

### Sep 1 (class 3): How do you use AI?

- The question was typed 97 different ways that day. The most common spelling covers 38% of rows, and 12 rows left it blank.
- Answers analysed: 315. Keyword themes, multi-label: one answer can count in several, so shares do not sum to 100%.

| Category | Answers | Share of answers |
|---|---|---|
| Tool named: ChatGPT | 111 | 35% |
| Tool named: Gemini | 40 | 13% |
| Tool named: Claude | 34 | 11% |
| Tool named: Copilot | 8 | 3% |
| Use: studying, explaining, practice questions | 170 | 54% |
| Use: writing, ideas, outlines | 57 | 18% |
| Use: coding or homework help | 16 | 5% |
| Says they rarely or never use AI | 13 | 4% |
| No category matched | 51 | 16% |

### Sep 3 (class 4): What skills do you need to manage information systems?

- The question was typed 134 different ways that day. The most common spelling covers 15% of rows, and 14 rows left it blank.
- Answers analysed: 294. Keyword themes, multi-label: one answer can count in several, so shares do not sum to 100%.

| Category | Answers | Share of answers |
|---|---|---|
| Technical / computing | 167 | 57% |
| Communication / people | 51 | 17% |
| Problem solving / analytical | 120 | 41% |
| Leadership / strategy | 68 | 23% |
| Organization / time management | 65 | 22% |
| Business knowledge | 44 | 15% |
| No category matched | 30 | 10% |

### Sep 8 (class 5): How are you doing the readings, when do you usually complete them, and how do you prepare for lab?

- The question was typed 142 different ways that day. The most common spelling covers 21% of rows, and 8 rows left it blank.
- Answers analysed: 291. Keyword themes, multi-label: one answer can count in several, so shares do not sum to 100%.

| Category | Answers | Share of answers |
|---|---|---|
| Reads before class | 185 | 64% |
| Reads after class | 41 | 14% |
| Takes notes | 72 | 25% |
| Follows the Let's Build walkthrough | 60 | 21% |
| Watches chapter videos | 6 | 2% |
| Mentions the textbook or chapter | 93 | 32% |
| Not keeping up yet | 30 | 10% |
| No category matched | 40 | 14% |

### Sep 15 (class 7): What does a DBMS do that a spreadsheet usually cannot enforce?

- The question was typed 120 different ways that day. The most common spelling covers 32% of rows, and 9 rows left it blank.
- Answers analysed: 288. Keyword themes, multi-label: one answer can count in several, so shares do not sum to 100%.

| Category | Answers | Share of answers |
|---|---|---|
| Integrity, constraints, rules | 127 | 44% |
| Relationships and keys | 88 | 31% |
| Multi-user access and permissions | 83 | 29% |
| No redundancy or duplicates | 59 | 20% |
| Security and controls | 35 | 12% |
| Scale and large data | 21 | 7% |
| No category matched | 53 | 18% |

### Sep 22 (class 9): 3 advantages of SQL

- The question was typed 77 different ways that day. The most common spelling covers 20% of rows, and 10 rows left it blank.
- Answers analysed: 295. Keyword themes, multi-label: one answer can count in several, so shares do not sum to 100%.

| Category | Answers | Share of answers |
|---|---|---|
| Easy to learn or read | 176 | 60% |
| Fast or efficient | 157 | 53% |
| Handles large data | 69 | 23% |
| Standardized, universal, portable | 96 | 33% |
| Integrity, security, reliability | 71 | 24% |
| Powerful queries and retrieval | 112 | 38% |
| No category matched | 24 | 8% |

### Sep 29 (class 11): Will you do the practice test before Tuesday?

- The question was typed 196 different ways that day. The most common spelling covers 6% of rows, and 0 rows left it blank.
- Answers analysed: 283. Each answer is counted once.

| Category | Answers | Share of answers |
|---|---|---|
| Yes | 253 | 89% |
| Maybe / probably | 10 | 4% |
| No | 12 | 4% |
| Other | 8 | 3% |

## 4. Absence reasons (categorized)

14 rows include a reason. The first matching keyword rule wins. The text itself is not reproduced.

| Category | Count |
|---|---|
| Own illness or medical appointment | 6 |
| Family event or family medical situation | 4 |
| Athletics travel (team game or trip) | 4 |

## 5. Data-quality notes

| Issue | Rows | Detail |
|---|---|---|
| Class number disagrees with the date | 203 | Rows where the class number typed does not match the number most students gave for that date. |
| Impossible or off-schedule dates | 21 | Dates that are not one of the 8 class sessions, with years from 2003 to 3026. |
| Timestamp date differs from Date of Class | 39 | The form was submitted on a different day than the class date entered: late submissions plus the date typos above. |
| Spelling variants of the class question | 1144 | Distinct spellings for 8 real questions. Within one session the same question was typed 77 to 203 different ways. |
| Blank question or blank answer | 142 | 97 rows with no question and 45 with no answer. |
| Spreadsheet formula artifacts (#NAME?) | 4 | Answers replaced by a spreadsheet error value, which usually happens when text starts with = or -. The original text is lost. |
| Schema drift: seating and participation columns | 288 | These columns are filled almost only on Sep 29 (283 of 288 rows), so they describe one session, not the term. |
| Exact duplicate submissions | 1 | Same timestamp, question, and answer submitted more than once. |

Spelling variants of the class question, per session:

| Session | Distinct spellings | Most common spelling covers |
|---|---|---|
| Aug 25 | 203 | 5% |
| Aug 27 | 169 | 9% |
| Sep 1 | 97 | 38% |
| Sep 3 | 134 | 15% |
| Sep 8 | 142 | 21% |
| Sep 15 | 120 | 32% |
| Sep 22 | 77 | 20% |
| Sep 29 | 196 | 6% |

Off-schedule dates found: 4/1/2003, 12/20/2004, 1/17/2005, 4/26/2005, 6/30/2005, 8/25/2005, 6/15/2006, 9/16/2006, 9/25/2007, 8/9/2026, 8/15/2026, 8/22/2026, 9/4/2026, 9/10/2026, 9/24/2026, 9/1/2027, 9/28/3026.

Suggested form fixes: make Date of Class and Class number dropdowns or pre-filled values, supply the class question from the instructor side instead of asking students to retype it, and check how answers that start with = or - survive the export to CSV.

## Method and limits

- A class session is any date with at least 50 rows. Every other date is treated as a typo.
- The question shown for a session is its most common spelling after lowercasing and removing punctuation and extra spaces.
- Answer themes are case-insensitive keyword patterns listed in `analyze.py`. They are coarse by design: a keyword match shows a theme was mentioned, not what the student meant. They were not hand-validated against a coded sample.
- Absence categories use first-match rules in the order family, athletics, medical.
- The HTML page and this report are written from the same computed values in one run.
