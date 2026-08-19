# ستانداردە کەمترینەکانی بەرهەم — Enterprise Product Quality Standards

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-PROD-STAND-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Product Quality & Technical Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-PROD-ARCH-2026-V1, IDG-SPEC-API-2026-V1

---

# 1. بنەماکانی کوالێتی بەرهەم — Quality & Architecture Principles

To maintain institutional prestige, every product engineered under Iraq Digital Gateway must satisfy strict baseline criteria across architecture, user experience, security, data, APIs, observability, and localization.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. ئەزموونی بەکارهێنەر — UX & ACCESSIBILITY (WCAG 2.2 AA & RTL PARITY)      │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. ئاسایش و سفر-متمانە — SECURITY & ZERO TRUST ISOLATION                    │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. ڕێککەوتنی ئەندازیاری — API CONTRACT FIRST & OPENAPI 3.1 COMPLIANCE       │
├─────────────────────────────────────────────────────────────────────────────┤
│ 4. بەردەوامی و تێبینی‌پێکراوی — 99.95% AVAILABILITY & STRUCTURED TELEMETRY   │
├─────────────────────────────────────────────────────────────────────────────┤
│ 5. سەروەری سێ زمانە — 100% TRILINGUAL PARITY (EN / AR / CKB)                │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 2. پێوەرە وردەکانی کایەکان — Detailed Domain Criteria

### 1. ئەزموونی بەکارهێنەر و دیزاین — UX & Design Standards
- Zero hardcoded colors; 100% token usage from `design-system/design-tokens.md`.
- Flawless Left-to-Right (LTR) and Right-to-Left (RTL) optical balance.
- Keyboard navigation (Tab, Enter, Escape, Arrow keys) supported across all interactive widgets.

### 2. ئاسایش و سەروەری دیجیتاڵی — Security Standards
- TLS 1.3 enforced on all ingress endpoints with HSTS (max-age=31536000).
- All sensitive database fields encrypted at rest via AES-256-GCM.
- Zero plaintext API tokens stored in version control or browser storage.

### 3. ڕووکاری پرۆگرامسازی — API & Integration Standards
- RESTful HTTP APIs or gRPC with strict JSON Schema / Protocol Buffer validation.
- Standardized error schema (`code`, `message`, `timestamp`, `trace_id`).
- Automated idempotency key support on all mutating endpoints (`POST`, `PUT`, `PATCH`).

### 4. بەڵگەنامەکردن و فێرکاری — Documentation Standards
- Every product must ship with an interactive developer reference, OpenAPI specification, and architectural documentation.
