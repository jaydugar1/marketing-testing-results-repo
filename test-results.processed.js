// Auto-generated from data/test-results.json — Marketing Testing Results Repository
export const CHANNELS = [
  "Direct Mail: Mailer",
  "Direct Mail: ID Card",
  "Email",
  "TMO",
  "Paid Ad"
];
export const QUARTER_ORDER = [
  "Q4 2025",
  "Q1 2026",
  "Q2 2026",
  "Q3 2026",
  "Q4 2026",
  "Unconfirmed"
];
export const TESTS = [
  {
    "id": "email-lantern-vs-employer-led",
    "name": "Email A/B Test: Lantern-Led vs. Employer-Led",
    "channel": "Email",
    "quarter": "UNCLEAR - not explicitly dated or listed in Q1/Q2 summaries",
    "testType": "True Test",
    "sourceSlide": 3,
    "summary": "202,844 emails across 3 variants (Lantern-Led, Employer-Led, Control). Tests open/click/conversion rates by send strategy.",
    "headlineMetrics": [
      {
        "label": "Open Rate Lift",
        "value": "+18.5%",
        "detail": "Employer-Led vs. Control"
      },
      {
        "label": "Click Rate Lift",
        "value": "+15.6%",
        "detail": "Employer-Led vs. Lantern-Led"
      },
      {
        "label": "Conversion Rate",
        "value": "Flat",
        "detail": "~0.07% across all variants"
      }
    ],
    "table": {
      "headers": [
        "Variant",
        "Sent",
        "Open Rate",
        "Click Rate",
        "Conv. Rate"
      ],
      "rows": [
        [
          "Lantern-Led",
          "67,560",
          "21.86%",
          "1.22%",
          "0.07%"
        ],
        [
          "Employer-Led ★",
          "67,564",
          "23.24%",
          "1.41%",
          "0.08%"
        ],
        [
          "Control",
          "67,720",
          "19.61%",
          "0.00%",
          "0.07%"
        ]
      ]
    },
    "recommendation": "Adopt Employer-Led framing as the default send strategy. It delivered the highest open rate (23.24%, +3.63pp over Control) and the highest click rate (1.41%, +0.19pp over Lantern-Led). Conversions were statistically flat across all three variants, so the lift is concentrated in upper-funnel engagement.",
    "notes": "Control variant contains no click-through CTA, hence 0.00% click rate. Directional results; conversion sample sizes (48–53) too small for significance testing.",
    "quarterNote": "Not found by name in Historical Testing Log across any quarter sheet (Q4 2025–Q4 2026) — still unresolved; may be an ad hoc/unlisted test.",
    "channels": [
      "Email"
    ],
    "quarterBucket": "Unconfirmed",
    "testTypeCategory": "true-test",
    "tone": "positive",
    "cardStat": "+18.5% open rate lift (Employer-Led vs Control)",
    "flagged": true,
    "flagReason": "Quarter not found in Historical Testing Log — placement unconfirmed.",
    "impactMetrics": [
      {
        "label": "Open Rate",
        "controlLabel": "Control",
        "testLabel": "Employer-Led",
        "controlPct": 19.61,
        "testPct": 23.24
      },
      {
        "label": "Click Rate",
        "controlLabel": "Control",
        "testLabel": "Employer-Led",
        "controlPct": 0,
        "testPct": 1.41
      }
    ],
    "impactAvailable": true,
    "impactUnavailableReason": "This test's reported results do not include a control-vs-test rate that can be scaled by covered-life count."
  },
  {
    "id": "nc-window-envelope",
    "name": "NC Window Envelope Test (Large vs. Small Window)",
    "channel": "Direct Mail: Mailer",
    "quarter": "Q1 2026",
    "testType": "True Test",
    "resultClassification": "✓ Significant",
    "sourceSlide": 5,
    "summary": "Large Window vs. Small Window envelope. 28-day pre/post analysis. Call rate & case rate per piece mailed.",
    "headlineMetrics": [
      {
        "label": "Call Rate",
        "value": "0.951% vs 0.856%",
        "detail": "Significant at 95% CI"
      },
      {
        "label": "Call Rate Lift",
        "value": "+0.074pp (+11% relative)",
        "detail": "Statistically significant"
      },
      {
        "label": "Case Rate",
        "value": "0.417% vs 0.376%",
        "detail": "Significant at 90% CI"
      }
    ],
    "table": {
      "headers": [
        "Metric",
        "Small Window",
        "Large Window",
        "Difference",
        "Significance",
        "Result"
      ],
      "rows": [
        [
          "Send Count",
          "243,491",
          "90,876",
          "—",
          "—",
          "—"
        ],
        [
          "Call Rate (After ID Send)",
          "0.856%",
          "0.951%",
          "+0.095pp",
          "95% confidence",
          "Large Window"
        ],
        [
          "Call Lift (DiD)",
          "—",
          "+0.074pp",
          "+11% relative",
          "Significant",
          "Large Window"
        ],
        [
          "Case Rate (After ID Send)",
          "0.376%",
          "0.417%",
          "+0.041pp",
          "90% confidence",
          "Large Window"
        ]
      ]
    },
    "recommendation": "The Large Window envelope is the stronger performer. The 11% relative improvement in call lift is statistically significant, and groups were properly randomized. With both window types costing 10 cents per envelope, we recommend the Large Window format as the go-forward standard, with an expectation of a positive return on no net-new investment.",
    "methodology": "28-day pre/post mailing analysis. DiD = Difference-in-Differences. Both groups statistically equivalent pre-mailing.",
    "logCrossRef": "Historical Testing Log, Q1 2026 sheet, Test #2: \"Small vs Large Window Envelope Test\", Direct Mail, Start 2026-01-16, End 2026-02-13, Status: Results Published.",
    "channels": [
      "Direct Mail: Mailer"
    ],
    "quarterBucket": "Q1 2026",
    "testTypeCategory": "true-test",
    "tone": "positive",
    "cardStat": "+11% call rate lift, significant at 95% CI",
    "flagged": false,
    "flagReason": null,
    "impactMetrics": [
      {
        "label": "Call Rate",
        "controlLabel": "Small Window",
        "testLabel": "Large Window",
        "controlPct": 0.856,
        "testPct": 0.951
      },
      {
        "label": "Case Rate",
        "controlLabel": "Small Window",
        "testLabel": "Large Window",
        "controlPct": 0.376,
        "testPct": 0.417
      }
    ],
    "impactAvailable": true,
    "impactUnavailableReason": "This test's reported results do not include a control-vs-test rate that can be scaled by covered-life count."
  },
  {
    "id": "email-timing-id-card",
    "name": "Email Timing Test: Send Before vs. After ID Card",
    "channel": "Email",
    "quarter": "Q1 2026",
    "testType": "True Test",
    "resultClassification": "↑ Directional lift",
    "sourceSlide": 6,
    "summary": "165,255 total members. Iterable data collected 1 week after send. Opens, clicks & conversions comparison.",
    "headlineMetrics": [
      {
        "label": "Send Before ID Card - Opens",
        "value": "16,580 (20.05% open rate)"
      },
      {
        "label": "Send Before ID Card - Clicks",
        "value": "567 (0.69% click rate)"
      },
      {
        "label": "Send After ID Card - Opens",
        "value": "19,776 (23.95% open rate)"
      },
      {
        "label": "Send After ID Card - Clicks",
        "value": "566 (0.69% click rate)"
      },
      {
        "label": "Open Rate Lift",
        "value": "+3.90pp (+19%)"
      },
      {
        "label": "Click Rate",
        "value": "Flat (0.69% both)"
      },
      {
        "label": "Conversions Lift",
        "value": "+29 (36 → 65, +81%)"
      }
    ],
    "analysis": "Sending after the ID Card drove significantly higher open rates, jumping nearly 4 percentage points (+19% relative). Click rate held steady at 0.69% in both groups, while conversions nearly doubled (36 → 65, +81%). Timing email sends after the ID Card arrival clearly amplifies member awareness and conversion.",
    "notes": "Source: Iterable campaign data. Metrics collected 1 week after send. 165,255 total EEs in test population.",
    "logCrossRef": "Historical Testing Log, Q1 2026 sheet, Test #5: \"Email Sent Prior to ID Card Send\", Audience: Flight Week #4, Email, Start 1/20 & 1/27, End 2026-02-02, Results Published.",
    "channels": [
      "Email"
    ],
    "quarterBucket": "Q1 2026",
    "testTypeCategory": "true-test",
    "tone": "positive",
    "cardStat": "+19% open rate lift sending after ID Card",
    "flagged": false,
    "flagReason": null,
    "impactMetrics": [
      {
        "label": "Open Rate",
        "controlLabel": "Sent Before ID Card",
        "testLabel": "Sent After ID Card",
        "controlPct": 20.05,
        "testPct": 23.95
      },
      {
        "label": "Conversion Rate",
        "controlLabel": "Sent Before ID Card",
        "testLabel": "Sent After ID Card",
        "controlPct": 0.0435,
        "testPct": 0.0787
      }
    ],
    "impactAvailable": true,
    "impactUnavailableReason": "This test's reported results do not include a control-vs-test rate that can be scaled by covered-life count."
  },
  {
    "id": "ncshp-paid-ads",
    "name": "NCSHP Paid Ad Campaign Results (Working Planet)",
    "channel": "Paid Ad",
    "quarter": "Q1 2026",
    "testType": "True Test",
    "resultClassification": "↑ Strong positive ROI",
    "sourceSlide": 7,
    "summary": "Working Planet Paid Ad test. NCSHP vs. 7-client baseline. Pre/post campaign analysis.",
    "headlineMetrics": [
      {
        "label": "ROAS",
        "value": "$32",
        "detail": "revenue per dollar invested; $25,252 spend → $812,380 est. revenue"
      },
      {
        "label": "Net Call Lift",
        "value": "+259.6%",
        "detail": "Test vs. control (above ID Card baseline)"
      },
      {
        "label": "Incremental Calls",
        "value": "+755",
        "detail": "3,676 actual vs. 2,931 expected"
      },
      {
        "label": "NCSHP (Test)",
        "value": "+476.7%",
        "detail": "Call lift vs. pre-campaign"
      },
      {
        "label": "7-Client Baseline (Control)",
        "value": "+217.1%",
        "detail": "Call lift vs. pre-campaign (ID Card driven)"
      }
    ],
    "recommendation": "Lantern call data largely aligns with Working Planet's reported results. Even accounting for external NC-specific factors, replicating such a return would be highly valuable. The data supports continued investment in Paid Ads and potentially making the NCSHP campaign evergreen, with an expectation of significant incremental revenue and a highly desirable ROAS.",
    "methodology": "Pre/post campaign analysis comparing NCSHP (test) to 7-client baseline (control). Campaign timed with ID Card sends. Both groups saw lift from ID Cards; net difference isolated here.",
    "notes": "NC had several external factors driving growth during this period (internal comms, Lantern's partnership with NCSHP in the news, and the large vs small window test). Results reflect the NC vs. baseline difference, but not all lift is attributable solely to Paid Ads.",
    "logCrossRef": "Historical Testing Log, Q1 2026 sheet, Test #6: \"ID Card Geo Lift Test\", Audience: North Carolina State Health Plan, Paid Ads, Start 2026-01-05, End 2026-02-02, Status: Results Validated.",
    "channels": [
      "Paid Ad"
    ],
    "quarterBucket": "Q1 2026",
    "testTypeCategory": "true-test",
    "tone": "positive",
    "cardStat": "$32 ROAS; +259.6% net call lift",
    "flagged": false,
    "flagReason": null,
    "impactMetrics": [],
    "impactAvailable": false,
    "impactUnavailableReason": "Results are reported as call-lift percentages and ad spend/ROAS, not a control-vs-test rate applicable per covered life."
  },
  {
    "id": "id-card-color",
    "name": "ID Card Color Test – Green vs. White",
    "channel": "Direct Mail: ID Card",
    "quarter": "Q1 2026",
    "testType": "True Test",
    "resultClassification": "↔ White outperformed, not stat-sig",
    "sourceSlide": 8,
    "summary": "A/B test across International Paper audience. 28-day pre/post comparison. Result: White outperforms at 85% confidence, p = 0.845.",
    "headlineMetrics": [
      {
        "label": "Green ID Card - Mail Count",
        "value": "10,755"
      },
      {
        "label": "Green ID Card - Pre/Post Calls",
        "value": "8 → 88"
      },
      {
        "label": "Green ID Card - Incremental Calls",
        "value": "+80"
      },
      {
        "label": "Green ID Card - Call Rate Delta",
        "value": "+0.74%"
      },
      {
        "label": "White ID Card - Mail Count",
        "value": "10,764"
      },
      {
        "label": "White ID Card - Pre/Post Calls",
        "value": "5 → 103"
      },
      {
        "label": "White ID Card - Incremental Calls",
        "value": "+98"
      },
      {
        "label": "White ID Card - Call Rate Delta",
        "value": "+0.91%"
      }
    ],
    "significanceTest": {
      "type": "Z-test on DiD",
      "diDEstimate": "−0.0278 pp",
      "pooledStdError": "0.1423 pp",
      "zStatistic": "−0.195",
      "pValue": "0.845",
      "significantAtAlpha15": "Yes"
    },
    "analysis": "Card color had no statistically significant impact on call rates — both variants performed similarly.",
    "logCrossRef": "Historical Testing Log, Q1 2026 sheet, Test #4: Direct Mail, Audience: International Paper, Start 2026-02-25, End 2026-03-25.",
    "channels": [
      "Direct Mail: ID Card"
    ],
    "quarterBucket": "Q1 2026",
    "testTypeCategory": "true-test",
    "tone": "neutral",
    "cardStat": "White outperformed, not statistically significant (p=0.845)",
    "flagged": false,
    "flagReason": null,
    "impactMetrics": [
      {
        "label": "Incremental Call Rate",
        "controlLabel": "Green ID Card",
        "testLabel": "White ID Card",
        "controlPct": 0.74,
        "testPct": 0.91
      }
    ],
    "impactAvailable": true,
    "impactUnavailableReason": "This test's reported results do not include a control-vs-test rate that can be scaled by covered-life count."
  },
  {
    "id": "tmo-holdout",
    "name": "TMO Holdout Test",
    "channel": "TMO",
    "quarter": "Q1/Q2 2026 (March 3 – June 1, 2026)",
    "testType": "True Test",
    "sourceSlide": 9,
    "summary": "MSK & BAR member segments, holdout vs non-holdout.",
    "headlineMetrics": [
      {
        "label": "MSK",
        "value": "3/4 stages significant",
        "detail": "First Call: 17.30% lift (100.0% confidence); New Case: 18.35% lift (99.9% confidence); Consult Reached: 20.20% lift (99.7% confidence); Surgery Reached: 18.31% lift (91.9% confidence)"
      },
      {
        "label": "BAR",
        "value": "1/4 stages significant",
        "detail": "First Call: 16.99% lift (94.2% confidence); New Case: 24.85% lift (96.3% confidence); Consult Reached: 22.86% lift (88.5% confidence); Surgery Reached: 4.77% lift (17.1% confidence)"
      },
      {
        "label": "Combined",
        "value": "3/4 stages significant",
        "detail": "First Call: 17.25% lift (100.0% confidence); New Case: 19.47% lift (100.0% confidence); Consult Reached: 20.67% lift (99.9% confidence); Surgery Reached: 15.92% lift (90.7% confidence)"
      }
    ],
    "table": {
      "headers": [
        "Group",
        "Segment",
        "Members",
        "First Calls",
        "Cases",
        "Consults",
        "Surgeries"
      ],
      "rows": [
        [
          "Holdout",
          "MSK",
          "47,840",
          "1,239",
          "748",
          "481",
          "197"
        ],
        [
          "Holdout",
          "BAR",
          "18,242",
          "265",
          "157",
          "105",
          "42"
        ],
        [
          "Non-Holdout",
          "MSK",
          "47,827",
          "1,453",
          "885",
          "578",
          "233"
        ],
        [
          "Non-Holdout",
          "BAR",
          "18,241",
          "310",
          "196",
          "129",
          "44"
        ]
      ]
    },
    "logCrossRef": "Historical Testing Log, Q2 2026 sheet, Test #5: \"TMO Holdout Test\", Audience: NCSHP, TMO, Start 2026-03-01, End TBD, Status: Active as of 3/4. Covers Journeys 1-2 MSK & Series 1 BARI, Channels: DM & Email.",
    "channels": [
      "TMO"
    ],
    "quarterBucket": "Q2 2026",
    "testTypeCategory": "true-test",
    "tone": "positive",
    "cardStat": "MSK: 3/4 funnel stages significant, up to 100% confidence",
    "flagged": false,
    "flagReason": null,
    "impactMetrics": [
      {
        "label": "First Call Rate (MSK)",
        "controlLabel": "Holdout",
        "testLabel": "Non-Holdout",
        "controlPct": 2.59,
        "testPct": 3.038
      },
      {
        "label": "First Call Rate (BAR)",
        "controlLabel": "Holdout",
        "testLabel": "Non-Holdout",
        "controlPct": 1.453,
        "testPct": 1.7
      }
    ],
    "impactAvailable": true,
    "impactUnavailableReason": "This test's reported results do not include a control-vs-test rate that can be scaled by covered-life count."
  },
  {
    "id": "spouse-mailer-cta-abc",
    "name": "Spouse Mailer Envelope CTA – A/B/C Test",
    "channel": "Direct Mail: Mailer",
    "quarter": "Q2 2026 (March 23 – April 23, 2026)",
    "testType": "True Test",
    "resultClassification": "✓",
    "sourceSlide": 10,
    "summary": "MSK & BAR member segments. Holdout: 45,194 members.",
    "headline": "Variant 1 vs. Variant 2: Both variants outperform the holdout (envelope with no CTA) — neither message is statistically different from the other (V1: +228% lift in calls; V2: +264% lift in calls)",
    "variants": [
      {
        "name": "Variant 1",
        "message": "Important health benefit for spouses",
        "mailersSent": 56019,
        "audience": "Both plan populations",
        "firstCalls": 92,
        "newCases": 48,
        "callRate": "0.164%",
        "caseRate": "0.095%",
        "liftVsHoldout": "+228% in calls (+64), +179% in cases (+34)"
      },
      {
        "name": "Variant 2",
        "message": "Your surgery costs may already be covered",
        "mailersSent": 56012,
        "audience": "Both plan populations",
        "firstCalls": 102,
        "newCases": 48,
        "callRate": "0.182%",
        "caseRate": "0.086%",
        "liftVsHoldout": "+264% in calls (+74), +153% in cases (+29)"
      }
    ],
    "table": {
      "headers": [
        "Metric",
        "Variant 1 Absolute",
        "Variant 1 Lift vs. Holdout",
        "Variant 2 Absolute",
        "Variant 2 Lift vs. Holdout"
      ],
      "rows": [
        [
          "First calls",
          "92",
          "+228% (+64 calls)",
          "102",
          "+264% (+74 calls)"
        ],
        [
          "New cases",
          "53",
          "+179% (+34 cases)",
          "48",
          "+153% (+29 cases)"
        ],
        [
          "Call rate",
          "0.164%",
          "—",
          "0.182%",
          "—"
        ],
        [
          "Case rate",
          "0.095%",
          "—",
          "0.086%",
          "—"
        ]
      ]
    },
    "significanceTest": "Z-test on Proportions",
    "notes": "Note: table shows New Cases Variant 1 as 53 in significance table vs. 48 in narrative text — discrepancy in source deck, flagged for confirmation.",
    "logCrossRef": "Historical Testing Log, Q2 2026 sheet, Test #3: \"Spouse Mailer CTA Envelope Test\", Audience: State of Florida & National Railroad, Direct Mail, Start est. 3/22, End 2026-04-23, Status: Deployed. Notes: 1/3 held out, remaining thirds test different CTAs.",
    "channels": [
      "Direct Mail: Mailer"
    ],
    "quarterBucket": "Q2 2026",
    "testTypeCategory": "true-test",
    "tone": "positive",
    "cardStat": "Both CTA variants beat holdout: +228% / +264% calls",
    "flagged": false,
    "flagReason": null,
    "impactMetrics": [
      {
        "label": "Call Rate (Variant 1)",
        "controlLabel": "Holdout (est.)",
        "testLabel": "Variant 1",
        "controlPct": 0.05,
        "testPct": 0.164
      },
      {
        "label": "Call Rate (Variant 2)",
        "controlLabel": "Holdout (est.)",
        "testLabel": "Variant 2",
        "controlPct": 0.05,
        "testPct": 0.182
      }
    ],
    "impactAvailable": true,
    "impactUnavailableReason": "This test's reported results do not include a control-vs-test rate that can be scaled by covered-life count."
  },
  {
    "id": "oracle-network-access-teaser",
    "name": "Oracle Network Access Teaser – A/B Test",
    "channel": "Direct Mail: Mailer",
    "quarter": "Q1 2026",
    "sourceSlide": 11,
    "summary": "Network Access Outreach, Oracle Population. Version A: 28,664 members. Version B: 20,162 members.",
    "headline": "Version A vs. Version B: Version A outperforms on engagement and total outcomes — Version A is the clear winner to date (1.7x more calls, 2.1x more cases)",
    "variants": [
      {
        "name": "Version A",
        "message": "Open immediately: Changes to your Oracle health coverage",
        "members": 28664,
        "callRate": "0.58% (167 calls)",
        "callToCase": "21.56% → 36 total cases (2.1x more than B)",
        "caseToConsult": "38.89%",
        "consultToProcedure": "35.71%"
      },
      {
        "name": "Version B",
        "message": "Network Card Enclosed – Activate Today",
        "members": 20162,
        "callRate": "0.34% (68 calls)",
        "callToCase": "25.00% → 17 total cases",
        "caseToConsult": "47.06%",
        "consultToProcedure": "50.00%"
      }
    ],
    "table": {
      "headers": [
        "Variant",
        "Members",
        "Total Records",
        "Calls",
        "Cases",
        "Consults",
        "Procedures",
        "Call Rate",
        "Call to Case",
        "Case to Consult",
        "Consult to Procedure"
      ],
      "rows": [
        [
          "Version A",
          "28,664",
          "169",
          "167",
          "36",
          "14",
          "5",
          "0.58%",
          "21.56%",
          "38.89%",
          "35.71%"
        ],
        [
          "Version B",
          "20,162",
          "68",
          "68",
          "17",
          "8",
          "4",
          "0.34%",
          "25.00%",
          "47.06%",
          "50.00%"
        ]
      ]
    },
    "notes": "Downstream metrics are still in progress. Consults and procedures from the 30-day window may not yet be complete. Revisit in a few weeks to confirm if Version B's higher conversion rates close the gap. Bottom Line: Version A is the clear winner to date.",
    "logCrossRef": "Historical Testing Log, Q1 2026 sheet, Test #1: Direct Mail, Audience: Oracle, Start 2026-03-09, End 2026-04-20, Status: \"Delayed by SeaChange\", Results Out: Yes.",
    "testType": "True Test",
    "channels": [
      "Direct Mail: Mailer"
    ],
    "quarterBucket": "Q1 2026",
    "testTypeCategory": "true-test",
    "tone": "positive",
    "cardStat": "Version A: 1.7x more calls, 2.1x more cases than Version B",
    "flagged": false,
    "flagReason": null,
    "impactMetrics": [
      {
        "label": "Call Rate",
        "controlLabel": "Version B",
        "testLabel": "Version A",
        "controlPct": 0.34,
        "testPct": 0.58
      }
    ],
    "impactAvailable": true,
    "impactUnavailableReason": "This test's reported results do not include a control-vs-test rate that can be scaled by covered-life count."
  },
  {
    "id": "employer-led-vs-lantern-led-mailer",
    "name": "Employer Led vs. Lantern Led Mailer Format",
    "channel": "Direct Mail: Mailer",
    "quarter": "Q2 2026",
    "testType": "True Test",
    "sourceSlide": 12,
    "summary": "Direct mail A/B test. 148,911 sends per variant.",
    "headlineMetrics": [
      {
        "label": "Top of Funnel",
        "value": "+4.3% more first calls (729 vs. 699); +2.5% more new cases (410 vs. 400)"
      }
    ],
    "table": {
      "headers": [
        "Funnel Stage",
        "Lantern Led",
        "Employer Led",
        "Difference"
      ],
      "rows": [
        [
          "Mail Sends",
          "148,911",
          "148,911",
          "—"
        ],
        [
          "First Calls",
          "699",
          "729",
          "+30 (+4.3%)"
        ],
        [
          "New Cases",
          "400",
          "410",
          "+10 (+2.5%)"
        ],
        [
          "Reached Consult",
          "252",
          "250",
          "−2 (−0.8%)"
        ],
        [
          "Reached Surgery",
          "91",
          "76",
          "−15 (−16.5%)"
        ]
      ]
    },
    "analysis": "Employer Led wins the top of the funnel (+4.3% first calls, +2.5% new cases), but the edge fades downstream — Lantern Led carried more cases through to surgery (91 vs. 76). Net: Employer Led drives volume, Lantern Led converts better deeper in the funnel.",
    "logCrossRef": "Historical Testing Log, Q2 2026 sheet, Test #2: \"Letter vs Letter - Employer Branding\", Audience: 61 clients / 686k EEs, Direct Mail, Start Early April, End June, Status: Deployed.",
    "channels": [
      "Direct Mail: Mailer"
    ],
    "quarterBucket": "Q2 2026",
    "testTypeCategory": "true-test",
    "tone": "neutral",
    "cardStat": "Employer Led: +4.3% first calls; Lantern Led converts deeper",
    "flagged": false,
    "flagReason": null,
    "impactMetrics": [
      {
        "label": "First Call Rate",
        "controlLabel": "Lantern Led",
        "testLabel": "Employer Led",
        "controlPct": 0.4696,
        "testPct": 0.4897
      }
    ],
    "impactAvailable": true,
    "impactUnavailableReason": "This test's reported results do not include a control-vs-test rate that can be scaled by covered-life count."
  },
  {
    "id": "bifold-vs-letter",
    "name": "Bifold vs. Letter Mailer Format",
    "channel": "Direct Mail: Mailer",
    "quarter": "Q2 2026",
    "testType": "True Test",
    "sourceSlide": 13,
    "summary": "Direct mail A/B test.",
    "headlineMetrics": [
      {
        "label": "Stronger Format",
        "value": "+24.7% more first calls (237 vs. 190); +12.5% more surgeries (18 vs. 16)"
      }
    ],
    "table": {
      "headers": [
        "Funnel Stage",
        "Bifold",
        "Letter",
        "Difference"
      ],
      "rows": [
        [
          "Mail Sends",
          "51,220",
          "51,256",
          "+36"
        ],
        [
          "First Calls",
          "190",
          "237",
          "+47 (+24.7%)"
        ],
        [
          "New Cases",
          "122",
          "116",
          "−6 (−4.9%)"
        ],
        [
          "Reached Consult",
          "61",
          "67",
          "+6 (+9.8%)"
        ],
        [
          "Reached Surgery",
          "16",
          "18",
          "+2 (+12.5%)"
        ]
      ]
    },
    "analysis": "Letter is the clear winner: +24.7% more first calls, and that lead held all the way down to +12.5% more surgeries. Bifold led only on raw new cases (+6 vs. Letter); Letter converted better at every later stage — the stronger format for booked outcomes.",
    "logCrossRef": "Historical Testing Log, Q2 2026 sheet, Test #1: \"Bi-Fold vs Letter\", Audience: 21 clients / 322k EEs, Direct Mail, Start Early April, End June, Status: Deployed.",
    "channels": [
      "Direct Mail: Mailer"
    ],
    "quarterBucket": "Q2 2026",
    "testTypeCategory": "true-test",
    "tone": "positive",
    "cardStat": "Letter: +24.7% first calls, +12.5% surgeries vs Bifold",
    "flagged": false,
    "flagReason": null,
    "impactMetrics": [
      {
        "label": "First Call Rate",
        "controlLabel": "Bifold",
        "testLabel": "Letter",
        "controlPct": 0.371,
        "testPct": 0.4624
      }
    ],
    "impactAvailable": true,
    "impactUnavailableReason": "This test's reported results do not include a control-vs-test rate that can be scaled by covered-life count."
  },
  {
    "id": "sw-welcome-letter",
    "name": "Southwest Welcome Letter Results",
    "channel": "Direct Mail: Mailer",
    "quarter": "Q1 2026 (sent 1/8/2026)",
    "testType": "Directional Analysis",
    "resultClassification": "↑ Strong positive signal",
    "sourceSlide": 15,
    "summary": "Welcome letter sent 1/8/2026. 28-day pre/post comparison.",
    "headlineMetrics": [
      {
        "label": "Call Volume Increase",
        "value": "~5.5x",
        "detail": "Before: 52 calls, After: 287 calls"
      }
    ],
    "keyTakeaways": [
      "Strong signal the welcome letter directly drove inbound engagement",
      "Outreach was highly effective at prompting Southwest to take action",
      "Not directly comparable to ID Card sends — Welcome Letter is a different format with too many changed variables"
    ],
    "channels": [
      "Direct Mail: Mailer"
    ],
    "quarterBucket": "Q1 2026",
    "testTypeCategory": "directional",
    "tone": "positive",
    "cardStat": "~5.5x increase in call volume (52 → 287 calls)",
    "flagged": false,
    "flagReason": null,
    "impactMetrics": [],
    "impactAvailable": false,
    "impactUnavailableReason": "Only raw before/after call counts are available — no mailed population size to convert into a per-EE rate."
  },
  {
    "id": "tyson-id-card-welcome-letter",
    "name": "Tyson ID Card + Welcome Letter Analysis",
    "channel": "Direct Mail: ID Card + Mailer (combined)",
    "quarter": "Q1 2026",
    "testType": "Directional Analysis",
    "resultClassification": "↑ Directional lift",
    "sourceSlide": 16,
    "summary": "Two-touch campaign compared against book averages and ID Card-only approach.",
    "headlineMetrics": [
      {
        "label": "ID Card Performance",
        "value": "253 → 481 calls",
        "detail": "Call rate: 0.152% → 0.290%. Directionally strong"
      },
      {
        "label": "Welcome Letter Lift",
        "value": "8 → 238 calls",
        "detail": "+230 calls, but post-letter rate still ~0.7% below book avg"
      },
      {
        "label": "Overall Call Rate - Tyson",
        "value": "0.353%"
      },
      {
        "label": "Overall Call Rate - Book Average",
        "value": "0.337%"
      }
    ],
    "notes": "ID Card baseline reflects post-Welcome Letter behavior. Combined uplift from both touches: +0.285%.",
    "channels": [
      "Direct Mail: ID Card",
      "Direct Mail: Mailer"
    ],
    "quarterBucket": "Q1 2026",
    "testTypeCategory": "directional",
    "tone": "positive",
    "cardStat": "Combined uplift of +0.285% call rate",
    "flagged": false,
    "flagReason": null,
    "impactMetrics": [
      {
        "label": "ID Card Call Rate",
        "controlLabel": "Before Welcome Letter",
        "testLabel": "After Welcome Letter",
        "controlPct": 0.152,
        "testPct": 0.29
      },
      {
        "label": "Overall Call Rate",
        "controlLabel": "Book Average",
        "testLabel": "Tyson (Combined)",
        "controlPct": 0.337,
        "testPct": 0.353
      }
    ],
    "impactAvailable": true,
    "impactUnavailableReason": "This test's reported results do not include a control-vs-test rate that can be scaled by covered-life count."
  },
  {
    "id": "ferguson-cancer-mailer",
    "name": "Ferguson Q4 Cancer Mailer Results",
    "channel": "Direct Mail: Mailer",
    "quarter": "Q1 2026",
    "testType": "Directional Analysis",
    "resultClassification": "↔ Flat (not a failure)",
    "sourceSlide": 17,
    "summary": "28-day pre/post comparison of cancer-focused mailer send.",
    "headlineMetrics": [
      {
        "label": "Before",
        "value": "2 calls"
      },
      {
        "label": "After",
        "value": "2 calls"
      }
    ],
    "keyTakeaways": [
      "Cancer calls: 2 before, 2 after — no change",
      "Surgery calls: 37 before, 38 after — essentially flat",
      "Mailer did not drive measurable increase in inbound calls, but this is expected for a low-prevalence condition like cancer",
      "Flat results should not be read as a failure; the right benchmark is consistently reaching the right population"
    ],
    "whyThisMailerMatters": [
      {
        "title": "Awareness",
        "detail": "Members know cancer resources and support are available to them"
      },
      {
        "title": "Touchpoint Creation",
        "detail": "Brings Lantern in front of members navigating a cancer diagnosis"
      },
      {
        "title": "Top-of-Mind Presence",
        "detail": "Members remember this communication and are more likely to reach out"
      }
    ],
    "channels": [
      "Direct Mail: Mailer"
    ],
    "quarterBucket": "Q1 2026",
    "testTypeCategory": "directional",
    "tone": "neutral",
    "cardStat": "Flat results — expected for low-prevalence condition",
    "flagged": false,
    "flagReason": null,
    "impactMetrics": [],
    "impactAvailable": false,
    "impactUnavailableReason": "Only raw before/after call counts are available — no mailed population size to convert into a per-EE rate."
  },
  {
    "id": "id-card-insert",
    "name": "ID Card Insert: Impact on Call Rates",
    "channel": "Direct Mail: ID Card",
    "quarter": "Q3 2026",
    "testType": "Directional / Observational (statistically significant, but not randomized)",
    "sourceSlide": 18,
    "summary": "Mandatory insert clients vs. carve-out (no insert) clients.",
    "headlineMetrics": [
      {
        "label": "Mandatory Insert",
        "value": "0.86% call rate",
        "detail": "1,704 incr. calls / 197,532 mailed"
      },
      {
        "label": "Carve-Out (No Insert)",
        "value": "0.63% call rate",
        "detail": "7,197 incr. calls / 1,139,155 mailed"
      }
    ],
    "keyTakeaways": [
      "Mandatory inserts drove 37% more incremental calls per member mailed vs. carve-outs",
      "Result is statistically significant (p < 0.0001) — extremely unlikely due to chance",
      "Methodology: weighted average (total calls ÷ total mail count per group) gives every member equal weight",
      "Caveat: observational, not randomized. Describes a strong association; unmeasured confounders cannot be ruled out"
    ],
    "logCrossRef": "Historical Testing Log, Q3 2026 sheet, Test #1: \"Mandatory Insert Test\" — Run on June and July test group (existing clients, offcycle), ID Card, Status: In Production. Appendix sheet lists client mail counts for the 'Mandatory / Voluntary ID Card Test': State of Delaware 44,284; Linde 9,093; Michaels 5,746; Core Mining (unconfirmed).",
    "clientBreakdown": [
      {
        "client": "State of Delaware",
        "count": 44284
      },
      {
        "client": "Linde",
        "count": 9093
      },
      {
        "client": "Michaels",
        "count": 5746
      },
      {
        "client": "Core Mining (?)",
        "count": null
      }
    ],
    "channels": [
      "Direct Mail: ID Card"
    ],
    "quarterBucket": "Q3 2026",
    "testTypeCategory": "directional",
    "tone": "positive",
    "cardStat": "+37% more incremental calls, p < 0.0001 (observational)",
    "flagged": true,
    "flagReason": "Original PPTX gave no date; quarter resolved via Historical Testing Log cross-reference to “Mandatory Insert Test.”",
    "impactMetrics": [
      {
        "label": "Call Rate",
        "controlLabel": "Carve-Out (No Insert)",
        "testLabel": "Mandatory Insert",
        "controlPct": 0.63,
        "testPct": 0.86
      }
    ],
    "impactAvailable": true,
    "impactUnavailableReason": "This test's reported results do not include a control-vs-test rate that can be scaled by covered-life count."
  },
  {
    "id": "mdcps-internal-vs-external",
    "name": "M-DCPS – Internal vs. External Comms",
    "channel": "Direct Mail: Mailer + Email (multi-channel)",
    "quarter": "Q1 2026",
    "testType": "Directional Analysis",
    "resultClassification": "✓ Internal outperforms",
    "sourceSlide": 19,
    "summary": "28-day pre/post comparison of call volume by communication type.",
    "headline": "Internal sends avg ~80%+ lift vs ~50% for external — Lantern consistently outperforms",
    "internalSends": [
      {
        "name": "ID Card (1/21)",
        "change": "43 → 126 calls",
        "lift": "+193%"
      },
      {
        "name": "Savings Mailer (8/7)",
        "change": "45 → 81 calls",
        "lift": "+80%"
      },
      {
        "name": "Quality Mailer (10/15)",
        "change": "64 → 99 calls",
        "lift": "+55% *"
      },
      {
        "name": "Spouse Savings (11/26)",
        "change": "83 → 71 calls",
        "lift": "-14% *"
      }
    ],
    "externalSends": [
      {
        "name": "Summer Postcard (6/3)",
        "change": "40 → 67 calls",
        "lift": "+68%"
      },
      {
        "name": "Benefits Postcard (7/8)",
        "change": "62 → 40 calls",
        "lift": "-35% *"
      },
      {
        "name": "Sept Newsletter (9/2)",
        "change": "60 → 86 calls",
        "lift": "+43% *"
      },
      {
        "name": "Lantern Email (9/3)",
        "change": "68 → 73 calls",
        "lift": "+7% *"
      }
    ],
    "keyTakeaways": [
      "Cleanest data: ID Card (+193%), Savings Mailer (+80%), Summer Postcard (+68%) — no overlap issues",
      "Asterisked (*) results have overlapping pre/post periods — negative results likely reflect inflated baselines, not true declines"
    ],
    "channels": [
      "Direct Mail: Mailer",
      "Email"
    ],
    "quarterBucket": "Q1 2026",
    "testTypeCategory": "directional",
    "tone": "positive",
    "cardStat": "Internal sends ~80%+ lift vs ~50% external",
    "flagged": false,
    "flagReason": null,
    "impactMetrics": [],
    "impactAvailable": false,
    "impactUnavailableReason": "Results are before/after call counts per send with no total mailed population — not convertible to a per-EE rate."
  },
  {
    "id": "msk-s3-bar-s2-tmo-mail",
    "name": "MSK S3 and BAR S2 Direct Mail Results (TMO)",
    "channel": "TMO",
    "quarter": "Spans Q3 2025 - Q1 2026 (test period Aug 2025 – Mar 2026; pre-test Apr-Jul 2025)",
    "testType": "Directional Analysis",
    "sourceSlide": 20,
    "summary": "Added a single direct-mail letter to existing email + outbound call journeys for TMO MSK Series 3 and BAR Series 2. Designed as directional (not stat. sig.)",
    "segments": [
      {
        "name": "BAR Series 2",
        "callRate": "16% → 18%",
        "detail": "Pre: 17/104, Post: 6/33 — +2%",
        "costOfLetter": "$2.69/letter ($88.90 total for test sends)",
        "revenueDriven": "$7,111 (@ $1.2k/call)",
        "recommendation": "Letter should become standard part of the TMO member journey."
      },
      {
        "name": "MSK Series 3",
        "callRate": "23% → 29%",
        "detail": "Pre: 117/509, Post: 179/623 — +6%",
        "costOfLetter": "$2.69/letter ($1,678 total for test sends)",
        "revenueDriven": "$213,122 (@ $1.2k/call)",
        "recommendation": "Letter should become standard part of the TMO member journey."
      }
    ],
    "notes": "Cost assumes amsive's qty 1,000 price. Revenue assumes $1.2k per call. Directional only — not statistically significant.",
    "channels": [
      "TMO"
    ],
    "quarterBucket": "Q1 2026",
    "testTypeCategory": "directional",
    "tone": "positive",
    "cardStat": "MSK Series 3: 23% → 29% call rate",
    "flagged": true,
    "flagReason": "Test period spans Aug 2025 – Mar 2026 across multiple quarters; bucketed here by result-reporting quarter.",
    "impactMetrics": [
      {
        "label": "Call Rate (BAR Series 2)",
        "controlLabel": "Pre-Test",
        "testLabel": "Post-Test",
        "controlPct": 16,
        "testPct": 18
      },
      {
        "label": "Call Rate (MSK Series 3)",
        "controlLabel": "Pre-Test",
        "testLabel": "Post-Test",
        "controlPct": 23,
        "testPct": 29
      }
    ],
    "impactAvailable": true,
    "impactUnavailableReason": "This test's reported results do not include a control-vs-test rate that can be scaled by covered-life count."
  },
  {
    "id": "spouse-mailer-directional",
    "name": "Spouse Mailer Directional Results",
    "channel": "Direct Mail: Mailer",
    "quarter": "Q1 2026 (mailers sent through March 6, 2026)",
    "testType": "Directional Analysis",
    "sourceSlide": 21,
    "summary": "Methodology note: 30d pre-period contaminated by Q1 ID Card send. Used 28-day post-mailer window vs. 29d+ settled baseline instead. 4 clients excluded (inflated carry-over activity). n = 155 clients.",
    "headlineMetrics": [
      {
        "label": "Call Volume Lift (28d window)",
        "value": "+9.43%",
        "detail": "Average 2.32 calls/day vs. 2.12 baseline; 81% of clients higher call rate; median +0.24 calls/client/day"
      },
      {
        "label": "Spouse Share Increase",
        "value": "+7.3 ppt",
        "detail": "17% → 24% of inbound calls from spouses pre vs post; 63% of clients saw spouse share rise"
      },
      {
        "label": "Clients with Higher Call Rate",
        "value": "126 / 155",
        "detail": "81% directional positive (vs. 17% negative); median client-level change +4.4 ppt spouse share"
      }
    ],
    "whySpouseShareMatters": [
      "Controls for prior mailer effect: if the ID card mailer drove calls, total volume rises but spouse/self mix stays flat.",
      "Spouse share specifically increased — direct signal the mailer reached its intended audience.",
      "Broad-based result (63% of clients) — not skewed by 1–2 large clients."
    ],
    "caveats": [
      "Pre/post volume comparison excluded — prior mailer inflation makes pre-period unreliable.",
      "29d+ baseline is only 21–23 days per client — results will sharpen as more time accumulates.",
      "Covers mailers sent through March 6, 2026; later sends excluded (insufficient post-period).",
      "ELPASOCO, RRISD, BREVARDCOUNTY, Brevard — 29d+ avg rates 10–40x their 28d rates, driven by concurrent OE activity, not mailer response"
    ],
    "bottomLine": "Spouse mailer performed on both dimensions — call volume up +9.6% (81% of clients) and spouse share up +7.3 ppt (63% of clients). Results are directional; baseline will mature over coming weeks.",
    "channels": [
      "Direct Mail: Mailer"
    ],
    "quarterBucket": "Q1 2026",
    "testTypeCategory": "directional",
    "tone": "positive",
    "cardStat": "+9.43% call volume lift, +7.3ppt spouse share",
    "flagged": false,
    "flagReason": null,
    "impactMetrics": [],
    "impactAvailable": false,
    "impactUnavailableReason": "Results are reported as calls-per-day and per-client change (n=155 clients), not a rate per covered life."
  },
  {
    "id": "email-subject-line-test",
    "name": "Email A/B Test Results | Subject Line Testing (4 Campaigns)",
    "channel": "Email",
    "quarter": "Q2 2026",
    "testType": "True Test",
    "sourceSlide": 22,
    "summary": "Control vs. Variant subject lines — all 4 variants outperformed control on open rate.",
    "headlineMetrics": [
      {
        "label": "Personalization",
        "value": "3 of 4 tests",
        "detail": "used first name in subject line"
      },
      {
        "label": "Avg Open Rate Lift",
        "value": "+0.65pp",
        "detail": "avg. across all 4 campaigns"
      },
      {
        "label": "Top Performer",
        "value": "BAR 1.3, +3.8%",
        "detail": "first name lift: 36.39% → 37.78%"
      }
    ],
    "table": {
      "headers": [
        "Campaign",
        "Subject Line",
        "Sends",
        "Opens",
        "Open Rate",
        "Lift"
      ],
      "rows": [
        [
          "BAR 1.4",
          "Get Matched with the Best Surgeon for You",
          "17,964",
          "3,212",
          "17.88%",
          "Control"
        ],
        [
          "BAR 1.4 ▲",
          "[First Name], Get Matched with the Best Surgeon for You",
          "18,270",
          "3,316",
          "18.15%",
          "+0.27pp (+1.5%)"
        ],
        [
          "BAR 1.3",
          "See Who's in Your Corner",
          "19,046",
          "6,930",
          "36.39%",
          "Control"
        ],
        [
          "BAR 1.3 ▲",
          "[First Name], See Who's in Your Corner",
          "18,978",
          "7,170",
          "37.78%",
          "+1.39pp (+3.8%)"
        ],
        [
          "MSK 1.3",
          "Joint or back pain? Your Care Advocate is here",
          "42,949",
          "6,932",
          "16.14%",
          "Control"
        ],
        [
          "MSK 1.3 ▲",
          "⏰ Back & Joint Relief Awaits – Call Lantern Today!",
          "43,358",
          "7,148",
          "16.49%",
          "+0.35pp (+2.2%)"
        ],
        [
          "MSK 2.2",
          "Pay little-to-no cost for excellent care",
          "27,968",
          "5,266",
          "18.83%",
          "Control"
        ],
        [
          "MSK 1.3 ▲ (labeled, likely MSK 2.2 ▲)",
          "[First Name], Pay $0 for excellent care",
          "28,003",
          "5,432",
          "19.40%",
          "+0.57pp (+3.0%)"
        ]
      ]
    },
    "notes": "All 4 variants outperformed control. First-name personalization and urgency framing are clear drivers of engagement. Row label 'MSK 1.3 ▲' for the 4th variant appears to be a typo in source deck (should likely read MSK 2.2 ▲) — flagged for confirmation.",
    "logCrossRef": "Historical Testing Log, Q2 2026 sheet, Test #7: \"Subject Line Test\", Audience: Savings Email, Start Mid-April, End Early June, Status: Designed, ready for Deployment.",
    "channels": [
      "Email"
    ],
    "quarterBucket": "Q2 2026",
    "testTypeCategory": "true-test",
    "tone": "positive",
    "cardStat": "All 4 variants beat control; avg +0.65pp open rate",
    "flagged": false,
    "flagReason": null,
    "impactMetrics": [
      {
        "label": "Open Rate (BAR 1.4)",
        "controlLabel": "Control",
        "testLabel": "Variant",
        "controlPct": 17.88,
        "testPct": 18.15
      },
      {
        "label": "Open Rate (BAR 1.3)",
        "controlLabel": "Control",
        "testLabel": "Variant",
        "controlPct": 36.39,
        "testPct": 37.78
      },
      {
        "label": "Open Rate (MSK 1.3)",
        "controlLabel": "Control",
        "testLabel": "Variant",
        "controlPct": 16.14,
        "testPct": 16.49
      },
      {
        "label": "Open Rate (MSK 2.2)",
        "controlLabel": "Control",
        "testLabel": "Variant",
        "controlPct": 18.83,
        "testPct": 19.4
      }
    ],
    "impactAvailable": true,
    "impactUnavailableReason": "This test's reported results do not include a control-vs-test rate that can be scaled by covered-life count."
  },
  {
    "id": "winsupply-magnet-mailer",
    "name": "Winsupply: Magnet Mailer Performance Summary",
    "channel": "Direct Mail: Mailer",
    "quarter": "Q1 2026",
    "testType": "True Test",
    "sourceSlide": 23,
    "summary": "Members mailed: 5,911. Baseline vs. Test group funnel comparison.",
    "headlineMetrics": [
      {
        "label": "First Calls",
        "value": "9 → 32",
        "detail": "Baseline → Test"
      },
      {
        "label": "New Cases",
        "value": "7 → 15",
        "detail": "Baseline → Test"
      }
    ],
    "table": {
      "headers": [
        "Metric",
        "Baseline",
        "Test Group",
        "Change",
        "% Change"
      ],
      "rows": [
        [
          "First Calls",
          "9",
          "32",
          "+23",
          "+255.6%"
        ],
        [
          "New Cases",
          "7",
          "15",
          "+8",
          "+114.3%"
        ],
        [
          "Consults",
          "4",
          "9",
          "+5",
          "+125.0%"
        ],
        [
          "Surgeries",
          "2",
          "1",
          "-1",
          "-50.0%"
        ],
        [
          "Completed Procedures",
          "0",
          "0",
          "0",
          "—"
        ]
      ]
    },
    "keyTakeaway": "The Winsupply magnet mailer drove a +255.6% lift in first calls (9 → 32) and a +114.3% lift in new cases (7 → 15) vs. the baseline group — strong positive results across both tracked funnel metrics.",
    "logCrossRef": "Historical Testing Log, Q1 2026 sheet, Test #3: \"Magnet Test\", Audience: Winsupply vs KinderCare, Direct Mail, Start 2026-02-23, End 2026-03-27, Notes: \"*Results out will not be until early/mid April\" — consistent with pptx slide deployed 4/25.",
    "channels": [
      "Direct Mail: Mailer"
    ],
    "quarterBucket": "Q1 2026",
    "testTypeCategory": "true-test",
    "tone": "positive",
    "cardStat": "+255.6% first calls, +114.3% new cases",
    "flagged": false,
    "flagReason": null,
    "impactMetrics": [
      {
        "label": "First Call Rate",
        "controlLabel": "Baseline",
        "testLabel": "Test Group",
        "controlPct": 0.1523,
        "testPct": 0.5414
      },
      {
        "label": "New Case Rate",
        "controlLabel": "Baseline",
        "testLabel": "Test Group",
        "controlPct": 0.1184,
        "testPct": 0.2537
      }
    ],
    "impactAvailable": true,
    "impactUnavailableReason": "This test's reported results do not include a control-vs-test rate that can be scaled by covered-life count."
  },
  {
    "id": "paid-ads-performance-lift-q4-2025",
    "name": "Paid Ads Performance Lift Test",
    "channel": "Paid Ad",
    "quarter": "Q4 2025",
    "testType": "True Test",
    "source": "Historical Testing Log only (Q4 2025 sheet) — not in PPTX deck",
    "summary": "Deployed, results published. Quarter column in log lists 'Q1 2026' despite living on the Q4 2025 tab — likely results attribution, flagged for confirmation.",
    "results": "Estimated 10–12% lift in member call rate performance compared to baseline. Vendor stated test met statistical significance. Paid digital ads can generate measurable incremental impact, should continue pending further testing.",
    "channels": [
      "Paid Ad"
    ],
    "quarterBucket": "Q4 2025",
    "testTypeCategory": "true-test",
    "tone": "positive",
    "cardStat": "Est. 10–12% lift in call rate, statistically significant",
    "flagged": true,
    "flagReason": "Historical Testing Log lists this on the Q4 2025 tab, but its Quarter column reads “Q1 2026” — bucket placement unconfirmed.",
    "impactMetrics": [],
    "impactAvailable": false,
    "impactUnavailableReason": "Only a qualitative lift estimate (~10–12%) is available — no control/test rate pair to project from."
  },
  {
    "id": "bofu-reactivation-email-q4-2025",
    "name": "BOFU Reactivation Email Test",
    "channel": "Email",
    "quarter": "Q4 2025",
    "testType": "True Test (caveat: some source data gaps)",
    "source": "Historical Testing Log only (Q4 2025 sheet) — not in PPTX deck",
    "audience": "Members lost mid-funnel",
    "summary": "Deployed, results published. Quarter column lists 'Q1 2026' despite living on the Q4 2025 tab — flagged for confirmation.",
    "results": "BOFU emails achieved 26% open rate (1.5x higher than baseline) and a 0.44% case conversion rate per send (9x higher) versus general marketing emails, despite some source data gaps. Targeted BOFU reactivation emails outperform general marketing emails in engagement and downstream case creation and should continue to be practiced.",
    "channels": [
      "Email"
    ],
    "quarterBucket": "Q4 2025",
    "testTypeCategory": "true-test",
    "tone": "positive",
    "cardStat": "26% open rate (1.5x baseline); 9x case conversion",
    "flagged": true,
    "flagReason": "Historical Testing Log lists this on the Q4 2025 tab, but its Quarter column reads “Q1 2026” — bucket placement unconfirmed.",
    "impactMetrics": [
      {
        "label": "Open Rate",
        "controlLabel": "Baseline",
        "testLabel": "BOFU Email",
        "controlPct": 17.33,
        "testPct": 26
      },
      {
        "label": "Case Conversion Rate",
        "controlLabel": "Baseline",
        "testLabel": "BOFU Email",
        "controlPct": 0.0489,
        "testPct": 0.44
      }
    ],
    "impactAvailable": true,
    "impactUnavailableReason": "This test's reported results do not include a control-vs-test rate that can be scaled by covered-life count."
  },
  {
    "id": "id-card-design-ab-q4-2025",
    "name": "ID Card Design A/B Test",
    "channel": "Direct Mail: ID Card",
    "quarter": "Q4 2025",
    "testType": "True Test",
    "source": "Historical Testing Log only (Q4 2025 sheet) — not in PPTX deck",
    "summary": "Deployed, results published. Quarter column lists 'Q1 2026' despite living on the Q4 2025 tab — flagged for confirmation.",
    "results": "Both ID cards drove positive call lift despite overall seasonal decline, with the control (Z-fold) version performing slightly better than the new white card (+0.60% vs. +0.51% lift). ID card mailers appear to generate incremental call engagement, but the new design did not outperform the existing control and necessitates further testing before rollout.",
    "channels": [
      "Direct Mail: ID Card"
    ],
    "quarterBucket": "Q4 2025",
    "testTypeCategory": "true-test",
    "tone": "neutral",
    "cardStat": "Control (Z-fold) slightly outperformed new white card",
    "flagged": true,
    "flagReason": "Historical Testing Log lists this on the Q4 2025 tab, but its Quarter column reads “Q1 2026” — bucket placement unconfirmed.",
    "impactMetrics": [
      {
        "label": "Incremental Call Rate",
        "controlLabel": "Z-Fold (Control)",
        "testLabel": "White Card",
        "controlPct": 0.6,
        "testPct": 0.51
      }
    ],
    "impactAvailable": true,
    "impactUnavailableReason": "This test's reported results do not include a control-vs-test rate that can be scaled by covered-life count."
  }
];
