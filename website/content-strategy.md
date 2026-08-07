# Iraq Digital Gateway (IDG) Enterprise Website Content & Localization Strategy Specification

## Document Identification
- **Document Identifier**: IDG-SPEC-CTS-2026-V1
- **Parent Organization**: Iraq Digital Gateway (IDG)
- **Primary Product Reference**: AI Gate Iraq (Product 001)
- **Status**: Production Approved
- **Classification**: Enterprise Restricted
- **Effective Date**: 2026-08-07
- **Review Cycle**: Annual mandatory audit or upon entry into new national/linguistic markets

---

# 1. Executive Content Strategy Principles

The Iraq Digital Gateway (IDG) Website Content Strategy establishes the authoritative governance, editorial standards, localization architecture, and translation workflows across all digital web properties operated by IDG, its subsidiaries, and product lines.

## 1.1 Organizational Boundary Model
- **IDG (Parent Holding Company)**: The corporate entity providing global strategy, governance, legal compliance, investor communications, shared technology frameworks, and overarching institutional credibility.
- **AI Gate Iraq (Product 001)**: The flagship regional AI platform operating under IDG ownership. AI Gate Iraq maintains dedicated product content, localized solution briefs, technical documentation, and regional market positioning.
- **Future Product & Subsidiary Units (Product 002 through Product N)**: Future companies, products, platforms, and services automatically inherit the content architecture, translation pipelines, and governance standards defined within this specification.

## 1.2 Core Content Principles
1. **Single Source of Truth (SSOT)**: Every corporate statement, technical parameter, pricing tier, and regulatory assertion originates from a single, canonical source repository and propagates programmatically across localized sites.
2. **Global Consistency with Regional Sovereignty**: Content adheres to global enterprise brand guidelines while respecting regional cultural norms, legal mandates, language structures, and market expectations.
3. **Machine & AI Primacy**: Content is structured using semantic HTML5, schema markup, and clean Markdown formatting to support direct ingestion by Large Language Models (LLMs), AI synthesis engines, and vector search indices.
4. **Localization by Design**: All digital assets—including text, graphics, data visualizers, media, and interactive calculators—are created to support instant multi-locale translation, RTL/LTR layout mirroring, and regional customization.

---

# 2. Multilingual & Localization Architecture

IDG web properties support a multi-region, multi-language architecture engineered for day-one operation in three primary languages, with seamless technical capabilities to activate additional global languages without code refactoring.

## 2.1 Primary Launch Languages
1. **English (Global - `en-US` / `en-GB`)**: Default canonical source language for technical, corporate, and global investor content. LTR visual layout.
2. **Arabic (`ar-IQ` / `ar-SA` / `ar-EG`)**: Primary regional language for Iraq and MENA public sector, commercial enterprises, and media disclosures. RTL visual layout.
3. **Kurdish Sorani (`ckb-IQ`)**: Primary regional language for Kurdistan Region of Iraq (KRI) public sector, commercial clients, and regional communications. RTL visual layout.

## 2.2 Future Language Expansion Framework
The platform architecture supports instant activation of future target languages via ISO 639-1 / BCP 47 locale codes.
- **Phase 2 Target Languages**: Turkish (`tr-TR`), German (`de-DE`), French (`fr-FR`), Spanish (`es-ES`), Japanese (`ja-JP`), Simplified Chinese (`zh-CN`).
- **Locale Addition Rules**: Activating a new language requires zero frontend code modifications; it requires deploying a locale dictionary file (`locales/{lang-code}.json`), mapping localized markdown repositories, and registering the locale code in the CDN routing matrix.

## 2.3 RTL (Right-to-Left) and LTR (Left-to-Right) Technical Requirements
- **Bi-Directional Layout Engine**: All CSS styles utilize CSS Logical Properties (`margin-inline-start`, `padding-inline-end`, `inset-inline`) rather than physical directional properties (`margin-left`, `padding-right`) to achieve automatic layout mirroring.
- **Font Stack Localization**:
  - `en-US` / LTR: Plus Jakarta Sans (Body), Playfair Display / Inter (Display).
  - `ar-IQ` / RTL: Noto Sans Arabic (Body), Readex Pro / Cairo (Display).
  - `ckb-IQ` / RTL: Noto Sans Arabic / Rabar (Body & Display tuned for Sorani glyph rendering).
- **Iconography & Directional Flipping**: Navigation arrows, timeline progress indicators, slide triggers, and breadcrumb chevrons automatically invert direction when switching to RTL locales. Non-directional visual icons (such as logos, search magnifying glasses, checkmarks) remain stationary.

## 2.4 Translation Workflow & Quality Pipeline
Content translation follows a strict four-stage verification pipeline prior to production publishing.

```
[Stage 1: Source Content Creation (English Canonical)]
                       │
                       ▼
[Stage 2: Neural Translation & LLM Adaptation]
                       │
                       ▼
[Stage 3: Certified Native Linguist Review & Legal Audit]
                       │
                       ▼
[Stage 4: Automated CI/CD Schema & RTL Layout Validation]
                       │
                       ▼
[Production Publishing across CDN Edges]
```

## 2.5 Glossary Management & Corporate Terminology
All translations must strictly utilize the centralized IDG Master Terminology Glossary (`glossary.idg.global`).

| English Canonical Term | Arabic Translation (`ar-IQ`) | Kurdish Sorani Translation (`ckb-IQ`) | Usage Context / Constraints |
| :--- | :--- | :--- | :--- |
| **Iraq Digital Gateway (IDG)** | البوابة الرقمية العراقية (IDG) | دەروازەی دیجیتاڵی عێراق (IDG) | Do not translate abbreviation "IDG". |
| **AI Gate Iraq** | بوابة الذكاء الاصطناعي في العراق | دەروازەی ژیریی دەستکرد لە عێراق | Primary Product 001 designation. |
| **Sovereign Cloud Infrastructure** | البنية التحتية للسحابة السيادية | ژێرخانی هەوری سەروەری | Legal and technical data sovereignty context. |
| **Enterprise Governance** | الحوكمة المؤسسية | حوکمڕانیی دامەزراوەیی | Investor and corporate compliance context. |
| **Artificial Intelligence Agent** | وكيل الذكاء الاصطناعي | بریکاری ژیریی دەستکرد | Technical documentation and API context. |

## 2.6 Legal & Technical Translation Directives
- **Legal Translations**: Contracts, terms of service, privacy statements, and board resolutions must be translated by certified legal linguists. In disputes, the English canonical version serves as the legally binding master text unless regional national law explicitly mandates local language preeminence.
- **Technical & API Translations**: API field names, JSON payloads, variable keys, and code snippets remain un-translated in English across all locale versions. Explanatory comments, parameter descriptions, and error message keys are translated into the target locale.

## 2.7 Regional Formats & Standards
- **Date Formats**:
  - English (`en-US`): `YYYY-MM-DD` (ISO Standard) or `B D, YYYY` (e.g., `August 7, 2026`).
  - Arabic (`ar-IQ`): `D MMMM YYYY` (e.g., `٧ آب ٢٠٢٦` / Gregorian Calendar with Levantine/Iraqi month names).
  - Kurdish (`ckb-IQ`): `D MMMM YYYY` (e.g., `٧ی ئابی ٢٠٢٦`).
- **Number & Currency Formats**:
  - English: Western Arabic numerals (`0, 1, 2, 3, 4...`), USD (`$`), IQD (`IQD`).
  - Arabic / Kurdish: Eastern Arabic numerals (`٠, ١, ٢, ٣, ٤...`) or Western Arabic numerals based on regional user settings; currency rendered as `د.ع` (Iraqi Dinar) or `دولار أمريكي` (US Dollar).
- **Measurement Standards**: Metric System (SI) utilized universally across all languages (`GB`, `TB`, `ms`, `km`, `m²`).

## 2.8 Fallback Language & Missing Translation Policy
- **Zero Blank Content Guarantee**: If a localized text block is missing in `ar-IQ` or `ckb-IQ`, the system automatically falls back to the canonical `en-US` string while logging an automated low-priority translation ticket in the CMS queue.
- **Missing Translation Banner**: In developer documentation, if an article is displayed in fallback English, a subtle non-intrusive alert banner notifies the user: *"This article is not yet fully translated into Arabic. Showing canonical English version."*

---

# 3. Page Content Specifications

Every web page deployed across IDG corporate or product domains must conform to a standardized Content Specification Matrix detailing its operational purpose, audience, conversion targets, and governance metadata.

## 3.1 Corporate Homepage (`idg.global/`)
- **Purpose**: Present IDG as the sovereign corporate holding entity, establishing institutional trust, global footprint, portfolio strength, and investment value.
- **Audience**: Institutional investors, government officials, corporate enterprise executives, regional business partners, global media.
- **Business Goal**: Establish enterprise credibility and drive portfolio discovery.
- **SEO Goal**: Rank #1 for "Iraq Digital Gateway", "IDG Enterprise", "Sovereign Tech Iraq".
- **Primary CTA**: "Explore Portfolio"
- **Secondary CTA**: "Investor Disclosures"
- **Content Owner**: IDG Corporate Communications Directorate
- **Review Frequency**: Quarterly
- **Translation Required**: Mandatory (`en-US`, `ar-IQ`, `ckb-IQ`)
- **Approval Workflow**: Chief Communications Officer -> Legal Counsel -> Chief Executive Officer

## 3.2 Product 001 Overview (`aigate.iq/` / `idg.global/portfolio/ai-gate-iraq/`)
- **Purpose**: Showcase AI Gate Iraq platform capabilities, sovereign AI architecture, security certifications, and enterprise deployment options.
- **Audience**: Chief Technology Officers, Ministry IT Directors, Enterprise System Integrators, Enterprise AI Engineers.
- **Business Goal**: Drive enterprise demo requests, pilot deployments, and API evaluation signups.
- **SEO Goal**: Rank #1 for "AI Gate Iraq", "Iraq Sovereign AI", "Enterprise AI Baghdad".
- **Primary CTA**: "Request Enterprise Demo"
- **Secondary CTA**: "Access API Documentation"
- **Content Owner**: AI Gate Iraq Product Marketing Lead
- **Review Frequency**: Monthly
- **Translation Required**: Mandatory (`en-US`, `ar-IQ`, `ckb-IQ`)
- **Approval Workflow**: Product Lead -> Chief Technology Officer -> Regional Managing Director

## 3.3 Corporate Governance & Investor Pages (`idg.global/governance/`, `idg.global/investors/`)
- **Purpose**: Provide full legal transparency, corporate governance charters, board oversight documentation, ESG reports, and financial disclosures.
- **Audience**: Institutional investors, financial auditors, regulatory compliance authorities, legal analysts.
- **Business Goal**: Fulfill regulatory disclosure obligations and build shareholder trust.
- **SEO Goal**: Indexing for financial filings, ESG reports, and board leadership profiles.
- **Primary CTA**: "Download Annual Financial Report"
- **Secondary CTA**: "Contact Investor Relations"
- **Content Owner**: IDG Chief Legal Officer & Investor Relations Director
- **Review Frequency**: Bi-Annual / Post-Earnings Release
- **Translation Required**: Mandatory (`en-US`, `ar-IQ`, `ckb-IQ`)
- **Approval Workflow**: Investor Relations Director -> Chief Legal Officer -> Board Audit Committee

## 3.4 Product Capabilities & Technical Feature Pages (`aigate.iq/features/{feature-slug}/`)
- **Purpose**: Deep-dive functional specifications for individual platform modules (e.g., Sovereign Data Processing, Arabic NLP Engine, Vector Knowledge Indexing).
- **Audience**: Technical architects, software engineers, data protection officers.
- **Business Goal**: Validate technical feasibility and eliminate purchasing friction.
- **SEO Goal**: Rank for long-tail technical queries ("Arabic LLM Enterprise SDK", "Sovereign AI Iraq Security").
- **Primary CTA**: "Deploy Capability"
- **Secondary CTA**: "View API Reference"
- **Content Owner**: Technical Product Marketing Manager & Lead Solution Architect
- **Review Frequency**: Bi-Monthly
- **Translation Required**: Mandatory (`en-US`, `ar-IQ`, `ckb-IQ`)
- **Approval Workflow**: Solution Architect -> Product Lead

## 3.5 Developer Portal & API Documentation (`docs.idg.global/` / `aigate.iq/docs/`)
- **Purpose**: Deliver complete, interactive API references, SDK installation guides, code samples, and integration tutorials.
- **Audience**: Software developers, system integrators, DevOps engineers.
- **Business Goal**: Drive developer adoption, API token generation, and integration velocity.
- **SEO Goal**: Rank for developer keywords ("AI Gate Iraq API SDK", "Baghdad AI Endpoint REST").
- **Primary CTA**: "Generate API Key"
- **Secondary CTA**: "Fork Sample Code on GitHub"
- **Content Owner**: Developer Relations Lead & Technical Writer Team
- **Review Frequency**: Continuous (Automated via GitOps CI/CD)
- **Translation Required**: Mandatory for guides; English-canonical for code parameters.
- **Approval Workflow**: Lead Technical Writer -> Engineering Lead

## 3.6 Industry & Sector Solution Pages (`idg.global/solutions/{industry-slug}/`)
- **Purpose**: Map IDG platform capabilities directly to industry pain points (Government, Banking & Finance, Telecom, Healthcare, Energy).
- **Audience**: Industry vertical buyers, Ministry Procurement Directors, Enterprise VPs.
- **Business Goal**: Generate qualified sales inquiries tailored to specific market sectors.
- **SEO Goal**: Rank for vertical keywords ("Iraq Public Sector Digital Transformation", "Banking AI Iraq").
- **Primary CTA**: "Request Industry Consultation"
- **Secondary CTA**: "Download Sector Case Study"
- **Content Owner**: Vertical Industry Solutions Director
- **Review Frequency**: Quarterly
- **Translation Required**: Mandatory (`en-US`, `ar-IQ`, `ckb-IQ`)
- **Approval Workflow**: Solutions Director -> Commercial Vice President

## 3.7 Press Room & Corporate News (`idg.global/newsroom/`)
- **Purpose**: Publish verified corporate press releases, executive statements, partnerships, and media kits.
- **Audience**: Financial press, regional journalists, industry analysts, public audience.
- **Business Goal**: Maintain media presence and control corporate narrative.
- **SEO Goal**: Timely indexing of press releases and media announcements in Google News and financial feeds.
- **Primary CTA**: "Download Press Release (PDF)"
- **Secondary CTA**: "Contact Media Relations"
- **Content Owner**: Corporate Media Relations Director
- **Review Frequency**: Ad-hoc (Per Release)
- **Translation Required**: Mandatory (`en-US`, `ar-IQ`, `ckb-IQ`)
- **Approval Workflow**: Media Relations Director -> Chief Legal Officer -> Executive Director

## 3.8 Careers & Human Capital (`idg.global/careers/`)
- **Purpose**: Attract top-tier regional and global engineering, commercial, and executive talent.
- **Audience**: Software engineers, AI researchers, commercial executives, university graduates.
- **Business Goal**: Drive high-quality job applications and communicate corporate culture.
- **SEO Goal**: Rank for technology career queries in Baghdad, Erbil, and global remote markets.
- **Primary CTA**: "Apply for Position"
- **Secondary CTA**: "Join Talent Network"
- **Content Owner**: Chief Human Resources Officer
- **Review Frequency**: Monthly
- **Translation Required**: Mandatory (`en-US`, `ar-IQ`, `ckb-IQ`)
- **Approval Workflow**: Talent Acquisition Manager -> Chief Human Resources Officer

---

# 4. Corporate Content & Editorial Standards

To preserve brand authority and tone consistency, all web content must strictly adhere to IDG Editorial Standards.

## 4.1 Tone of Voice
- **Authoritative & Institutional**: We speak with calm confidence, reflecting market leadership, technological sophistication, and legal stability.
- **Precise & Unambiguous**: We avoid marketing hyperbole, empty buzzwords, or vague assertions. Every claim is backed by metrics or regulatory facts.
- **Respectful & Culturally Aligned**: We respect regional traditions, national sovereignty, and local business etiquette across all markets.

## 4.2 Reading Level & Sentence Constraints
- **Target Reading Level**: Flesch-Kincaid Grade Level 10-12 (Clear professional executive writing).
- **Sentence Length**: Average sentence length must not exceed 22 words. Paragraphs must not exceed 4 sentences.
- **Passive Voice Constraint**: Passive voice usage must remain below 10% across all technical and marketing copy.

## 4.3 Brand Vocabulary & Terminology Rules
- **Approved Vocabulary**: `Sovereign AI`, `Enterprise Infrastructure`, `Data Governance`, `Institutional Security`, `Regional Integration`, `Scalable Architecture`.
- **Forbidden Terms**: `Disruptive` (overused startup jargon), `Game-changing`, `Synergy`, `World's best`, `Unmatched` (unquantifiable claims), `Cheap` (use `Cost-effective` or `Optimized TCO`).

## 4.4 Capitalization, Numbers, and Abbreviations
- **Headings**: Title Case for H1 headlines in English; Sentence case for H2 and subheadings.
- **Numbers**: Spell out numbers zero through nine in body copy; use digits for 10 and above (`3,000 servers`, `12 data centers`).
- **Abbreviations**: Always define acronyms on first mention: `Iraq Digital Gateway (IDG)`, `Single Sign-On (SSO)`, `Service Level Agreement (SLA)`.

---

# 5. Search Engine Optimization (SEO) & Indexing Rules

SEO architecture enforces global search visibility, cross-language indexing, and canonical content authority.

## 5.1 Localized URL Structure
- `en-US` Canonical: `https://idg.global/about/`
- `ar-IQ` Localized: `https://idg.global/ar/about/` (or `https://idg.global/ar-iq/about/`)
- `ckb-IQ` Localized: `https://idg.global/ckb/about/`
- Product 001 Canonical: `https://aigate.iq/features/`
- Product 001 Arabic: `https://aigate.iq/ar/features/`

## 5.2 `hreflang` Implementation Requirements
Every page MUST render explicit bidirectional `hreflang` annotations in the HTML `<head>`:

```html
<link rel="alternate" hreflang="en" href="https://idg.global/about/" />
<link rel="alternate" hreflang="ar-IQ" href="https://idg.global/ar/about/" />
<link rel="alternate" hreflang="ckb-IQ" href="https://idg.global/ckb/about/" />
<link rel="alternate" hreflang="x-default" href="https://idg.global/about/" />
```

## 5.3 Localized Schema Markup
Pages must render JSON-LD structured data localized to the page language:

```json
{
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "Iraq Digital Gateway",
  "alternateName": "البوابة الرقمية العراقية",
  "url": "https://idg.global",
  "logo": "https://idg.global/assets/idg-logo.svg",
  "sameAs": [
    "https://www.linkedin.com/company/iraq-digital-gateway"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Baghdad",
    "addressCountry": "IQ"
  }
}
```

---

# 6. Accessibility & Media Localization Standards

## 6.1 Accessibility Standards (WCAG 2.2 AA)
- **Screen Reader Compatibility**: Every image must include localized `alt` text (`alt="شعار البوابة الرقمية العراقية"` for Arabic pages).
- **Video Captions**: All corporate videos must feature multi-track VTT subtitles in English, Arabic, and Kurdish.
- **RTL Focus Indicators**: Keyboard focus rings and tab sequences must flow logically right-to-left in RTL languages.

## 6.2 Media & Asset Localization
- **Diagrams & Data Visualizers**: Architecture diagrams must use editable SVG text layers so labels translate automatically based on the active locale.
- **Cultural Appropriateness**: All imagery must feature diverse, culturally appropriate professionals adhering to regional business attire standards.

---

# 7. Content Governance & Lifecycle

Content progresses through five strictly audited operational states managed within the enterprise Headless CMS.

```
[Draft State] ➔ [Editorial & Legal Review] ➔ [Translation Verification] ➔ [Published] ➔ [Archived / Redirected]
```

## 7.1 Content Lifecycle Definitions
1. **Draft**: Initial authoring state by subject matter expert or technical writer.
2. **Review**: Compliance, legal, and editorial audit.
3. **Approved**: Certified for publication in canonical language; sent to translation pipeline.
4. **Published**: Live across Edge CDN nodes in all supported languages.
5. **Archived**: Content superseded; preserved for historical/legal compliance or permanently redirected via 301.

---

# 8. Document Control

- **Document Identifier**: IDG-SPEC-CTS-2026-V1
- **Current Version**: 1.0.0
- **Document Owner**: IDG Corporate Communications Directorate & Global Localization Board
- **Approved By**: Chief Executive Officer, Chief Technology Officer, Chief Legal Officer
- **Status**: Authoritative Enterprise Specification
- **Review Cycle**: Annual mandatory review
- **Repository Location**: `/website/content-strategy.md`
