export enum FAQCategories {
  erasmus = 'erasmus',
  languageCourses = 'language-courses',
  concierge = 'concierge',
}

export const Faqs: Record<FAQCategories, string[]> = {
  [FAQCategories.erasmus]: [
    'what-is-erasmus-plus',
    'how-to-erasmus-plus',
    'how-to-organize',
    'why-erasmus-plus',
    'how-to-become-partner',
    'hot-to-become-host-family',
  ],
  [FAQCategories.languageCourses]: ['language-courses-offer'],
  [FAQCategories.concierge]: ['what-it-is', 'what-included'],
};
