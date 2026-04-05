---
name: dogfood
description: "Test the app like a critical dogfooder. Use when asked to dogfood, test the app, play the app, review UI quality, or give critical feedback on UX and fun-factor. Launches the dev server, opens the built-in browser, interacts with the live app, and produces a structured critical report covering UX friction, bugs, delight, and top recommendations."
argument-hint: "optional focus area (e.g. 'mobile', 'win flow', 'onboarding')"
---

# Dogfooding Skill

Play the running app as a critical, skeptical first-time user and produce a structured report.

## When to Use
- User asks to dogfood, test, or play the app
- User wants critical UX/fun feedback
- Verifying a feature end-to-end after implementation
- Checking for regressions after a refactor

## Procedure

### 1. Ensure the App is Running
- Check if a dev server is already running (look for open browser pages or active terminals)
- If not running, start it: `npm run dev`
- Open the app in the browser: `http://localhost:5173/`

### 2. First Impressions (Start Screen)
- Screenshot the landing/start screen
- Evaluate: Is the purpose immediately clear? Is the call-to-action obvious? Does the visual design feel polished or generic?

### 3. Play Through Core Flow
Interact with the app as a real user would:
- Complete the primary happy path from start to finish
- Mark/interact with multiple elements
- Trigger the win/completion state if one exists
- Test dismissing modals or post-completion actions

Take screenshots at key moments: start, mid-interaction, win/completion state.

### 4. Test Edge Cases
- Toggle/undo an action (e.g., un-mark a square)
- Navigate away mid-flow and return (e.g., Back → Start Game)
- Check persistence: does the app survive a page refresh with state intact?

### 5. Evaluate Against Fun & UX Criteria
Score each dimension critically — be specific, not vague:

| Dimension | Questions to ask |
|---|---|
| **Clarity** | Is the goal obvious without reading instructions? |
| **Feedback** | Does every action give clear, satisfying feedback? |
| **Recovery** | Can users undo mistakes or recover from dead ends? |
| **Momentum** | Does the pacing keep users engaged, or are there frustrating lulls? |
| **Payoff** | Is the win/completion moment satisfying and memorable? |
| **Social loop** | Does it facilitate the intended social behavior? |

### 6. Write the Report
Structure the report as:

```
## Dogfood Report: [App Name]

**Verdict:** [One punchy sentence]

### 🔴 Critical Issues
[Bugs or friction that will kill the experience — specific scenarios]

### 🟡 Significant Friction
[Things that annoy or confuse users — specific scenarios]

### 🟢 What Works
[Genuinely good moments — be specific, not just polite]

### 🔑 Top 3 to Fix First
[Prioritized, actionable recommendations]
```

## Quality Criteria
- Every finding must reference a **specific interaction** observed in the browser, not speculation
- Critical issues need a concrete **reproduction path**
- Recommendations must be **actionable** (not just "make it more fun")
- Do not pad the report — if something works fine, don't manufacture praise or criticism
