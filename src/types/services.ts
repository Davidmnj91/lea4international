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
  [ServicesCategories.LanguageCourses]: [
    'english-courses',
    'business-english-courses',
    'spanish-courses',
    'business-spanish-courses',
    'ai-trainings',
  ],
  [ServicesCategories.Concierge]: [],
};