# ستانداردەکانی بەڵگەنامەکردن — Enterprise Documentation Standards

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-STD-DOC-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Enterprise Architecture Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-SPEC-DOCGOV-2026-V1, IDG-SPEC-CTS-2026-V1

---

# 1. مەبەست و مەودا — Purpose & Scope

This standard dictates the structural formatting, bilingual metadata schemas, heading hierarchies, file naming conventions, and quality gates for every documentation file authored across the IDG ecosystem.

### مەودای جێبەجێکردن — Scope of Enforcement:
Applies to all Markdown (`.md`), OpenAPI specifications, architectural decision records, and technical guides across all IDG repositories.

---

# 2. پێداویستییە سەرەکییەکان — Core Requirements

1. **Semantic Markdown**: All documentation must be written in valid CommonMark/GFM Markdown without non-standard HTML embeds.
2. **Standard Document Header**: Every document must begin with a Level 1 title (`#`) followed by an explicit `## Document Identification` block defining identifier, parent organization, classification, and status.
3. **Bilingual Sorani/English Titling**: All major document headings and structural milestones must provide paired Kurdish Sorani and English terms (e.g. `تەلارسازی گشتی — Master Architecture`).
4. **Canonical Technical Invariants**: Technical identifiers, parameters, code keys, and filenames (e.g. `user_id`, `tenant_id`, `package.json`) must remain in exact English ASCII without translation.
5. **No Placeholder Content**: The use of `TODO`, `TBD`, `FIXME`, `Lorem Ipsum`, or fictitious data is strictly prohibited in production branches.

---

# 3. بەڕێوەبردن و چاودێری کوالێتی — Governance & Compliance Verification

- **Automated Validation**: Documentation pull requests are scanned for broken internal links, heading continuity, and metadata presence.
- **Review Cadence**: Mandatory annual review or upon major system architectural releases.
- **Exceptions**: None. Documentation formatting is absolute.
