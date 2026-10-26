---
doc: spec
status: approved
---

# Message Scam Check — Technical Specification

## 1. Overview

Build a single-page web application that lets users paste a text message and receive a simple, rule-based assessment of whether it may be a scam.

## 2. Technology

- HTML for page structure
- CSS for styling and highlighted warning words
- JavaScript for checking messages and displaying results
- No backend, login, API key, or database required

## 3. Interface

The page must contain:
- Title: Message Scam Check
- Short instruction explaining the tool
- A large text area labelled "Paste a message"
- A Check button
- A results section beneath the button

Use calm colours, a clean layout, readable text, and mobile-friendly styling. Avoid alarming red warning screens.

## 4. Detection Rules

Use a transparent, rule-based demonstration rather than claiming to use a trained AI model.

Check for warning terms and phrases such as:
- urgent
- OTP
- blocked
- account suspended
- verify your account
- click this link
- claim your prize
- won a prize
- send money
- bank details
- password
- limited time

If one or more warning indicators are found, display "Likely scam" and a short reason based on the matching indicators.

If no indicators are found, display "Looks safe" with a note that no common warning indicators were detected. Do not guarantee that the message is genuinely safe.

## 5. Highlighting

Show the original message in the result area. Highlight matched warning words or phrases in yellow. Preserve the original message text safely; do not interpret pasted content as HTML.

## 6. Interaction

- Clicking Check with an empty or whitespace-only message displays a helpful prompt.
- Clicking Check with a message evaluates it and displays a result.
- A new check completely replaces the previous result.
- Keep the pasted message in the text area so the user can edit it.
- A message without warning indicators must still produce a result.

## 7. Privacy

Process the message locally in the browser. Do not upload or store pasted messages.

## 8. Acceptance Tests

1. A message such as "Your account is blocked, send OTP now" produces a likely-scam result.
2. Matching warning terms are highlighted in yellow.
3. A normal message such as "See you in class tomorrow" produces a looks-safe result.
4. An empty message produces a helpful prompt.
5. Checking a second message replaces the first result.
6. The page is readable on desktop and mobile.
7. The application runs by opening its HTML file in a browser.

## 9. Limitations

This is a basic rule-based proof of concept, not a trained AI scam detector. Scam messages can evade the rules, and legitimate messages can contain warning terms. Users should verify suspicious requests through official channels.
