# ستانداردەکانی خۆماڵیکردن و زمان — Enterprise Localization Standards

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-STD-I18N-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Internationalization & Localization Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-SPEC-LOCALIZATION-2026-V1, IDG-SPEC-CTS-2026-V1

---

# 1. مەبەست و مەودا — Purpose & Scope

This standard establishes the mandatory engineering, UX, linguistic, and rendering requirements for delivering first-class trilingual interfaces and documentation across English (`en-US`), Arabic (`ar-IQ`), and Kurdish Sorani (`ckb-IQ`).

---

# 2. پێداویستییە سەرەکییەکانی زمان و خۆماڵیکردن — Core Localization Requirements

1. **Trilingual Parity by Design**: Every consumer-facing interface, public webpage, and documentation system must offer 100% complete translations in all three languages from day one.
2. **Zero Hardcoded Strings**: All user-facing strings must reside in external localization resource bundles or database registries.
3. **Bi-Directional Optical Symmetries (LTR/RTL)**:
   - Dynamic document directionality: `<html dir="rtl" lang="ar-IQ">` and `<html dir="rtl" lang="ckb-IQ">` for RTL; `<html dir="ltr" lang="en-US">` for LTR.
   - Layouts dynamically mirror margins, paddings, borders, flex directions, and directional icons.
4. **Canonical Technical Invariants**: Field names, API parameters, and code snippets must never be translated.
5. **Fallback Chain**: `ckb-IQ` -> `ar-IQ` -> `en-US` to ensure graceful, non-empty text display during continuous rollout.

---

# 3. حوکمڕانی و کوالێتی زمان — Governance & Linguistic Review

- **Native Reviewers**: All translations reviewed and approved by native linguistic specialists in Kurdish Sorani and Iraqi Arabic.
- **Automated Validation**: CI pipelines verify 100% key parity across all language resource files prior to build execution.
