# Radar Candidate Insights Prototype

A lightweight React prototype exploring whether recent, role-specific candidate recruiting information could reduce the need for internship seekers to leave Early Career Radar and piece together recruiting-process information across external sites.

## Prototype scope

This intentionally tests the **information value**, not a full community system. It adds one candidate-reported recruiting-process section to a standalone Ramp Software Engineering Intern 2027 job-detail mockup.

The section includes:
- reported recruiting stages
- OA/interview format and topics
- response-timing context
- recruiting-cycle recency and trust language

## Deliberately out of scope

No user submissions, profiles, voting, comments, moderation, notifications, scraping, AI summaries, verification pipeline, backend API, or multi-company database.

## Why job detail?

The Applications tracker was considered because it is closer to the moment an OA/interview arrives. It was rejected for the MVP because it introduces another assumption: that users naturally return to the tracker at that moment. Job Detail lets the prototype isolate the core question: is this information useful when available?

## Run locally

```bash
npm install
npm run dev
```

## Important

Candidate-process copy in this prototype is seeded example content for product exploration and should not be treated as an official or verified description of Ramp's current recruiting process.
