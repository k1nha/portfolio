import { useTranslation } from 'react-i18next';
import { createContext, useState, useContext } from 'react';
import { Callback, TFunction } from 'i18next';

type LanguageContext = {
  t: TFunction<'translation', undefined, 'translation'>;
  changeLanguage: (
    lng?: string | undefined,
    callback?: Callback | undefined,
  ) => Promise<TFunction<'translation', undefined, 'translation'>>;
  language: string;
  currentLanguage: string;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>;
  handleChangeLanguage: () => void;
};

const LanguageContext = createContext({} as LanguageContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{
        t,
        changeLanguage,
        language,
        currentLanguage,
        handleChangeLanguage,
        setCurrentLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  return useContext(LanguageContext);
}
