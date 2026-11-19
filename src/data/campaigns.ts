import { Campaign } from '../types';

export const campaignsData: Campaign[] = [
  {
    id: 'anti-drug-substance-abuse-awareness',
    slug: 'anti-drug-substance-abuse-awareness',
    title: 'Anti-Drug & Substance Abuse Awareness Campaign',
    regionalTitle: 'ലഹരിവിരുദ്ധ ക്യാമ്പയിൻ (Anti-Substance Campaign)',
    badge: 'Flagship Initiative',
    status: 'Active',
    summary: 'A high-impact, state-wide grassroots drive focusing on youth empowerment, school-level peer resistance, and family counselling networks.',
    description: [
      'The Anti-Drug & Substance Abuse Awareness Campaign (ലഹരിവിരുദ്ധ ക്യാമ്പയിൻ) represents Antidote Foundation of India’s foremost public outreach mission, originating from South India and expanding nationwide.',
      'Designed to counter the aggressive spread of synthetic drugs and prescription abuse among adolescent and collegiate demographics, this campaign unites students, educators, parents, and civic leaders under a single resolute banner: "Protect Young Lives. Build a Drug-Free India."',
      'Through street dialogues, campus assemblies, flash discussions, and localized informational brochures in regional languages and English, the campaign dismantles the glamour often manufactured around substance culture.',
      'Importantly, the initiative places equal emphasis on creating approachable, non-stigmatising channels where any youth struggling with dependency can reach out for confidential psychological first aid.'
    ],
    objectives: [
      'Reach school and collegiate campuses across urban and semi-urban hubs with interactive workshops.',
      'Provide on-spot guidance leaflets and promote the 24/7 confidential helpline (+91 77779 27742).',
      'Train local youth ambassadors to lead peer-led anti-drug pledge drives.',
      'Foster open, non-confrontational communication between parents and teenagers regarding mental wellness.'
    ],
    targetLocations: ['Bengaluru', 'Ernakulam', 'Thiruvananthapuram', 'Kozhikode', 'Mysuru', 'Mangaluru', 'National Outreach'],
    image: '/images/campaign-awareness.jpg',
    callToAction: 'Support This Campaign',
    ctaLink: '/volunteer',
    isVerified: true
  },
  {
    id: 'project-shield-schools',
    slug: 'project-shield-schools',
    title: 'Project SHIELD: Safe & Healthy Institutional Environments',
    badge: 'Educational Outreach',
    status: 'Ongoing',
    summary: 'Institutional framework providing schools and junior colleges with teacher toolkits, parent advisories, and student mentoring circles.',
    description: [
      'Project SHIELD is an institutional enablement initiative that transforms educational institutions into protective sanctuaries against substance proliferation.',
      'Rather than relying solely on sporadic cautionary lectures, Project SHIELD embeds systemic protective measures: training teachers to spot emotional disengagement without punitive prejudice, creating anonymous reporting and counselling mechanisms, and establishing student-run wellness clubs.',
      'Our dedicated team collaborates directly with school principals, parent-teacher associations, and guidance counsellors to implement customized safeguarding protocols.'
    ],
    objectives: [
      'Equip 100+ schools and pre-university colleges with structured substance prevention protocols.',
      'Conduct teacher-sensitization modules on adolescent psychology and non-stigmatising support.',
      'Deliver student-friendly psycho-education workbooks on emotional regulation and peer pressure.',
      'Establish school wellness committees with designated student peer mentors.'
    ],
    targetLocations: ['Karnataka', 'Kerala', 'Tamil Nadu', 'Pan-India Online'],
    image: '/images/school-awareness.jpg',
    callToAction: 'Enrol Your Institution',
    ctaLink: '/contact?subject=School+Programme',
    isVerified: true
  },
  {
    id: 'operation-toofan-dialogue',
    slug: 'operation-toofan-dialogue',
    title: 'Operation Toofan: Public Health & Enforcement Coordination Dialogue',
    badge: 'Stakeholder Dialogue',
    status: 'Ongoing',
    summary: 'Coordinating civic society dialogue alongside regional enforcement initiatives, promoting youth protection and community awareness.',
    description: [
      'Operation Toofan represents an expansive public dialogue and awareness drive aimed at bridging community vigilance with institutional narcotics prevention efforts.',
      'Following active consultations with regional civic representatives and public officials, this initiative advocates for a dual-track strategy: uncompromising disruption of illegal distribution networks on one hand, and comprehensive public health, medical rehabilitation, and compassionate youth reintegration on the other.',
      'AFOI office-bearers actively engage in policy conversations to ensure community-driven early warning data helps protect vulnerable youngsters from predatory networks.'
    ],
    objectives: [
      'Foster constructive collaboration between civic organisations, educators, and public health authorities.',
      'Advocate for youth-centric diversion programs rather than criminalisation for first-time experimental users.',
      'Facilitate regional public symposiums on curbing synthetic drug transit.',
      'Publish community vigilance whitepapers and actionable public alerts.'
    ],
    targetLocations: ['Bengaluru Urban & Rural', 'South India Corridors'],
    image: '/images/community-volunteering.jpg',
    callToAction: 'Join Public Dialogue',
    ctaLink: '/contact?subject=Collaboration',
    isVerified: true
  },
  {
    id: 'campus-ambassador-fellowship',
    slug: 'campus-ambassador-fellowship',
    title: 'National Campus Ambassador Fellowship',
    badge: 'Youth Leadership',
    status: 'Active',
    summary: 'Empowering passionate collegiate leaders with leadership training, advocacy toolkits, and mentorship to spearhead substance-free campuses.',
    description: [
      'True cultural transformation amongst youth must be driven by youth themselves. The National Campus Ambassador Fellowship recruits and trains proactive college students across India to become ambassadors of healthy living.',
      'Fellows undergo intensive modular training covering addiction science, empathetic listening, workshop facilitation, and digital awareness campaigning.',
      'Back on their campuses, ambassadors organise debate tournaments, artistic expressions, marathon runs, and safe peer-counselling circles, demonstrating that a vibrant life needs zero chemical crutches.'
    ],
    objectives: [
      'Train undergraduate and postgraduate leaders in peer-counselling fundamentals.',
      'Host campus rallies, sports tournaments, and creative arts festivals promoting sober lifestyles.',
      'Establish direct, confidential referral links from campuses to AFOI’s 24/7 helpline.',
      'Reward exemplary campus initiatives with annual youth leadership recognitions.'
    ],
    targetLocations: ['Universities across India', 'Bengaluru University', 'Kerala University', 'Calicut University', 'Anna University'],
    image: '/images/youth-empowerment.jpg',
    callToAction: 'Apply as an Ambassador',
    ctaLink: '/volunteer',
    isVerified: true
  }
];

