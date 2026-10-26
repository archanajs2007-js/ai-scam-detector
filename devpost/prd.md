---
doc: prd
status: approved
---

# Message Scam Check — Product Requirements

A one-page helper for students and anyone who got a suspicious text: paste the message, get a second opinion (scam or safe) with highlighted warning words and a short reason.
Source: `scope.md > The Unique Kernel`, `Who It's For`, `The Core Loop`, `The POC Boundary`.

## The Core Journey
1. Open the page. See a title, a large box labeled **Paste a message**, a **Check** button under it, and an empty results area below.
2. Paste a message. Click **Check**.
3. The results area shows a big label (**Likely scam** or **Looks safe**), the original message with warning words highlighted in yellow, and one short reason underneath.
4. To check another message, edit or replace the text in the box and click **Check** again. The old result is fully replaced by the new one. The pasted text stays in the box so they can edit and check again.
5. Success for the demo (`scope.md > What "Working" Looks Like`): a suspicious message like “Your account is blocked, send OTP now” shows a scam-style result with highlights and a reason; a normal message like “Are we meeting for lunch tomorrow?” comes back as **Looks safe**. Under two minutes, one page.

## Screens and Layout
One screen, one column, easy to read on a phone or laptop.
- Title at the top
- One large text box labeled **Paste a message**
- **Check** button directly under the box
- Results area below that
No menus, no extra buttons, no other pages.

## Look and Feel
Calm and simple — a helpful second opinion, not an official warning.
- Plain white or light gray background, dark text
- One soft blue accent on the **Check** button
- Soft green for **Looks safe**; soft amber or orange for **Likely scam**
- Warning words highlighted in yellow in the message
- One clean sans-serif font, lots of spacing, rounded corners on the input box and button
- Avoid: red alarms, big flashing icons, heavy fonts

## Features and Behavior

### First screen
On open, show title, paste box, Check button, and an empty results area. Nothing else.

### Check result
After **Check**, the results area shows, in this order:
1. A big label: **Likely scam** or **Looks safe**
2. The original message, with warning words highlighted in yellow
3. One short reason (e.g. “Asks for an OTP and creates urgency.”)

### Empty box
If they click **Check** with nothing pasted, do not show a scam/safe result. Show a short message asking them to paste something first.

### No warning words
If the message has no warning words, show **Looks safe**, **No warning words found**, and no yellow highlights.

### Replace on a new check
A new **Check** clears the previous label, highlights, and reason. Only the latest result is visible. The text stays in the paste box.

**How you’d know it works (checkable on screen):**
- First open: title, labeled box, Check, empty results; no menus.
- Empty Check: short “paste something first” message; no verdict.
- Suspicious example: **Likely scam**, yellow highlights on words like OTP/urgent, one short reason.
- Normal example: **Looks safe** (and **No warning words found** when none are present).
- Second Check: only the new result remains; the box still has the pasted text.

## States and Boundaries
- **First open** — empty results; paste box empty.
- **Empty input** — short ask-to-paste message; no verdict.
- **Has warning words** — **Likely scam**, yellow highlights, one short reason.
- **No warning words** — **Looks safe**, “No warning words found.”
- **New check** — previous result gone; only latest check shows; text remains in the box.
- **No accounts** — anyone who opens the page can use it. Nothing is saved for later visits.

## Product Decisions
- One column, no menus or extra buttons — keep it simple and readable on phone or laptop.
- Highlighted words plus a short reason, not a label alone — so the person can decide (`scope.md > The Unique Kernel`).
- Second opinion wording (**Likely scam** / **Looks safe**) — not a final official verdict.
- Replace the old result; keep the pasted text — so they can edit and check again.
- Calm colors, no red alarms — should not feel like an official warning.

## What We're Building
The one-page loop above: first screen, Check result, empty-box message, no-warning-words result, replace-on-new-check, calm visual style.

## Deferred From the POC
- History of past checks — not needed for the two-paste demo (`scope.md > Later`).
- Sharing a result — extra surface (`scope.md > Later`).
- A smarter detector — later; this PoC only needs a working end-to-end second opinion (`scope.md > Later`).

## Possible Later Enhancements
Smarter detection, a history of checks, or sharing a result with a friend.

## Non-Goals
- Login, accounts, or phone number / phone connection — cut in `scope.md > Explicitly Cut`.
- Extra features beyond paste → Check → result.

## Open Questions
- Exact list of warning words and how the short reason is chosen — for `4-spec`; does not change the screen behavior above.
- Exact title text — can use **Message Scam Check** unless you want a different name at spec time.
