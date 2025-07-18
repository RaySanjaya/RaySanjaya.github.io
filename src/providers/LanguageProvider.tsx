"use client";

import { createContext, useState, useContext, ReactNode } from "react";

type LocaleId = "en" | "id";

interface LanguageContextType {
  localeId: LocaleId;
  setLocale: (value: LocaleId) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [localeId, setLocaleId] = useState<LocaleId>("en");

  const setLocale = (value: LocaleId) => {
    setLocaleId(value);
  }

  return (
    <LanguageContext.Provider value={{ localeId, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};
