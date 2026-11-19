import { Program } from '../types';

export const programsData: Program[] = [
  {
    id: 'drug-abuse-prevention',
    slug: 'drug-abuse-prevention',
    title: 'Drug Abuse Prevention',
    tagline: 'Evidence-Based Early Intervention & Risk Mitigation',
    shortDescription: 'Targeted education and proactive intervention strategies designed to deter early experimentation among vulnerable adolescents and young adults.',
    fullDescription: [
      'The Drug Abuse Prevention programme serves as the primary frontline defence in the mission to build a drug-free India. Operating on scientifically grounded behavioural health frameworks, our curriculum focuses on dismantling misconceptions surrounding substance experimentation.',
      'We work systematically with youth aged 13 to 30, addressing both psychological vulnerabilities and environmental triggers. Our peer-to-peer dialogue models empower participants to identify risk factors, resist peer coercion, and embrace healthy lifestyle alternatives.',
      'By engaging local youth networks, sports groups, and educational centres, the programme builds resilient protective barriers within vulnerable communities.'
    ],
    keyObjectives: [
      'Deliver scientific awareness on neurochemical addiction and long-term bodily impact.',
      'Train youth in emotional self-regulation and peer-refusal strategies.',
      'Establish grassroots community watch and early intervention warning networks.',
      'Promote constructive sports, artistic, and leadership avenues as positive alternatives.'
    ],
    targetAudience: 'Youth aged 13–25, college students, community youth groups, and first-time vulnerable individuals.',
    iconName: 'ShieldAlert',
    image: '/images/youth-empowerment.jpg'
  },
  {
    id: 'school-college-awareness',
    slug: 'school-college-awareness',
    title: 'School & College Awareness',
    tagline: 'Institutional Workshops, Youth Rallies & Campus Ambassador Networks',
    shortDescription: 'Interactive seminars, campus ambassador initiatives, and youth-led awareness drives across educational institutions.',
    fullDescription: [
      'Educational institutions represent the most vital setting for building drug immunity. Our School & College Awareness programme conducts structured, multi-tier outreach sessions tailored to high school and collegiate environments.',
      'Through engaging multimedia presentations, open mic discussions, and roleplay simulations, students learn how subtle social pressures evolve into substance reliance and how to break the silence when someone needs help.',
      'We appoint and mentor dedicated Campus Ambassadors who act as confidential points of contact and advocates for healthy campus cultures.'
    ],
    keyObjectives: [
      'Conduct interactive seminars across schools and universities with zero stigma.',
      'Institute Campus Ambassador clubs to sustain year-round student dialogue.',
      'Equip teachers and school management with non-punitive identification protocols.',
      'Distribute institutional resource toolkits and student guides.'
    ],
    targetAudience: 'High school students (grades 8–12), undergraduate and postgraduate students, faculty members, and campus counsellors.',
    iconName: 'GraduationCap',
    image: '/images/school-awareness.jpg'
  },
  {
    id: 'family-counselling',
    slug: 'family-counselling',
    title: 'Family Counselling',
    tagline: 'Restoring Trust, Open Communication & Domestic Support Systems',
    shortDescription: 'Confidential, compassionate guidance helping families identify early warning signs, dismantle confrontation, and support loved ones.',
    fullDescription: [
      'Substance experimentation rarely occurs in isolation; its impact ripples across entire households. The Family Counselling initiative bridges the communication divide between parents and youth.',
      'Many parents respond to suspected substance use with panic, anger, or denial, which often pushes youth deeper into isolation. Our licensed counsellors guide parents through constructive, non-judgemental communication methods.',
      'We provide structured mediation sessions that help rebuild domestic trust, define firm yet caring boundaries, and establish a secure environment conducive to lasting wellness.'
    ],
    keyObjectives: [
      'Provide private, free-of-cost family guidance consultations through certified specialists.',
      'Help parents distinguish typical adolescent stress from substance warning signs.',
      'Facilitate non-adversarial home conversations that invite open disclosure.',
      'Guide families through step-by-step navigation of professional recovery pathways.'
    ],
    targetAudience: 'Parents, guardians, siblings, and extended family members seeking guidance for a loved one.',
    iconName: 'Users',
    image: '/images/parent-child-communication.jpg'
  },
  {
    id: 'mental-health-support',
    slug: 'mental-health-support',
    title: 'Mental Health Support',
    tagline: '24/7 Helpline, Psychological First Aid & De-stigmatised Counselling',
    shortDescription: 'Confidential psychological first aid, tele-counselling, and emotional resilience workshops addressing the root causes of substance use.',
    fullDescription: [
      'Mental distress, untreated trauma, academic anxiety, and social isolation are primary drivers leading young people toward chemical escapism. Our Mental Health Support programme provides an empathetic safety net.',
      'Through our 24/7 dedicated helpline (+91 77779 27742) and scheduled tele-counselling sessions, individuals receive immediate crisis de-escalation and psychological first aid in complete confidentiality.',
      'Our team respects every caller’s dignity, ensuring they feel heard, valued, and empowered without fear of social ostracisation or legal exposure.'
    ],
    keyObjectives: [
      'Operate our toll-free 24/7 confidential helpline for immediate crisis intervention.',
      'Offer one-on-one tele-counselling with professional clinical psychologists.',
      'Address co-occurring conditions including clinical depression, panic, and chronic anxiety.',
      'Promote healthy emotional coping mechanisms and resilience toolkits.'
    ],
    targetAudience: 'Any individual experiencing emotional distress, academic stress, addiction urges, or personal crisis.',
    iconName: 'HeartHandshake',
    image: '/images/counselling-support.jpg'
  },
  {
    id: 'community-corporate-outreach',
    slug: 'community-corporate-outreach',
    title: 'Community & Corporate Outreach',
    tagline: 'Grassroots Mobilisation & Workplace Wellness Initiatives',
    shortDescription: 'Engaging residential welfare associations, trade unions, corporate teams, and civic leaders in community-wide preventive ecosystems.',
    fullDescription: [
      'Creating a drug-free society necessitates holistic civic participation beyond academic gates. The Community & Corporate Outreach wing mobilises neighbourhoods, workplaces, and local governance bodies.',
      'In corporate corridors, stress and burnout can lead to silent substance dependencies; we conduct Employee Assistance wellness webinars, stress management workshops, and managerial sensitisation sessions.',
      'In residential neighbourhoods and urban informal settlements, our teams organise street corner awareness rallies, pledge campaigns, and community forums that foster protective communal watchfulness.'
    ],
    keyObjectives: [
      'Host workplace mental wellness and substance awareness workshops for corporate teams.',
      'Partner with Resident Welfare Associations (RWAs) and civic bodies for neighbourhood vigilance.',
      'Organise community anti-drug rallies, pledge ceremonies, and youth cultural showcases.',
      'Create supportive local ecosystems that foster zero tolerance for illicit supply while offering compassion for victims.'
    ],
    targetAudience: 'Corporate professionals, human resource teams, neighbourhood associations, civil society groups, and civic volunteers.',
    iconName: 'Building2',
    image: '/images/community-volunteering.jpg'
  },
  {
    id: 'research-advocacy',
    slug: 'research-advocacy',
    title: 'Research & Advocacy',
    tagline: 'Data-Informed Policy Reform & Public Health Dialogue',
    shortDescription: 'Ground-level trend monitoring, policy whitepapers, and collaborative stakeholder forums to strengthen national prevention infrastructure.',
    fullDescription: [
      'Effective public health solutions must be anchored in rigorous empirical insight. The Research & Advocacy cell examines emerging patterns in adolescent substance exposure, synthetic drug proliferation, and socio-economic vulnerability factors.',
      'We engage with public health researchers, legal scholars, law enforcement liaisons, and educational boards to draft evidence-based policy recommendations.',
      'Our advocacy advocates for compassionate decriminalisation of victims paired with stringent penal action against supply syndicates, ensuring recovery over punishment.'
    ],
    keyObjectives: [
      'Publish analytical reviews on regional substance trends and synthetic drug risks.',
      'Advocate for expanded adolescent mental health funding in school curricula.',
      'Collaborate with judicial, medical, and administrative authorities on institutional reforms.',
      'Develop open-access policy briefs and educational guidelines for public institutions.'
    ],
    targetAudience: 'Policymakers, public health researchers, legal experts, educators, media representatives, and civic institutions.',
    iconName: 'FileSearch',
    image: '/images/campaign-awareness.jpg'
  }
];
