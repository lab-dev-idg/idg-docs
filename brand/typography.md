# تەلارسازی پیت و فۆنت — Multilingual Typography Specification

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-BRAND-TYPO-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Brand Typography Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-SPEC-DS-2026-V1, IDG-SPEC-LOCALIZATION-2026-V1

---

# 1. بنەماکانی تایپۆگرافی سێ زمانە — Multilingual Typography Principles

The typography architecture of Iraq Digital Gateway ensures seamless aesthetic dignity, mathematical proportion, and crystal readability across Kurdish Sorani, Arabic, and Latin (English) scripts.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. هاوسەنگی فۆنتەکان — MULTILINGUAL METRIC HARMONIZATION                    │
│ Optical baseline compensation for Arabic/Kurdish ascenders and descenders  │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. پلەبەندی بیرکاریانە — MATHEMATICAL TYPE SCALING (Major Third / 1.25)     │
│ Consistent step ratios from 12px captions to 48px hero headlines            │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. هێڵی ڕێکوپێک — COMFORTABLE LINE HEIGHTS (1.5 - 1.7)                      │
│ Expanded vertical line leading for Arabic/Kurdish (+15%) to prevent clipping│
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 2. تایبەتمەندی خێزانی فۆنتەکان — Font Family Hierarchy

- **UI & Body Sans-Serif**:
  - Latin (English): Modern geometric neo-grotesque sans-serif with high x-height and clear distinction between `1`, `l`, and `I`.
  - Arabic & Kurdish Sorani: Modern high-legibility Naskh-inspired digital typeface designed specifically for UI density and screen rendering.
- **Code & Monospace**:
  - Universal: Clean monospace font with slashed zeros, distinct punctuation glyphs, and equal character widths for JSON, YAML, and code blocks.

---

# 3. پلەبەندی قەبارەی دەق و فۆنت — Type Scale & Usage Rules

| ئاست — Level | قەبارە — Size | بەرزی دێڕ — Line Height | کێش — Weight | مەبەستی بەکارهێنان — Application |
| :--- | :--- | :--- | :--- | :--- |
| **Display / H1** | `32px - 40px` | `1.2 - 1.3` | Bold (700) | پەڕەی سەرەکی، سەردێڕی دۆکیومێنت |
| **Section Title / H2**| `24px - 28px` | `1.3 - 1.4` | SemiBold (600) | ناونیشانی بەشە سەرەکییەکان |
| **Subhead / H3** | `18px - 20px` | `1.4 - 1.5` | SemiBold (600) | ناونیشانی بەند و ڕێساکان |
| **Body Large** | `16px` | `1.6 - 1.7` | Regular (400) | دەقی سەرەکی و بڕگەکان |
| **Body Small / Meta** | `14px` | `1.5` | Regular / Medium | جدولەکان، کارتی زانیاری، پەراوێز |
| **Caption / Code** | `12px - 13px` | `1.4` | Monospace (500)| کۆد، تاگی دۆخ، ناسێنەری بەڵگەنامە |
