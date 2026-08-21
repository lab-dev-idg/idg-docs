import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { useI18n, LocaleCode } from './i18n';
import { SPEC_REGISTRY, SPEC_KEYS, SpecKey, getSections } from './config/documents';
import { 
  Building2, 
  FileText, 
  Search, 
  Copy, 
  Check, 
  GitBranch, 
  ChevronRight, 
  Globe, 
  Languages, 
  CheckCircle2, 
  ExternalLink,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const { locale, setLocale, t, isRTL } = useI18n();
  const [activeDoc, setActiveDoc] = useState<SpecKey>('data');
  const [copied, setCopied] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  const copyTimeoutRef = useRef<number | null>(null);

  const activeSpecMeta = useMemo(() => SPEC_REGISTRY[activeDoc], [activeDoc]);
  const currentFile = activeSpecMeta.file;
  const docId = activeSpecMeta.id;

  const currentSections = useMemo(() => getSections(activeDoc, locale), [activeDoc, locale]);

  // Clean up any pending copy timeout on unmount
  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current !== null) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      const res = await fetch(`/${currentFile}`);
      if (!res.ok) {
        throw new Error(`HTTP Error ${res.status}: ${res.statusText}`);
      }
      const text = await res.text();

      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for iframe restrictions or older environments
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      setCopied(true);
      if (copyTimeoutRef.current !== null) {
        window.clearTimeout(copyTimeoutRef.current);
      }
      copyTimeoutRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  }, [currentFile]);

  const handleSelectDoc = useCallback((key: SpecKey) => {
    setActiveDoc(key);
    setActiveSection(null);
    setCopied(false);
    setIsMobileNavOpen(false);
  }, []);

  const handleSelectSection = useCallback((sec: string | null) => {
    setActiveSection(sec);
    setIsMobileNavOpen(false);
  }, []);

  const handleLocaleChange = useCallback((newLocale: LocaleCode) => {
    setLocale(newLocale);
  }, [setLocale]);

  const filteredSections = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return currentSections;
    return currentSections.filter((sec) => sec.toLowerCase().includes(query));
  }, [currentSections, searchTerm]);

  return (
    <div 
      className={`flex h-screen w-full bg-slate-50 text-slate-900 overflow-hidden ${isRTL ? 'font-kurdish text-right' : 'font-sans text-left'}`} 
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Mobile Backdrop */}
      {isMobileNavOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/70 z-40 lg:hidden backdrop-blur-xs transition-opacity"
          onClick={() => setIsMobileNavOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Navigation Sidebar: Enterprise Directory */}
      <aside 
        id="enterprise-sidebar"
        className={`fixed inset-y-0 ${isRTL ? 'right-0 border-l' : 'left-0 border-r'} z-50 w-80 bg-slate-900 text-slate-400 flex flex-col shrink-0 select-none border-slate-800 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isMobileNavOpen ? 'translate-x-0' : (isRTL ? 'translate-x-full lg:translate-x-0' : '-translate-x-full lg:translate-x-0')
        }`}
        aria-label={t('nav.domains')}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-sm shrink-0" dir="ltr">
                IDG
              </div>
              <div className="overflow-hidden">
                <h1 className="text-white font-bold text-sm tracking-tight truncate">{t('app.title')}</h1>
                <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider">{t('app.os')}</p>
              </div>
            </div>
            {/* Mobile Close Button */}
            <button
              type="button"
              onClick={() => setIsMobileNavOpen(false)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:outline-none cursor-pointer"
              aria-label={t('nav.close_menu')}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-slate-800/80 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" aria-hidden="true" />
            <span className="text-slate-300 font-medium truncate">{t('app.active_product')}</span>
          </div>
        </div>

        {/* Spec File Selector Tabs */}
        <div className="p-3 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center justify-between px-1 mb-2">
            <p className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">{t('nav.active_spec')}</p>
            <span className="text-[9px] font-mono text-indigo-400 bg-indigo-950/80 px-1.5 py-0.5 rounded border border-indigo-800/40">{t('nav.specs_count')}</span>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-4 gap-1 bg-slate-900 p-1.5 rounded-lg border border-slate-800" role="tablist" aria-label={t('nav.specifications')}>
            {SPEC_KEYS.map((key) => {
              const spec = SPEC_REGISTRY[key];
              const Icon = spec.icon;
              const isActive = activeDoc === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={t(`title.${key}`)}
                  title={t(`title.${key}`)}
                  onClick={() => handleSelectDoc(key)}
                  className={`px-1.5 py-1.5 rounded text-[10px] font-medium transition flex items-center justify-center gap-1 truncate cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                    isActive
                      ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-3 h-3 shrink-0" aria-hidden="true" />
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
            <Search className={`w-3.5 h-3.5 absolute top-2.5 text-slate-500 pointer-events-none ${isRTL ? 'right-2.5' : 'left-2.5'}`} aria-hidden="true" />
            <input
              type="text"
              placeholder={t('nav.filter_sections')}
              aria-label={t('nav.filter_sections')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full bg-slate-950 border border-slate-800 rounded-md py-1.5 text-[11px] text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-500/50 transition ${isRTL ? 'pr-8 pl-2' : 'pl-8 pr-2'}`}
            />
          </div>

          <nav className="flex-1 overflow-y-auto space-y-0.5 pr-1 text-slate-400 custom-scrollbar" aria-label={t(`title.${activeDoc}`)}>
            <button
              type="button"
              onClick={() => handleSelectSection(null)}
              aria-current={activeSection === null ? 'page' : undefined}
              className={`w-full text-start px-2.5 py-2 rounded transition flex items-center justify-between gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                activeSection === null
                  ? 'bg-slate-800 text-white font-semibold border border-slate-700/80'
                  : 'hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <span className="truncate">{t('common.entire_spec')}</span>
              <ChevronRight className={`w-3.5 h-3.5 opacity-60 shrink-0 transition-transform ${isRTL ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>

            {filteredSections.map((sec) => (
              <button
                key={sec}
                type="button"
                onClick={() => handleSelectSection(sec)}
                aria-current={activeSection === sec ? 'page' : undefined}
                className={`w-full text-start px-2.5 py-1.5 rounded transition flex items-center justify-between gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                  activeSection === sec
                    ? 'bg-indigo-600/30 text-indigo-300 font-semibold border border-indigo-500/40'
                    : 'hover:bg-slate-800/40 hover:text-slate-200'
                }`}
              >
                <span className="truncate">{sec}</span>
                <ChevronRight className={`w-3.5 h-3.5 opacity-40 shrink-0 transition-transform ${isRTL ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
            ))}

            {filteredSections.length === 0 && (
              <div className="p-4 text-center text-slate-500 text-[11px]" role="status">
                {t('common.no_results')}
              </div>
            )}
          </nav>
        </div>

        {/* Sidebar Footer info */}
        <div className="p-3.5 bg-slate-950 border-t border-slate-800 text-[10px] text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)] shrink-0" aria-hidden="true" />
            <span className="font-medium text-slate-400 truncate">{t('nav.spec_verified')}</span>
          </div>
          <span className="font-mono text-slate-600 shrink-0" dir="ltr">{t('nav.version')}</span>
        </div>
      </aside>

      {/* Main Workspace */}
      <main className="flex-1 flex flex-col overflow-hidden bg-slate-50">
        {/* Header / Status Bar */}
        <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 shrink-0 shadow-2xs">
          <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
            {/* Mobile Nav Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="lg:hidden p-1.5 -ms-1 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer shrink-0"
              aria-label={isMobileNavOpen ? t('nav.close_menu') : t('nav.open_menu')}
              aria-expanded={isMobileNavOpen}
              aria-controls="enterprise-sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 text-slate-500 text-xs font-mono truncate">
              <span className="text-slate-400 truncate">{t(activeSpecMeta.domain)}</span>
              <span aria-hidden="true">/</span>
              <span className="text-slate-900 font-semibold truncate" dir="ltr">{currentFile.split('/')[1]}</span>
            </nav>
            <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-[10px] font-mono font-bold border border-indigo-200/80 shrink-0" dir="ltr">
              {activeSpecMeta.patch}
            </span>
            <span className="hidden md:inline-flex px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[10px] font-mono font-bold border border-emerald-200/80 shrink-0">
              {t('nav.status_approved')}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Selector Control */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200/90 shadow-2xs" role="region" aria-label={t('language.select_aria')}>
              <Languages className="w-3.5 h-3.5 text-slate-500 mx-0.5 sm:mx-1 shrink-0" aria-hidden="true" />
              <button
                type="button"
                onClick={() => handleLocaleChange('ckb-IQ')}
                aria-pressed={locale === 'ckb-IQ'}
                aria-label={t('language.kurdish_aria')}
                className={`px-1.5 sm:px-2 py-1 text-[11px] font-bold rounded transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  locale === 'ckb-IQ'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {t('language.ckb_short')}
              </button>
              <button
                type="button"
                onClick={() => handleLocaleChange('ar-IQ')}
                aria-pressed={locale === 'ar-IQ'}
                aria-label={t('language.arabic_aria')}
                className={`px-1.5 sm:px-2 py-1 text-[11px] font-bold rounded transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  locale === 'ar-IQ'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {t('language.ar_short')}
              </button>
              <button
                type="button"
                onClick={() => handleLocaleChange('en-US')}
                aria-pressed={locale === 'en-US'}
                aria-label={t('language.english_aria')}
                className={`px-1.5 sm:px-2 py-1 text-[11px] font-bold rounded transition cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  locale === 'en-US'
                    ? 'bg-indigo-600 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {t('language.en_short')}
              </button>
            </div>

            <button
              type="button"
              onClick={handleCopy}
              aria-label={copied ? t('nav.copied') : t('nav.copy_spec')}
              className="px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-slate-700 border border-slate-300 rounded-md hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 flex items-center gap-1.5 transition shadow-2xs cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" aria-hidden="true" /> : <Copy className="w-3.5 h-3.5 text-slate-500 shrink-0" aria-hidden="true" />}
              <span className="hidden sm:inline">{copied ? t('nav.copied') : t('nav.copy_spec')}</span>
              <span className="sm:hidden">{copied ? t('nav.copied') : t('spec.repo')}</span>
            </button>

            <a
              href={`/${currentFile}`}
              target="_blank"
              rel="noreferrer"
              aria-label={`${t('common.preview')} (${currentFile})`}
              className="px-2.5 sm:px-3 py-1.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 flex items-center gap-1.5 transition"
            >
              <span className="hidden sm:inline">{t('common.preview')}</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </header>

        {/* Content Viewer / Document Editor View */}
        <section className="flex-1 flex overflow-hidden bg-white" aria-label={t(`title.${activeDoc}`)}>
          {/* Line Numbers Gutter */}
          <div className={`w-12 bg-slate-50 flex flex-col items-center py-6 text-slate-400 font-mono text-[11px] leading-[1.8] select-none shrink-0 hidden sm:flex ${isRTL ? 'border-l border-slate-200' : 'border-r border-slate-200'}`} dir="ltr" aria-hidden="true">
            {Array.from({ length: 30 }, (_, i) => (
              <span key={i}>{(i + 1).toString().padStart(2, '0')}</span>
            ))}
          </div>

          {/* Document Content Canvas */}
          <div className="flex-1 p-4 sm:p-6 lg:p-10 overflow-y-auto font-sans text-slate-800">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Document Banner */}
              <div className="p-6 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-xl shadow-md border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-300 bg-indigo-500/20 px-2.5 py-0.5 rounded border border-indigo-400/30" dir="ltr">
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
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                    <span>{activeSpecMeta.lines} {t('common.lines')}</span>
                  </div>
                </div>
              </div>

              {/* Enterprise Architecture Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl shadow-2xs">
                  <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs mb-1.5">
                    <Building2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{t('feature.parent_title')}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t('feature.parent_desc')}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl shadow-2xs">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs mb-1.5">
                    <Globe className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{t('feature.trilingual_title')}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t('feature.trilingual_desc')}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl shadow-2xs">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-xs mb-1.5">
                    <GitBranch className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{t('feature.scalable_title')}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t('feature.scalable_desc')}
                  </p>
                </div>
              </div>

              {/* Section Focus Display */}
              {activeSection && (
                <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl text-xs text-indigo-950 flex items-start justify-between gap-4" role="region" aria-label={t('common.filter_active')}>
                  <div>
                    <span className="font-bold text-indigo-800 uppercase tracking-wider text-[10px]">{t('common.filter_active')}</span>
                    <h3 className="font-bold text-sm text-indigo-900 mt-1">{activeSection}</h3>
                    <p className="text-indigo-700 mt-1 text-[11px]">{t('common.viewing_focus')} <code className="font-mono bg-indigo-100 px-1 py-0.5 rounded text-indigo-900" dir="ltr">{currentFile}</code>.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveSection(null)}
                    className="text-xs text-indigo-600 hover:text-indigo-800 font-medium underline shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                  >
                    {t('common.view_all')}
                  </button>
                </div>
              )}

              {/* Code/Spec Structure Viewer Box */}
              <div className="bg-slate-900 text-slate-200 rounded-xl p-5 sm:p-6 font-mono text-xs leading-relaxed border border-slate-800 shadow-inner space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-slate-400 text-[11px]">
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-indigo-400 shrink-0" aria-hidden="true" />
                    <span>{t('common.file_path')} <strong className="text-slate-100" dir="ltr">{currentFile}</strong></span>
                  </span>
                  <span className="text-emerald-400 font-sans text-[10px]">{t('common.md_complete')}</span>
                </div>

                {/* Localized Spec Structural Overview */}
                <div className="space-y-3">
                  <p className="text-indigo-400 font-bold text-sm"># {t(`title.${activeDoc}`)}</p>
                  <p className="text-slate-400 italic text-[11px]" dir="ltr">// {t('common.identifiers_header')} {docId} | {t('common.parent_entity')} | {t('common.flagship_product')}</p>
                  
                  <div className={`space-y-3 text-slate-300 ${isRTL ? 'pr-3 border-r-2 border-indigo-500' : 'pl-3 border-l-2 border-indigo-500'}`}>
                    {currentSections.slice(0, 6).map((sec, idx) => (
                      <div key={idx} className="space-y-1">
                        <p className="text-slate-100 font-semibold text-xs">{sec}</p>
                        <p className="text-slate-400 text-[11px] leading-relaxed">
                          {`${t('common.spec_overview_prefix')} ${sec} ${t('common.spec_overview_suffix')}`}
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
        <footer className="h-10 bg-slate-100 border-t border-slate-200 px-4 sm:px-6 flex items-center justify-between text-[11px] text-slate-600 shrink-0 font-medium">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0" aria-hidden="true" />
              {t('footer.utf8')}
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full shrink-0" aria-hidden="true" />
              {t('footer.ai_readiness')}
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 text-slate-500 font-mono text-[10px]">
            <span className="hidden md:inline" dir="ltr">{t('footer.file_label')} {currentFile}</span>
            <span>{t('footer.status_label')}</span>
            <span className="hidden sm:inline">{t('footer.sync_label')}</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
