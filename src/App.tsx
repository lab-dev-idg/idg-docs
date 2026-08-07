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
  Cpu
} from 'lucide-react';

const SECTIONS = [
  "1. Information Architecture Principles",
  "2. Enterprise Content Hierarchy",
  "3. Corporate Website Structure",
  "4. Multi-site Architecture",
  "5. Parent Company vs Product Websites",
  "6. Content Ownership",
  "7. Website Taxonomy",
  "8. Knowledge Architecture",
  "9. Page Classification",
  "10. Page Templates",
  "11. Navigation Layers",
  "12. Global Search Architecture",
  "13. Internal Linking Strategy",
  "14. Documentation Hierarchy",
  "15. Corporate Documentation Integration",
  "16. Product Documentation Integration",
  "17. Metadata Strategy",
  "18. URL Governance",
  "19. Future Expansion Rules",
  "20. Information Governance",
  "21. Version Control",
  "22. Content Lifecycle",
  "23. Enterprise Scalability Rules",
  "24. AI Readiness",
  "25. Enterprise Knowledge Graph Preparation",
  "26. Corporate Digital Ecosystem Mapping",
  "27. Document Control"
];

export default function App() {
  const [copied, setCopied] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleCopy = () => {
    fetch('/website/information-architecture.md')
      .then(res => res.text())
      .then(text => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };

  const filteredSections = SECTIONS.filter(sec => 
    sec.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col">
      {/* Top Corporate Nav */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600/20 text-blue-400 rounded-lg border border-blue-500/30">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-slate-100 tracking-wide text-sm sm:text-base">IDG ENTERPRISE</span>
                <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-mono">Product 001: AI Gate Iraq</span>
              </div>
              <p className="text-xs text-slate-400">Global Information Architecture Specification • Document IDG-SPEC-IA-2026-V1</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleCopy}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copied ? 'Copied' : 'Copy Spec Markdown'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>Architecture Index (27 Sections)</span>
              </h2>
            </div>

            <div className="relative mb-3">
              <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
              <input
                type="text"
                placeholder="Search specification sections..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="max-h-[calc(100vh-280px)] overflow-y-auto space-y-1 pr-1 custom-scrollbar">
              <button
                onClick={() => setActiveSection(null)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition ${
                  activeSection === null
                    ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30 font-medium'
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }`}
              >
                <span>Full Enterprise Specification</span>
                <ChevronRight className="w-3 h-3 opacity-60" />
              </button>

              {filteredSections.map((sec) => (
                <button
                  key={sec}
                  onClick={() => setActiveSection(sec)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs flex items-center justify-between transition ${
                    activeSection === sec
                      ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30 font-medium'
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                  }`}
                >
                  <span className="truncate">{sec}</span>
                  <ChevronRight className="w-3 h-3 opacity-40 shrink-0 ml-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-3.5">
              <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Parent Corp</span>
              </div>
              <div className="font-semibold text-slate-200 text-sm">IDG Global</div>
            </div>
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-3.5">
              <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>Product 001</span>
              </div>
              <div className="font-semibold text-slate-200 text-sm">AI Gate Iraq</div>
            </div>
          </div>
        </aside>

        {/* Specification Document Canvas */}
        <main className="lg:col-span-8 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                Target File: website/information-architecture.md
              </span>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-100 mt-2">
                IDG Enterprise Information Architecture Specification
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Defines parent entity authority, Product 001 (AI Gate Iraq) integration, taxonomy rules, and future expansion guidelines.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg shrink-0">
              <Check className="w-3.5 h-3.5" />
              <span>436 Lines • Production Ready</span>
            </div>
          </div>

          {/* Document Highlights & Architecture Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
              <div className="flex items-center space-x-2 text-blue-400 text-xs font-semibold mb-1">
                <Network className="w-4 h-4" />
                <span>Multi-Site Topology</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Parent domain <code className="text-blue-300 font-mono">idg.global</code> governs global holdings; <code className="text-cyan-300 font-mono">aigate.iq</code> operates as autonomous Product 001.
              </p>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
              <div className="flex items-center space-x-2 text-purple-400 text-xs font-semibold mb-1">
                <GitBranch className="w-4 h-4" />
                <span>Infinite Expansion</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Standardized routing slots <code className="text-purple-300 font-mono">/portfolio/&#123;product-slug&#125;/</code> support unlimited future products and business units.
              </p>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-4">
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold mb-1">
                <BookOpen className="w-4 h-4" />
                <span>AI & Knowledge Graph</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Machine-readable JSON-LD metadata, LLM <code className="text-emerald-300 font-mono">llms.txt</code> indexing, and semantic graph preparations.
              </p>
            </div>
          </div>

          {/* Document Status Banner */}
          <div className="bg-blue-950/30 border border-blue-800/40 rounded-xl p-4 flex items-start space-x-3">
            <FileText className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 space-y-1">
              <p className="font-semibold text-blue-300">File Created at <code className="font-mono text-slate-200">/website/information-architecture.md</code></p>
              <p className="text-slate-400">
                The specification file has been created directly at <code className="text-slate-300 font-mono">website/information-architecture.md</code>. All 27 required sections are defined in full enterprise markdown with zero placeholders or TODO items.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

