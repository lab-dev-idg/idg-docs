# ستانداردەکانی گەشبینکردنی گەڕان و پێگە — Enterprise SEO Standards

## بەڵگەنامەی ناساندن — Document Identification
- **ناسێنەری بەڵگەنامە — Document Identifier**: IDG-STD-SEO-2026-V1
- **دامەزراوەی دایک — Parent Organization**: Iraq Digital Gateway (IDG)
- **پۆلێنبەندی — Classification**: Search Engine Optimization Standard
- **پێگەی بەڵگەنامە — Status**: Production Approved
- **پەیوەست بە — Related Specifications**: IDG-SPEC-SEO-2026-V1, IDG-SPEC-IA-2026-V1

---

# 1. مەبەست و مەودا — Purpose & Scope

This standard governs metadata structures, international hreflang tags, structured data (JSON-LD), crawl budget optimization, and performance baselines across all public web domains operated by IDG.

---

# 2. پێداویستییە سەرەکییەکانی SEO — Core SEO Requirements

1. **Multilingual Hreflang Tags**: Every indexable page must output bidirectional alternate hreflang tags linking `en-US`, `ar-IQ`, and `ckb-IQ` along with `x-default`.
2. **Canonical URL Enforcement**: Explicit `<link rel="canonical">` on every page pointing to the preferred protocol and domain to eliminate duplicate content penalties.
3. **Structured Data (Schema.org / JSON-LD)**: Rich snippet schema embedded for Organization, WebSite, SoftwareApplication, and TechArticle.
4. **Core Web Vitals**:
   - Largest Contentful Paint (LCP) <= 2.5s.
   - Interaction to Next Paint (INP) <= 200ms.
   - Cumulative Layout Shift (CLS) <= 0.1.
5. **Dynamic Sitemap & Robots.txt**: XML sitemaps partitioned by language and submitted automatically to search consoles.

---

# 3. حوکمڕانی و چاودێری — Governance & Continuous Audits

- **Automated Verification**: Regular automated Lighthouse SEO audits enforcing >= 95 score on all production pages.
- **Review Cycle**: Quarterly keyword and taxonomy audit aligned with product roadmap releases.
