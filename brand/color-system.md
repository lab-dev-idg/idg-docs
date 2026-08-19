# سیستەمی ڕەنگە پەسەندکراوەکان — Approved Enterprise Color System

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-BRAND-COLOR-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Brand Color Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-SPEC-DS-2026-V1, IDG-BRAND-VISUAL-2026-V1

---

# 1. ڕەنگە سەرەکییە پەسەندکراوەکانی دامەزراوە — Approved Core Color Palette

The official, immutable enterprise color palette for Iraq Digital Gateway (IDG) and Product 001 (`AI Gate Iraq`) consists of the following calibrated hexadecimal values:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       APPROVED IDG CORE PALETTE                             │
├───────────────────┬───────────────────┬───────────────────┬─────────────────┤
│ IDG Deep Navy     │ Midnight Graphite │ Electric Cyan     │ IDG Digital Blue│
│ #06172B           │ #0F172A           │ #19C7FF           │ #087BFF         │
│ (Primary Brand)   │ (Dark Canvas)     │ (Primary Accent)  │ (Interactive UI)│
├───────────────────┴───────────────────┴───────────────────┴─────────────────┤
│ Royal Blue: #1259C3 (Secondary Enterprise Accent / Hover State)             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 2. ڕەنگە واتاییەکان — Semantic & State Color System

| مەبەستی واتایی — Semantic Purpose | کۆدی HEX | نموونەی بەکارهێنان — UI Application |
| :--- | :--- | :--- |
| **Success / Approved (سەرکەوتوو)** | `#10B981` (Emerald 500) | پەسەندکراو، سەرکەوتنی بڵاوکردنەوە، سیستەمی ئۆنلاین |
| **Warning / Caution (ئاگاداری)** | `#F59E0B` (Amber 500) | ڕێژەی کاتی، هۆشداری پێداچوونەوە، دۆخی تاقیکاری |
| **Destructive / Error (هەڵە)** | `#EF4444` (Red 500) | شکستی پەیوەندی، سڕینەوە، هەڵەی کۆد |
| **Informational (زانیاری)** | `#087BFF` (IDG Digital Blue) | ڕێنمایی، بەستەری فێرکاری، دۆخی دۆکیومێنت |

---

# 3. دەستڕاگەیشتن و ڕێژەی کۆنتراست — Accessibility & WCAG 2.2 AA Compliance

1. **Contrast Ratio**: All body copy and interactive labels must sustain at least a **4.5:1** contrast ratio against their immediate background canvas. Large titles (>= 24px) sustain at least **3.0:1**.
2. **Zero Gray Text on Colored Backgrounds**: Muted grays may only be placed on neutral white, slate-50, or dark navy canvases.
3. **Color-Blindness Independence**: No UI state (error, success, active) may be conveyed solely through color; icons and textual badges must always accompany color cues.
