import { ResourceCategory, ResourceItem } from '../types';

export const resourceCategories: ResourceCategory[] = [
  {
    id: 'students',
    label: 'For Students & Youth',
    heading: 'Know the Risks. Know Your Choices.',
    tagline: 'Practical peer-refusal strategies, factual health awareness, and mental resilience guides.'
  },
  {
    id: 'parents',
    label: 'For Parents & Guardians',
    heading: 'Notice. Listen. Support.',
    tagline: 'Empathetic communication techniques, early indicator detection, and constructive home guidance.'
  },
  {
    id: 'teachers',
    label: 'For Teachers & Educators',
    heading: 'Observe. Understand. Act.',
    tagline: 'Safeguarding frameworks, campus intervention protocols, and institutional wellness models.'
  },
  {
    id: 'downloads',
    label: 'Downloadable Guides & Toolkits',
    heading: 'Free Educational Toolkits & Printables',
    tagline: 'Standardized handbooks, classroom posters, pledge sheets, and quick-reference pocket guides.'
  }
];

export const resourcesData: ResourceItem[] = [
  {
    id: 'student-substance-guide',
    slug: 'know-the-risks-know-your-choices',
    category: 'students',
    title: 'Student Empowerment: Know the Risks. Know Your Choices.',
    tagline: 'Navigating peer pressure, academic anxiety, and making informed choices for your future.',
    summary: 'A direct, candid guide designed for young people aged 13 to 25 covering the real impact of synthetic substances, peer dynamics, and steps to take when someone you know is in trouble.',
    warningSigns: [
      'Pressure from friends or acquaintances to try alcohol, vaping, pills, synthetic powders, or other unknown substances.',
      'Sudden changes in your friend circle, secretive habits, unpredictable mood swings, or uncharacteristic drop in academic or sports performance.',
      'Turning to substances or alcohol as a coping tool for exam stress, romantic heartbreaks, anxiety, loneliness, or depression.',
      'Feeling an urge or inability to stop, or noticing you need higher quantities to experience the same effect (tolerance).'
    ],
    actionableSteps: [
      'Learn the medical facts from verified public health sources rather than social media myths or friends.',
      'Prepare confident, rehearsed responses to peer pressure: A simple, firm "No thanks, I’m good" or "I have practice tomorrow" works wonders.',
      'Build friendships, hobbies, and sports circles that celebrate authenticity and respect your boundaries.',
      'Develop healthy, chemical-free ways to vent stress: sports, gym, art, music, trekking, journaling, and talking to mentors.',
      'Speak to a trusted adult, school counsellor, or mental healthcare professional early before situations escalate.',
      'Support friends who are struggling without judgement, shame, or mockery, and gently guide them toward professional confidential help.'
    ],
    takeawayQuote: 'Remember: Asking for help is a sign of strength, not weakness. Reaching out shows courage and self-respect.',
    image: '/images/youth-empowerment.jpg'
  },
  {
    id: 'parent-guide-notice-listen-support',
    slug: 'notice-listen-support-parent-guide',
    category: 'parents',
    title: 'Parenting Guide: Notice. Listen. Support.',
    tagline: 'How to protect your child through calm presence, open dialogue, and compassionate boundaries.',
    summary: 'A compassionate framework for mothers, fathers, and guardians on recognizing subtle behavioural indicators and approaching sensitive conversations without driving teens into defensive secrecy.',
    warningSigns: [
      'Subtle shifts in daily behaviour, sudden irritability, severe mood swings, or extreme defensiveness over personal space.',
      'Disturbed sleep rhythms (staying up all night and sleeping excessively during daytime), sudden appetite drops or rapid weight changes.',
      'Gradual emotional withdrawal from family dinners, household conversations, and previously cherished hobbies.',
      'Drastic alterations in peer groups, secretive phone calls, or unwillingness to introduce new friends.',
      'Unexplained financial demands, missing pocket money, missing valuables, or borrowing money from relatives.',
      'Discovery of unusual objects in backpacks or bedrooms: rolling papers, eye drops, burnt foil, vape devices, unidentified capsules, or chemical odours on clothing.'
    ],
    guidancePoints: [
      'Stay Calm: Discovering warning signs naturally sparks panic or anger. Take a breath and compose yourself before initiating conversation.',
      'Choose a Private, Calm Time: Avoid confrontational ambush moments or late-night arguments. Pick a quiet, neutral environment where you will not be interrupted.',
      'Ask Open, Caring Questions: Use non-accusatory phrasing such as "I’ve noticed you have seemed weighed down lately, and I care about you. How are things really going?"',
      'Listen Without Judgement: Let your child speak completely without cutting them off to lecture. Premature criticism immediately shuts down honesty.',
      'Establish Clear, Loving Boundaries: Reiterate that your concern stems from protective love, not a desire to punish or control.',
      'Seek Qualified Professional Advice: Connect with an adolescent psychologist or certified addiction counsellor immediately. Early intervention prevents clinical dependency.'
    ],
    takeawayQuote: 'Emphasise support, healing, and professional medical guidance rather than punitive hostility. Love and open channels save lives.',
    image: '/images/parent-child-communication.jpg'
  },
  {
    id: 'teacher-safeguarding-educator-framework',
    slug: 'observe-understand-act-educator-handbook',
    category: 'teachers',
    title: 'Educator Handbook: Observe. Understand. Act.',
    tagline: 'Safeguarding school and college campuses through empathetic vigilance and structured intervention.',
    summary: 'Guidelines for headmasters, teachers, professors, and student advisors on spotting early emotional distress and adhering to child protection protocols.',
    warningSigns: [
      'Chronic unexcused absenteeism, habitual tardiness, or frequent mid-day disappearances from campus grounds.',
      'Sudden, steep deterioration in academic assignments, inability to concentrate in lectures, or falling asleep at desks.',
      'Observable personality shifts: a previously extroverted student becoming sullen, isolated, or unusually hostile toward faculty.',
      'Noticeable physical indicators: bloodshot eyes, glazed stare, slurred speech, tremors, or persistent neglect of personal grooming.',
      'Frequent disciplinary infractions, conflicts with classmates, or gathering in secluded campus blind spots.'
    ],
    guidancePoints: [
      'Do Not Jump to Inferences: Unusual behaviour or deteriorating grades may stem from family domestic distress, bullying, grief, or learning difficulties. Never publicly accuse a student of drug use.',
      'Speak Privately and Empathetically: Invite the student to a private counselling cabin. Express warm personal concern for their overall wellbeing rather than citing academic failures.',
      'Adhere Strictly to Safeguarding Guidelines: Follow the institution’s documented child protection and wellness procedures. Avoid private ad-hoc punishments.',
      'Involve Parents Collaboratively: Present factual behavioural observations rather than moral judgments. Work with parents as partners in the child’s recovery.',
      'Connect with Qualified Professional Channels: Refer the student to accredited mental health counsellors or AFOI’s 24/7 dedicated helpline.'
    ],
    takeawayQuote: 'A teacher’s role is not to diagnose addiction. It is to notice, support, protect, and connect a student with the right help.',
    image: '/images/school-awareness.jpg'
  },
  {
    id: 'downloadable-campus-poster-pack',
    slug: 'campus-awareness-poster-pack',
    category: 'downloads',
    title: 'Campus Awareness & Peer Resistance Poster Toolkit (PDF)',
    tagline: 'High-resolution printable posters, bulletin notice inserts, and emergency helpline cards.',
    summary: 'A ready-to-print compilation of clean, non-stigmatising posters designed for school corridors, university student unions, hostel dining halls, and noticeboards.',
    downloadSize: '4.8 MB',
    fileFormat: 'Print-Ready Vector PDF (A3 / A4)',
    downloadUrl: '/downloads/AFOI-Campus-Awareness-Pack.pdf',
    image: '/images/campaign-awareness.jpg'
  },
  {
    id: 'downloadable-family-dialogue-guide',
    slug: 'family-dialogue-handbook-pdf',
    category: 'downloads',
    title: 'The Family Dialogue Handbook: Talking About Mental Health & Choices',
    tagline: 'A 24-page compassionate guide for parents with scripts, question prompts, and recovery steps.',
    summary: 'Comprehensive handbook created by clinical psychologists outlining how to have constructive conversations with adolescents about stress, peer pressure, and substance avoidance.',
    downloadSize: '3.2 MB',
    fileFormat: 'Interactive PDF',
    downloadUrl: '/downloads/AFOI-Family-Dialogue-Handbook.pdf',
    image: '/images/parent-child-communication.jpg'
  },
  {
    id: 'downloadable-institutional-safeguarding-policy',
    slug: 'institutional-substance-safeguarding-template',
    category: 'downloads',
    title: 'Institutional Substance Safeguarding Policy Template for Schools & Colleges',
    tagline: 'Standard operating procedures (SOP), crisis de-escalation workflows, and parental referral documentation.',
    summary: 'Model institutional policy draft for school administrators and principals seeking to implement standardized, compassionate anti-substance procedures.',
    downloadSize: '2.1 MB',
    fileFormat: 'Editable DOCX / PDF',
    downloadUrl: '/downloads/AFOI-Institutional-Safeguarding-Template.pdf',
    image: '/images/educational-resources.jpg'
  }
];
