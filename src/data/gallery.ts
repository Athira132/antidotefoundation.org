import { GalleryItem } from '../types';

export const galleryCategories = [
  'All',
  'Awareness Programmes',
  'Events',
  'Volunteers',
  'Schools & Colleges',
  'Campaigns',
  'Community Activities'
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Youth Leadership & Peer Mentoring Circle',
    category: 'Awareness Programmes',
    image: '/images/hero-youth-leadership.jpg',
    description: 'Young student leaders coming together in solidarity to promote healthy lifestyles and mutual accountability.',
    isIllustrative: true
  },
  {
    id: 'gal-2',
    title: 'Interactive School Wellness Seminar',
    category: 'Schools & Colleges',
    image: '/images/school-awareness.jpg',
    description: 'Engaging high school students in open dialogue on emotional resilience and resisting peer pressure.',
    isIllustrative: true
  },
  {
    id: 'gal-3',
    title: 'Youth Empowerment & Collaborative Discussion',
    category: 'Awareness Programmes',
    image: '/images/youth-empowerment.jpg',
    description: 'Undergraduate student ambassadors planning campus-level awareness drives and creative workshops.',
    isIllustrative: true
  },
  {
    id: 'gal-4',
    title: 'Supportive Family Guidance Consultation',
    category: 'Events',
    image: '/images/parent-child-communication.jpg',
    description: 'Demonstration of empathetic, non-judgemental home dialogue between parents and adolescents.',
    isIllustrative: true
  },
  {
    id: 'gal-5',
    title: 'Grassroots Community Awareness Walk',
    category: 'Community Activities',
    image: '/images/community-volunteering.jpg',
    description: 'Dedicated young volunteers rallying neighbourhoods to promote vigilance and supportive recovery networks.',
    isIllustrative: true
  },
  {
    id: 'gal-6',
    title: 'Confidential One-on-One Psychological Support',
    category: 'Events',
    image: '/images/counselling-support.jpg',
    description: 'Professional tele-counsellor providing compassionate guidance in a secure, stigma-free setting.',
    isIllustrative: true
  },
  {
    id: 'gal-7',
    title: 'Anti-Substance Campus Awareness Rally',
    category: 'Campaigns',
    image: '/images/campaign-awareness.jpg',
    description: 'Students championing the anti-drug message with banners and inspiring community slogans.',
    isIllustrative: true
  },
  {
    id: 'gal-8',
    title: 'Serene Nature Walk & Recovery Mentorship',
    category: 'Volunteers',
    image: '/images/rehabilitation-recovery.jpg',
    description: 'Mentors walking alongside young adults during holistic wellness and restorative reintegration.',
    isIllustrative: true
  },
  {
    id: 'gal-9',
    title: 'Collaborative Study & Resource Workshop',
    category: 'Schools & Colleges',
    image: '/images/educational-resources.jpg',
    description: 'Students and educators reviewing preventive literature and mental health guides in the library.',
    isIllustrative: true
  },
  {
    id: 'gal-10',
    title: 'Community Educational Kit Distribution',
    category: 'Community Activities',
    image: '/images/donation-impact.jpg',
    description: 'Distributing evidence-based anti-drug workbooks and student resource packages to local schools.',
    isIllustrative: true
  }
];
