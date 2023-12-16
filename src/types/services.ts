import erasmus_bg from '../../public/erasmus_bg.png';
import language_courses_bg from '../../public/language_courses_bg.png';
import student_exchange_bg from '../../public/student_exchange_bg.png';
import concierge_bg from '../../public/concierge_bg.png';

export enum ServicesCategories {
  Erasmus = 'erasmus',
  LanguageCourses = 'language-courses',
  StudentExchange = 'student-exchange',
  Concierge = 'concierge',
}

export const servicesCardConfig = {
  erasmus: erasmus_bg.src,
  'language-courses': language_courses_bg.src,
  'student-exchange': student_exchange_bg.src,
  concierge: concierge_bg.src,
};

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
  [ServicesCategories.StudentExchange]: [
    'immersion-program',
    'exchange-program',
  ],
  [ServicesCategories.Concierge]: [],
};
