# تەلارسازی بەرهەم و پلاتفۆرمی دامەزراوە — Master Product Architecture Specification

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-PROD-ARCH-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG) / دەروازەی دیجیتاڵی عێراق
- **پۆلێنبەندی — Classification**: Product Architecture Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-CORP-ARCH-2026-V1, IDG-PROD-001-2026-V1

---

# 1. مەبەست و جیاکردنەوەی پلاتفۆرم لە بەرهەم — Purpose & Platform/Product Distinction

This specification establishes the structural separation and interaction models between shared enterprise platforms and specific product implementations.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. بەرهەمە بازرگانی و ڕووکەشەکان — PRODUCT APPLICATION LAYER                 │
│ AI Gate Iraq (Product 001) • Vertical Portals • Developer SDKs & Dashboards │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. پلاتفۆرمی خزمەتگوزاری هاوبەش — SHARED ENTERPRISE PLATFORM LAYER           │
│ Auth (OIDC) • Billing Engine • Translation Pipeline • Data Mesh • Audit Log │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. ژێرخانی تەکنیکی و ژیری — COGNITIVE & COMPUTE INFRASTRUCTURE LAYER       │
│ LLM Inference Clusters • Vector DB • Multi-Cloud Enclaves • Cloudflare WAF  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 2. بنەماکانی تەلارسازی بەرهەم — Product Architecture Principles

1. **پابەندبوون بە ستانداردەکانی هاوبەش — Shared Substrate Inheritance**: Every product leverages IDG design tokens, authentication gateways, and security policies without creating redundant login or billing silos.
2. **سەربەخۆیی خزمەتگوزارییەکان — Microservice & Domain Isolation**: Product logic is decoupled from underlying shared platforms via documented REST/gRPC interfaces.
3. **پشتیوانی سێ زمانی لە ڕۆژی یەکەمەوە — Day-One Trilingual Native Design**: Products must never ship English-only prototypes; Kurdish Sorani, Arabic, and English support is a blocking launch gate.
4. **سەروەری و پاراستنی بەکارهێنەر — User Privacy & Sovereign Isolation**: Tenant data is cryptographically separated across all storage and retrieval planes.

---

# 3. پەیوەندی بەرهەمەکانی داھاتوو — Scalability to Product 002 through 500+

The architecture provides a standardized **Product Scaffolding Blueprint** allowing new domain-specific products to instantiate instantly by binding to the IDG platform substrate:
- Identity & RBAC provisioned automatically via IDG Central IAM.
- Trilingual localization strings managed via the centralized i18n registry.
- Security and WAF rules inherited from parent Cloudflare / GCP VPC configurations.
