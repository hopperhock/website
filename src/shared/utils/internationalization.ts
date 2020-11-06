import NextI18Next from 'next-i18next';
import config from 'next/config';
import path from 'path';

const { useTranslation, appWithTranslation, Router, Link } = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['es'],
  localeSubpaths: config().publicRuntimeConfig.localeSubpaths,
  localePath: path.resolve('./public/Locales'),
  localeExtension: 'json',
});

export { useTranslation, appWithTranslation, Router, Link };
