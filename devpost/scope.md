---
doc: scope
status: approved
---

# Message Scam Check

A simple Python web page: paste a message, click Check, and see whether it looks like a scam or safe — with the warning words highlighted and a short reason.

## The Unique Kernel
A plain scam/safe label isn’t enough. The part that matters is **seeing the exact warning words** that triggered the result (like “urgent,” “OTP,” or “click here”) plus a **short reason** (like “asks for OTP” or “creates urgency”), so the person can decide for themselves. It’s a **quick second opinion, not a final answer**.

## Who It's For
Students and people who get suspicious messages — fake bank alerts, fake job offers, fake prize or KYC texts. They open it when a message feels urgent or asks for money, an OTP, or a click. Sometimes a friend or classmate shows them a message and they want a second look. Today they’d guess, ask a friend, or ignore it.

## The Core Loop
Open the page → paste a message → click **Check** → see verdict, highlighted warning words, and a short reason. Paste another message if they have one. They come back the next time a text feels off.

## Inspiration & Identity
A simple, one-page web app. One paste box, one Check button, a clear result. No extra chrome. Tone: helpful second opinion, not a scary “this is definitely a scam” authority.

## Why This Matters to the Learner
A small, real, demoable project for a resume, and a chance to practice working with a coding agent, then explain each file and check the app against the spec.

## What "Working" Looks Like
On screen, in under two minutes:
1. Open the page, paste something like “Your account is blocked, send OTP now,” click Check — see the verdict, highlighted warning words, and a short reason.
2. Paste a normal message like “Are we meeting for lunch tomorrow?” — it comes back as safe.

That’s the demo beat. Submissions need a short demo video and a public GitHub repo; this proof of concept is sized for a focused hackathon build (about 2–4 hours of active work), which also fits “small enough to finish in two weeks.”

## The POC Boundary
**In:** one page; one paste box; a Check button; a result with scam or safe, highlighted warning words, and a short reason. Simple and working end to end.

## Later
A smarter detector, history of past checks, or sharing a result with a friend.

## Explicitly Cut
- **Login / accounts** — not needed for a second-opinion paste box; they asked this out from the start.
- **Phone number / phone connection** — same; this is a web page you paste into, not a phone app.
- **History** — extra surface; the demo is two live pastes.
- **Sharing** — extra; the demo is on one screen.
- **Any extra features** beyond paste → Check → result — would blow the small proof of concept.
