export interface NavLinkItem {
  label: string;
  href: string;
}

export const mainNavLinks: NavLinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Resources', href: '/resources' },
  { label: 'Find Rehab Centres', href: '/find-rehab-centres' },
  { label: 'Programs & Events', href: '/programs-events' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Gallery', href: '/gallery' }
];
