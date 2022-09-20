
/**
 * Localized (i18n, translations) gives the ServiceProviders the ability to support more than one language.
 * The "default" locale can be used as fallback when the SP does not know what language it is (e.g for a device name written by a user)
 */
 export interface LocalizedString {
  locale: 'sv_SE' | 'en_US' | 'default';
  format?: 'text' | 'markdown';
  value: string;
}

export type CachePrefix = "Consent" | "ConsentRequest" | "Credential" | "Presentation";
