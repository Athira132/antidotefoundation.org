export interface OrganizationInfo {
  name: string;
  shortName: string;
  tagline: string;
  mission: string;
  coreMessage: string;
  registrationNumber: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  contact: {
    helpline: string;
    helplineDisplay: string;
    officeHours: string;
    emailNote: string;
  };
  social: {
    instagram: string;
    youtube: string;
    facebook: string;
  };
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string[];
  keyObjectives: string[];
  targetAudience: string;
  iconName: string;
  image: string;
  statsLabel?: string;
  statsValue?: string;
}

export interface Campaign {
  id: string;
  slug: string;
  title: string;
  regionalTitle?: string;
  badge: string;
  status: 'Active' | 'Ongoing' | 'Upcoming' | 'Completed';
  summary: string;
  description: string[];
  objectives: string[];
  targetLocations: string[];
  image: string;
  callToAction: string;
  ctaLink: string;
  isVerified: boolean;
}

export interface RehabCentre {
  id: string;
  name: string;
  state: string;
  district: string;
  city: string;
  pinCode: string;
  address: string;
  phone: string;
  type: string;
  services: string[];
  isVerified: boolean;
  notes?: string;
}

export interface ResourceCategory {
  id: 'students' | 'parents' | 'teachers' | 'downloads';
  label: string;
  heading: string;
  tagline: string;
}

export interface ResourceItem {
  id: string;
  slug: string;
  category: 'students' | 'parents' | 'teachers' | 'downloads';
  title: string;
  tagline: string;
  summary: string;
  warningSigns?: string[];
  guidancePoints?: string[];
  actionableSteps?: string[];
  takeawayQuote?: string;
  downloadSize?: string;
  fileFormat?: string;
  downloadUrl?: string;
  image?: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string[];
  image: string;
  isOfficialNotice?: boolean;
  verificationStatus: 'Official Documentation' | 'Verified Press Notice' | 'Subject to Verification';
  verificationNote?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Field Activities' | 'Awareness Programmes' | 'Events' | 'Volunteers' | 'Schools & Colleges' | 'Campaigns' | 'Community Activities';
  image: string;
  description: string;
  isIllustrative?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  description: string;
  status: 'Active' | 'Upcoming' | 'Completed';
}

export interface VolunteerFormData {
  name: string;
  email: string;
  mobile: string;
  age: string;
  city: string;
  state: string;
  preferredRole: string;
  availability: string;
  message: string;
  privacyConsent: boolean;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  privacyConsent: boolean;
}

export interface DonationFormData {
  amount: number | string;
  customAmount?: string;
  frequency: 'one-time' | 'monthly';
  name: string;
  email: string;
  mobile: string;
  panNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  anonymous: boolean;
  paymentMethod: 'upi' | 'bank_transfer' | 'card' | 'net_banking';
}

