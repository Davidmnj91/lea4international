export enum ServicesCategories {
  Erasmus = 'erasmus',
  LanguageCourses = 'language-courses',
  Concierge = 'concierge',
}

export const Services: Record<ServicesCategories, string[]> = {
  [ServicesCategories.Erasmus]: [
    'work-experience',
    'job-shadowing',
    'school-exchange',
    'erasmus-mundus',
  ],
  [ServicesCategories.LanguageCourses]: [],
  [ServicesCategories.Concierge]: [],
};
