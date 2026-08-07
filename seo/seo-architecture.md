# Iraq Digital Gateway (IDG) Enterprise SEO & Discoverability Architecture Specification

## Document Identification
- **Document Identifier**: IDG-SPEC-SEO-2026-V1
- **Parent Organization**: Iraq Digital Gateway (IDG)
- **Primary Product Reference**: AI Gate Iraq (Product 001)
- **Status**: Production Approved
- **Classification**: Enterprise Restricted
- **Effective Date**: 2026-08-07
- **Review Cycle**: Annual mandatory audit or upon deployment of new core domains/products

---

# 1. Executive SEO Architecture Principles

The Iraq Digital Gateway (IDG) Enterprise SEO Architecture Specification defines the technical search engine optimization standards, indexing protocols, structured data schemas, multi-region routing rules, and AI discoverability frameworks governing all present and future digital assets under IDG ownership.

## 1.1 Scope and Organisational Framework
- **Parent Entity Authority (IDG)**: IDG serves as the corporate holding organization (`idg.global`). All brand authority, corporate governance disclosures, investor relationships, global trust metrics, and entity knowledge graph anchors originate from the parent domain.
- **Product Entity Autonomy (AI Gate Iraq - Product 001)**: AI Gate Iraq (`aigate.iq`) operates as the autonomous Product 001. It maintains product-specific keyword authority, technical API documentation indexing, solution cluster hubs, and localized regional search dominance.
- **Future Portfolio Expansion (Product 002 through Product N)**: Future subsidiaries, products, platforms, and services automatically inherit the domain topology, canonicalization rules, Schema.org definitions, and AI search indexing standards established in this specification.

## 1.2 Core Architectural Objectives
1. **Zero-Trust Indexing Governance**: Every published page explicitly defines its indexation state (`index`, `noindex`), canonical authority, language alternatives (`hreflang`), and AI ingestion permissions.
2. **Search & AI Dual Optimization**: Architecture simultaneously optimizes for traditional lexical search engines (Google, Bing) and AI Answer Engines (Google AI Overviews, Gemini, ChatGPT, Claude, Perplexity, Microsoft Copilot) via structured entity graphs and Answer Engine Optimization (AEO).
3. **Multilingual Equivalency**: Native, first-class search performance across English (`en`), Arabic (`ar-IQ`), and Kurdish Sorani (`ckb-IQ`), with architectural provisioning for infinite language expansion.
4. **Sub-Second Performance Budget**: Core Web Vitals thresholds strictly enforced as ranking factors across global CDN Edge locations.

---

# 2. Domain & URL Topology Strategy

The IDG digital ecosystem employs a hybrid domain and path structure designed to isolate risk, maximize regional brand equity, and preserve centralized domain authority.

## 2.1 Top-Level Domain (TLD) Architecture
- **Corporate Parent Hub**: `https://idg.global/` - Serves as the primary root domain for corporate affairs, investor relations, governance disclosures, and global portfolio directories.
- **Product 001 Regional Domain**: `https://aigate.iq/` - Serves as the primary regional market domain for AI Gate Iraq, capitalizing on the `.iq` Country Code Top-Level Domain (ccTLD) for strong local geotargeting signals in Iraq.
- **Corporate Mirror / Canonical Alternative**: `https://idg.global/portfolio/ai-gate-iraq/` - Serves as the corporate portfolio node, cross-linked to `aigate.iq` via explicit canonical and `hreflang` relationship declarations.

## 2.2 Subdomain Directory Policy
Subdomains are strictly restricted to specialized technical or operational systems to prevent dilution of domain authority.
- `docs.idg.global` - Centralized Documentation Gateway (proxy-routed to product sub-paths).
- `api.idg.global` - Production API Endpoint Gateway (Configured with `X-Robots-Tag: noindex, nofollow`).
- `auth.idg.global` - Enterprise SSO Authentication Portal (`X-Robots-Tag: noindex, nofollow`).
- `status.idg.global` - Real-Time System Operational Status Hub (`index, follow`).

## 2.3 URL Structural Standards & Formatting Rules
All URLs generated across IDG properties must conform to the following mandatory parameters:
1. **Lowercase String Rule**: All characters in the URL path must be strictly lowercase.
2. **Hyphen Separator Rule**: Word boundaries must use hyphens (`-`). Underscores (`_`) or spaces are strictly prohibited.
3. **Trailing Slash Standardization**: All directory-style HTML URLs MUST terminate with a trailing slash (`/`). Non-trailing slash requests MUST issue a `301 Permanent Redirect` to the trailing slash canonical URL.
4. **Parameter Hygiene**: Query parameters (`?sort=`, `?page=`, `?filter=`) are strictly forbidden for primary content nodes. Faceted navigation parameters must render `rel="canonical"` targeting the clean parameter-free base URL.
5. **No File Extensions**: Public URLs must not expose file extensions (`.html`, `.php`, `.aspx`).
6. **Max Slug Length**: Individual path slugs must not exceed 50 characters. Complete URL length must not exceed 120 characters.

---

# 3. Multilingual & Multi-Region SEO Architecture

Multilingual SEO governs how content in multiple languages is indexed, associated, and served to users based on language preference and geographic region.

## 3.1 Primary Language Locale Matrix
- **Global Canonical Base**: `en` (`en-US` / `en-GB`)
- **Primary Regional Target 1**: `ar-IQ` (Iraq Arabic) / `ar` (Global Arabic)
- **Primary Regional Target 2**: `ckb-IQ` (Iraq Kurdish Sorani)

## 3.2 URL Localization Mapping Scheme
Localized content uses sub-directory language prefixes on primary domains:

| Entity Domain | English (Canonical) | Arabic (`ar-IQ`) | Kurdish Sorani (`ckb-IQ`) |
| :--- | :--- | :--- | :--- |
| **IDG Corporate** | `https://idg.global/about/` | `https://idg.global/ar/about/` | `https://idg.global/ckb/about/` |
| **Product 001 Hub** | `https://aigate.iq/` | `https://aigate.iq/ar/` | `https://aigate.iq/ckb/` |
| **Product 001 Docs** | `https://aigate.iq/docs/sec/` | `https://aigate.iq/ar/docs/sec/` | `https://aigate.iq/ckb/docs/sec/` |

## 3.3 `hreflang` Annotation Specification
Every page MUST render complete, reciprocal `hreflang` link elements in the HTML `<head>` and XML Sitemaps.

```html
<!-- Rendered on https://idg.global/about/ -->
<link rel="alternate" hreflang="en" href="https://idg.global/about/" />
<link rel="alternate" hreflang="ar-IQ" href="https://idg.global/ar/about/" />
<link rel="alternate" hreflang="ar" href="https://idg.global/ar/about/" />
<link rel="alternate" hreflang="ckb-IQ" href="https://idg.global/ckb/about/" />
<link rel="alternate" hreflang="x-default" href="https://idg.global/about/" />
```

## 3.4 Language Fallback & Cross-Language Canonicalization
- **Canonical Self-Reference**: Each localized page MUST contain a `rel="canonical"` tag pointing to ITSELF, NOT to the English version.
- **Example**: `https://idg.global/ar/about/` MUST have `<link rel="canonical" href="https://idg.global/ar/about/" />`.
- **`x-default` Target**: The `x-default` hreflang attribute MUST always point to the global English canonical URL.

---

# 4. Enterprise Metadata Standards

Metadata dictates how search engine crawlers interpret page topics and how social platforms display preview snippets.

## 4.1 Metadata Schema Requirements per Page
Every HTML document MUST contain a fully populated metadata block satisfying the following technical constraints:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Primary Indexing Controls -->
  <title>AI Gate Iraq | Sovereign Enterprise AI Infrastructure | IDG</title>
  <meta name="description" content="AI Gate Iraq (Product 001) delivers sovereign enterprise AI infrastructure, Arabic NLP engines, and secure cloud intelligence for government and financial institutions." />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <link rel="canonical" href="https://aigate.iq/" />

  <!-- Language Alternates -->
  <link rel="alternate" hreflang="en" href="https://aigate.iq/" />
  <link rel="alternate" hreflang="ar-IQ" href="https://aigate.iq/ar/" />
  <link rel="alternate" hreflang="ckb-IQ" href="https://aigate.iq/ckb/" />
  <link rel="alternate" hreflang="x-default" href="https://aigate.iq/" />

  <!-- Open Graph / Social Metadata -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Iraq Digital Gateway" />
  <meta property="og:title" content="AI Gate Iraq | Sovereign Enterprise AI Infrastructure" />
  <meta property="og:description" content="AI Gate Iraq delivers sovereign enterprise AI infrastructure and secure cloud intelligence for government and enterprise." />
  <meta property="og:url" content="https://aigate.iq/" />
  <meta property="og:image" content="https://aigate.iq/assets/og-aigate-primary.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:locale:alternate" content="ar_IQ" />
  <meta property="og:locale:alternate" content="ckb_IQ" />

  <!-- Twitter Card Metadata -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@IDG_Global" />
  <meta name="twitter:title" content="AI Gate Iraq | Sovereign Enterprise AI Infrastructure" />
  <meta name="twitter:description" content="Sovereign enterprise AI infrastructure for government and corporate clients in Iraq." />
  <meta name="twitter:image" content="https://aigate.iq/assets/og-aigate-primary.png" />

  <!-- Mobile & UI Tokens -->
  <meta name="theme-color" content="#0f172a" />
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
</head>
```

## 4.2 Metadata Validation Limits
- **Title Length**: 50 to 60 characters maximum (580 pixels max display width).
- **Description Length**: 140 to 155 characters maximum (990 pixels max display width).
- **Keyword Meta Tag Policy**: `<meta name="keywords">` is explicitly **PROHIBITED** across all IDG web assets to prevent competitive keyword leaks and obsolete code bloat.

---

# 5. Schema.org & JSON-LD Structured Data Infrastructure

Structured data provides unambiguous machine-readable semantic information to Google Search, Bing, and AI knowledge engines.

## 5.1 Global Corporation Schema (`idg.global/`)
Placed on the corporate homepage to establish IDG as the ultimate parent entity.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Corporation",
      "@id": "https://idg.global/#corporation",
      "name": "Iraq Digital Gateway",
      "alternateName": ["IDG", "البوابة الرقمية العراقية", "دەروازەی دیجیتاڵی عێراق"],
      "url": "https://idg.global",
      "logo": {
        "@type": "ImageObject",
        "url": "https://idg.global/assets/idg-logo-brand.png",
        "caption": "Iraq Digital Gateway Corporate Logo"
      },
      "description": "Iraq Digital Gateway (IDG) is the parent enterprise holding company advancing sovereign cloud, enterprise artificial intelligence, and regional digital infrastructure.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Baghdad",
        "addressCountry": "IQ"
      },
      "subOrganization": [
        {
          "@type": "Project",
          "@id": "https://aigate.iq/#organization",
          "name": "AI Gate Iraq",
          "url": "https://aigate.iq"
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/iraq-digital-gateway",
        "https://twitter.com/IDG_Global"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://idg.global/#website",
      "url": "https://idg.global",
      "name": "Iraq Digital Gateway Enterprise",
      "publisher": {
        "@id": "https://idg.global/#corporation"
      },
      "inLanguage": ["en", "ar", "ckb"]
    }
  ]
}
```

## 5.2 Product & Software Application Schema (`aigate.iq/`)
Placed on the primary Product 001 web property to define software capabilities and enterprise offers.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://aigate.iq/#software",
      "name": "AI Gate Iraq",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Cloud-Native, Sovereign On-Premise",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Enterprise pilot deployment available upon consultation."
      },
      "publisher": {
        "@type": "Organization",
        "name": "Iraq Digital Gateway",
        "url": "https://idg.global"
      },
      "description": "Enterprise sovereign artificial intelligence platform delivering regional NLP, vector knowledge indexing, and secure data orchestration."
    },
    {
      "@type": "TechArticle",
      "@id": "https://aigate.iq/docs/security/#article",
      "headline": "AI Gate Iraq Sovereign Security & Compliance Framework",
      "inLanguage": "en",
      "author": {
        "@type": "Organization",
        "name": "IDG Enterprise Security Directorate"
      },
      "publisher": {
        "@id": "https://idg.global/#corporation"
      }
    }
  ]
}
```

## 5.3 BreadcrumbList Schema Standard
Mandatory on every internal content, product, and documentation page.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "IDG Home",
      "item": "https://idg.global/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Portfolio",
      "item": "https://idg.global/portfolio/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "AI Gate Iraq",
      "item": "https://aigate.iq/"
    }
  ]
}
```

---

# 6. XML Sitemaps Architecture

XML Sitemaps provide an explicit index of all crawlable HTML, video, image, and documentation endpoints.

## 6.1 Sitemap Index Structure
Primary Sitemap Index file located at `https://idg.global/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://idg.global/sitemaps/sitemap-corporate.xml</loc>
    <lastmod>2026-08-07T08:00:00+00:00</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://aigate.iq/sitemaps/sitemap-product-001.xml</loc>
    <lastmod>2026-08-07T08:00:00+00:00</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://aigate.iq/sitemaps/sitemap-docs.xml</loc>
    <lastmod>2026-08-07T08:00:00+00:00</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://idg.global/sitemaps/sitemap-news.xml</loc>
    <lastmod>2026-08-07T08:00:00+00:00</lastmod>
  </sitemap>
</sitemapindex>
```

## 6.2 XML Sitemap Entry Requirements
Each individual XML sitemap must render localized URL alternates using the `xhtml:link` namespace:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://aigate.iq/</loc>
    <lastmod>2026-08-07T08:00:00+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://aigate.iq/" />
    <xhtml:link rel="alternate" hreflang="ar-IQ" href="https://aigate.iq/ar/" />
    <xhtml:link rel="alternate" hreflang="ckb-IQ" href="https://aigate.iq/ckb/" />
  </url>
</urlset>
```

---

# 7. Robots Policy & AI Crawler Directives

Robots policies govern search engine access and define permissions for Artificial Intelligence LLM training crawlers.

## 7.1 Production `robots.txt` Specification (`https://idg.global/robots.txt` & `https://aigate.iq/robots.txt`)

```
# IDG Enterprise Robots Specification
User-agent: *
Allow: /
Disallow: /api/
Disallow: /auth/
Disallow: /admin/
Disallow: /_internal/
Disallow: /*?*sort=
Disallow: /*?*filter=

# Search Engine Crawlers Explicit Permissions
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# AI Search Engine & Retrieval Bots (AEO/GEO Permitted)
User-agent: Google-Extended
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Bytespider
Disallow: /

# XML Sitemap Index Location
Sitemap: https://idg.global/sitemap.xml
Sitemap: https://aigate.iq/sitemap.xml
```

---

# 8. AI Search Optimization (AEO & GEO)

Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) ensure IDG content is cited and synthesized by AI systems (Google AI Overviews, Gemini, ChatGPT, Claude, Perplexity).

## 8.1 Entity-First Content Structuring
- **Direct Answer Paragraphs**: Key pages must begin with a 40-to-60-word authoritative summary paragraph answering "What is [Entity/Capability]".
- **Structured Fact Tables**: Technical specifications, API benchmarks, and compliance lists MUST be formatted as semantic HTML `<table>` elements to facilitate AI extraction.
- **`llms.txt` Standard Compliance**: Provision of `/llms.txt` and `/llms-full.txt` files at root domains listing plain text documentation trees for AI crawlers.

```
# IDG Enterprise LLM Index (llms.txt)
> IDG is the parent holding corporation. AI Gate Iraq is Product 001.

## Core Resources
- [IDG Corporate Overview](https://idg.global/about.md): Institutional governance and holding details.
- [AI Gate Iraq Product Overview](https://aigate.iq/overview.md): Sovereign AI platform architecture.
- [AI Gate Iraq Security Specification](https://aigate.iq/docs/security.md): Security and compliance framework.
```

---

# 9. Core Web Vitals & Technical Performance Budget

Search engine ranking algorithms heavily penalize slow or unstable web pages. All IDG web properties operate under a strict technical performance budget.

## 9.1 Performance Metrics Targets
- **Largest Contentful Paint (LCP)**: ≤ 1.2 seconds (Good).
- **Interaction to Next Paint (INP)**: ≤ 100 milliseconds (Good).
- **Cumulative Layout Shift (CLS)**: 0.00 (Zero layout shift).
- **Time to First Byte (TTFB)**: ≤ 200 milliseconds globally via Edge CDN caching.

## 9.2 Technical Execution Directives
1. **Next-Gen Image Formats**: All images served exclusively in WebP or AVIF formats with mandatory `width` and `height` inline attributes to eliminate layout shifts.
2. **Font Loading Strategy**: Fonts loaded using `font-display: swap` with preloaded critical subset files.
3. **CSS/JS Compression**: Edge CDN enforces Brotli (`br`) compression across all text payloads.
4. **Zero Unused JavaScript**: Critical CSS inline; non-critical JavaScript deferred (`defer` / `async`).

---

# 10. SEO Governance & Audit Workflow

SEO integrity is enforced through continuous CI/CD integration and quarterly architectural audits.

## 10.1 Automated CI/CD Testing Pipeline
- Every pull request to website repositories runs automated Lighthouse and axe-core accessibility/SEO audits.
- Build fails automatically if:
  - Canonical URL is missing or malformed.
  - Page title or description violates length parameters.
  - Image missing `alt` attribute.
  - Broken internal or external links detected.

## 10.2 Document Control
- **Document Identifier**: IDG-SPEC-SEO-2026-V1
- **Current Version**: 1.0.0
- **Document Owner**: IDG Technical SEO & Search Infrastructure Board
- **Approved By**: Chief Technology Officer & Head of Search Infrastructure
- **Status**: Authoritative Enterprise Specification
- **Review Cycle**: Annual or upon launch of new primary product domains
- **Repository Location**: `/seo/seo-architecture.md`
