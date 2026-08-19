import React, { useState, useEffect } from 'react';
import { useI18n, LOCALES } from './i18n';
import { 
  Building2, 
  Layers, 
  FileText, 
  Search, 
  Copy, 
  Check, 
  ShieldCheck, 
  GitBranch, 
  ChevronRight,
  BookOpen,
  Network,
  Cpu,
  Navigation,
  Compass,
  Zap,
  CheckCircle2,
  ExternalLink,
  Globe,
  Palette,
  Component,
  Server,
  Code2,
  Library,
  Languages,
  Database,
  Filter,
  ArrowUpDown,
  FileCode2,
  Boxes,
  ScrollText,
  Milestone
} from 'lucide-react';

export type SpecKey = 
  | 'ia' | 'nav' | 'cts' | 'seo' | 'ds' | 'cmp' | 'docgov' 
  | 'repo' | 'deploy' | 'api' | 'knowledge' | 'localization' | 'security' | 'data';

interface SpecMeta {
  key: SpecKey;
  id: string;
  patch: string;
  file: string;
  lines: string;
  icon: React.ElementType;
  domain: string;
}

const SPEC_REGISTRY: Record<SpecKey, SpecMeta> = {
  ia: { key: 'ia', id: 'IDG-SPEC-IA-2026-V1', patch: 'PATCH 003', file: 'website/information-architecture.md', lines: '436', icon: Layers, domain: 'domain.website' },
  nav: { key: 'nav', id: 'IDG-SPEC-NAV-2026-V1', patch: 'PATCH 004', file: 'website/navigation-architecture.md', lines: '457', icon: Navigation, domain: 'domain.website' },
  cts: { key: 'cts', id: 'IDG-SPEC-CTS-2026-V1', patch: 'PATCH 005', file: 'website/content-strategy.md', lines: '410+', icon: Globe, domain: 'domain.website' },
  seo: { key: 'seo', id: 'IDG-SPEC-SEO-2026-V1', patch: 'PATCH 006', file: 'seo/seo-architecture.md', lines: '510+', icon: Search, domain: 'domain.seo' },
  ds: { key: 'ds', id: 'IDG-SPEC-DS-2026-V1', patch: 'PATCH 007', file: 'design-system/design-tokens.md', lines: '480+', icon: Palette, domain: 'domain.design_system' },
  cmp: { key: 'cmp', id: 'IDG-SPEC-CMP-2026-V1', patch: 'PATCH 008', file: 'design-system/components.md', lines: '460+', icon: Component, domain: 'domain.design_system' },
  docgov: { key: 'docgov', id: 'IDG-SPEC-DOCGOV-2026-V1', patch: 'PATCH 009', file: 'governance/document-governance.md', lines: '230+', icon: BookOpen, domain: 'domain.governance' },
  repo: { key: 'repo', id: 'IDG-SPEC-REPO-2026-V1', patch: 'PATCH 010', file: 'technical/repository-structure.md', lines: '300+', icon: GitBranch, domain: 'domain.technical' },
  deploy: { key: 'deploy', id: 'IDG-SPEC-DEPLOY-2026-V1', patch: 'PATCH 011', file: 'technical/deployment.md', lines: '450+', icon: Server, domain: 'domain.technical' },
  api: { key: 'api', id: 'IDG-SPEC-API-2026-V1', patch: 'PATCH 013', file: 'technical/api-architecture.md', lines: '500+', icon: Code2, domain: 'domain.technical' },
  knowledge: { key: 'knowledge', id: 'IDG-SPEC-KNOWLEDGE-2026-V1', patch: 'PATCH 014', file: 'governance/knowledge-architecture.md', lines: '250+', icon: Library, domain: 'domain.governance' },
  localization: { key: 'localization', id: 'IDG-SPEC-LOCALIZATION-2026-V1', patch: 'PATCH 015', file: 'governance/localization-architecture.md', lines: '250+', icon: Languages, domain: 'domain.governance' },
  security: { key: 'security', id: 'IDG-SPEC-SECURITY-2026-V1', patch: 'PATCH 016', file: 'governance/security-compliance-architecture.md', lines: '600+', icon: ShieldCheck, domain: 'domain.governance' },
  data: { key: 'data', id: 'IDG-SPEC-DATA-2026-V1', patch: 'PATCH 017', file: 'technical/data-architecture.md', lines: '550+', icon: Database, domain: 'domain.technical' },
};

// Kurdish localized section lists
const CKB_SECTIONS: Record<SpecKey, string[]> = {
  ia: [
    "01. بنەماکانی ئەڕکیتێکچەری زانیاری (IA)",
    "02. پلەبەندی ناوەڕۆکی دامەزراوە",
    "03. پێکهاتە و تۆپۆلۆجی ماڵپەڕ",
    "04. ئەڕکیتێکچەری فرەماڵپەڕ (Multi-site)",
    "05. جیاکردنەوەی قەوارەی دایک و بەرهەمی 001",
    "06. خاوەندارێتی و حوکمڕانی ناوەڕۆک",
    "07. پۆلێنبەندی و تاکسۆنۆمی ماڵپەڕ",
    "08. ئەڕکیتێکچەری بەڕێوەبردنی زانین",
    "09. پۆلێنکردن و جۆرەکانی پەڕە",
    "10. قاڵب و تێمپلێتەکانی پەڕە",
    "11. چینەکانی ڕێدۆز و ناڤیگەیشن",
    "12. سیستەمی گەڕانی سەراسەری",
    "13. ستراتیژی بەستەری ناوخۆیی",
    "14. پلەبەندی بەڵگەنامە دیجیتاڵییەکان",
    "15. تەواوکاری بەڵگەنامەی دامەزراوەیی",
    "16. تەواوکاری بەڵگەنامەی بەرهەمەکان",
    "17. ستراتیژی مێتاداتا و تاگەکان",
    "18. حوکمڕانی ناونیشانەکان (URL)",
    "19. یاساکانی فراوانبوونی داهاتوو",
    "20. حوکمڕانی زانیاری دامەزراوە",
    "21. کۆنتڕۆڵی وەشان و گۆڕانکاری",
    "22. خولی ژیانی ناوەڕۆک",
    "23. توانای فراوانبوونی دامەزراوەیی",
    "24. ئامادەیی بۆ ژیریی دەستکرد (AI)",
    "25. گرافی زانین و کیانەکان",
    "26. نەخشەی ژینگەی دیجیتاڵی",
    "27. کۆنتڕۆڵی بەڵگەنامە و مێژوو"
  ],
  nav: [
    "01. فەلسەفەی ڕێدۆزی و گەشتکردن",
    "02. پێکهاتەی ڕێدۆزی سەراسەری (Global Nav)",
    "03. پێکهاتەی ڕێدۆزی دامەزراوەیی",
    "04. مۆدێلی ڕێدۆزی بەرهەمەکان (10 Nodes)",
    "05. ڕەوتی زانیاری و لۆجیکی بەکارهێنەر",
    "06. ستانداردەکانی مێگا مینیۆ (Mega Menu)",
    "07. یاساکانی ڕێڕەوی پەڕە (Breadcrumbs)",
    "08. ستراتیژی گەڕان لە ڕێدۆزدا",
    "09. ڕێدۆزی شاشە بچووکەکان و مۆبایل",
    "10. پێداویستییەکانی دەستڕاگەیشتن (A11y)",
    "11. خێرایی و کارایی ڕێدۆز",
    "12. توانای فراوانبوونی داهاتوو",
    "13. حوکمڕانی و کۆنتڕۆڵی ڕێدۆز",
    "14. کۆنتڕۆڵی بەڵگەنامە"
  ],
  cts: [
    "01. بنەما جێبەجێکارییەکانی ناوەڕۆک",
    "02. تەلارسازی فرەزمان و لوکالایزەیشن",
    "03. زمانە سەرەکی و داهاتووەکان (CKB/AR/EN)",
    "04. یاسا تەکنیکییەکانی ئاراستەی RTL / LTR",
    "05. هێڵی وەرگێڕان و کوالێتی زمان",
    "06. بەڕێوەبردنی زاراوە و زاراوەنامە",
    "07. تایبەتمەندییەکانی ناوەڕۆکی پەڕەکان",
    "08. ستانداردەکانی دەستکاری و دەنگی براند",
    "09. یاساکانی گەشبینکردنی گەڕان (SEO)",
    "10. دەستڕاگەیشتن و لوکالایزەیشنی میدیا",
    "11. خولی ژیانی ناوەڕۆک و حوکمڕانی",
    "12. کۆنتڕۆڵی بەڵگەنامە"
  ],
  seo: [
    "01. بنەما جێبەجێکارییەکانی SEO",
    "02. ستراتیژی دۆمەین و تۆپۆلۆجی URL",
    "03. SEOی فرەزمان و فرەناوچە",
    "04. ستانداردەکانی مێتاداتای دامەزراوە",
    "05. ژێرخانی Schema.org و JSON-LD",
    "06. تەلارسازی نەخشەی ماڵپەڕ (XML Sitemaps)",
    "07. سیاسەتی Robots و کرۆلەرەکانی AI",
    "08. گەشبینکردنی گەڕانی زیرەک (AEO & GEO)",
    "09. پێوەرەکانی Core Web Vitals",
    "10. حوکمڕانی SEO و خولی پشکنین"
  ],
  ds: [
    "01. پێشەکی و فەلسەفەی دیزاین",
    "02. بنەماکانی دیزاینی دامەزراوەیی",
    "03. تەلارسازی دیزاینی ئەتۆمی (Atomic Design)",
    "04. سیستەمی هێماکانی دیزاین (Design Tokens)",
    "05. تەلارسازی ڕەنگ و پالتەکان",
    "06. فۆنت و جۆتکردنی فرەزمان",
    "07. سیستەمی بۆشایی و تۆڕی دیزاین",
    "08. تایبەتمەندی پێکهاتەکان (24 پۆلێن)",
    "09. خاڵەکانی وەڵامدانەوە و دەستڕاگەیشتن",
    "10. سیستەمی تێم و ئاوێنەکردنی RTL"
  ],
  cmp: [
    "01. فەلسەفەی پێکهاتەکان (Component Philosophy)",
    "02. پلەبەندی پێکهاتەی ئەتۆمی",
    "03. پێکهاتەکانی ڕێدۆز و سەرپەڕە",
    "04. پێکهاتەکانی کردار و دوگمە",
    "05. پێکهاتەکانی فۆرم و تۆمارکردن",
    "06. پێکهاتەکانی پیشاندانی داتا و نەخشە",
    "07. پێکهاتەکانی فیدباک، مۆداڵ و ئۆڤەرلەی",
    "08. مۆدیوولەکانی حکومی و دامەزراوەیی",
    "09. ستانداردەکانی دەستڕاگەیشتن (WCAG 2.2 AA)",
    "10. نێودەوڵەتیکردن و لۆجیکی دووئاراستەیی"
  ],
  docgov: [
    "01. دیدگا و بنەماکانی بەڵگەنامەکردن",
    "02. هەرەمی پلەبەندی دامەزراوە",
    "03. پێکهاتەی کۆگا و ستانداردی بوخچەکان",
    "04. یاساکانی ناونانی فایل و فۆڵدەرەکان",
    "05. ڕێزمانی Markdown و مێتاداتای Frontmatter",
    "06. خولی ژیانی بەڵگەنامە (6 دۆخ)",
    "07. ماتریکسی پێداچوونەوە و پەسەندکردن",
    "08. چوارچێوەی پۆلێنکردنی ئاسایش",
    "09. وەرگێڕانی فرەزمان و حوکمڕانی",
    "10. سیاسەتی AI و هاوتەریبی لەگەڵ ISO 9001"
  ],
  repo: [
    "01. کورتەی جێبەجێکاری و دیدگا",
    "02. بنەما دەستوورییەکانی کۆگای کۆد",
    "03. تاکسۆنۆمی و پۆلێنەکانی دامەزراوە",
    "04. یاسا ستانداردەکانی ناونانی کۆگاکان",
    "05. ستانداردەکانی بوخچە و پەڕگەکانی ناوخۆ",
    "06. ستراتیژی لکەکان و یاساکانی GitFlow",
    "07. ستانداردەکانی نامەی کۆمیت (Conventional)",
    "08. کۆنتڕۆڵەکانی ئاسایشی GitHub Enterprise",
    "09. فایلە بنەڕەتییە پێویستەکانی هەر کۆگایەک",
    "10. هێڵەکانی ئۆتۆماتیکی CI/CD و خولی ژیان"
  ],
  deploy: [
    "01. کۆنتڕۆڵی بەڵگەنامە",
    "02. مەبەست و مەودای بڵاوکردنەوە",
    "03. بنەماکانی تەلارسازی بڵاوکردنەوە",
    "04. مۆدێلی بڵاوکردنەوەی دامەزراوەیی IDG",
    "05. تەلارسازی ژینگەکان (7 ئاستی جیاکردنەوە)",
    "06. تەلارسازی بڵاوکردنەوەی ئەپڵیکەیشنەکان",
    "07. بڵاوکردنەوەی فرۆنتێند و پاکێجی سێ زمانە",
    "08. بڵاوکردنەوەی باکێند و ژینگەی Node/Express",
    "09. بڵاوکردنەوەی API و دەروازەی Cloud Run",
    "10. بڵاوکردنەوەی بنکەدراوە و داتای بەردەوام",
    "11. بڵاوکردنەوەی ژێرخانی هەوری GCP",
    "12. بڵاوکردنەوەی CDN و لێواری Cloudflare",
    "13. بڵاوکردنەوەی DNS و دۆمەینەکان (Anycast)",
    "14. تەلارسازی CI/CD و هێڵە ئۆتۆماتیکییەکان",
    "15. هێڵەکانی بڵاوکردنەوەی GitHub Actions",
    "16. پرۆسەی دروستکردن و کۆنتێنەرەکانی OCI",
    "17. نەخشەکێشانی لکەکان بۆ ژینگەکان",
    "18. مۆدێلی پەسەندکردنی بڵاوکردنەوە و پاراستن",
    "19. ژێرخان وەک کۆد (IaC Terraform)",
    "20. بەڕێوەبردنی نهێنییەکان و ڕێکخستنەکان",
    "21. بەڕێوەبردنی گۆڕاوەکانی ژینگە (Env Vars)",
    "22. کۆنتڕۆڵەکانی ئاسایش و پشکنینی SAST",
    "23. بەڕێوەبردنی ناسنامە و دەسەڵاتەکان (IAM)",
    "24. بەڕێوەبردنی بڕوانامەکانی SSL/TLS",
    "25. چاودێری و بینین (Four Golden Signals)",
    "26. تۆماری ڕووداوەکان و هێڵی وردبینی",
    "27. پاڵپشتی و گەڕاندنەوە (PITR Recovery)",
    "28. پلانی چاکبوونەوە لە کارەسات (DR RPO/RTO)",
    "29. ستراتیژی پاشەکشە و گەڕاندنەوەی خۆکار",
    "30. بڵاوکردنەوەی بێ پچڕان (Zero-Downtime)",
    "31. ستراتیژی گواستنەوەی بنکەدراوە (Drizzle)",
    "32. بەڕێوەبردنی بەستراوەییەکان و فایلەکانی قفڵ",
    "33. ئاسایشی زنجیرەی دابینکردنی نەرمەکاڵا (SBOM)",
    "34. بەڕێوەبردنی کەلێنە ئەمنییەکان (CVSS SLA)",
    "35. حوکمڕانی بڵاوکردنەوە و ئەندازیاری",
    "36. حوکمڕانی وەشانەکان و نمرەدانانی مەنتیقی",
    "37. بەڕێوەبردنی گۆڕانکاری و چاکسازی بەپەلە",
    "38. وەڵامدانەوەی ڕووداوەکان و ژووری ئۆپەراسیۆن",
    "39. کارایی و گەورەبوونی خۆکار (Auto-Scaling)",
    "40. بەردەستبوونی بەرز و تۆپۆلۆجی فرەناوچە",
    "41. ئامادەیی فرەهەرێم (Active-Passive)",
    "42. ژێرخانی سەروەری جیاکراوە (Air-Gapped)",
    "43. مۆدێلی بڵاوکردنەوەی بەرهەمی 001 (AI Gate)",
    "44. مۆدێلی بڵاوکردنەوەی بەرهەمەکانی داهاتوو",
    "45. پەیوەندی کۆگای کۆد بە بڵاوکردنەوەوە",
    "46. خولی ژیانی بڵاوکردنەوە (4 دۆخ)",
    "47. پێداویستییەکانی پابەندبوون و وردبینی",
    "48. ماتریکسی بەرپرسیارێتییە ئۆپەراسیۆنییەکان",
    "49. ستانداردەکانی ناونانی بڵاوکردنەوە",
    "50. ڕێنماییە کارپێکردنییەکانی بڵاوکردنەوە",
    "51. لیستی پشکنینی بڵاوکردنەوەی دامەزراوەیی",
    "52. گەشەسەندنی بڵاوکردنەوەی داهاتوو (2026-2028+)",
    "53. کۆنتڕۆڵی بەڵگەنامە و مێژووی دەستکاری"
  ],
  api: [
    "001. کورتەی جێبەجێکاری",
    "002. مەبەست و ئامانجەکان",
    "003. مەودای کارپێکردنی API",
    "004. بنەماکانی ئەڕکیتێکچەری API",
    "005. ستراتیژی API لە ئاستی دامەزراوە",
    "006. مۆدێلی پۆرتفۆلیۆی API (ئاستەکانی 1-4)",
    "007. تاکسۆنۆمی دۆمەینەکانی API (16 دۆمەین)",
    "008. پۆلێنکردنی ئاستەکانی API (0 بۆ 4)",
    "009. ئەڕکیتێکچەری API گشتییەکان",
    "010. ئەڕکیتێکچەری API تایبەتەکان",
    "011. ئەڕکیتێکچەری API هاوبەشەکان",
    "012. خزمەتگوزارییە ناوخۆییەکان (gRPC)",
    "013. بەستنەوەی حکومی و کەرەستەی HSM",
    "014. ڕووکارە پرۆگرامسازییەکانی پلاتفۆرم",
    "015. ئەڕکیتێکچەری API بەرهەمەکان",
    "016. ئەڕکیتێکچەری AI Gate Iraq (بەرهەمی 001)",
    "017. مۆدێلی بەمیراتگرتنی بەرهەمەکانی داهاتوو",
    "018. دەروازەی API (Cloudflare / Cloud Run)",
    "019. مۆدێلی ئاڕاستەکردنی داواکارییەکان",
    "020. ئەڕکیتێکچەری پشتڕاستکردنەوەی ناسنامە",
    "021. دەسەڵاتپێدان و ڕێگەپێدان (RBAC / ABAC)",
    "022. یەکگرتنی ناسنامە (SAML / OIDC)",
    "023. تەلارسازی OAuth 2.0 (PKCE)",
    "024. تەلارسازی OpenID Connect",
    "025. حوکمڕانی کلیلەکانی API (SHA-256)",
    "026. پشتڕاستکردنەوەی خزمەتگوزاری بۆ خزمەتگوزاری",
    "027. پێداویستییەکانی mTLS (TLS 1.3)",
    "028. سنووردارکردنی ڕێژەی داواکاری (Rate Limiting)",
    "029. کوۆتا و بەشەکان",
    "030. ڕێکخستنی کاتی و فلتەرکردنی زەخت",
    "031. ئەڕکیتێکچەری ئاسایشی بێ‌متمانەیی",
    "032. بەرگری لە 10 مەترسییە سەرەکییەکەی OWASP",
    "033. پشتڕاستکردنەوەی داتای هاتوو (JSON Schema)",
    "034. پشتڕاستکردنەوەی داتای دەرچوو",
    "035. بەڕێوەبردنی نهێنییەکان (GCP Secret Manager)",
    "036. کۆدکردن (AES-256 / CMEK)",
    "037. پۆلێنکردنی ئاستی هەستیاری داتا",
    "038. پاراستنی داتای کەسی (PII Masking)",
    "039. پێداویستییەکانی سەروەری داتا",
    "040. وەشانەکانی API (/v1/ Path Prefix)",
    "041. گونجان لەگەڵ وەشانە کۆنەکان",
    "042. سیاسەتی بەسەرچوون (مۆڵەتی 180 ڕۆژ)",
    "043. خولی ژیانی API (6 قۆناغ)",
    "044. ستانداردەکانی دیزاین و شێوازی داڕشتن",
    "045. ستانداردەکانی REST و کردارەکانی CRUD",
    "046. ستانداردەکانی پرۆتۆکۆلی HTTP",
    "047. ستانداردەکانی فۆرماتی JSON (snake_case)",
    "048. مۆدێلی هەڵەی سێ زمانە (CKB/AR/EN)",
    "049. ستانداردەکانی کۆدی دۆخی HTTP",
    "050. لاپەڕەبەندی داتا (Cursor-Based)",
    "051. فلتەرکردن و جیاکردنەوە",
    "052. ڕیزبەندکردنی داتا",
    "053. گەڕان لەناو تۆمارەکاندا",
    "054. یەکسانی کردارە دووبارەکان (Idempotency UUID)",
    "055. بەستنەوەی داواکارییەکان (X-Correlation-ID)",
    "056. شوێنپێهەڵگرتنی دابەشکراو (W3C Trace Context)",
    "057. چاودێری و بینینی سیستەم",
    "058. تۆمارکردنی زانیارییەکان (Structured JSON)",
    "059. پێوەرەکانی کارایی (Four Golden Signals)",
    "060. سیستەمی ئاگادارکردنەوەی کتوپڕ",
    "061. ستانداردەکانی خێرایی و کارایی API",
    "062. بەردەستبوونی بەرز (99.95% SLA)",
    "063. ستانداردەکانی متمانەپێکراوی",
    "064. چاکبوونەوە لە کارەسات (RPO < 5m, RTO < 15m)",
    "065. تەلارسازی دەربازبوون لە لەکارکەوتن",
    "066. تەلارسازی فرەهەرێمی API",
    "067. یەکخستن لەگەڵ Cloudflare WAF",
    "068. یەکخستن لەگەڵ Google Cloud Platform",
    "069. یەکخستن لەگەڵ Firebase (Auth/Firestore)",
    "070. یەکخستن لەگەڵ Cloud SQL (PostgreSQL 16)",
    "071. یەکخستن لەگەڵ Cloud Run",
    "072. یەکخستن لەگەڵ GitHub Actions",
    "073. هێڵی ئەندازیاری DevSecOps API",
    "074. ستراتیژی تاقیکردنەوەی API",
    "075. تاقیکردنەوەی گرێبەستەکان (Pact)",
    "076. تاقیکردنەوەی تەواوکاری (Integration Testing)",
    "077. تاقیکردنەوەی بارگرانی و زەخت (k6)",
    "078. تاقیکردنەوەی ئاسایش و کەلێنەکان",
    "079. ستانداردەکانی بەڵگەنامەکردنی API",
    "080. تایبەتمەندی فەرمی OpenAPI (OpenAPI 3.1)",
    "081. پۆڕتاڵی گەشەپێدەران (developer.idg.global)",
    "082. ئەڕکیتێکچەری پاکێجی گەشەپێدان (SDK)",
    "083. کتێبخانەکانی کڕیار (TS, Python, Go, Flutter)",
    "084. ئاگادارییە ڕاستەوخۆکان (Webhooks HMAC-SHA256)",
    "085. تەواوکاری بەپێی ڕووداوەکان (CloudEvents)",
    "086. تەلارسازی پەیام و نۆرەکان",
    "087. بەستنەوە لەگەڵ هاوبەشە دەرەکییەکان",
    "088. گونجان و بەستنەوەی نێوان دامەزراوە حکومییەکان",
    "089. ئاڵوگۆڕی داتای API",
    "090. حوکمڕانی گشتی API",
    "091. خاوەندارێتی API (CODEOWNERS)",
    "092. چاودێری و پاراستنی API",
    "093. پرۆسەی پەسەندکردنی ڕووکارەکان",
    "094. بەڕێوەبردنی گۆڕانکاری لە API",
    "095. ستانداردەکانی کۆگای کۆدی API",
    "096. ستانداردەکانی ناونانی API",
    "097. ستانداردەکانی ناونانی خاڵە کۆتاییەکان",
    "098. ستانداردەکانی ناونانی سەرچاوەکان",
    "099. ستانداردەکانی ناونانی دۆمەینەکان",
    "100. ستانداردەکانی ڕێڕەوی URI",
    "101. ستانداردەکانی سەرپەڕەکانی Header",
    "102. ستانداردەکانی مۆدێل و سکیمای Schema",
    "103. ستانداردەکانی پەیمانبەستەکانی API",
    "104. پشکنینی ئاسایشی API",
    "105. پشکنینی ئەڕکیتێکچەری API",
    "106. پابەندبوونی یاسایی (ISO 27001 / SOC 2)",
    "107. توانای وردبینی و تۆماری 7 ساڵە",
    "108. ستانداردەکانی ڕێککەوتنی ئاستی خزمەتگوزاری (SLA)",
    "109. ئامانجەکانی ئاستی خزمەتگوزاری (SLO < 100ms)",
    "110. بەڕێوەبردنی ڕووداو و کێشە کتوپڕەکان",
    "111. چاودێری ڕاستەوخۆی بارودۆخی سیستەم",
    "112. حوکمڕانی خەرجی و تێچووی API",
    "113. پلاندانانی قەبارە و توانستی سیستەم",
    "114. توانای گەشەکردن و هەڵگرتنی بارگرانی",
    "115. خۆڕاگری و بەردەوامی سیستەم",
    "116. مامەڵەکردن لەگەڵ لەکارکەوتنەکان",
    "117. سیاسەتی هەوڵدانەوەی خۆکار (Backoff)",
    "118. پچڕێنەری بازنەیی (Circuit Breaker)",
    "119. ستانداردەکانی کۆتاییهاتنی کاتی داواکاری",
    "120. جیاکردنەوەی بەشەکان (Bulkhead Isolation)",
    "121. هەڵگرتنی کاتی و کلیلەکانی کاش (Caching)",
    "122. ستراتیژی تۆڕی دابەشکردنی ناوەڕۆک (CDN)",
    "123. تەلارسازی لەسەر لێوار (Edge API)",
    "124. ئەڕکیتێکچەری ناوخۆییکردن و زمانەکان",
    "125. بەڵگەنامەی API بە ئاراستەی ڕاست بۆ چەپ (RTL)",
    "126. سیاسەتی زمانی بەڵگەنامە تەکنیکییەکان",
    "127. ئەزموونی گەشەپێدەران (DX)",
    "128. ئاسانکاری دەستپێکی گەشەپێدەر (< 5 خولەک)",
    "129. نموونە کۆد و ڕێنماییە پراکتیکییەکان",
    "130. تۆماری گۆڕانکارییەکانی API",
    "131. ئاگادارییەکانی بەسەرچوونی وەشانەکان",
    "132. وەڵامدانەوەی ڕووداوە ئەمنییەکانی API",
    "133. تاقیکردنەوەی چاکبوونەوە لە کارەساتەکان",
    "134. پێوەرەکانی حوکمڕانی API",
    "135. تۆماری بڕیارە تەلارسازییەکان (ADRs)",
    "136. لیستی پشکنینی پابەندبوونی API",
    "137. لیستی پشکنینی ئامادەیی بۆ کارپێکردن",
    "138. ئەڕکیتێکچەری نموونەیی سەراسەری API",
    "139. بارودۆخی ئێستای سیستەم",
    "140. ئەڕکیتێکچەری ستاندارد",
    "141. ئەڕکیتێکچەری داهاتوو",
    "142. نەخشەڕێگای گەشەپێدانی API (2026-2027+)",
    "143. کۆنتڕۆڵی بەڵگەنامە و مێژووی دەستکاری"
  ],
  knowledge: [
    "01. کۆنتڕۆڵی بەڵگەنامە و مێتاداتا",
    "02. کورتەی جێبەجێکاری",
    "03. مەبەست و ئامانجە سەرەکییەکان",
    "04. مەودای ئەڕکیتێکچەری زانین",
    "05. بنەما تەلارسازییە بنەڕەتییەکان",
    "06. تەلارسازی سێ زمانەی زانین (CKB/AR/EN)",
    "07. تەلارسازی ڕەنگدانەوەی مەنتیقی (CSS Logical RTL)",
    "08. پلەبەندی زانینی دامەزراوە (14 دۆمەین)",
    "09. سیستەمی ناساندنی بەڵگەنامە (IDG-SPEC-*)",
    "10. ستانداردی Frontmatter بە فۆرماتی YAML",
    "11. ئەڕکیتێکچەری گەڕانی دەقی و مانایی (Semantic)",
    "12. تەلارسازی گرافی زانین و کیانەکان",
    "13. ماتریکسی دەسەڵات و ئاستەکانی ئاسایش",
    "14. توانای وردبینی و مێژووی بەڵگەنامە (7 ساڵ)",
    "15. تەواوکاری لەگەڵ ماڵپەڕ و پۆڕتاڵەکان",
    "16. پێوەرەکانی کوالێتی و لیستی پشکنینی پابەندبوون",
    "17. کۆنتڕۆڵی بەڵگەنامە و مێژووی دەستکاری"
  ],
  localization: [
    "01. کۆنتڕۆڵی بەڵگەنامە و مێتاداتا",
    "02. کورتەی جێبەجێکاری",
    "03. مەبەست و مەودای ناوخۆییکردن",
    "04. بنەماکانی لوکالایزەیشن و زمانەکان",
    "05. تۆماری ستانداردی زمانەکان (BCP 47)",
    "06. ستانداردی هەڵبژاردنی زمان لە رووکار",
    "07. تەلارسازی جیاکردنەوەی دەق و وەرگێڕان",
    "08. تەلارسازی ئاوێنەکردنی مەنتیقی (RTL/LTR)",
    "09. فۆنت و تایپۆگرافی فرەزمانی دامەزراوە",
    "10. پاراستنی ناسێنەرە تەکنیکییە جیهانییەکان",
    "11. یەکسانی سێ زمانە و هێڵی گەڕانەوەی دەق",
    "12. مێتاداتای گەشبینکردنی گەڕان و hreflang",
    "13. ناوخۆییکردنی نامە و هەڵەکانی API",
    "14. دەستڕاگەیشتن (WCAG 2.1 AA) و خوێنەرەکان",
    "15. پاراستنی هەڵبژاردەی بەکارهێنەر (idg.locale)",
    "16. پێوەرەکانی کوالێتی و پشکنینی هێڵی CI/CD",
    "17. کۆنتڕۆڵی بەڵگەنامە و مێژووی دەستکاری"
  ],
  security: [
    "01. کۆنتڕۆڵی بەڵگەنامە و مێتاداتا",
    "02. کورتەی جێبەجێکاری",
    "03. مەبەست و مەودای ئاسایش",
    "04. بنەما سەرەکییەکانی ئاسایشی سایبەری",
    "05. ئەڕکیتێکچەری بێ‌متمانەیی (Zero Trust)",
    "06. بەڕێوەبردنی ناسنامە و دەسەڵاتەکان (IAM/PAM)",
    "07. ستانداردەکانی کریپتۆگرافی و کلیلەکان",
    "08. ئاسایشی ئەپڵیکەیشن و API (OWASP/CSP)",
    "09. ئاسایشی مۆدێلەکانی ژیریی دەستکرد و LLM",
    "10. ئاسایشی DevSecOps و زنجیرەی دابینکردن",
    "11. چاودێری سیستەم، SIEM و وەڵامدانەوەی ڕووداو",
    "12. بەردەوامی بازرگانی، DR و پێوەرەکانی RTO/RPO",
    "13. تۆماری مەترسییەکانی دامەزراوە و چارەسەرەکان",
    "14. هاوتەریبی پابەندبوون و ماتریکسی RACI",
    "15. مۆدێلی پێگەیشتوویی ئاسایش (ئاستەکانی 0-5)",
    "16. پێوەرەکانی ئاسایش (MTTD/MTTR)",
    "17. کۆنتڕۆڵی بەڵگەنامە و مێژووی دەستکاری"
  ],
  data: [
    "01. کۆنتڕۆڵی بەڵگەنامە و مێتاداتا",
    "02. کورتەی جێبەجێکاری",
    "03. مەبەست و ئامانجەکانی داتا",
    "04. بنەما بنەڕەتییەکانی ئەڕکیتێکچەری داتا",
    "05. دۆخی ئێستا، ستاندارد و داهاتووی داتا",
    "06. دۆمەین و تاکسۆنۆمی داتای دامەزراوە (18 دۆمەین)",
    "07. ئەڕکیتێکچەری سێ زمانەی داتا و نەگۆڕەکان",
    "08. خولی ژیانی داتا و هێڵی ڕەچەڵەک (9 قۆناغ)",
    "09. ئاسایش، تایبەتمەندی و کریپتۆگرافی داتا",
    "10. حوکمڕانی داتای AI و LLM (AI Gate Iraq)",
    "11. کوالێتی داتا، پشتڕاستکردنەوە و گرێبەستەکان",
    "12. تەواوکاری، پەخشی ڕاستەوخۆ و هێڵەکانی CDC",
    "13. هەڵگرتنی هەوری و ستانداردەکانی بنکەدراوە",
    "14. خۆڕاگری، پاڵپشتی و چاکبوونەوە لە کارەسات",
    "15. مۆدێلی کارپێکردنی حوکمڕانی و ماتریکسی RACI",
    "16. تۆماری بڕیارە تەلارسازییەکان (ADRs)",
    "17. نەخشەڕێگای جێبەجێکردن (2026-2027)",
    "18. هێڵی پابەندبوون و وردبینی (ISO 27001)",
    "19. کارایی، گەورەبوونی قەبارە و FinOps",
    "20. کۆنتڕۆڵی بەڵگەنامە و مێژووی دەستکاری"
  ]
};

// English sections for fallback / EN view
const EN_SECTIONS: Record<SpecKey, string[]> = {
  ia: [
    "01. IA Principles", "02. Enterprise Hierarchy", "03. Website Structure", "04. Multi-site Architecture",
    "05. Parent vs Product 001", "06. Content Ownership", "07. Website Taxonomy", "08. Knowledge Architecture",
    "09. Page Classification", "10. Page Templates", "11. Navigation Layers", "12. Global Search",
    "13. Internal Linking Strategy", "14. Documentation Hierarchy", "15. Corporate Doc Integration",
    "16. Product Doc Integration", "17. Metadata Strategy", "18. URL Governance", "19. Future Expansion Rules",
    "20. Information Governance", "21. Version Control", "22. Content Lifecycle", "23. Enterprise Scalability",
    "24. AI Readiness", "25. Knowledge Graph", "26. Digital Ecosystem Map", "27. Document Control"
  ],
  nav: [
    "01. Navigation Philosophy", "02. Global Navigation", "03. Corporate Navigation Structure",
    "04. Product Navigation Model", "05. Information Flow", "06. Mega Menu Standards",
    "07. Breadcrumb Rules", "08. Search Strategy", "09. Mobile Navigation", "10. Accessibility Requirements",
    "11. Navigation Performance", "12. Future Scalability", "13. Governance", "14. Document Control"
  ],
  cts: [
    "01. Executive Principles", "02. Multilingual & Localization Architecture", "03. Primary & Future Languages",
    "04. RTL / LTR Technical Rules", "05. Translation Pipeline & Quality", "06. Terminology & Glossary Management",
    "07. Page Content Specifications", "08. Editorial Standards & Tone", "09. SEO & Indexing Rules",
    "10. Accessibility & Media Localization", "11. Content Lifecycle & Governance", "12. Document Control"
  ],
  seo: [
    "01. Executive SEO Principles", "02. Domain & URL Topology Strategy", "03. Multilingual & Multi-Region SEO",
    "04. Enterprise Metadata Standards", "05. Schema.org & JSON-LD Infrastructure", "06. XML Sitemaps Architecture",
    "07. Robots Policy & AI Crawler Directives", "08. AI Search Optimization (AEO & GEO)",
    "09. Core Web Vitals & Performance Budget", "10. SEO Governance & Audit Workflow"
  ],
  ds: [
    "01. Executive Overview & Philosophy", "02. Enterprise Design Principles", "03. Atomic Design Architecture",
    "04. Design Token System", "05. Color Architecture & Palettes", "06. Typography & Multilingual Pairing",
    "07. Spacing System & Grid Specs", "08. Component Specifications (24 Cats)",
    "09. Responsive Breakpoints & Accessibility", "10. Theme System & RTL Mirroring"
  ],
  cmp: [
    "01. Component Philosophy", "02. Atomic Component Hierarchy", "03. Navigation & Header Components",
    "04. Action & Button Components", "05. Form Control & Input Components", "06. Data Display & Layout Components",
    "07. Feedback, Modal & Overlay", "08. Government & Enterprise Modules",
    "09. Accessibility Standards (WCAG 2.2 AA)", "10. Internationalization & Bi-Directional Logic"
  ],
  docgov: [
    "01. Documentation Vision & Principles", "02. Enterprise Hierarchy Pyramid", "03. Repository Structure & Folder Specs",
    "04. File & Folder Naming Conventions", "05. Markdown Syntax & Frontmatter Metadata", "06. Document Lifecycle (6 States)",
    "07. Review & Approval Workflow Matrix", "08. Security Classification Framework",
    "09. Multilingual Translation & Governance", "10. AI Policy & ISO 9001 Alignment"
  ],
  repo: [
    "01. Executive Summary & Vision", "02. Constitutional Repository Principles", "03. Enterprise Taxonomies & Categories",
    "04. Standardized Repository Naming Conventions", "05. Internal Directory & Folder Standards",
    "06. Branching Strategy & GitFlow Rules", "07. Commit Message Standards (Conventional)",
    "08. GitHub Enterprise Security Controls", "09. Mandatory Baseline Repository Files",
    "10. Automated CI/CD Pipelines & Lifecycles"
  ],
  deploy: [
    "01. Document Control", "02. Purpose and Scope", "03. Deployment Architecture Principles",
    "04. IDG Enterprise Deployment Model", "05. Environment Architecture (7 Isolation Tiers)",
    "06. Application Deployment Architecture", "07. Frontend Deployment & Trilingual Bundles",
    "08. Backend Deployment & Node/Express Runtimes", "09. API Deployment & Cloud Run Ingress",
    "10. Database & Persistent Data Deployment", "11. Cloud Infrastructure Deployment (GCP)",
    "12. CDN & Edge Deployment (Cloudflare)", "13. DNS & Domain Deployment (Anycast)",
    "14. CI/CD Architecture & Automated Workflows", "15. GitHub Actions Deployment Pipelines",
    "16. Build & Release Process (OCI Containers)", "17. Branch-to-Environment Mapping",
    "18. Deployment Approval Model & Protection", "19. Infrastructure as Code (IaC Terraform)",
    "20. Secrets & Configuration Management", "21. Environment Variables Management",
    "22. Security Controls & Shift-Left SAST", "23. Identity & Access Management (IAM)",
    "24. SSL/TLS & Certificate Management", "25. Monitoring & Observability (Golden Signals)",
    "26. Logging & Audit Trails (ISO 27001)", "27. Backup & Recovery (Point-In-Time)",
    "28. Disaster Recovery (DR RPO/RTO)", "29. Rollback Strategy & Auto-Reversion",
    "30. Zero-Downtime Deployment (Canary)", "31. Database Migration Strategy (Drizzle)",
    "32. Dependency Management & Lockfiles", "33. Supply Chain Security & SBOM",
    "34. Vulnerability Management (CVSS SLA)", "35. Deployment Governance & Engineering",
    "36. Release Governance & Semantic Versioning", "37. Change Management & Emergency Hotfixes",
    "38. Incident Response Integration & War Rooms", "39. Performance & Auto-Scaling Strategy",
    "40. High Availability & Multi-AZ Topology", "41. Multi-Region Readiness (Active-Passive)",
    "42. Sovereign Infrastructure Readiness (Air-Gapped)", "43. Product 001 Deployment Model (AI Gate)",
    "44. Future Product Deployment Model (P002-P500+)", "45. Repository-to-Deployment Relationship",
    "46. Deployment Lifecycle (4 Runtime States)", "47. Compliance & Audit Requirements (7-Yr Logs)",
    "48. Operational Responsibilities Matrix", "49. Deployment Naming Standards",
    "50. Deployment Documentation Runbooks", "51. Enterprise Deployment Checklist",
    "52. Future Deployment Evolution (2026-2028+)", "53. Document Control & Revision History"
  ],
  api: [
    "001. Executive Summary", "002. Purpose", "003. Scope", "004. API Architecture Principles",
    "005. Enterprise API Strategy", "006. IDG API Portfolio Model (Tiers 1-4)", "007. API Domain Taxonomy (16 Domains)",
    "008. API Classification (Levels 0-4)", "009. Public API Architecture", "010. Private API Architecture",
    "011. Partner API Architecture", "012. Internal Service APIs (gRPC)", "013. Government Integration APIs & HSM",
    "014. Platform APIs", "015. Product API Architecture", "016. AI Gate Iraq API Architecture (Product 001)",
    "017. Future Product API Inheritance Model", "018. API Gateway Architecture (Cloudflare/Cloud Run)",
    "019. API Routing Model", "020. API Authentication Architecture", "021. Authorization Architecture (RBAC/ABAC)",
    "022. Identity Federation (SAML/OIDC)", "023. OAuth 2.0 Architecture (PKCE/Credentials)",
    "024. OpenID Connect Architecture", "025. API Key Governance (SHA-256)", "026. Service-to-Service Authentication",
    "027. mTLS Requirements (TLS 1.3)", "028. Rate Limiting", "029. Quotas", "030. Throttling (Token Bucket)",
    "031. API Security Architecture (Zero-Trust)", "032. OWASP API Security Top 10 Mitigation",
    "033. Input Validation (JSON Schema)", "034. Output Validation", "035. Secrets Management (GCP Secret Manager)",
    "036. Encryption (AES-256 / CMEK)", "037. Data Classification", "038. Personal Data Protection (PII Masking)",
    "039. Sovereign Data Requirements (Iraqi Law)", "040. API Versioning (/v1/ Path Prefix)",
    "041. Backward Compatibility", "042. Deprecation Policy (180-Day Window)", "043. API Lifecycle (6 Stages)",
    "044. API Design Standards", "045. REST Standards (CRUD Verbs)", "046. HTTP Standards",
    "047. JSON Standards (snake_case)", "048. Trilingual Error Model (en-US, ar-IQ, ckb-IQ)",
    "049. HTTP Status Code Standards", "050. Pagination (Cursor-Based)", "051. Filtering",
    "052. Sorting", "053. Search", "054. Idempotency (Idempotency-Key UUID)", "055. Request Correlation (X-Correlation-ID)",
    "056. Distributed Tracing (W3C Trace Context)", "057. Observability", "058. Logging (Structured JSON)",
    "059. Metrics (Four Golden Signals)", "060. Alerting (PagerDuty / Slack)", "061. API Performance Standards",
    "062. Availability Standards (99.95% SLA)", "063. Reliability Standards", "064. Disaster Recovery (RPO <5m, RTO <15m)",
    "065. Failover Architecture", "066. Multi-Region API Architecture", "067. Cloudflare Integration (WAF/Workers)",
    "068. Google Cloud Integration", "069. Firebase Integration (Auth/Firestore)", "070. Cloud SQL Integration (PostgreSQL 16)",
    "071. Cloud Run Integration", "072. GitHub Actions Integration", "073. DevSecOps API Pipeline",
    "074. API Testing Strategy", "075. Contract Testing (Pact)", "076. Integration Testing",
    "077. Load Testing (k6)", "078. Security Testing (CodeQL/Trivy)", "079. API Documentation Standards",
    "080. OpenAPI Specification (OpenAPI 3.1)", "081. Developer Portal (developer.idg.global)",
    "082. SDK Architecture", "083. Client Libraries (TS, Python, Go, Flutter)",
    "084. Webhooks (HMAC-SHA256 Signatures)", "085. Event-Driven Integration (CloudEvents)",
    "086. Message Architecture", "087. External Partner Integration", "088. Government Interoperability",
    "089. API Data Exchange", "090. API Governance", "091. API Ownership (CODEOWNERS)",
    "092. API Stewardship", "093. API Approval Process", "094. API Change Management",
    "095. API Repository Standards (idg-api-*)", "096. API Naming Standards", "097. Endpoint Naming Standards",
    "098. Resource Naming Standards", "099. Domain Naming Standards", "100. API URI Standards",
    "101. API Header Standards", "102. API Schema Standards", "103. API Contract Standards",
    "104. API Security Review", "105. API Architecture Review", "106. API Compliance (ISO 27001 / SOC 2)",
    "107. API Auditability (7-Year Logs)", "108. API SLA Standards (99.95%)", "109. API SLO Standards (<100ms p95)",
    "110. API Incident Management", "111. API Monitoring", "112. API Cost Governance",
    "113. API Capacity Planning", "114. API Scalability", "115. API Resilience", "116. API Failure Handling",
    "117. Retry Policies (Exponential Backoff)", "118. Circuit Breakers", "119. Timeout Standards",
    "120. Bulkhead Isolation", "121. API Caching", "122. CDN Strategy", "123. Edge API Architecture",
    "124. Localization Architecture", "125. RTL API Documentation", "126. API Documentation Language Policy",
    "127. Developer Experience", "128. Developer Onboarding (<5 Min)", "129. API Examples",
    "130. API Changelog", "131. API Deprecation Notices", "132. API Security Incident Response",
    "133. API Disaster Recovery Testing", "134. API Governance Metrics", "135. API Architecture Decision Records",
    "136. API Compliance Checklist", "137. API Readiness Checklist", "138. Enterprise API Reference Architecture",
    "139. Current Architecture", "140. Standard Architecture", "141. Future Architecture",
    "142. Enterprise API Roadmap (2026-2027+)", "143. Document Control & Revision History"
  ],
  knowledge: [
    "01. Document Control & Metadata", "02. Executive Summary", "03. Purpose", "04. Scope",
    "05. Core Architectural Principles", "06. Trilingual Language Architecture (EN/AR/CKB)",
    "07. RTL & LTR Layout Architecture (CSS Logical)", "08. Enterprise Knowledge Hierarchy (14 Domains)",
    "09. Document Identification System (IDG-SPEC-*)", "10. Knowledge Frontmatter Standard (YAML)",
    "11. Search Architecture (Full-Text & Semantic)", "12. Knowledge Graph Architecture & Entities",
    "13. Access Control & Classification Matrix", "14. Auditability & Document Lineage (7-Yr)",
    "15. Website & Portal Integration", "16. Quality Metrics & Compliance Checklist",
    "17. Document Control & Revision History"
  ],
  localization: [
    "01. Document Control & Metadata", "02. Executive Summary", "03. Purpose & Scope",
    "04. Localization Principles", "05. Canonical Locale Registry (BCP 47)",
    "06. Language Selector UI Standard", "07. Decoupled Translation Architecture",
    "08. RTL / LTR Logical Mirroring Architecture", "09. Enterprise Multilingual Typography",
    "10. Technical Identifier Canonical Standard", "11. Trilingual Parity & Fallback Engine",
    "12. SEO hreflang & Localization Metadata", "13. API Error Envelope Localization",
    "14. Accessibility (WCAG 2.1 AA) & Screen Readers", "15. Client Preference Persistence (idg.locale)",
    "16. Quality Metrics & CI/CD Validation Gate", "17. Document Control & Revision History"
  ],
  security: [
    "01. Document Control & Metadata", "02. Executive Summary", "03. Purpose & Scope",
    "04. Core Security Principles", "05. Zero Trust Architecture (ZTA)",
    "06. Identity & Access Management (IAM/PAM)", "07. Cryptographic Standards & Key Management",
    "08. Application & API Security (OWASP/CSP)", "09. AI & LLM Security (AI Gate Iraq)",
    "10. DevSecOps & Supply Chain Security", "11. Security Telemetry, SIEM & IR (SEV 1-4)",
    "12. Business Continuity, DR & RTO/RPO", "13. Enterprise Risk Register & Treatments",
    "14. Compliance Alignment & RACI Matrix", "15. Security Maturity Model (Levels 0-5)",
    "16. Security KPIs & Metrics (MTTD/MTTR)", "17. Document Control & Revision History"
  ],
  data: [
    "01. Document Control & Metadata", "02. Executive Summary", "03. Purpose & Objectives",
    "04. Core Data Architecture Principles", "05. Current, Standard & Future States",
    "06. Enterprise Data Domains & Taxonomy (18 Domains)", "07. Trilingual Data Architecture & Invariance",
    "08. Data Lifecycle & Lineage (9 Stages)", "09. Data Security, Privacy & Cryptography",
    "10. AI & LLM Data Governance (AI Gate Iraq)", "11. Data Quality, Validation & Contracts",
    "12. Integration, Streaming & CDC Pipelines", "13. Cloud Storage & Database Standards (PG16/Firestore)",
    "14. Resilience, Backup & Disaster Recovery (RTO/RPO)", "15. Governance Operating Model & RACI Matrix",
    "16. Architecture Decision Records (ADRs)", "17. Implementation Roadmap (2026-2027)",
    "18. Compliance & Audit Lineage (ISO 27001)", "19. Performance, Scalability & FinOps",
    "20. Document Control & Revision History"
  ]
};

export default function App() {
  const { locale, setLocale, t, isRTL } = useI18n();
  const [activeDoc, setActiveDoc] = useState<SpecKey>('data');
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const activeSpecMeta = SPEC_REGISTRY[activeDoc];
  const currentFile = activeSpecMeta.file;
  const docId = activeSpecMeta.id;

  const currentSections = locale === 'ckb-IQ' 
    ? CKB_SECTIONS[activeDoc] 
    : EN_SECTIONS[activeDoc];

  const handleCopy = () => {
    fetch(`/${currentFile}`)
      .then(res => res.text())
      .then(text => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };

  const filteredSections = currentSections.filter(sec => 
    sec.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`flex h-screen w-full bg-slate-50 text-slate-900 overflow-hidden ${isRTL ? 'font-kurdish text-right' : 'font-sans text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Navigation Sidebar: Enterprise Directory */}
      <aside className={`w-80 bg-slate-900 text-slate-400 flex flex-col shrink-0 select-none ${isRTL ? 'border-l border-slate-800' : 'border-r border-slate-800'}`}>
        {/* Header */}
        <div className="p-5 border-b border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-sm shrink-0">
              IDG
            </div>
            <div className="overflow-hidden">
              <h1 className="text-white font-bold text-sm tracking-tight truncate">{t('app.title')}</h1>
              <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider">{t('app.os')}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-slate-800/80 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            <span className="text-slate-300 font-medium truncate">{t('app.active_product')}</span>
          </div>
        </div>

        {/* Spec File Selector Tabs */}
        <div className="p-3 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center justify-between px-1 mb-2">
            <p className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">{t('nav.active_spec')}</p>
            <span className="text-[9px] font-mono text-indigo-400 bg-indigo-950/80 px-1.5 py-0.5 rounded border border-indigo-800/40">14 Specs</span>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-4 gap-1 bg-slate-900 p-1.5 rounded-lg border border-slate-800">
            {(Object.keys(SPEC_REGISTRY) as SpecKey[]).map((key) => {
              const spec = SPEC_REGISTRY[key];
              const Icon = spec.icon;
              const isActive = activeDoc === key;
              return (
                <button
                  key={key}
                  onClick={() => { setActiveDoc(key); setActiveSection(null); }}
                  aria-label={t(`title.${key}`)}
                  title={t(`title.${key}`)}
                  className={`px-1.5 py-1.5 rounded text-[10px] font-medium transition flex items-center justify-center gap-1 truncate ${
                    isActive
                      ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-3 h-3 shrink-0" />
                  <span className="truncate">{t(`spec.${key}`)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sections Index List */}
        <div className="flex-1 p-3 overflow-hidden flex flex-col text-[11px] leading-tight">
          <div className="flex items-center justify-between mb-2 px-1">
            <p className="text-slate-400 font-bold text-[10px] truncate">
              {t(`title.${activeDoc}`)}
            </p>
            <span className="text-[9px] text-slate-500 font-mono shrink-0">
              ({currentSections.length} {t('common.sections')})
            </span>
          </div>

          <div className="relative mb-2">
            <Search className={`w-3.5 h-3.5 absolute top-2.5 text-slate-500 pointer-events-none ${isRTL ? 'right-2.5' : 'left-2.5'}`} />
            <input
              type="text"
              placeholder={t('nav.filter_sections')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full bg-slate-950 border border-slate-800 rounded-md py-1.5 text-[11px] text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition ${isRTL ? 'pr-8 pl-2' : 'pl-8 pr-2'}`}
            />
          </div>

          <nav className="flex-1 overflow-y-auto space-y-0.5 pr-1 text-slate-400 custom-scrollbar">
            <button
              onClick={() => setActiveSection(null)}
              className={`w-full text-left px-2.5 py-2 rounded transition flex items-center justify-between gap-2 ${
                activeSection === null
                  ? 'bg-slate-800 text-white font-semibold border border-slate-700/80'
                  : 'hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <span className="truncate">{t('common.entire_spec')}</span>
              <ChevronRight className={`w-3.5 h-3.5 opacity-60 shrink-0 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
            </button>

            {filteredSections.map((sec) => (
              <button
                key={sec}
                onClick={() => setActiveSection(sec)}
                className={`w-full text-left px-2.5 py-1.5 rounded transition flex items-center justify-between gap-2 ${
                  activeSection === sec
                    ? 'bg-indigo-600/30 text-indigo-300 font-semibold border border-indigo-500/40'
                    : 'hover:bg-slate-800/40 hover:text-slate-200'
                }`}
              >
                <span className="truncate">{sec}</span>
                <ChevronRight className={`w-3.5 h-3.5 opacity-40 shrink-0 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
              </button>
            ))}

            {filteredSections.length === 0 && (
              <div className="p-4 text-center text-slate-500 text-[11px]">
                {t('common.no_results')}
              </div>
            )}
          </nav>
        </div>

        {/* Sidebar Footer info */}
        <div className="p-3.5 bg-slate-950 border-t border-slate-800 text-[10px] text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)] shrink-0"></div>
            <span className="font-medium text-slate-400 truncate">{t('nav.spec_verified')}</span>
          </div>
          <span className="font-mono text-slate-600 shrink-0">v1.0.0</span>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 flex flex-col overflow-hidden bg-slate-50">
        {/* Header / Status Bar */}
        <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
              <span className="text-slate-400">{t(activeSpecMeta.domain)}</span>
              <span>/</span>
              <span className="text-slate-900 font-semibold">{currentFile.split('/')[1]}</span>
            </div>
            <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-[10px] font-mono font-bold border border-indigo-200/80">
              {activeSpecMeta.patch}
            </span>
            <span className="hidden sm:inline-flex px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[10px] font-mono font-bold border border-emerald-200/80">
              {t('nav.status_approved')}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Selector Control */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200/90 shadow-2xs">
              <Languages className="w-3.5 h-3.5 text-slate-500 mx-1 shrink-0" />
              <button
                onClick={() => setLocale('ckb-IQ')}
                aria-label="زمان: کوردی"
                className={`px-2 py-1 text-[11px] font-bold rounded transition ${
                  locale === 'ckb-IQ'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                کوردی
              </button>
              <button
                onClick={() => setLocale('ar-IQ')}
                aria-label="اللغة: العربية"
                className={`px-2 py-1 text-[11px] font-bold rounded transition ${
                  locale === 'ar-IQ'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                ع
              </button>
              <button
                onClick={() => setLocale('en-US')}
                aria-label="Language: English"
                className={`px-2 py-1 text-[11px] font-bold rounded transition ${
                  locale === 'en-US'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-300 rounded-md hover:bg-slate-50 flex items-center gap-1.5 transition shadow-2xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copied ? t('nav.copied') : t('nav.copy_spec')}</span>
            </button>

            <a
              href={`/${currentFile}`}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-xs flex items-center gap-1.5 transition"
            >
              <span>{t('common.preview')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </header>

        {/* Content Viewer / Document Editor View */}
        <section className="flex-1 flex overflow-hidden bg-white">
          {/* Line Numbers Gutter */}
          <div className={`w-12 bg-slate-50 flex flex-col items-center py-6 text-slate-400 font-mono text-[11px] leading-[1.8] select-none shrink-0 hidden sm:flex ${isRTL ? 'border-l border-slate-200' : 'border-r border-slate-200'}`}>
            {Array.from({ length: 30 }, (_, i) => (
              <span key={i}>{(i + 1).toString().padStart(2, '0')}</span>
            ))}
          </div>

          {/* Document Content Canvas */}
          <div className="flex-1 p-6 sm:p-10 overflow-y-auto font-sans text-slate-800">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Document Banner */}
              <div className="p-6 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-xl shadow-md border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-300 bg-indigo-500/20 px-2.5 py-0.5 rounded border border-indigo-400/30">
                        {docId}
                      </span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/20 px-2.5 py-0.5 rounded font-medium border border-emerald-500/30">
                        {t('nav.classification')}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {t(`title.${activeDoc}`)}
                    </h2>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {t(`desc.${activeDoc}`)}
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-700/60 text-xs font-mono">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{activeSpecMeta.lines} {t('common.lines')}</span>
                  </div>
                </div>
              </div>

              {/* Enterprise Architecture Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl shadow-2xs">
                  <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs mb-1.5">
                    <Building2 className="w-4 h-4 shrink-0" />
                    <span>{t('feature.parent_title')}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t('feature.parent_desc')}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl shadow-2xs">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs mb-1.5">
                    <Globe className="w-4 h-4 shrink-0" />
                    <span>{t('feature.trilingual_title')}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t('feature.trilingual_desc')}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl shadow-2xs">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-xs mb-1.5">
                    <GitBranch className="w-4 h-4 shrink-0" />
                    <span>{t('feature.scalable_title')}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t('feature.scalable_desc')}
                  </p>
                </div>
              </div>

              {/* Section Focus Display */}
              {activeSection && (
                <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-xs text-indigo-950 flex items-start justify-between gap-4">
                  <div>
                    <span className="font-bold text-indigo-800 uppercase tracking-wider text-[10px]">{t('common.filter_active')}</span>
                    <h3 className="font-bold text-sm text-indigo-900 mt-1">{activeSection}</h3>
                    <p className="text-indigo-700 mt-1 text-[11px]">{t('common.viewing_focus')} <code className="font-mono bg-indigo-100 px-1 py-0.5 rounded text-indigo-900" dir="ltr">{currentFile}</code>.</p>
                  </div>
                  <button
                    onClick={() => setActiveSection(null)}
                    className="text-xs text-indigo-600 hover:text-indigo-800 font-medium underline shrink-0 cursor-pointer"
                  >
                    {t('common.view_all')}
                  </button>
                </div>
              )}

              {/* Code/Spec Structure Viewer Box */}
              <div className="bg-slate-900 text-slate-200 rounded-xl p-6 font-mono text-xs leading-relaxed border border-slate-800 shadow-inner space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-slate-400 text-[11px]">
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{t('common.file_path')} <strong className="text-slate-100" dir="ltr">{currentFile}</strong></span>
                  </span>
                  <span className="text-emerald-400 font-sans text-[10px]">{t('common.md_complete')}</span>
                </div>

                {/* Localized Spec Structural Overview */}
                <div className="space-y-3">
                  <p className="text-indigo-400 font-bold text-sm"># {t(`title.${activeDoc}`)}</p>
                  <p className="text-slate-400 italic text-[11px]" dir="ltr">// Identifiers: {docId} | Parent: IDG | Flagship: AI Gate Iraq (Product 001)</p>
                  
                  <div className={`space-y-3 text-slate-300 ${isRTL ? 'pr-3 border-r-2 border-indigo-500' : 'pl-3 border-l-2 border-indigo-500'}`}>
                    {currentSections.slice(0, 6).map((sec, idx) => (
                      <div key={idx} className="space-y-1">
                        <p className="text-slate-100 font-semibold text-xs">{sec}</p>
                        <p className="text-slate-400 text-[11px] leading-relaxed">
                          {locale === 'ckb-IQ' 
                            ? `بڕگەی ئەڕکیتێکچەری و ستانداردی فەرمی دامەزراوە بۆ ${sec} بە شێوازی پەسەندکراو و جێبەجێکراو لەناو سیستەمەکەدا.`
                            : `Enterprise architecture specification and technical requirements governing ${sec} for production deployment.`}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meta Info Footer */}
        <footer className="h-10 bg-slate-100 border-t border-slate-200 px-6 flex items-center justify-between text-[11px] text-slate-600 shrink-0 font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0"></span>
              {t('footer.utf8')}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0"></span>
              {t('footer.ai_readiness')}
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-500 font-mono text-[10px]">
            <span dir="ltr">{t('footer.file')} {currentFile}</span>
            <span>{t('footer.status')}</span>
            <span>{t('footer.sync')}</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
