export interface NavLinkItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const mainNavLinks: NavLinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Programs & Events',
    href: '/programs',
    children: [
      { label: 'All Programs', href: '/programs', description: 'Overview of our 6 core prevention pillars' },
      { label: 'Drug Abuse Prevention', href: '/programs/drug-abuse-prevention', description: 'Youth risk mitigation and education' },
      { label: 'School & College Awareness', href: '/programs/school-college-awareness', description: 'Campus workshops and student ambassadors' },
      { label: 'Family Counselling', href: '/programs/family-counselling', description: 'Restoring home communication and trust' },
      { label: 'Mental Health Support', href: '/programs/mental-health-support', description: '24/7 Helpline and psychological first aid' },
      { label: 'Community & Corporate Outreach', href: '/programs/community-corporate-outreach', description: 'Neighbourhood and workplace wellness' },
      { label: 'Research & Advocacy', href: '/programs/research-advocacy', description: 'Evidence-based policy reform' }
    ]
  },
  {
    label: 'Campaigns',
    href: '/campaigns',
    children: [
      { label: 'All Campaigns', href: '/campaigns', description: 'Grassroots awareness initiatives' },
      { label: 'Anti-Drug Campaign (ലഹരിവിരുദ്ധ)', href: '/campaigns/anti-drug-substance-abuse-awareness', description: 'Flagship South India awareness drive' },
      { label: 'Project SHIELD for Schools', href: '/campaigns/project-shield-schools', description: 'Institutional safeguarding framework' },
      { label: 'Operation Toofan Dialogue', href: '/campaigns/operation-toofan-dialogue', description: 'Public health & civic coordination' },
      { label: 'Campus Ambassador Fellowship', href: '/campaigns/campus-ambassador-fellowship', description: 'Collegiate student leadership' }
    ]
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Resource Hub Overview', href: '/resources', description: 'Guides, warnings & toolkits' },
      { label: 'For Students & Youth', href: '/resources#students', description: 'Know the risks & peer pressure advice' },
      { label: 'For Parents & Guardians', href: '/resources#parents', description: 'Notice warning signs & support teens' },
      { label: 'For Teachers & Educators', href: '/resources#teachers', description: 'Campus observation & safeguarding' },
      { label: 'Free Downloadable Toolkits', href: '/resources#downloads', description: 'Handbooks, posters and policy templates' }
    ]
  },
  { label: 'Find Rehab Centres', href: '/find-rehab-centres' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'News', href: '/news' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Contact', href: '/contact' }
];

