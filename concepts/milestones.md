---
title: Milestones
---

# Milestones

A **milestone** is a goal marker that tracks testing progress toward a specific target, such as a release or sprint completion.

## What is a Milestone?

Milestones represent significant testing checkpoints. They provide visibility into whether you're ready to ship, what's blocking you, and how quality is trending over time.

## Milestone Use Cases

**Release Targets**:
- "v2.0 Release" - All tests must pass before shipping
- "Q1 GA" - Quality gate for quarterly release

**Sprint Endings**:
- "Sprint 24" - Track completion for agile sprint
- "Iteration 5" - Measure progress across iterations

**Quality Gates**:
- "Production Readiness" - All critical tests passing, no P0 bugs
- "Sign-off Ready" - Stakeholder approval conditions met

## Milestone Components

Each milestone tracks:
- **Name**: Clear identifier for the milestone
- **Target Date**: When the milestone should be achieved
- **Associated Tests**: Which tests must pass
- **Associated Defects**: Which bugs must be resolved
- **Progress Metrics**: Pass rates, defect counts, coverage

## Milestone Progress Tracking

Qualflare shows milestone progress through:

**Pass Rate**:
- What percentage of tests are passing?
- Is the pass rate improving or declining?
- Are you meeting the quality threshold?

**Defect Count**:
- How many open defects remain?
- What's the severity breakdown?
- Are critical defects resolved?

**Coverage**:
- How many required tests have been run?
- Are there untested areas?

**Trends**:
- Is quality improving over time?
- Are regressions being introduced?

## Milestone Completion

A milestone is complete when:
- **All Required Tests Pass**: Critical tests meet success criteria
- **Defects Resolved**: High-priority bugs are fixed and verified
- **Coverage Met**: All planned test areas have been executed
- **Sign-off Obtained**: Stakeholders approve the milestone

## Milestone vs Test Plan

Test plans schedule test execution; milestones track progress toward goals.

A single milestone might include multiple test plans:
- "v2.0 Release" milestone includes:
  - Smoke test plan (runs every commit)
  - Regression test plan (runs weekly)
  - Performance test plan (runs before release)

## Related

- [Test Plans](/concepts/test-plans) - Tests contributing to milestones
- [Launches](/concepts/launches) - Test runs tracking toward milestones
- [Defects](/concepts/defects) - Bugs blocking milestone completion
