# بەڵگەنامەی بەرهەمی 001: دەروازەی ژیریی عێراق — Product 001: AI Gate Iraq Specification

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-PROD-001-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG) / دەروازەی دیجیتاڵی عێراق
- **ناسێنەری بەرهەم — Product Registration**: Product 001
- **پۆلێنبەندی — Classification**: Flagship Product Architecture Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-CORP-ID-2026-V1, IDG-SPEC-API-2026-V1, IDG-SPEC-DATA-2026-V1

---

# 1. پێناسەی بەرهەمی 001 و ئامانجەکان — Product 001 Overview & Mission

**AI Gate Iraq (دەروازەی ژیریی عێراق / بوابة الذكاء الاصطناعي العراق)** is the premier flagship product (`Product 001`) engineered, owned, and operated by Iraq Digital Gateway (IDG).

It serves as the sovereign national artificial intelligence gateway, orchestrating state-of-the-art Large Language Models (LLMs), multilingual contextual knowledge retrieval (RAG), and developer API infrastructure optimized for Kurdish Sorani, Arabic, and English enterprise workloads.

```
                      ┌────────────────────────────────────────┐
                      │       IRAQ DIGITAL GATEWAY (IDG)       │
                      │          (Parent Enterprise)           │
                      └───────────────────┬────────────────────┘
                                          │
                                          ▼
                      ┌────────────────────────────────────────┐
                      │              AI GATE IRAQ              │
                      │             (Product 001)              │
                      │           Host: aigate.iq              │
                      └───────────────────┬────────────────────┘
                                          │
         ┌───────────────────┬────────────┴────────────┬───────────────────┐
         ▼                   ▼                         ▼                   ▼
┌─────────────────┐ ┌─────────────────┐       ┌─────────────────┐ ┌─────────────────┐
│LLM Orchestration│ │ Trilingual RAG  │       │  Enterprise API │ │ Developer Portal│
│& Inference Mesh │ │ Vector Database │       │Gateway & Billing│ │ & SDK Ecosystem │
└─────────────────┘ └─────────────────┘       └─────────────────┘ └─────────────────┘
```

---

# 2. مۆدیوول و تواناکانی بەرهەم — Functional Modules & Capabilities

### 1. مۆدیوولی لێخوڕینی مۆدێلەکان — LLM Orchestration & Inference Gateway
- Multi-model routing (Google Gemini 1.5/2.0 Pro/Flash, Claude, Open Weights).
- Real-time streaming response engine via Server-Sent Events (SSE) and WebSockets.
- Prompt safety guardrails and anti-injection sanitization.

### 2. مۆدیوولی داتابەیسی ڤێکتەری و گەڕان — Trilingual Vector RAG Engine
- Dense semantic vector embeddings paired with hybrid BM25 lexical search.
- Native tokenization handling for Kurdish Sorani orthography and Arabic morphological roots.
- Sovereign document parsing (PDF, DOCX, Markdown, HTML) with metadata attribution.

### 3. ڕووکاری بەکارهێنەر و پرۆگرامسازی — Enterprise APIs & Web Console
- High-performance web console (`aigate.iq`) with trilingual interface toggling.
- RESTful OpenAPI 3.1 endpoints (`https://api.aigate.iq/v1/chat/completions`).
- Enterprise tenant isolation, API quota management, and granular usage telemetry.

---

# 3. تەلارسازی تەکنیکی و ئاسایش — Technical Architecture & Security

- **Hosting & Ingress**: Cloudflare Enterprise WAF with TLS 1.3 terminating at GCP Cloud Run container clusters.
- **Data Governance**: Zero user prompt retention for external model training; customer data encrypted under tenant-specific KMS keys.
- **SLA Commitment**: 99.95% API uptime with sub-100ms first-token latency targets for optimized models.
