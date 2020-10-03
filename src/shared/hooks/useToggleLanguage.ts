import { useCallback } from 'react';
import { useTranslation } from 'shared/utils/internationalization';

const languages = new Map([
  ['es', { label: 'EN', to: 'en' }],
  ['en', { label: 'ES', to: 'es' }],
]);

const useToggleLanguage = () => {
  const { i18n } = useTranslation();
  const { label, to } = languages.get(i18n.language)!;
  const handleToggleLanguage = useCallback(() => i18n.changeLanguage(to), [i18n.language]);

  return { currentLangLabel: label, handleToggleLanguage };
};

export default useToggleLanguage;
