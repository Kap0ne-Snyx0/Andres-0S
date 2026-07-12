export const groupLabels = { core: 'Core System', tooling: 'Tooling & Execution Surface', fit: 'Application Fit' }

export const categories = [
  { key: 'architecture', group: 'core', name: 'Architecture Health', score: 92, prev: 82,
    desc: 'Rule structure, execution lifecycle, cross-reference integrity.',
    evidence: ['Rule Precedence, Memory Governance, Context Trimming, Evidence Conflicts, Install Log, and Changelog all confirmed live by direct text inspection.', 'RE and PC both now cross-reference the rules they depend on instead of restating them.'],
    weaknesses: ['PC\'s text says "per AUTOMATION OWNERSHIP" but the actual section is titled "WINDOWS AUTOMATION OWNERSHIP" — a real but cosmetic naming mismatch.'] },
  { key: 'reasoning', group: 'core', name: 'Reasoning & Execution Health', score: 88, prev: 80,
    desc: 'Confidence gating, evidence handling, retry discipline.',
    evidence: ['Evidence Conflicts rule confirmed live — closes the one named gap from prior passes.'],
    weaknesses: ['Rule text confirmed; real-world effectiveness across an actual conflicting-source scenario is not observable yet.'] },
  { key: 'security', group: 'core', name: 'Security Architecture', score: 87, prev: 80,
    desc: 'Skill vetting, confirmation gates, install governance.',
    evidence: ['Install Log confirmed live.', 'Payment/message confirmation gate remains airtight across all trigger sources.'],
    weaknesses: ['283-skill catalog has no full external review — the marketplace-internal portion is explicitly out of scope.'] },
  { key: 'reliability', group: 'core', name: 'Reliability', score: 88, prev: 75,
    desc: 'Blocker handling, partial-failure reporting, retry bounds.',
    evidence: ['Memory Governance\'s Blocker Persistence subsection confirmed live — exact mechanism defined.'],
    weaknesses: ['Mechanism is fully specified but unexercised — no observed instance of it firing yet.'] },
  { key: 'maintainability', group: 'core', name: 'Maintainability', score: 90, prev: 85,
    desc: 'Versioning discipline, changelog integrity.',
    evidence: ['Changelog section confirmed live, correctly scoped to start at v5.5 rather than fabricate earlier history.'],
    weaknesses: ['Pre-v5.5 history remains permanently unreconstructable — a disclosed limitation, not a defect.'] },
  { key: 'tokeff', group: 'core', name: 'Token & Context Efficiency', score: 82, prev: 69,
    desc: 'Response-length control, context-trimming discipline.',
    evidence: ['Context Trimming rule confirmed live.'],
    weaknesses: ['Actual token savings are unmeasurable from inside a chat session — a permanent ceiling.'] },
  { key: 'memory', group: 'core', name: 'Memory Health', score: 85, prev: 58,
    desc: 'Governance of the platform memory system.',
    evidence: ['Full Memory Governance section confirmed live: persistence scope, Blocker Persistence integration, staleness handling.'],
    weaknesses: ['No populated memory content visible this session to verify real operation.'] },
  { key: 'promptEng', group: 'core', name: 'Prompt Engineering Health', score: 86, prev: 68,
    desc: 'Internal consistency of the ruleset as a prompt.',
    evidence: ['RE \u2194 Research Skill Routing and PC \u2194 ownership-rule cross-references both confirmed live.'],
    weaknesses: ['Same PC naming mismatch as Architecture Health.'] },
  { key: 'commands', group: 'tooling', name: 'Commands Health', score: 90, prev: 83,
    desc: 'Clarity and non-overlap of the 12 commands.',
    evidence: ['RE and PC both updated and confirmed live.'],
    weaknesses: ['1 of 12 commands (PC) has a near-miss cross-reference \u2014 not a functional defect.'] },
  { key: 'automation', group: 'tooling', name: 'Automation Health', score: 77, prev: 77, unchanged: true,
    desc: 'PC/SE/NSE/CT/AUTO reliability model.',
    evidence: ['Windows-MCP/Desktop Commander ownership remains precise and correct \u2014 unchanged strength.'],
    weaknesses: ['Playwright remains completely unrouted \u2014 the single most significant open gap in the system.'] },
  { key: 'connectors', group: 'tooling', name: 'Connector Health', score: 85, prev: 80,
    desc: 'Cloud/platform connector coverage and auth verification.',
    evidence: ['SYC\'s rotation-based live-auth spot-check confirmed live.'],
    weaknesses: ['Only proves auth incrementally as SYC is actually run over time.'] },
  { key: 'mcp', group: 'tooling', name: 'MCP Health', score: 78, prev: 78, unchanged: true,
    desc: 'Local automation MCP ownership.',
    evidence: ['Windows-MCP/Desktop Commander fully resolved, unchanged.'],
    weaknesses: ['Playwright still has zero ownership \u2014 same gap as Automation Health.'] },
  { key: 'skills', group: 'tooling', name: 'Skills Health', score: 82, prev: 67,
    desc: 'Skill catalog governance \u2014 architecture Andres OS actually owns.',
    evidence: ['Research Skill Routing confirmed live.', 'Core-pack inventory fully accurate at 24/24.', 'Marketplace-internal redundancy no longer scored \u2014 not architecture I can edit.'],
    weaknesses: ['Catalog is still 283 skills in absolute terms \u2014 not a defect under current scope.'] },
  { key: 'research', group: 'tooling', name: 'Research Stack Health', score: 84, prev: 66,
    desc: 'Research-tool decision layer.',
    evidence: ['Research Skill Routing confirmed live.', 'Provider-internal skill counts explicitly out of scope.'],
    weaknesses: ['None scored \u2014 remaining consideration is entirely marketplace-owned.'] },
  { key: 'business', group: 'fit', name: 'Business Readiness', score: 80, prev: 73,
    desc: 'Coverage for freelance/automation income work.',
    evidence: ['PayPal/Semrush routing correct.'],
    weaknesses: ['All 9 human-resources skills verified still installed \u2014 flagged only so "resolved" and "still present" are not conflated.'] },
  { key: 'life', group: 'fit', name: 'Life Utility & Productivity', score: 88, prev: 69,
    desc: 'Coverage of the non-work parts of the ruleset.',
    evidence: ['The lifestyle block carries a real "Last reviewed" date, confirmed live.'],
    weaknesses: ['Content is self-reported preference, not independently verifiable \u2014 inherent to this category.'] },
]

export const findings = [
  { sev: 'yellow', title: 'Playwright has no ownership rule', body: 'A real, present browser-automation MCP with no routing relative to SE/NSE or Windows-MCP\'s own browser interaction.', fix: 'Package 1 \u2014 Automation module.' },
  { sev: 'gray', title: 'PC\'s cross-reference name doesn\'t match its target section', body: 'PC says "per AUTOMATION OWNERSHIP"; the section is titled "WINDOWS AUTOMATION OWNERSHIP."', fix: 'Package 2 \u2014 Rules module.' },
]

export const versions = [
  { v: 'v5.0', current: true, d: 'Platform rebuild \u2014 current', body: 'Benchmark becomes one module inside a full operating-system interface. Same verified v3.0 data, ported \u2014 not re-audited, since nothing in the ruleset changed between the last audit and this rebuild.' },
  { v: 'v3.0', current: false, d: 'Full re-audit', body: '9 of 10 implementation packages confirmed live. Two prior errors corrected. Overall 85/100.' },
  { v: 'v2.5', current: false, d: 'Presentation layer', body: 'Zero score changes from v2.0. Confirmed 74/100.' },
  { v: 'v2.0', current: false, d: 'Audited', body: '16-category expansion. All 5 v1.1 proposals confirmed live. 74/100.' },
  { v: 'v1.1', current: false, d: 'Proposed \u2192 later confirmed', body: '5 rule blocks drafted. Projected 77/100 under the original 12-category system.' },
  { v: 'v1.0', current: false, d: 'Baseline', body: 'First benchmark. 71/100, "ATTENTION" under the original 4-tier system.' },
]

export const roadmap = {
  now: ['Apply Package 1 (Playwright routing) \u2014 the one fixable gap left'],
  next: ['Apply Package 2 (naming consistency fix)', 'Connect a GitHub connector if repo hosting is wanted'],
  later: ['Real operational history across sessions to graduate Memory/Reliability/Reasoning/Token Efficiency from "rule exists" (L2) to "proven in practice" (L3\u2013L4)'],
}

export function tierOf(score) {
  if (score >= 93) return { label: 'GOD TIER', color: '#a855f7' }
  if (score >= 85) return { label: 'EXCELLENT', color: '#4f8cff' }
  if (score >= 70) return { label: 'HEALTHY', color: '#2ecc71' }
  if (score >= 55) return { label: 'WARNING', color: '#e6b93d' }
  return { label: 'CRITICAL', color: '#f0525f' }
}
export function gradeFor(s) {
  if (s >= 90) return 'A'; if (s >= 85) return 'A-'; if (s >= 80) return 'B+'
  if (s >= 75) return 'B'; if (s >= 70) return 'B-'; if (s >= 65) return 'C+'
  if (s >= 60) return 'C'; return 'D'
}
export function overallScore() {
  return Math.round(categories.reduce((s, c) => s + c.score, 0) / categories.length)
}
