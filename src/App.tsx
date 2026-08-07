import React, { useState } from 'react';
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
  Globe
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

export default function App() {
  const [activeDoc, setActiveDoc] = useState<'ia' | 'nav' | 'cts'>('cts');
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const currentFile = activeDoc === 'ia' 
    ? 'website/information-architecture.md' 
    : activeDoc === 'nav' 
    ? 'website/navigation-architecture.md' 
    : 'website/content-strategy.md';

  const docId = activeDoc === 'ia' 
    ? 'IDG-SPEC-IA-2026-V1' 
    : activeDoc === 'nav' 
    ? 'IDG-SPEC-NAV-2026-V1' 
    : 'IDG-SPEC-CTS-2026-V1';

  const sections = activeDoc === 'ia' 
    ? IA_SECTIONS 
    : activeDoc === 'nav' 
    ? NAV_SECTIONS 
    : CTS_SECTIONS;

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
          <p className="px-2 mb-2 text-slate-500 font-bold uppercase tracking-widest text-[9px]">Active Architecture Spec</p>
          <div className="grid grid-cols-3 gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => { setActiveDoc('ia'); setActiveSection(null); }}
              className={`px-2 py-1.5 rounded text-[10px] font-medium transition flex items-center justify-center gap-1 ${
                activeDoc === 'ia'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>Info Arch</span>
            </button>
            <button
              onClick={() => { setActiveDoc('nav'); setActiveSection(null); }}
              className={`px-2 py-1.5 rounded text-[10px] font-medium transition flex items-center justify-center gap-1 ${
                activeDoc === 'nav'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Navigation className="w-3 h-3" />
              <span>Nav Arch</span>
            </button>
            <button
              onClick={() => { setActiveDoc('cts'); setActiveSection(null); }}
              className={`px-2 py-1.5 rounded text-[10px] font-medium transition flex items-center justify-center gap-1 ${
                activeDoc === 'cts'
                  ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Globe className="w-3 h-3" />
              <span>Content</span>
            </button>
          </div>
        </div>

        {/* Index List */}
        <div className="flex-1 p-3 overflow-hidden flex flex-col text-[11px] leading-tight">
          <div className="flex items-center justify-between mb-2 px-2">
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px]">
              {activeDoc === 'ia' ? 'Information Architecture (27 Sec)' : activeDoc === 'nav' ? 'Navigation Architecture (14 Sec)' : 'Content Strategy (12 Sec)'}
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
              {activeDoc === 'ia' ? 'PATCH 003' : activeDoc === 'nav' ? 'PATCH 004' : 'PATCH 005'}
            </span>
            <span className="hidden sm:inline-flex px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[10px] font-mono font-bold border border-emerald-200/80">
              APPROVED
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-300 rounded-md hover:bg-slate-50 flex items-center gap-1.5 transition shadow-2xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copied ? 'Copied' : 'Copy Spec Markdown'}</span>
            </button>

            <a
              href={`/${currentFile}`}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-xs flex items-center gap-1.5 transition"
            >
              <span>View Markdown</span>
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
                        Authoritative Corporate Standard
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-white tracking-tight">
                      {activeDoc === 'ia' 
                        ? 'IDG Enterprise Information Architecture Specification' 
                        : activeDoc === 'nav'
                        ? 'IDG Enterprise Navigation Architecture Specification'
                        : 'IDG Enterprise Website Content & Localization Strategy'}
                    </h2>
                    <p className="text-xs text-slate-300 mt-1">
                      {activeDoc === 'ia'
                        ? 'Governing corporate holding authority, Product 001 (AI Gate Iraq), multi-site topologies, taxonomy, and AI knowledge graph readiness.'
                        : activeDoc === 'nav'
                        ? 'Governing global navigation, primary header hierarchies, product navigation models, mega menus, accessibility, and 10-year scalability.'
                        : 'Governing corporate tone, trilingual localization (English, Arabic, Kurdish Sorani), page specifications, SEO rules, and translation governance.'}
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 bg-slate-800/80 p-2 rounded-lg border border-slate-700/60 text-xs font-mono">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{activeDoc === 'ia' ? '436 Lines' : activeDoc === 'nav' ? '457 Lines' : '410+ Lines'}</span>
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
                ) : (
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


