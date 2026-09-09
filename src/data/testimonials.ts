export interface Testimonial {
  name: string;
  meta: string;
  quote: string;
}

// Curated from verified Google reviews for MAXBURN GYM
// (LB Rd, Kamaraj Nagar, Thiruvanmiyur, Chennai) — 4.3 rating, 40 reviews.
export const AGGREGATE_RATING = 4.3;
export const AGGREGATE_REVIEW_COUNT = 40;

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Shubham Singh',
    meta: 'Local Guide · 16 reviews',
    quote:
      "Trainer is good. That's the USP of this gym. The interior of gym is not high class looking or air conditioned but hey, that doesn't matter. You will have good time exercising here.",
  },
  {
    name: 'Althaf',
    meta: 'Local Guide · 10 reviews',
    quote: 'Wonderful fitness centre, really good training for fitness. Excellent work master Kumaravel.',
  },
  {
    name: 'Mano Rajesh',
    meta: '7 reviews',
    quote: 'Master will be so kind and down to earth to treat you as a friend and as a guide.',
  },
  {
    name: 'Mohammed Abdullah',
    meta: '3 reviews',
    quote: 'Very best gym and low price. Best trainer, he is very kindly.',
  },
  {
    name: 'Yuvaraj Gajendran',
    meta: 'Local Guide · 14 reviews',
    quote: 'Worthy gym for what we paid. Good trainer.',
  },
  {
    name: 'AKASH KUMAR',
    meta: '5 reviews',
    quote: 'One of the superb gyms in Thiruvanmiyur. Perfect tips by trainer. Cool environment for the exercise.',
  },
  {
    name: 'pemmasani rishaba',
    meta: 'Local Guide · 5 reviews',
    quote: 'Good place for fitness as well as stress relief... and very good trainers.',
  },
  {
    name: 'mohammed imthiyas',
    meta: '1 review',
    quote:
      'The trainer in the gym is very good and he is a good adviser. If you join this gym and give your effort, I assure you that you will get the result for sure.',
  },
  {
    name: 'Soumya Patnaik',
    meta: 'Local Guide · 32 reviews',
    quote: 'Sweaty place, no AC — but trainer is awesome.',
  },
  {
    name: 'Saleem A',
    meta: '3 reviews',
    quote: 'Good trainers and flexibility on fee.',
  },
  {
    name: 'Hariharan Selvaraj',
    meta: '4 reviews',
    quote: 'Master always rocks and gives good guidance.',
  },
  {
    name: 'Rohith Ganesh',
    meta: '2 reviews',
    quote: 'This place feels like another home.',
  },
];
