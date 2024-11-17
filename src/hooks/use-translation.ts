import i18n from 'i18next';
import {
  UseTranslationOptions,
  useTranslation as useTranslationi18,
} from 'react-i18next';

export function useTranslation(
  ns?: string,
  options?: UseTranslationOptions<undefined> | undefined
) {
  const { t } = useTranslationi18(ns, options);

  const { language, languages, changeLanguage, setDefaultNamespace } = i18n;

  return { t, language, languages, changeLanguage, setDefaultNamespace };
}
