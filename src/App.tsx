import React, { useState } from 'react';
import { useI18n, LOCALES, LocaleCode } from './i18n';
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
  Languages
} from 'lucide-react';

const IA_SECTIONS = [
  "01. IA Principles",
  "02. Enterprise Hierarchy",
  "03. Website Structure",
  "04. Multi-site Architecture",
  "05. Parent vs Product 001",
  "06. Content Ownership",
  "07. Website Taxonomy",
  "08. Knowledge Architecture",
  "09. Page Classification",
  "10. Page Templates",
  "11. Navigation Layers",
  "12. Global Search",
  "13. Internal Linking Strategy",
  "14. Documentation Hierarchy",
  "15. Corporate Doc Integration",
  "16. Product Doc Integration",
  "17. Metadata Strategy",
  "18. URL Governance",
  "19. Future Expansion Rules",
  "20. Information Governance",
  "21. Version Control",
  "22. Content Lifecycle",
  "23. Enterprise Scalability",
  "24. AI Readiness",
  "25. Knowledge Graph",
  "26. Digital Ecosystem Map",
  "27. Document Control"
];

const NAV_SECTIONS = [
  "01. Navigation Philosophy",
  "02. Global Navigation",
  "03. Corporate Navigation Structure",
  "04. Product Navigation Model",
  "05. Information Flow",
  "06. Mega Menu Standards",
  "07. Breadcrumb Rules",
  "08. Search Strategy",
  "09. Mobile Navigation",
  "10. Accessibility Requirements",
  "11. Navigation Performance",
  "12. Future Scalability",
  "13. Governance",
  "14. Document Control"
];

const CTS_SECTIONS = [
  "01. Executive Principles",
  "02. Multilingual & Localization Architecture",
  "03. Primary & Future Languages",
  "04. RTL / LTR Technical Rules",
  "05. Translation Pipeline & Quality",
  "06. Terminology & Glossary Management",
  "07. Page Content Specifications",
  "08. Editorial Standards & Tone",
  "09. SEO & Indexing Rules",
  "10. Accessibility & Media Localization",
  "11. Content Lifecycle & Governance",
  "12. Document Control"
];

const SEO_SECTIONS = [
  "01. Executive SEO Principles",
  "02. Domain & URL Topology Strategy",
  "03. Multilingual & Multi-Region SEO",
  "04. Enterprise Metadata Standards",
  "05. Schema.org & JSON-LD Infrastructure",
  "06. XML Sitemaps Architecture",
  "07. Robots Policy & AI Crawler Directives",
  "08. AI Search Optimization (AEO & GEO)",
  "09. Core Web Vitals & Performance Budget",
  "10. SEO Governance & Audit Workflow"
];

const DS_SECTIONS = [
  "01. Executive Overview & Philosophy",
  "02. Enterprise Design Principles",
  "03. Atomic Design Architecture",
  "04. Design Token System",
  "05. Color Architecture & Palettes",
  "06. Typography & Multilingual Pairing",
  "07. Spacing System & Grid Specs",
  "08. Component Specifications (24 Cats)",
  "09. Responsive Breakpoints & Accessibility",
  "10. Theme System & RTL Mirroring"
];

const CMP_SECTIONS = [
  "01. Component Philosophy",
  "02. Atomic Component Hierarchy",
  "03. Navigation & Header Components",
  "04. Action & Button Components",
  "05. Form Control & Input Components",
  "06. Data Display & Layout Components",
  "07. Feedback, Modal & Overlay",
  "08. Government & Enterprise Modules",
  "09. Accessibility Standards (WCAG 2.2 AA)",
  "10. Internationalization & Bi-Directional Logic"
];

const DOCGOV_SECTIONS = [
  "01. Documentation Vision & Principles",
  "02. Enterprise Hierarchy Pyramid",
  "03. Repository Structure & Folder Specs",
  "04. File & Folder Naming Conventions",
  "05. Markdown Syntax & Frontmatter Metadata",
  "06. Document Lifecycle (6 States)",
  "07. Review & Approval Workflow Matrix",
  "08. Security Classification Framework",
  "09. Multilingual Translation & Governance",
  "10. AI Policy & ISO 9001 Alignment"
];

const REPO_SECTIONS = [
  "01. Executive Summary & Vision",
  "02. Constitutional Repository Principles",
  "03. Enterprise Taxonomies & Categories",
  "04. Standardized Repository Naming Conventions",
  "05. Internal Directory & Folder Standards",
  "06. Branching Strategy & GitFlow Rules",
  "07. Commit Message Standards (Conventional)",
  "08. GitHub Enterprise Security Controls",
  "09. Mandatory Baseline Repository Files",
  "10. Automated CI/CD Pipelines & Lifecycles"
];

const DEPLOY_SECTIONS = [
  "01. Document Control",
  "02. Purpose and Scope",
  "03. Deployment Architecture Principles",
  "04. IDG Enterprise Deployment Model",
  "05. Environment Architecture (7 Isolation Tiers)",
  "06. Application Deployment Architecture",
  "07. Frontend Deployment & Trilingual Bundles",
  "08. Backend Deployment & Node/Express Runtimes",
  "09. API Deployment & Cloud Run Ingress",
  "10. Database & Persistent Data Deployment",
  "11. Cloud Infrastructure Deployment (GCP)",
  "12. CDN & Edge Deployment (Cloudflare)",
  "13. DNS & Domain Deployment (Anycast)",
  "14. CI/CD Architecture & Automated Workflows",
  "15. GitHub Actions Deployment Pipelines",
  "16. Build & Release Process (OCI Containers)",
  "17. Branch-to-Environment Mapping",
  "18. Deployment Approval Model & Protection",
  "19. Infrastructure as Code (IaC Terraform)",
  "20. Secrets & Configuration Management",
  "21. Environment Variables Management",
  "22. Security Controls & Shift-Left SAST",
  "23. Identity & Access Management (IAM)",
  "24. SSL/TLS & Certificate Management",
  "25. Monitoring & Observability (Golden Signals)",
  "26. Logging & Audit Trails (ISO 27001)",
  "27. Backup & Recovery (Point-In-Time)",
  "28. Disaster Recovery (DR RPO/RTO)",
  "29. Rollback Strategy & Auto-Reversion",
  "30. Zero-Downtime Deployment (Canary)",
  "31. Database Migration Strategy (Drizzle)",
  "32. Dependency Management & Lockfiles",
  "33. Supply Chain Security & SBOM",
  "34. Vulnerability Management (CVSS SLA)",
  "35. Deployment Governance & Engineering",
  "36. Release Governance & Semantic Versioning",
  "37. Change Management & Emergency Hotfixes",
  "38. Incident Response Integration & War Rooms",
  "39. Performance & Auto-Scaling Strategy",
  "40. High Availability & Multi-AZ Topology",
  "41. Multi-Region Readiness (Active-Passive)",
  "42. Sovereign Infrastructure Readiness (Air-Gapped)",
  "43. Product 001 Deployment Model (AI Gate)",
  "44. Future Product Deployment Model (P002-P500+)",
  "45. Repository-to-Deployment Relationship",
  "46. Deployment Lifecycle (4 Runtime States)",
  "47. Compliance & Audit Requirements (7-Yr Logs)",
  "48. Operational Responsibilities Matrix",
  "49. Deployment Naming Standards",
  "50. Deployment Documentation Runbooks",
  "51. Enterprise Deployment Checklist",
  "52. Future Deployment Evolution (2026-2028+)",
  "53. Document Control & Revision History"
];

const API_SECTIONS = [
  "001. Executive Summary",
  "002. Purpose",
  "003. Scope",
  "004. API Architecture Principles",
  "005. Enterprise API Strategy",
  "006. IDG API Portfolio Model (Tiers 1-4)",
  "007. API Domain Taxonomy (16 Domains)",
  "008. API Classification (Levels 0-4)",
  "009. Public API Architecture",
  "010. Private API Architecture",
  "011. Partner API Architecture",
  "012. Internal Service APIs (gRPC)",
  "013. Government Integration APIs & HSM",
  "014. Platform APIs",
  "015. Product API Architecture",
  "016. AI Gate Iraq API Architecture (Product 001)",
  "017. Future Product API Inheritance Model",
  "018. API Gateway Architecture (Cloudflare/Cloud Run)",
  "019. API Routing Model",
  "020. API Authentication Architecture",
  "021. Authorization Architecture (RBAC/ABAC)",
  "022. Identity Federation (SAML/OIDC)",
  "023. OAuth 2.0 Architecture (PKCE/Credentials)",
  "024. OpenID Connect Architecture",
  "025. API Key Governance (SHA-256)",
  "026. Service-to-Service Authentication",
  "027. mTLS Requirements (TLS 1.3)",
  "028. Rate Limiting",
  "029. Quotas",
  "030. Throttling (Token Bucket)",
  "031. API Security Architecture (Zero-Trust)",
  "032. OWASP API Security Top 10 Mitigation",
  "033. Input Validation (JSON Schema)",
  "034. Output Validation",
  "035. Secrets Management (GCP Secret Manager)",
  "036. Encryption (AES-256 / CMEK)",
  "037. Data Classification",
  "038. Personal Data Protection (PII Masking)",
  "039. Sovereign Data Requirements (Iraqi Law)",
  "040. API Versioning (/v1/ Path Prefix)",
  "041. Backward Compatibility",
  "042. Deprecation Policy (180-Day Window)",
  "043. API Lifecycle (6 Stages)",
  "044. API Design Standards",
  "045. REST Standards (CRUD Verbs)",
  "046. HTTP Standards",
  "047. JSON Standards (snake_case)",
  "048. Trilingual Error Model (en-US, ar-IQ, ckb-IQ)",
  "049. HTTP Status Code Standards",
  "050. Pagination (Cursor-Based)",
  "051. Filtering",
  "052. Sorting",
  "053. Search",
  "054. Idempotency (Idempotency-Key UUID)",
  "055. Request Correlation (X-Correlation-ID)",
  "056. Distributed Tracing (W3C Trace Context)",
  "057. Observability",
  "058. Logging (Structured JSON)",
  "059. Metrics (Four Golden Signals)",
  "060. Alerting (PagerDuty / Slack)",
  "061. API Performance Standards",
  "062. Availability Standards (99.95% SLA)",
  "063. Reliability Standards",
  "064. Disaster Recovery (RPO <5m, RTO <15m)",
  "065. Failover Architecture",
  "066. Multi-Region API Architecture",
  "067. Cloudflare Integration (WAF/Workers)",
  "068. Google Cloud Integration",
  "069. Firebase Integration (Auth/Firestore)",
  "070. Cloud SQL Integration (PostgreSQL 16)",
  "071. Cloud Run Integration",
  "072. GitHub Actions Integration",
  "073. DevSecOps API Pipeline",
  "074. API Testing Strategy",
  "075. Contract Testing (Pact)",
  "076. Integration Testing",
  "077. Load Testing (k6)",
  "078. Security Testing (CodeQL/Trivy)",
  "079. API Documentation Standards",
  "080. OpenAPI Specification (OpenAPI 3.1)",
  "081. Developer Portal (developer.idg.global)",
  "082. SDK Architecture",
  "083. Client Libraries (TS, Python, Go, Flutter)",
  "084. Webhooks (HMAC-SHA256 Signatures)",
  "085. Event-Driven Integration (CloudEvents)",
  "086. Message Architecture",
  "087. External Partner Integration",
  "088. Government Interoperability",
  "089. API Data Exchange",
  "090. API Governance",
  "091. API Ownership (CODEOWNERS)",
  "092. API Stewardship",
  "093. API Approval Process",
  "094. API Change Management",
  "095. API Repository Standards (idg-api-*)",
  "096. API Naming Standards",
  "097. Endpoint Naming Standards",
  "098. Resource Naming Standards",
  "099. Domain Naming Standards",
  "100. API URI Standards",
  "101. API Header Standards",
  "102. API Schema Standards",
  "103. API Contract Standards",
  "104. API Security Review",
  "105. API Architecture Review",
  "106. API Compliance (ISO 27001 / SOC 2)",
  "107. API Auditability (7-Year Logs)",
  "108. API SLA Standards (99.95%)",
  "109. API SLO Standards (<100ms p95)",
  "110. API Incident Management",
  "111. API Monitoring",
  "112. API Cost Governance",
  "113. API Capacity Planning",
  "114. API Scalability",
  "115. API Resilience",
  "116. API Failure Handling",
  "117. Retry Policies (Exponential Backoff)",
  "118. Circuit Breakers",
  "119. Timeout Standards",
  "120. Bulkhead Isolation",
  "121. API Caching",
  "122. CDN Strategy",
  "123. Edge API Architecture",
  "124. Localization Architecture",
  "125. RTL API Documentation",
  "126. API Documentation Language Policy",
  "127. Developer Experience",
  "128. Developer Onboarding (<5 Min)",
  "129. API Examples",
  "130. API Changelog",
  "131. API Deprecation Notices",
  "132. API Security Incident Response",
  "133. API Disaster Recovery Testing",
  "134. API Governance Metrics",
  "135. API Architecture Decision Records",
  "136. API Compliance Checklist",
  "137. API Readiness Checklist",
  "138. Enterprise API Reference Architecture",
  "139. Current Architecture",
  "140. Standard Architecture",
  "141. Future Architecture",
  "142. Enterprise API Roadmap (2026-2027+)",
  "143. Document Control & Revision History"
];

const KNOWLEDGE_SECTIONS = [
  "01. Document Control & Metadata",
  "02. Executive Summary",
  "03. Purpose",
  "04. Scope",
  "05. Core Architectural Principles",
  "06. Trilingual Language Architecture (EN/AR/CKB)",
  "07. RTL & LTR Layout Architecture (CSS Logical)",
  "08. Enterprise Knowledge Hierarchy (14 Domains)",
  "09. Document Identification System (IDG-SPEC-*)",
  "10. Knowledge Frontmatter Standard (YAML)",
  "11. Search Architecture (Full-Text & Semantic)",
  "12. Knowledge Graph Architecture & Entities",
  "13. Access Control & Classification Matrix",
  "14. Auditability & Document Lineage (7-Yr)",
  "15. Website & Portal Integration",
  "16. Quality Metrics & Compliance Checklist",
  "17. Document Control & Revision History"
];

const LOCALIZATION_SECTIONS = [
  "01. Document Control & Metadata",
  "02. Executive Summary",
  "03. Purpose & Scope",
  "04. Localization Principles",
  "05. Canonical Locale Registry (BCP 47)",
  "06. Language Selector UI Standard",
  "07. Decoupled Translation Architecture",
  "08. RTL / LTR Logical Mirroring Architecture",
  "09. Enterprise Multilingual Typography",
  "10. Technical Identifier Canonical Standard",
  "11. Trilingual Parity & Fallback Engine",
  "12. SEO hreflang & Localization Metadata",
  "13. API Error Envelope Localization",
  "14. Accessibility (WCAG 2.1 AA) & Screen Readers",
  "15. Client Preference Persistence (idg.locale)",
  "16. Quality Metrics & CI/CD Validation Gate",
  "17. Document Control & Revision History"
];

const SECURITY_SECTIONS = [
  "01. Document Control & Metadata",
  "02. Executive Summary",
  "03. Purpose & Scope",
  "04. Core Security Principles",
  "05. Zero Trust Architecture (ZTA)",
  "06. Identity & Access Management (IAM/PAM)",
  "07. Cryptographic Standards & Key Management",
  "08. Application & API Security (OWASP/CSP)",
  "09. AI & LLM Security (AI Gate Iraq)",
  "10. DevSecOps & Supply Chain Security",
  "11. Security Telemetry, SIEM & IR (SEV 1-4)",
  "12. Business Continuity, DR & RTO/RPO",
  "13. Enterprise Risk Register & Treatments",
  "14. Compliance Alignment & RACI Matrix",
  "15. Security Maturity Model (Levels 0-5)",
  "16. Security KPIs & Metrics (MTTD/MTTR)",
  "17. Document Control & Revision History"
];

export default function App() {
  const { locale, setLocale, t, isRTL } = useI18n();
  const [activeDoc, setActiveDoc] = useState<'ia' | 'nav' | 'cts' | 'seo' | 'ds' | 'cmp' | 'docgov' | 'repo' | 'deploy' | 'api' | 'knowledge' | 'localization' | 'security'>('security');
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const currentFile = activeDoc === 'ia' 
    ? 'website/information-architecture.md' 
    : activeDoc === 'nav' 
    ? 'website/navigation-architecture.md' 
    : activeDoc === 'cts'
    ? 'website/content-strategy.md'
    : activeDoc === 'seo'
    ? 'seo/seo-architecture.md'
    : activeDoc === 'ds'
    ? 'design-system/design-tokens.md'
    : activeDoc === 'cmp'
    ? 'design-system/components.md'
    : activeDoc === 'docgov'
    ? 'governance/document-governance.md'
    : activeDoc === 'repo'
    ? 'technical/repository-structure.md'
    : activeDoc === 'deploy'
    ? 'technical/deployment.md'
    : activeDoc === 'api'
    ? 'technical/api-architecture.md'
    : activeDoc === 'knowledge'
    ? 'governance/knowledge-architecture.md'
    : activeDoc === 'localization'
    ? 'governance/localization-architecture.md'
    : 'governance/security-compliance-architecture.md';

  const docId = activeDoc === 'ia' 
    ? 'IDG-SPEC-IA-2026-V1' 
    : activeDoc === 'nav' 
    ? 'IDG-SPEC-NAV-2026-V1' 
    : activeDoc === 'cts'
    ? 'IDG-SPEC-CTS-2026-V1'
    : activeDoc === 'seo'
    ? 'IDG-SPEC-SEO-2026-V1'
    : activeDoc === 'ds'
    ? 'IDG-SPEC-DS-2026-V1'
    : activeDoc === 'cmp'
    ? 'IDG-SPEC-CMP-2026-V1'
    : activeDoc === 'docgov'
    ? 'IDG-SPEC-DOCGOV-2026-V1'
    : activeDoc === 'repo'
    ? 'IDG-SPEC-REPO-2026-V1'
    : activeDoc === 'deploy'
    ? 'IDG-SPEC-DEPLOY-2026-V1'
    : activeDoc === 'api'
    ? 'IDG-SPEC-API-2026-V1'
    : activeDoc === 'knowledge'
    ? 'IDG-SPEC-KNOWLEDGE-2026-V1'
    : activeDoc === 'localization'
    ? 'IDG-SPEC-LOCALIZATION-2026-V1'
    : 'IDG-SPEC-SECURITY-2026-V1';

  const sections = activeDoc === 'ia' 
    ? IA_SECTIONS 
    : activeDoc === 'nav' 
    ? NAV_SECTIONS 
    : activeDoc === 'cts'
    ? CTS_SECTIONS
    : activeDoc === 'seo'
    ? SEO_SECTIONS
    : activeDoc === 'ds'
    ? DS_SECTIONS
    : activeDoc === 'cmp'
    ? CMP_SECTIONS
    : activeDoc === 'docgov'
    ? DOCGOV_SECTIONS
    : activeDoc === 'repo'
    ? REPO_SECTIONS
    : activeDoc === 'deploy'
    ? DEPLOY_SECTIONS
    : activeDoc === 'api'
    ? API_SECTIONS
    : activeDoc === 'knowledge'
    ? KNOWLEDGE_SECTIONS
    : activeDoc === 'localization'
    ? LOCALIZATION_SECTIONS
    : SECURITY_SECTIONS;

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

  const filteredSections = sections.filter(sec => 
    sec.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex h-screen w-full bg-slate-50 text-slate-900 font-sans overflow-hidden">
      {/* Left Navigation Rail: Enterprise Directory */}
      <aside className="w-72 bg-slate-900 text-slate-400 flex flex-col shrink-0 border-r border-slate-800 select-none">
        {/* Header */}
        <div className="p-5 border-b border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-sm">
              IDG
            </div>
            <div>
              <h1 className="text-white font-semibold text-sm tracking-tight">IRAQ DIGITAL GATEWAY</h1>
              <p className="text-[10px] text-indigo-400 uppercase tracking-widest font-bold">Enterprise OS</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 mt-3 pt-2.5 border-t border-slate-800/80 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-slate-300 font-medium">Product 001: AI Gate Iraq Active</span>
          </div>
        </div>

        {/* Spec File Selector Tabs */}
        <div className="p-3 border-b border-slate-800 bg-slate-950/50">
          <p className="px-2 mb-2 text-slate-500 font-bold uppercase tracking-widest text-[9px]">{t('nav.active_spec')}</p>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-4 gap-1 bg-slate-900 p-1.5 rounded-lg border border-slate-800">
            <button
              onClick={() => { setActiveDoc('ia'); setActiveSection(null); }}
              className={`px-1 py-1.5 rounded text-[9px] font-medium transition flex items-center justify-center gap-1 ${
                activeDoc === 'ia'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3 h-3 shrink-0" />
              <span>Info</span>
            </button>
            <button
              onClick={() => { setActiveDoc('nav'); setActiveSection(null); }}
              className={`px-1 py-1.5 rounded text-[9px] font-medium transition flex items-center justify-center gap-1 ${
                activeDoc === 'nav'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Navigation className="w-3 h-3 shrink-0" />
              <span>Nav</span>
            </button>
            <button
              onClick={() => { setActiveDoc('cts'); setActiveSection(null); }}
              className={`px-1 py-1.5 rounded text-[9px] font-medium transition flex items-center justify-center gap-1 ${
                activeDoc === 'cts'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Globe className="w-3 h-3 shrink-0" />
              <span>CTS</span>
            </button>
            <button
              onClick={() => { setActiveDoc('seo'); setActiveSection(null); }}
              className={`px-1 py-1.5 rounded text-[9px] font-medium transition flex items-center justify-center gap-1 ${
                activeDoc === 'seo'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Search className="w-3 h-3 shrink-0" />
              <span>SEO</span>
            </button>
            <button
              onClick={() => { setActiveDoc('ds'); setActiveSection(null); }}
              className={`px-1 py-1.5 rounded text-[9px] font-medium transition flex items-center justify-center gap-1 ${
                activeDoc === 'ds'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Palette className="w-3 h-3 shrink-0" />
              <span>Toks</span>
            </button>
            <button
              onClick={() => { setActiveDoc('cmp'); setActiveSection(null); }}
              className={`px-1 py-1.5 rounded text-[9px] font-medium transition flex items-center justify-center gap-1 ${
                activeDoc === 'cmp'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Component className="w-3 h-3 shrink-0" />
              <span>Comp</span>
            </button>
            <button
              onClick={() => { setActiveDoc('docgov'); setActiveSection(null); }}
              className={`px-1 py-1.5 rounded text-[9px] font-medium transition flex items-center justify-center gap-1 ${
                activeDoc === 'docgov'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3 h-3 shrink-0" />
              <span>Gov</span>
            </button>
            <button
              onClick={() => { setActiveDoc('repo'); setActiveSection(null); }}
              className={`px-1 py-1.5 rounded text-[9px] font-medium transition flex items-center justify-center gap-1 ${
                activeDoc === 'repo'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <GitBranch className="w-3 h-3 shrink-0" />
              <span>Repo</span>
            </button>
            <button
              onClick={() => { setActiveDoc('deploy'); setActiveSection(null); }}
              className={`px-1 py-1.5 rounded text-[9px] font-medium transition flex items-center justify-center gap-1 ${
                activeDoc === 'deploy'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Server className="w-3 h-3 shrink-0" />
              <span>Ops</span>
            </button>
            <button
              onClick={() => { setActiveDoc('api'); setActiveSection(null); }}
              className={`px-1 py-1.5 rounded text-[9px] font-medium transition flex items-center justify-center gap-1 ${
                activeDoc === 'api'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-3 h-3 shrink-0" />
              <span>API</span>
            </button>
            <button
              onClick={() => { setActiveDoc('knowledge'); setActiveSection(null); }}
              className={`px-1 py-1.5 rounded text-[9px] font-medium transition flex items-center justify-center gap-1 ${
                activeDoc === 'knowledge'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Library className="w-3 h-3 shrink-0" />
              <span>Know</span>
            </button>
            <button
              onClick={() => { setActiveDoc('localization'); setActiveSection(null); }}
              className={`px-1 py-1.5 rounded text-[9px] font-medium transition flex items-center justify-center gap-1 ${
                activeDoc === 'localization'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Languages className="w-3 h-3 shrink-0" />
              <span>i18n</span>
            </button>
            <button
              onClick={() => { setActiveDoc('security'); setActiveSection(null); }}
              className={`px-1 py-1.5 rounded text-[9px] font-medium transition flex items-center justify-center gap-1 ${
                activeDoc === 'security'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ShieldCheck className="w-3 h-3 shrink-0" />
              <span>Sec</span>
            </button>
          </div>
        </div>

        {/* Index List */}
        <div className="flex-1 p-3 overflow-hidden flex flex-col text-[11px] leading-tight">
          <div className="flex items-center justify-between mb-2 px-2">
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px]">
              {activeDoc === 'ia' ? 'Information Architecture (27 Sec)' : activeDoc === 'nav' ? 'Navigation Architecture (14 Sec)' : activeDoc === 'cts' ? 'Content Strategy (12 Sec)' : activeDoc === 'seo' ? 'SEO Architecture (10 Sec)' : activeDoc === 'ds' ? 'Design Tokens (10 Sec)' : activeDoc === 'cmp' ? 'Component Library (10 Sec)' : activeDoc === 'docgov' ? 'Doc Governance (40 Sec)' : activeDoc === 'repo' ? 'Repository Architecture (14 Sec)' : activeDoc === 'deploy' ? 'Deployment Architecture (53 Sec)' : activeDoc === 'api' ? 'API Architecture (143 Sec)' : activeDoc === 'knowledge' ? 'Knowledge Architecture (17 Sec)' : activeDoc === 'localization' ? 'Localization Architecture (17 Sec)' : 'Security & Compliance (17 Sec)'}
            </p>
          </div>

          <div className="relative mb-2 px-1">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
            <input
              type="text"
              placeholder="Filter sections..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-md pl-8 pr-2 py-1 text-[11px] text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>

          <nav className="flex-1 overflow-y-auto space-y-0.5 pr-1 text-slate-400 custom-scrollbar">
            <button
              onClick={() => setActiveSection(null)}
              className={`w-full text-left px-2.5 py-1.5 rounded transition flex items-center justify-between ${
                activeSection === null
                  ? 'bg-slate-800 text-white font-medium border border-slate-700/80'
                  : 'hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <span className="truncate">Entire Specification</span>
              <ChevronRight className="w-3 h-3 opacity-60 shrink-0" />
            </button>

            {filteredSections.map((sec) => (
              <button
                key={sec}
                onClick={() => setActiveSection(sec)}
                className={`w-full text-left px-2.5 py-1.5 rounded transition flex items-center justify-between ${
                  activeSection === sec
                    ? 'bg-indigo-600/30 text-indigo-300 font-medium border border-indigo-500/40'
                    : 'hover:bg-slate-800/40 hover:text-slate-200'
                }`}
              >
                <span className="truncate">{sec}</span>
                <ChevronRight className="w-3 h-3 opacity-40 shrink-0" />
              </button>
            ))}
          </nav>
        </div>

        {/* Footer info */}
        <div className="p-3.5 bg-slate-950 border-t border-slate-800 text-[10px] text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
            <span className="font-mono tracking-tighter uppercase text-slate-400">Specification Verified</span>
          </div>
          <span className="font-mono text-slate-600">v1.0.0</span>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 flex flex-col overflow-hidden bg-slate-50">
        {/* Header / Status Bar */}
        <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
              <span className="text-slate-400">website</span>
              <span>/</span>
              <span className="text-slate-900 font-semibold">{currentFile.split('/')[1]}</span>
            </div>
            <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-[10px] font-mono font-bold border border-indigo-200/80">
              {activeDoc === 'ia' ? 'PATCH 003' : activeDoc === 'nav' ? 'PATCH 004' : activeDoc === 'cts' ? 'PATCH 005' : activeDoc === 'seo' ? 'PATCH 006' : activeDoc === 'ds' ? 'PATCH 007' : activeDoc === 'cmp' ? 'PATCH 008' : activeDoc === 'docgov' ? 'PATCH 009' : activeDoc === 'repo' ? 'PATCH 010' : activeDoc === 'deploy' ? 'PATCH 011' : activeDoc === 'api' ? 'PATCH 013' : activeDoc === 'knowledge' ? 'PATCH 014' : activeDoc === 'localization' ? 'PATCH 015' : 'PATCH 016'}
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
                onClick={() => setLocale('en-US')}
                aria-label="Switch to English"
                className={`px-2 py-1 text-[11px] font-bold rounded transition ${
                  locale === 'en-US'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLocale('ar-IQ')}
                aria-label="Switch to Arabic"
                className={`px-2 py-1 text-[11px] font-bold rounded transition ${
                  locale === 'ar-IQ'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                ع
              </button>
              <button
                onClick={() => setLocale('ckb-IQ')}
                aria-label="Switch to Kurdish Sorani"
                className={`px-2 py-1 text-[11px] font-bold rounded transition ${
                  locale === 'ckb-IQ'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                کوردی
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
          <div className="w-12 bg-slate-50 border-r border-slate-200 flex flex-col items-center py-6 text-slate-400 font-mono text-[11px] leading-[1.8] select-none shrink-0 hidden sm:flex">
            {Array.from({ length: 30 }, (_, i) => (
              <span key={i}>{(i + 1).toString().padStart(2, '0')}</span>
            ))}
          </div>

          {/* Document Content Canvas */}
          <div className="flex-1 p-6 sm:p-10 overflow-y-auto font-sans text-slate-800">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Document Banner */}
              <div className="p-5 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-xl shadow-md border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-400/30">
                        {docId}
                      </span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded font-mono border border-emerald-500/30">
                        {t('nav.classification')}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-white tracking-tight">
                      {activeDoc === 'ia' 
                        ? t('title.ia')
                        : activeDoc === 'nav'
                        ? t('title.nav')
                        : activeDoc === 'cts'
                        ? t('title.cts')
                        : activeDoc === 'seo'
                        ? t('title.seo')
                        : activeDoc === 'ds'
                        ? t('title.ds')
                        : activeDoc === 'cmp'
                        ? t('title.cmp')
                        : activeDoc === 'docgov'
                        ? t('title.docgov')
                        : activeDoc === 'repo'
                        ? t('title.repo')
                        : activeDoc === 'deploy'
                        ? t('title.deploy')
                        : activeDoc === 'api'
                        ? t('title.api')
                        : activeDoc === 'knowledge'
                        ? t('title.knowledge')
                        : activeDoc === 'localization'
                        ? t('title.localization')
                        : t('title.security')}
                    </h2>
                    <p className="text-xs text-slate-300 mt-1">
                      {activeDoc === 'ia'
                        ? t('desc.ia')
                        : activeDoc === 'nav'
                        ? t('desc.nav')
                        : activeDoc === 'cts'
                        ? t('desc.cts')
                        : activeDoc === 'seo'
                        ? t('desc.seo')
                        : activeDoc === 'ds'
                        ? t('desc.ds')
                        : activeDoc === 'cmp'
                        ? t('desc.cmp')
                        : activeDoc === 'docgov'
                        ? t('desc.docgov')
                        : activeDoc === 'repo'
                        ? t('desc.repo')
                        : activeDoc === 'deploy'
                        ? t('desc.deploy')
                        : activeDoc === 'api'
                        ? t('desc.api')
                        : activeDoc === 'knowledge'
                        ? t('desc.knowledge')
                        : activeDoc === 'localization'
                        ? t('desc.localization')
                        : t('desc.security')}
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 bg-slate-800/80 p-2 rounded-lg border border-slate-700/60 text-xs font-mono">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{activeDoc === 'ia' ? '436 Lines' : activeDoc === 'nav' ? '457 Lines' : activeDoc === 'cts' ? '410+ Lines' : activeDoc === 'seo' ? '510+ Lines' : activeDoc === 'ds' ? '480+ Lines' : activeDoc === 'cmp' ? '460+ Lines' : activeDoc === 'docgov' ? '230+ Lines' : activeDoc === 'repo' ? '300+ Lines' : activeDoc === 'deploy' ? '450+ Lines' : activeDoc === 'api' ? '500+ Lines' : activeDoc === 'security' ? '600+ Lines' : '250+ Lines'}</span>
                  </div>
                </div>
              </div>

              {/* Enterprise Architecture Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl shadow-2xs">
                  <div className="flex items-center gap-2 text-indigo-600 font-semibold text-xs mb-1">
                    <Building2 className="w-4 h-4" />
                    <span>Parent Entity Supremacy</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Iraq Digital Gateway (IDG) holds institutional authority over all present and future product units and subsidiaries.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl shadow-2xs">
                  <div className="flex items-center gap-2 text-emerald-600 font-semibold text-xs mb-1">
                    <Globe className="w-4 h-4" />
                    <span>Trilingual Day-One Launch</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Native day-one support for English (Global), Arabic (RTL), and Kurdish Sorani (RTL) with seamless RTL layout mirroring.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl shadow-2xs">
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-xs mb-1">
                    <GitBranch className="w-4 h-4" />
                    <span>Infinite Scalability</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Supports unlimited future products (<code className="text-indigo-700 font-mono">Product 002+</code>), services, regions, and localized languages.
                  </p>
                </div>
              </div>

              {/* Section Focus Display */}
              {activeSection && (
                <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-xs text-indigo-950 flex items-start justify-between">
                  <div>
                    <span className="font-bold text-indigo-800 uppercase tracking-wider text-[10px]">Filter Section Active</span>
                    <h3 className="font-semibold text-sm text-indigo-900 mt-0.5">{activeSection}</h3>
                    <p className="text-indigo-700 mt-1">Viewing focus segment from <code className="font-mono bg-indigo-100 px-1 py-0.5 rounded text-indigo-900">{currentFile}</code>.</p>
                  </div>
                  <button
                    onClick={() => setActiveSection(null)}
                    className="text-xs text-indigo-600 hover:text-indigo-800 font-medium underline"
                  >
                    View All Sections
                  </button>
                </div>
              )}

              {/* Code/Spec Structure Viewer Box */}
              <div className="bg-slate-900 text-slate-200 rounded-xl p-6 font-mono text-xs leading-relaxed border border-slate-800 shadow-inner space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-slate-400 text-[11px]">
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-indigo-400" />
                    <span>File Path: <strong className="text-slate-100">{currentFile}</strong></span>
                  </span>
                  <span className="text-emerald-400">Markdown Format • Complete</span>
                </div>

                {activeDoc === 'ia' ? (
                  <div className="space-y-3 text-slate-300">
                    <p className="text-indigo-400 font-bold"># IDG Global Enterprise Information Architecture Specification</p>
                    <p className="text-slate-400 italic">// Identifiers: IDG-SPEC-IA-2026-V1 | Parent: IDG | Product 001: AI Gate Iraq</p>
                    <div className="pl-3 border-l-2 border-indigo-500 space-y-2">
                      <p className="text-slate-200 font-semibold">1. INFORMATION ARCHITECTURE PRINCIPLES</p>
                      <p className="text-slate-400 text-[11px]">Parent-First Authority, Product Autonomy, Modular Scalability, SSOT, Machine Readability, Zero-Trust URL Stability.</p>
                      <p className="text-slate-200 font-semibold mt-2">2. ENTERPRISE CONTENT HIERARCHY</p>
                      <p className="text-slate-400 text-[11px]">Level 0 (IDG Core) -&gt; Level 1 (Corporate & Subsidiaries) -&gt; Level 1 Products (Product 001: AI Gate Iraq &amp; Future Products N).</p>
                      <p className="text-slate-200 font-semibold mt-2">5. PARENT VS PRODUCT WEBSITES</p>
                      <p className="text-slate-400 text-[11px]">idg.global (Institutional / Investors) vs aigate.iq (Solutions / End Users / Developers).</p>
                      <p className="text-slate-200 font-semibold mt-2">24. AI READINESS &amp; KNOWLEDGE GRAPH</p>
                      <p className="text-slate-400 text-[11px]">Native Markdown mirrors, llms.txt indexing, JSON-LD schemas, and dense vector embedding chunks.</p>
                    </div>
                  </div>
                ) : activeDoc === 'nav' ? (
                  <div className="space-y-3 text-slate-300">
                    <p className="text-indigo-400 font-bold"># Iraq Digital Gateway (IDG) Enterprise Navigation Architecture Specification</p>
                    <p className="text-slate-400 italic">// Identifiers: IDG-SPEC-NAV-2026-V1 | Parent: IDG | Product 001: AI Gate Iraq</p>
                    <div className="pl-3 border-l-2 border-indigo-500 space-y-2">
                      <p className="text-slate-200 font-semibold">1. NAVIGATION PHILOSOPHY</p>
                      <p className="text-slate-400 text-[11px]">Parent Entity Supremacy, Product Line Autonomy, Intent-Driven Discovery, Predictable Determinism, Progressive Disclosure.</p>
                      <p className="text-slate-200 font-semibold mt-2">2. GLOBAL NAVIGATION</p>
                      <p className="text-slate-400 text-[11px]">4-Tier Frame: Tier 0 Global Utility -&gt; Tier 1 Primary Brand -&gt; Tier 2 Contextual Sub-Bar -&gt; Tier 3 Universal Footer.</p>
                      <p className="text-slate-200 font-semibold mt-2">4. PRODUCT NAVIGATION MODEL</p>
                      <p className="text-slate-400 text-[11px]">Mandatory 10 Nodes: Overview, Features, Solutions, Pricing, Docs, Support, Resources, API, Roadmap, Changelog.</p>
                      <p className="text-slate-200 font-semibold mt-2">10. ACCESSIBILITY &amp; PERFORMANCE</p>
                      <p className="text-slate-400 text-[11px]">WCAG 2.2 AA Compliance, Full Keyboard Traversal, ARIA Landmarks, &lt;3 Click Max Depth, Edge CDN Pre-rendering.</p>
                    </div>
                  </div>
                ) : activeDoc === 'cts' ? (
                  <div className="space-y-3 text-slate-300">
                    <p className="text-indigo-400 font-bold"># Iraq Digital Gateway (IDG) Enterprise Website Content &amp; Localization Strategy</p>
                    <p className="text-slate-400 italic">// Identifiers: IDG-SPEC-CTS-2026-V1 | Parent: IDG | Product 001: AI Gate Iraq</p>
                    <div className="pl-3 border-l-2 border-indigo-500 space-y-2">
                      <p className="text-slate-200 font-semibold">1. EXECUTIVE CONTENT PRINCIPLES</p>
                      <p className="text-slate-400 text-[11px]">Single Source of Truth, Global Consistency with Regional Sovereignty, Machine &amp; AI Primacy, Localization by Design.</p>
                      <p className="text-slate-200 font-semibold mt-2">2. MULTILINGUAL ARCHITECTURE</p>
                      <p className="text-slate-400 text-[11px]">Day-One: English (en-US), Arabic (ar-IQ), Kurdish Sorani (ckb-IQ). RTL CSS logical properties, bidirectional flipping, fallback policies.</p>
                      <p className="text-slate-200 font-semibold mt-2">3. PAGE CONTENT SPECIFICATIONS</p>
                      <p className="text-slate-400 text-[11px]">Full matrix for Homepage, Product 001, Governance, Features, API Docs, Solutions, Press, Careers (Purpose, Audience, CTAs, Approvals).</p>
                      <p className="text-slate-200 font-semibold mt-2">5. SEO &amp; GOVERNANCE</p>
                      <p className="text-slate-400 text-[11px]">Localized URLs, hreflang annotations, JSON-LD Corporation schema, WCAG 2.2 AA screen readers, 5-stage lifecycle workflow.</p>
                    </div>
                  </div>
                ) : activeDoc === 'seo' ? (
                  <div className="space-y-3 text-slate-300">
                    <p className="text-indigo-400 font-bold"># Iraq Digital Gateway (IDG) Enterprise SEO &amp; Discoverability Architecture Specification</p>
                    <p className="text-slate-400 italic">// Identifiers: IDG-SPEC-SEO-2026-V1 | Parent: IDG | Product 001: AI Gate Iraq</p>
                    <div className="pl-3 border-l-2 border-indigo-500 space-y-2">
                      <p className="text-slate-200 font-semibold">1. EXECUTIVE SEO &amp; SEARCH PRINCIPLES</p>
                      <p className="text-slate-400 text-[11px]">Parent Holding Authority, Product Geotargeting (.iq ccTLD), Dual Lexical &amp; AI Answer Engine Optimization (AEO/GEO).</p>
                      <p className="text-slate-200 font-semibold mt-2">2. DOMAIN TOPOLOGY &amp; URL STANDARDS</p>
                      <p className="text-slate-400 text-[11px]">idg.global vs aigate.iq ccTLD, trailing slash policies, no query parameters on primary nodes, sub-directory language routing.</p>
                      <p className="text-slate-200 font-semibold mt-2">5. SCHEMA.ORG &amp; JSON-LD KNOWLEDGE GRAPH</p>
                      <p className="text-slate-400 text-[11px]">Complete JSON-LD graph specs: Corporation, SoftwareApplication, TechArticle, BreadcrumbList, WebSite.</p>
                      <p className="text-slate-200 font-semibold mt-2">7. ROBOTS DIRECTIVES &amp; AI CRAWLERS</p>
                      <p className="text-slate-400 text-[11px]">Explicit permissions for Googlebot, GPTBot, ClaudeBot, PerplexityBot, llms.txt index file, Brotli compression &amp; CWV budget.</p>
                    </div>
                  </div>
                ) : activeDoc === 'ds' ? (
                  <div className="space-y-3 text-slate-300">
                    <p className="text-indigo-400 font-bold"># Iraq Digital Gateway (IDG) Enterprise Design System Architecture Specification</p>
                    <p className="text-slate-400 italic">// Identifiers: IDG-SPEC-DS-2026-V1 | Parent: IDG | Product 001: AI Gate Iraq</p>
                    <div className="pl-3 border-l-2 border-indigo-500 space-y-2">
                      <p className="text-slate-200 font-semibold">1. EXECUTIVE OVERVIEW &amp; DESIGN PHILOSOPHY</p>
                      <p className="text-slate-400 text-[11px]">Sovereign Authority &amp; Institutional Trust, Deterministic Clarity, Inclusive Bi-Directional Equity.</p>
                      <p className="text-slate-200 font-semibold mt-2">2. DESIGN TOKEN SYSTEM</p>
                      <p className="text-slate-400 text-[11px]">Primitive &amp; Semantic tokens for Colors, Typography, Spacing, Radii, Elevation, Motion, and Borders.</p>
                      <p className="text-slate-200 font-semibold mt-2">3. MULTILINGUAL TYPOGRAPHY &amp; RTL MIRRORING</p>
                      <p className="text-slate-400 text-[11px]">Trilingual pairing (English, Arabic, Kurdish Sorani), CSS logical properties, line-height compensation (+15%).</p>
                      <p className="text-slate-200 font-semibold mt-2">4. COMPONENT CATEGORIES &amp; ACCESSIBILITY</p>
                      <p className="text-slate-400 text-[11px]">24 Enterprise Component Categories, WCAG 2.2 AA compliance, Focus ring standards, Multi-brand themes.</p>
                    </div>
                  </div>
                ) : activeDoc === 'cmp' ? (
                  <div className="space-y-3 text-slate-300">
                    <p className="text-indigo-400 font-bold"># Iraq Digital Gateway (IDG) Enterprise Component Library Architecture Specification</p>
                    <p className="text-slate-400 italic">// Identifiers: IDG-SPEC-CMP-2026-V1 | Parent: IDG | Product 001: AI Gate Iraq</p>
                    <div className="pl-3 border-l-2 border-indigo-500 space-y-2">
                      <p className="text-slate-200 font-semibold">1. COMPONENT PHILOSOPHY &amp; ATOMIC HIERARCHY</p>
                      <p className="text-slate-400 text-[11px]">Zero-Invention Compliance, Encapsulated State Integrity, Bi-Directional First Engineering, Tier 1 Atoms to Tier 5 Pages.</p>
                      <p className="text-slate-200 font-semibold mt-2">2. COMPONENT SPECIFICATIONS</p>
                      <p className="text-slate-400 text-[11px]">HeaderNav, SidebarRail, Action Buttons, TextField, DropdownSelect, DataTable, MetricCard, ModalDialog, ToastMessage, ClearanceBadge, PermissionGate.</p>
                      <p className="text-slate-200 font-semibold mt-2">3. ACCESSIBILITY &amp; LOGICAL CSS</p>
                      <p className="text-slate-400 text-[11px]">WCAG 2.2 AA Compliance, Focus ring standards, Keyboard traversal, CSS logical properties mapping (margin-inline-start, inset-inline-end).</p>
                    </div>
                  </div>
                ) : activeDoc === 'docgov' ? (
                  <div className="space-y-3 text-slate-300">
                    <p className="text-indigo-400 font-bold"># Iraq Digital Gateway (IDG) Enterprise Documentation Governance Specification</p>
                    <p className="text-slate-400 italic">// Identifiers: IDG-SPEC-DOCGOV-2026-V1 | Parent: IDG | Product 001: AI Gate Iraq</p>
                    <div className="pl-3 border-l-2 border-indigo-500 space-y-2">
                      <p className="text-slate-200 font-semibold">1. DOCUMENTATION VISION &amp; PRINCIPLES</p>
                      <p className="text-slate-400 text-[11px]">Single Source of Truth (SSOT), Asynchronous Knowledge Authority, Trilingual Sovereignty by Design (EN/AR/CKB), Machine &amp; AI Processability.</p>
                      <p className="text-slate-200 font-semibold mt-2">2. REPOSITORY TAXONOMY &amp; FILE NAMING</p>
                      <p className="text-slate-400 text-[11px]">Structured hierarchy: Tier 0 Constitution -&gt; Tier 1 Specs -&gt; Tier 2 Product -&gt; Tier 3 SOPs. Deterministic kebab-case identifiers.</p>
                      <p className="text-slate-200 font-semibold mt-2">3. LIFECYCLE &amp; ISO 9001 ALIGNMENT</p>
                      <p className="text-slate-400 text-[11px]">6 Lifecycle States (Draft, Review, Approved, Published, Deprecated, Archived), Review matrix, AI policy, and ISO 9001 audit readiness.</p>
                    </div>
                  </div>
                ) : activeDoc === 'repo' ? (
                  <div className="space-y-3 text-slate-300">
                    <p className="text-indigo-400 font-bold"># Iraq Digital Gateway (IDG) Enterprise Repository Structure Standard</p>
                    <p className="text-slate-400 italic">// Identifiers: IDG-SPEC-REPO-2026-V1 | Parent: IDG | Product 001: AI Gate Iraq</p>
                    <div className="pl-3 border-l-2 border-indigo-500 space-y-2">
                      <p className="text-slate-200 font-semibold">1. REPOSITORY TAXONOMIES &amp; NAMING</p>
                      <p className="text-slate-400 text-[11px]">15 Domain Categories (idg-corp-*, agi-*, idg-infra-*, idg-ds-*, idg-api-*, idg-sdk-*). Deterministic kebab-case conventions.</p>
                      <p className="text-slate-200 font-semibold mt-2">2. DIRECTORY STANDARDS &amp; BRANCHING</p>
                      <p className="text-slate-400 text-[11px]">Standard Polyrepo vs Monorepo topologies. GitFlow branching (main, develop, release/*, hotfix/*, feature/*, security/*).</p>
                      <p className="text-slate-200 font-semibold mt-2">3. COMMIT &amp; GITHUB ENTERPRISE GOVERNANCE</p>
                      <p className="text-slate-400 text-[11px]">Conventional Commits, Branch protection (2 approvals, CODEOWNERS, SAST + Secret scanning), 5-state lifecycle, 1000+ repo scalability.</p>
                    </div>
                  </div>
                ) : activeDoc === 'deploy' ? (
                  <div className="space-y-3 text-slate-300">
                    <p className="text-indigo-400 font-bold"># Iraq Digital Gateway (IDG) Enterprise Deployment &amp; Infrastructure Standard</p>
                    <p className="text-slate-400 italic">// Identifiers: IDG-SPEC-DEPLOY-2026-V1 | Parent: IDG | Product 001: AI Gate Iraq</p>
                    <div className="pl-3 border-l-2 border-indigo-500 space-y-2">
                      <p className="text-slate-200 font-semibold">1. ENVIRONMENT STRATEGY &amp; CLOUD ARCHITECTURE</p>
                      <p className="text-slate-400 text-[11px]">7 Environments (Sandbox, Dev, Test, QA, Staging, Prod, DR). Multi-cloud mesh: Cloudflare Enterprise, GCP Cloud Run / Cloud SQL, Firebase Auth/Firestore.</p>
                      <p className="text-slate-200 font-semibold mt-2">2. CI/CD PIPELINE &amp; INFRASTRUCTURE LAYERS</p>
                      <p className="text-slate-400 text-[11px]">9-Stage DevSecOps Pipeline (CodeQL SAST, secret scanning, trivy container audit, canary progressive deployment, automated rollback).</p>
                      <p className="text-slate-200 font-semibold mt-2">3. HIGH AVAILABILITY, SECURITY &amp; OBSERVABILITY</p>
                      <p className="text-slate-400 text-[11px]">99.95% HA SLA, &lt;5min RPO / &lt;15min RTO, zero-trust network isolation, GCP Secret Manager, 4 Golden Signals APM, and FinOps governance.</p>
                    </div>
                  </div>
                ) : activeDoc === 'api' ? (
                  <div className="space-y-3 text-slate-300">
                    <p className="text-indigo-400 font-bold"># Iraq Digital Gateway (IDG) Enterprise API Architecture Specification</p>
                    <p className="text-slate-400 italic">// Identifiers: IDG-SPEC-API-2026-V1 | Parent: IDG | Product 001: AI Gate Iraq</p>
                    <div className="pl-3 border-l-2 border-indigo-500 space-y-2">
                      <p className="text-slate-200 font-semibold">1. CONTRACT-FIRST &amp; OPENAPI CANONICAL SOURCE</p>
                      <p className="text-slate-400 text-[11px]">OpenAPI 3.1 contracts as single source of truth, automated Prism mock servers, SDK generation, and Spectral linting.</p>
                      <p className="text-slate-200 font-semibold mt-2">2. ZERO-TRUST SECURITY &amp; OAUTH 2.0 / OIDC</p>
                      <p className="text-slate-400 text-[11px]">Bearer JWTs, fine-grained scopes, mTLS inter-service auth, HMAC webhook signatures, Cloudflare WAF rate limiting.</p>
                      <p className="text-slate-200 font-semibold mt-2">3. TRILINGUAL ERROR MODEL &amp; LOCALIZATION</p>
                      <p className="text-slate-400 text-[11px]">Canonical error response envelope featuring localized messages (en-US, ar-IQ, ckb-IQ), request_id tracing, and docs URL references.</p>
                    </div>
                  </div>
                ) : activeDoc === 'knowledge' ? (
                  <div className="space-y-3 text-slate-300">
                    <p className="text-indigo-400 font-bold"># Iraq Digital Gateway (IDG) Enterprise Knowledge Architecture Specification</p>
                    <p className="text-slate-400 italic">// Identifiers: IDG-SPEC-KNOWLEDGE-2026-V1 | Parent: IDG | Product 001: AI Gate Iraq</p>
                    <div className="pl-3 border-l-2 border-indigo-500 space-y-2">
                      <p className="text-slate-200 font-semibold">1. TRILINGUAL KNOWLEDGE PARITY (EN / AR / CKB)</p>
                      <p className="text-slate-400 text-[11px]">Mandatory day-one localization for English (en-US), Arabic (ar-IQ), and Kurdish Sorani (ckb-IQ) across all 14 knowledge domains.</p>
                      <p className="text-slate-200 font-semibold mt-2">2. CSS LOGICAL PROPERTIES &amp; RTL LAYOUT MIRRORING</p>
                      <p className="text-slate-400 text-[11px]">Strict physical property ban (margin-left, text-align: left). Full adoption of logical properties and directional icon flipping.</p>
                      <p className="text-slate-200 font-semibold mt-2">3. SEARCH, KNOWLEDGE GRAPH &amp; AUDIT LINEAGE</p>
                      <p className="text-slate-400 text-[11px]">Hybrid lexical (BM25) and dense vector semantic search, JSON-LD knowledge graph indexing, and 7-year regulatory audit preservation.</p>
                    </div>
                  </div>
                ) : activeDoc === 'localization' ? (
                  <div className="space-y-3 text-slate-300">
                    <p className="text-indigo-400 font-bold"># Iraq Digital Gateway (IDG) Enterprise Localization &amp; Language Architecture Specification</p>
                    <p className="text-slate-400 italic">// Identifiers: IDG-SPEC-LOCALIZATION-2026-V1 | Parent: IDG | Product 001: AI Gate Iraq</p>
                    <div className="pl-3 border-l-2 border-indigo-500 space-y-2">
                      <p className="text-slate-200 font-semibold">1. CANONICAL BCP 47 LOCALE REGISTRY &amp; UI SELECTOR</p>
                      <p className="text-slate-400 text-[11px]">Day-One production support for English (en-US), Arabic (ar-IQ), and Kurdish Sorani (ckb-IQ) with durable preference persistence in localStorage (idg.locale).</p>
                      <p className="text-slate-200 font-semibold mt-2">2. RTL &amp; LTR LAYOUT MIRRORING &amp; CSS LOGICAL PROPERTIES</p>
                      <p className="text-slate-400 text-[11px]">Dynamic document.documentElement.dir updating with strict physical CSS bans, directional icon flipping, and LTR code block protection.</p>
                      <p className="text-slate-200 font-semibold mt-2">3. DECOUPLED TRANSLATION &amp; FALLBACK ENGINE</p>
                      <p className="text-slate-400 text-[11px]">Zero hardcoded UI strings, ckb-IQ -&gt; ar-IQ -&gt; en-US fallback chain, untranslated technical canonical identifiers, and hreflang SEO architecture.</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 text-slate-300">
                    <p className="text-indigo-400 font-bold"># Iraq Digital Gateway (IDG) Enterprise Security &amp; Compliance Architecture Specification</p>
                    <p className="text-slate-400 italic">// Identifiers: IDG-SPEC-SECURITY-2026-V1 | Parent: IDG | Product 001: AI Gate Iraq</p>
                    <div className="pl-3 border-l-2 border-indigo-500 space-y-2">
                      <p className="text-slate-200 font-semibold">1. ZERO TRUST ARCHITECTURE &amp; ENCLAVE ISOLATION</p>
                      <p className="text-slate-400 text-[11px]">Never Trust, Always Verify. Micro-segmentation across Cloudflare Enterprise WAF, GCP VPCs, and mTLS inter-service mesh with SPIFFE/SPIRE identity.</p>
                      <p className="text-slate-200 font-semibold mt-2">2. SOVEREIGN CRYPTOGRAPHY &amp; KEY MANAGEMENT</p>
                      <p className="text-slate-400 text-[11px]">AES-256-GCM data-at-rest, TLS 1.3 in-transit, envelope encryption via GCP KMS / Cloud HSM, automated 90-day key rotation, and zero-plaintext storage.</p>
                      <p className="text-slate-200 font-semibold mt-2">3. AI GATE IRAQ LLM DEFENSE &amp; DEVSECOPS</p>
                      <p className="text-slate-400 text-[11px]">OWASP Top 10 for LLM defense (indirect prompt injection, model denial-of-service, data poisoning), automated SAST/DAST/SCA CI gates, and 24/7 SIEM detection.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Meta Info Footer */}
        <footer className="h-10 bg-slate-100 border-t border-slate-200 px-6 flex items-center justify-between text-[11px] text-slate-600 shrink-0 font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              UTF-8 Enterprise Specification
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              AI Readiness Index: 100%
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-500 font-mono text-[10px]">
            <span>File: {currentFile}</span>
            <span>Status: Complete</span>
            <span>Last Sync: Just now</span>
          </div>
        </footer>
      </main>
    </div>
  );
}


