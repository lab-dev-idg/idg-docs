import { useState, useEffect } from 'react';
import { enUS } from './locales/en-US';
import { arIQ } from './locales/ar-IQ';
import { ckbIQ } from './locales/ckb-IQ';

export type LocaleCode = 'ckb-IQ' | 'ar-IQ' | 'en-US';

export interface LanguageMeta {
  code: LocaleCode;
  nativeName: string;
  shortLabel: string;
  direction: 'ltr' | 'rtl';
  fontFamily: string;
}

export const LOCALES: Record<LocaleCode, LanguageMeta> = {
  'ckb-IQ': {
    code: 'ckb-IQ',
    nativeName: 'کوردی',
    shortLabel: 'کوردی',
    direction: 'rtl',
    fontFamily: "'Noto Sans Arabic', 'Readex Pro', Tahoma, sans-serif",
  },
  'ar-IQ': {
    code: 'ar-IQ',
    nativeName: 'العربية',
    shortLabel: 'ع',
    direction: 'rtl',
    fontFamily: "'Noto Sans Arabic', 'Readex Pro', Tahoma, sans-serif",
  },
  'en-US': {
    code: 'en-US',
    nativeName: 'English',
    shortLabel: 'EN',
    direction: 'ltr',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
};

const dictionaries: Record<LocaleCode, Record<string, string>> = {
  'ckb-IQ': ckbIQ,
  'ar-IQ': arIQ,
  'en-US': enUS,
};

const STORAGE_KEY = 'idg.locale';

export function getInitialLocale(): LocaleCode {
  if (typeof window === 'undefined') return 'ckb-IQ';
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as LocaleCode;
    if (saved && LOCALES[saved]) {
      return saved;
    }
  } catch {
    // Fallback if localStorage blocked
  }
  return 'ckb-IQ';
}

export function setStoredLocale(locale: LocaleCode) {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Ignored
  }
}

export function applyDocumentLocale(locale: LocaleCode) {
  if (typeof document === 'undefined') return;
  const meta = LOCALES[locale] || LOCALES['ckb-IQ'];
  document.documentElement.lang = meta.code;
  document.documentElement.dir = meta.direction;

  const dict = dictionaries[locale] || dictionaries['ckb-IQ'];
  if (dict && dict['app.browser_title']) {
    document.title = dict['app.browser_title'];
  }
}

export function translate(locale: LocaleCode, key: string): string {
  const dict = dictionaries[locale] || dictionaries['ckb-IQ'];
  if (dict && dict[key] !== undefined) {
    return dict[key];
  }
  // Fallback chain: ckb-IQ -> ar-IQ -> en-US
  if (locale === 'ckb-IQ') {
    if (dictionaries['ar-IQ'] && dictionaries['ar-IQ'][key] !== undefined) {
      return dictionaries['ar-IQ'][key];
    }
  }
  if (dictionaries['en-US'] && dictionaries['en-US'][key] !== undefined) {
    return dictionaries['en-US'][key];
  }
  return key;
}

export function useI18n() {
  const [locale, setLocaleState] = useState<LocaleCode>(getInitialLocale);

  const changeLocale = (newLocale: LocaleCode) => {
    if (!LOCALES[newLocale]) return;
    setLocaleState(newLocale);
    setStoredLocale(newLocale);
    applyDocumentLocale(newLocale);
  };

  useEffect(() => {
    applyDocumentLocale(locale);
  }, [locale]);

  const t = (key: string): string => translate(locale, key);

  return {
    locale,
    setLocale: changeLocale,
    t,
    currentMeta: LOCALES[locale],
    isRTL: LOCALES[locale].direction === 'rtl',
  };
}
