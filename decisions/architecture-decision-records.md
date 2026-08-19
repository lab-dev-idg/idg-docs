# تۆماری بڕیارە تەلارسازییەکان — Architecture Decision Records Architecture

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-DEC-ADR-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Decision Registry Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-DEC-TMPL-2026-V1, IDG-DEC-LIFE-2026-V1

---

# 1. پێکهاتەی گەنجینە و ناونانی بڕیارەکان — ADR Repository Structure & Numbering

All Architecture Decision Records are stored as version-controlled Markdown files in the `decisions/` directory or domain-specific subdirectories adhering to a sequential 4-digit numbering scheme:

```
decisions/
├── README.md
├── decision-governance.md
├── architecture-decision-records.md
├── adr-template.md
├── decision-lifecycle.md
└── records/
    ├── ADR-0001-[short-descriptive-title].md
    ├── ADR-0002-[short-descriptive-title].md
    └── ...
```

### ڕێساکانی ناونانی فایلەکان — File Naming Convention:
- Prefix: `ADR-` followed by zero-padded 4-digit integer (`0001` to `9999`).
- Slug: Lower-case kebab-case summary (e.g. `ADR-0001-adopt-typescript-strict-standard.md`).

---

# 2. پێکهاتەی بنەڕەتی هەر تۆمارێک — Required Document Structure

Every ADR authored within IDG must contain the standardized sections defined in `decisions/adr-template.md`:
1. **Title & Status**: Canonical identifier, status badge, date, decision owners.
2. **Context & Problem Statement**: The technological or business circumstance necessitating a decision.
3. **Decision Drivers**: Key architectural and non-functional requirements constraining the options.
4. **Considered Options**: At least two alternative approaches analyzed with pros and cons.
5. **Decision Outcome**: The chosen path and clear justification.
6. **Consequences & Trade-offs**: Positive outcomes, negative impacts, risks, and mitigation strategies.
7. **Compliance & Implementation Verification**: How adherence will be tested and monitored.

---

# 3. مێژوو و بەستنەوەی تۆمارەکان — Historical Indexing & Traceability

- All ADRs are listed in an automated master index.
- When an ADR is superseded, its metadata is updated with a bidirectional link pointing to the new ADR.
