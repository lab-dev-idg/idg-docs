# قاڵبی فەرمی تۆماری بڕیاری تەلارسازی — Standard Architecture Decision Record Template

```markdown
# ADR-[NUMBER]: [کورتەی ناونیشانی بڕیار بە کوردی و ئینگلیزی — SHORT DESCRIPTIVE TITLE]

## ناسنامەی بڕیار — Decision Metadata
- **ناسێنەری بڕیار — Decision Identifier**: ADR-[NUMBER]
- **پێگە — Status**: [Proposed | Accepted | Rejected | Deprecated | Superseded]
- **ڕێکەوت — Date**: YYYY-MM-DD
- **خاوەنی بڕیار / نووسەر — Author / Driver**: [Role / Engineering Squad]
- **پەسەندکاران — Approvers**: [Enterprise Architecture Council / Lead Architect]
- **دۆمەینی پەیوەندیدار — Related Domain**: [corporate | brand | products | website | technical | seo | design-system | governance | standards | roadmap]
- **بڕیاری پێشوو یان جێگرەوە — Supersedes / Superseded By**: [None | ADR-XXXX]

---

# 1. پێشینە و کێشە — Context & Problem Statement

[ڕوونکردنەوەی تەواوی ئەو کێشە، تەحەدا، یان دەرفەتە تەکنیکییەی کە پێویستی بەم بڕیارە دروستکردووە. بنووسە بە زمانێکی ڕوون و بێ کەموکوڕی.]
[Describe the context and problem statement clearly in full technical context.]

---

# 2. هۆکارەکانی بڕیاردان — Decision Drivers

1. [Driver 1: e.g. Zero Trust Security Isolation Requirement]
2. [Driver 2: e.g. Trilingual Localization Performance (Kurdish/Arabic/English)]
3. [Driver 3: e.g. High Throughput & Low Latency Inference Thresholds]

---

# 3. هەڵبژاردە تاوتوێکراوەکان — Considered Options

### هەڵبژاردەی 1 — Option 1: [Name of Option 1]
- **باشییەکان — Pros**: [List advantages]
- **کەموکوڕییەکان — Cons**: [List disadvantages / risks]

### هەڵبژاردەی 2 — Option 2: [Name of Option 2]
- **باشییەکان — Pros**: [List advantages]
- **کەموکوڕییەکان — Cons**: [List disadvantages / risks]

---

# 4. ئەنجامی بڕیار و بەڵگە — Decision Outcome & Justification

Chosen Option: **[Option X: Title]**

### هۆکاری پەسەندکردن — Justification:
[ڕوونکردنەوەی وردی هۆکاری هەڵبژاردنی ئەم بژاردەیە بە بەراورد بە بژاردەکانی تر.]
[Detailed architectural rationale for why this option best satisfies the decision drivers.]

---

# 5. دەرئەنجامەکان و دەستکەوتەکان — Consequences & Trade-offs

### دەرئەنجامە ئەرێنییەکان — Positive Consequences:
- [Positive 1: Architectural clarity, improved latency, etc.]

### دەرئەنجامە نەرێنییەکان و مەترسییەکان — Negative Consequences & Risks:
- [Trade-off 1: Migration overhead, dependency upgrade requirement, etc.]

### پلانی کەمکردنەوەی مەترسی — Risk Mitigation:
- [Mitigation strategy for the identified trade-offs]

---

# 6. جێبەجێکردن و پشکنینی پابەندبوون — Implementation & Verification

- **پلانی جێبەجێکردن — Execution Timeline**: [Target Release / Phase]
- **پشکنینی ئۆتۆماتیکی — Automated Verification**: [e.g. CI Linting / Integration Test / Policy-as-Code]
```
