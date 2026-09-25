# Testing Analytics Repository — Design Brief

## Overview
A searchable repository of Lantern marketing test results with an interactive what-if calculator. Enables marketing and performance analytics teams to quickly find test insights and estimate lift impact on different client populations for pitching approvals.

**Problem it solves:** Test results currently live in a static slide deck that's hard to search and navigate. Marketing needs a faster way to find results and estimate "if we apply this test result to Client X with Y members, what's the incremental revenue?"

**Audience:** Marketing Analytics, Performance Analytics, Marketing Leaders

---

## Core Features

### 1. Multi-Channel Test Repository
Tests are organized by channel for easy discovery:
- **Direct Mail** — envelope size, ID card color, mailer format, CTA messaging
- **Email** — subject lines, send timing, send strategy
- **TMO** — outreach holdout, multi-touch campaigns
- **Paid Digital** — ad campaigns and digital optimization

Each channel has:
- Channel overview page with stats (# tests, avg lift, significant tests)
- List of all tests in that channel as searchable cards
- Each test card shows: test name, description, lift %, confidence level, control rate, variant rate, test date

### 2. Test Detail Pages
Clicking a test shows full information:
- Test title, description, test period
- Key results grid: Lift %, Control Rate, Variant Rate, Absolute Difference
- Test Setup section: control and variant group details (sample size, outcomes, rates)
- Test Metrics: detailed metrics relevant to that test (call rates, open rates, click rates, ROAS, etc.)
- Methodology: how the test was run, what methodology was used, any limitations
- Caveats: important notes about the test (small sample size, external factors, etc.)
- Recommendation: a plain-English recommendation on whether to adopt the result

### 3. What-If Calculator (Core Feature)
The heart of the app. Lets users estimate impact of a test result on a new population.

**How it works:**
1. User enters a population size (e.g., 1,000 members)
2. System calculates:
   - Baseline calls = population × control rate
   - Treatment calls = population × variant rate
   - Incremental calls = treatment calls − baseline calls
   - Lift % = (incremental / baseline) × 100
3. System displays results with a plain-English recommendation

**Example:**
- Test: NC Window Envelope (+11% lift)
- Control rate: 0.856% | Variant rate: 0.951%
- User enters: 10,000 members
- Results: 86 baseline calls → 95 treatment calls → +9 incremental (+11% lift)
- Recommendation: "Based on the test showing a +11% lift, applying this result to a population of 10,000 would yield approximately +9 incremental calls. The control version would generate 86 calls, while the variant would generate 95 calls."

---

## User Flows

### Flow 1: Find a Test Result
1. User lands on Dashboard (overview of all tests, stats, channel cards)
2. Clicks a channel card (Direct Mail, Email, etc.)
3. Channel page shows list of tests in that category
4. User clicks a test card to see full details

### Flow 2: Run a What-If Scenario
1. User is on a test detail page
2. Scrolls to "What-If Calculator" section
3. Enters a population size (e.g., 5,000)
4. Clicks "Calculate"
5. Calculator updates with:
   - Baseline expected calls
   - Treatment expected calls
   - Incremental calls
   - Recommendation text
6. User can change the population size and recalculate

### Flow 3: Compare Tests Across Channels
1. User navigates between channel pages (Direct Mail → Email → TMO)
2. Compares average lifts, # significant tests, test types
3. Gets sense of which channels have strongest results

---

## Data Displayed

### Per Test
- Test ID, name, description
- Channel (direct-mail, email, tmo, paid-digital)
- Test date / period
- Control group: size, # outcomes, rate %
- Variant group: size, # outcomes, rate %
- Lift percentage (absolute and relative)
- Confidence level / p-value / directional indicator
- Metrics: 4-8 relevant metrics (call rates, open rates, ROAS, conversion rates, etc.)
- Methodology: text explanation of how test was run
- Caveats: list of limitations or important notes
- Recommendation: actionable conclusion

### Dashboard
- Total # tests
- Average lift across all tests
- # significant tests (p < 0.05 or 95%+ CI)
- Total members tested
- # tests per channel

### Channel Pages
- # tests in channel
- Average lift in channel
- # significant tests in channel
- List of all tests in that channel

---

## Technical Context
- **Frontend Framework:** Next.js 16 with TypeScript
- **Styling:** Tailwind CSS
- **Data Source:** Currently hardcoded JSON (will connect to Databricks later)
- **Calculator:** Client-side React component, no external APIs
- **Navigation:** Multi-page app with sidebar navigation

---

## Design Considerations

1. **Scannability** — Users need to quickly scan test lists and find results. Cards should have clear visual hierarchy (test name, lift %, description, channel badge, confidence badge).

2. **Confidence Indicators** — Tests have varying confidence levels. Use visual badges/colors to indicate significance (green for p<0.05, blue for 95%+ CI, yellow for directional).

3. **Calculator Prominence** — The what-if calculator is a core feature. Make it easy to find and use, with clear input/output sections.

4. **Recommendation as Action Item** — The recommendation text should feel like actionable guidance, not just data. Consider styling it distinctly (highlighted box, icon, etc.).

5. **Methodology & Caveats** — These are important for trust, but secondary to the main results. Separate them visually so users can scan past them if in a hurry, but find them if they need details.

6. **Mobile Responsiveness** — Teams use this on mobile too (pulling up results in meetings). Layout should work on phone/tablet.

7. **Color Coding by Channel** — Use consistent colors for each channel (Direct Mail = purple, Email = blue, TMO = green, Paid Digital = orange) to aid recognition.

---

## Success Metrics
- Marketing team uses this instead of the slide deck to find results
- Users run 2-3 what-if scenarios per week on average (tracked via calculator usage)
- Users pitch client approvals using the calculator output
