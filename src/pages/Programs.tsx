import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldAlert,
  GraduationCap,
  Users,
  HeartHandshake,
  Building2,
  FileSearch,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MapPin,
  ExternalLink,
  MessageCircle,
  X,
  Maximize2
} from 'lucide-react';
import { programsData } from '../data/programs';
import { upcomingEvents } from '../data/events';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { HelplineBanner } from '../components/common/HelplineBanner';
import { SEO } from '../components/common/SEO';
import {
  FadeUp,
  StaggerContainer,
  StaggerItem
} from '../components/animations/MotionComponents';

const iconMap: Record<string, React.ElementType> = {
  ShieldAlert,
  GraduationCap,
  Users,
  HeartHandshake,
  Building2,
  FileSearch
};

interface DocumentedArchiveEvent {
  id: string;
  title: string;
  dateBadge: string;
  source: string;
  image: string;
  alt: string;
  excerpt: string;
  fullParagraphs: string[];
  articleUrl?: string;
  articleLabel?: string;
  whatsappUrl?: string;
  whatsappLabel?: string;
  signoff?: {
    name: string;
    role?: string;
    org?: string;
  };
}

const documentedEvents: DocumentedArchiveEvent[] = [
  {
    id: 'event-1',
    title: 'യുവജന ശക്തീകരണ ക്യാമ്പ് നാളെ മുതൽ',
    dateBadge: 'APRIL 17, 2026 - FRIDAY',
    source: 'www.bangalorejalakam.com — Malayalam News Portal in Bangalore',
    image: '/images/event_1_article.jpg',
    alt: 'യുവജന ശക്തീകരണ ക്യാമ്പ് നാളെ മുതൽ - ബാംഗ്ലൂർ ജാലകം',
    excerpt: 'ബാംഗ്ലൂർ ജാലകം റിപ്പോർട്ട് ചെയ്യുന്ന യുവജന ശക്തീകരണ ക്യാമ്പ് നാളെ ആരംഭിക്കുന്നു. പൂർണ്ണ വിവരങ്ങളും രജിസ്ട്രേഷനും വായിക്കുക.',
    fullParagraphs: [
      'യുവജന ശക്തീകരണ ക്യാമ്പ് നാളെ മുതൽ ആരംഭിക്കുകയാണ്. യുവതീ-യുവാക്കൾക്ക് സമൂഹത്തിൽ നേരിടുന്ന മാനസിക സമ്മർദ്ദങ്ങളെയും ലഹരി വെല്ലുവിളികളെയും അതിജീവിക്കാനും സ്വയം പര്യാപ്തത കൈവരിക്കാനും സഹായകമാകുന്ന രീതിയിലാണ് ക്യാമ്പ് ക്രമീകരിച്ചിരിക്കുന്നത്.',
      'ബാംഗ്ലൂർ ജാലകം ന്യൂസ് പോർട്ടലിൽ പ്രസിദ്ധീകരിച്ച ഈ സമഗ്ര റിപ്പോർട്ട് താഴെ നൽകിയിട്ടുള്ള ലിങ്കിലൂടെ വിശദമായി വായിക്കാം.'
    ],
    articleUrl: 'https://bangalorejalakam.com/youth-empowerment-camp-starts-tomorrow/',
    articleLabel: 'Read Article on Bangalore Jalakam',
    whatsappUrl: 'https://chat.whatsapp.com/IGp27JPR2UbBIPfIp9B8u7',
    whatsappLabel: 'ബാംഗ്ലൂർ ജാലകം WHATSAPP GROUPൽ JOIN ചെയ്യാം'
  },
  {
    id: 'event-2',
    title: 'Sumanahalli Campus Youth Anti-Addiction Movement',
    dateBadge: 'AFOI & Hope Society',
    source: 'Two-Day Residential Collaborative Initiative',
    image: '/images/gallery_14.jpg',
    alt: '20 Youth at Sumanahalli campus during interactive discussions',
    excerpt: '20 Youth cutting linguistic, religious and professional lines spent two days in Sumanahalli campus laying the foundation for an anti addiction movement...',
    fullParagraphs: [
      '20 Youth cutting linguistic, religious and professional lines spent two days in Sumanahalli campus laying the foundation for an anti addiction movement to reach out to their challenged peers - under the banner of Antidote Foundation of India and Hope Society.',
      'They made a resolve to invest their time and energy to engage youth in educational settings to create a better environment to live and study.'
    ]
  },
  {
    id: 'event-3',
    title: '⭕മൂല്യാധിഷ്ഠിത ജീവിത ക്രമത്തിനായി യുവജന സംഗമം',
    dateBadge: 'Madhyamam News',
    source: 'Madhyamam News Daily Coverage',
    image: '/images/archive_9.jpg',
    alt: 'മൂല്യാധിഷ്ഠിത ജീവിത ക്രമത്തിനായി യുവജന സംഗമം',
    excerpt: 'മൂല്യാധിഷ്ഠിത ജീവിത ക്രമത്തിനായി യുവജന സംഗമം - മാധ്യമം ദിനപത്രത്തിൽ പ്രസിദ്ധീകരിച്ച വിശദമായ റിപ്പോർട്ടും ചിത്രങ്ങളും.',
    fullParagraphs: [
      '⭕മൂല്യാധിഷ്ഠിത ജീവിത ക്രമത്തിനായി യുവജന സംഗമം',
      'ബംഗളൂരു: ആൻ്റിഡോട്ട് ഫൗണ്ടേഷൻ ഓഫ് ഇന്ത്യയുടെ നേതൃത്വത്തിൽ ഹോപ്പ് സൊസൈറ്റി സുമനഹള്ളിയിൽ ദ്വിദിന സഹവാസ ക്യാമ്പ് സംഘടിപ്പിച്ചു. 25 വയസ്സിൽ താഴെയുള്ള 20 അംഗങ്ങൾ ക്യാമ്പിൽ പങ്കെടുത്തു. ആനുകാലിക സാമൂഹിക വിദ്യാഭ്യാസ കുടുംബ സാഹചര്യങ്ങളെക്കുറിച്ച് യുവാക്കൾ നടത്തിയ ചർച്ചകളും കണ്ടെത്തലുകളും നിർദ്ദേശങ്ങളും വേറിട്ട അനുഭവമായി.',
      'യുവജനങ്ങളിൽ ആരോഗ്യകരമായ ജീവിതരീതിയും മൂല്യബോധവും ഉറപ്പുവരുത്താൻ മാധ്യമം റിപ്പോർട്ട് ചെയ്ത ഈ സംഗമം വഴിതുറന്നു.'
    ],
    articleUrl: 'https://www.madhyamam.com/n-1514220',
    articleLabel: 'Read Article on Madhyamam',
    whatsappUrl: 'https://chat.whatsapp.com/HKxb0tQeAgKEgx1KngqwYP',
    whatsappLabel: '🟨🟥കന്നഡ നാട്ടിലെ കൂടുതൽ വാർത്തകളറിയാൻ ജോയിൻ ചെയ്യാം'
  },
  {
    id: 'event-4',
    title: 'Second Youth Empowerment Camp · Hesaraghatta Lake',
    dateBadge: '14th June 2026',
    source: 'Youth Empowerment Field Camp',
    image: '/images/gallery_06.jpg',
    alt: 'Second Youth Empowerment Camp at Hesaraghatta Lake',
    excerpt: 'We are happy to share that the second Youth Empowerment Camp under Antidote Foundation was successfully conducted on 14th June 2026 at Hesaraghatta Lake...',
    fullParagraphs: [
      'Hello everyone,',
      'We are happy to share that the second Youth Empowerment Camp under Antidote Foundation was successfully conducted on 14th June 2026 at Hesaraghatta Lake. The camp brought together young minds for meaningful discussions, self-reflection, learning experiences, and activities focused on personal growth, relationships, social media awareness, and understanding different perspectives.',
      'A follow-up session for the participants of this camp will be conducted soon to continue the conversations and strengthen the learning journey. Further details will be shared shortly.',
      'Thank you for your continued support and encouragement towards building a more aware, connected, and empowered youth community.'
    ],
    signoff: {
      name: 'Archana Sheejith',
      role: 'Youth Camp Coordinator',
      org: 'Antidote Foundation'
    }
  },
  {
    id: 'event-5',
    title: 'ലഹരി വിരുദ്ധ കൂട്ടായ്മ; മലയാളി സംഘടനകളുടെ പൊതുയോഗം 5 ന്',
    dateBadge: 'JULY 02, 2026',
    source: 'NewsBengaluru.com — No 1 Malayalam News Portal in Karnataka',
    image: '/images/event_5_article.jpg',
    alt: 'ലഹരി വിരുദ്ധ കൂട്ടായ്മ; മലയാളി സംഘടനകളുടെ പൊതുയോഗം 5 ന്',
    excerpt: 'ലഹരി വിരുദ്ധ കൂട്ടായ്മയുടെ ഭാഗമായി മലയാളി സംഘടനകളുടെ വിപുലമായ പൊതുയോഗം ജൂലൈ 5 ന് നടക്കുന്നു.',
    fullParagraphs: [
      'ലഹരി വിരുദ്ധ കൂട്ടായ്മ; മലയാളി സംഘടനകളുടെ പൊതുയോഗം 5 ന്',
      'ബെംഗളൂരുവിലെ മുഴുവൻ മലയാളി സംഘടനകളെയും സംയോജിപ്പിച്ച് ലഹരി വിരുദ്ധ പ്രവർത്തനങ്ങൾ കൂടുതൽ കാര്യക്ഷമമാക്കുന്നതിനുള്ള വിപുലമായ പൊതുയോഗം ജൂലൈ 5 ന് നടക്കും. കർണാടകയിലെ പ്രമുഖ വാർത്താ പോർട്ടലായ NewsBengaluru.com ൽ പ്രസിദ്ധീകരിച്ച വാർത്ത.'
    ],
    articleUrl: 'https://newsbengaluru.com/anti-drug-coalition-general-meeting-of-malayali-organizations-on-5th/',
    articleLabel: 'Read on NewsBengaluru.com',
    whatsappUrl: 'https://chat.whatsapp.com/KzWxvY5hRWFFyrHMR7ngmf?mode=gi_t',
    whatsappLabel: '👁️🗨️ ഞങ്ങളുടെ വാട്സാപ്പ് ഗ്രൂപ്പിൽ ചേരൂ'
  },
  {
    id: 'event-6',
    title: 'Meeting with Bengaluru City Commissioner of Police, Sri. B Dayananda IPS',
    dateBadge: 'High-Level Delegation',
    source: 'Institutional Police Coordination',
    image: '/images/gallery_01.jpg',
    alt: 'Volunteers meeting with Bengaluru City Commissioner of Police Sri. B Dayananda IPS',
    excerpt: 'Our group of four volunteers met with Bengaluru City Commissioner of Police, Sri. B Dayananda IPS, who assured all support to substance abuse eradication...',
    fullParagraphs: [
      'Dear All,',
      'We are pleased to share that our group of four volunteers met with Bengaluru City Commissioner of Police, Sri. B Dayananda IPS, today evening. The Commissioner assured all support to this burning issue and facilitated our connection with Mr. Vinay, a renowned NGO leader in substance abuse eradication, de addiction and counselling who has been collaborating with major colleges in Bengaluru.',
      'We had a brief telephonic conversation with Mr. Vinay, and he graciously agreed to attend our next meeting on Saturday to give few guidance as per the advice of COP on 9th February. Following his guidance, we will determine our specific area of focus and update the Commissioner on our plans in near future.',
      'We look forward to your cooperation in making a positive impact in our community.',
      'Once solicited your presence and active participation to take key important decisions and the selection of Cordinators across bangalore and to form an NGO to mitigate this burning issue.'
    ],
    signoff: {
      name: 'P.A. Issac',
      role: 'Founder/Chairman',
      org: 'Antidote Foundation of India'
    }
  }
];

const archiveDocuments = [
  { id: 'archive_7', src: '/images/archive_7.jpg', title: 'General Body Meeting Notice', alt: 'AFOI General Body Meeting Official Announcement' },
  { id: 'archive_8', src: '/images/archive_8.jpg', title: 'Mathrubhumi Press Article', alt: 'AFOI Mathrubhumi Launch Press Documentation' },
  { id: 'archive_9', src: '/images/archive_9.jpg', title: 'Madhyamam News Feature', alt: 'AFOI Madhyamam Youth Empowerment Feature' },
  { id: 'archive_10', src: '/images/archive_10.jpg', title: 'Camp Schedule & Highlights', alt: 'Youth Empowerment Camp Official Schedule' },
  { id: 'archive_11', src: '/images/archive_11.jpg', title: 'Sumanahalli Camp Flyer', alt: 'Youth Empowerment Camp Sumanahalli Flyer' }
];

export const Programs: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<DocumentedArchiveEvent | null>(null);
  const [selectedDoc, setSelectedDoc] = useState<{ src: string; title: string; alt: string } | null>(null);

  return (
    <div className="space-y-0">
      <SEO
        title="Drug Awareness Programmes & Events in India | AFOI"
        description="Discover AFOI's drug awareness campaigns, school and college programmes, youth empowerment activities and community initiatives."
        canonicalPath="/programs-events"
        keywords="Drug Awareness Programmes in India, Anti-drug awareness programmes, Drug awareness programmes in schools, Drug awareness programmes in colleges, Youth drug prevention programmes"
        breadcrumbs={[{ name: 'Programs & Events', path: '/programs-events' }]}
      />

      {/* 1. DISTINCTIVE HERO BANNER */}
      <PageHero
        badge="Intervention Framework"
        badgeVariant="teal"
        badgeIcon={ShieldAlert}
        title="Programs & Events"
        subtitle="Six comprehensive prevention, counselling, and advocacy pillars safeguarding Indian adolescents, collegiate campuses, and local communities."
        breadcrumbs={[{ label: 'Programs & Events' }]}
        imageSrc="/images/school-awareness.jpg"
        imageAlt="School and college youth awareness programs"
        imageBadgeText="Evidence-based peer education & life-skills"
        variant="background"
        actions={
          <>
            <Button to="/contact?subject=School+College+Workshop" variant="accent" size="md">
              <span>Request Campus Workshop</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button to="/volunteer" variant="secondary" size="md" className="bg-white/15 hover:bg-white/25 text-white border-white/25 backdrop-blur-md">
              <Users className="w-4 h-4 mr-1 text-teal-300" />
              <span>Join as Campus Ambassador</span>
            </Button>
          </>
        }
      />

      {/* 2. Programs List (Staggered Entrance Cards) */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Core Framework"
            title="Six Pillars of Action"
            subtitle="Explore each structured initiative designed to create permanent behavioural and systemic resistance against narcotics."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {programsData.map((prog) => {
              const IconComp = iconMap[prog.iconName] || ShieldAlert;
              return (
                <StaggerItem key={prog.id} className="h-full">
                  <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-subtle hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full">
                    
                    {/* Visual Media Header */}
                    <div>
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <img
                          src={prog.image}
                          alt={prog.title}
                          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/80 via-brand-navy-950/20 to-transparent" />

                        <div className="absolute top-4 left-4">
                          <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-brand-navy-900 flex items-center justify-center shadow">
                            <IconComp className="w-5 h-5 text-brand-teal-600" />
                          </div>
                        </div>

                        <div className="absolute bottom-3 left-4 right-4">
                          <span className="text-[10px] font-bold text-teal-300 tracking-wider uppercase">
                            {prog.tagline}
                          </span>
                          <h3 className="text-xl font-bold text-white line-clamp-1">
                            {prog.title}
                          </h3>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                          {prog.shortDescription}
                        </p>

                        <div className="space-y-2 pt-2 border-t border-slate-100">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            Key Deliverables:
                          </div>
                          <ul className="space-y-1 text-xs text-slate-700">
                            {prog.keyObjectives.slice(0, 2).map((obj, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{obj}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Card Bottom CTA */}
                    <div className="p-6 pt-0">
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] text-slate-400">
                          Target: {prog.targetAudience.split(',')[0]}
                        </span>
                        <Link
                          to={`/programs/${prog.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy-900 group-hover:text-brand-teal-600 transition-colors"
                        >
                          <span>Full Program Details</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Scheduled Upcoming Engagements */}
      <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Scheduled Engagements"
            title="Upcoming Workshops & Forums (2026–2027)"
            subtitle="Engage with clinical psychologists, adolescent guidance mentors, and youth ambassadors in open educational webinars."
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {upcomingEvents.map((evt) => (
              <StaggerItem key={evt.id} className="h-full">
                <div className="p-5 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-subtle hover:border-slate-300 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4 h-full">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <Badge variant="teal">{evt.category}</Badge>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {evt.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-brand-navy-950">
                      {evt.title}
                    </h3>

                    <div className="space-y-2 text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-brand-navy-800 shrink-0" />
                        <span>{evt.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-brand-navy-800 shrink-0" />
                        <span>{evt.location}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200">
                    <Button
                      to={`/contact?subject=Event+Registration+${encodeURIComponent(evt.title)}`}
                      variant="primary"
                      size="sm"
                      fullWidth
                    >
                      <span>Enquire & Register</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Institutional Booking Notice */}
          <FadeUp delay={0.2} className="mt-10 bg-brand-navy-50 p-6 sm:p-7 rounded-2xl border border-brand-navy-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-lg font-bold text-brand-navy-950">
                Want to Host an AFOI Workshop at Your School or University?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                We coordinate tailored campus assemblies, student ambassador trainings, and faculty safeguarding seminars.
              </p>
            </div>
            <Button to="/contact?subject=School+College+Workshop" variant="primary" size="md">
              <span>Request Campus Workshop</span>
            </Button>
          </FadeUp>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. DOCUMENTED ARCHIVE & MEDIA COVERAGE (Organised Archive)    */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            badge="News & Archives"
            title="Documented Programs & Event Archives"
            subtitle="Historical records of youth camps, community rallies, police commissioner consultations, and regional news coverage."
          />

          {/* The 6 Compact, Consistently Sized Event Boxes */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {documentedEvents.map((evt) => (
              <StaggerItem key={evt.id} className="h-full">
                <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
                  
                  {/* Top Image Container: Improved Visibility & Consistent Height */}
                  <div className="relative h-52 sm:h-56 bg-slate-100 overflow-hidden">
                    <img
                      src={evt.image}
                      alt={evt.alt}
                      className="w-full h-full object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-navy-950/85 text-teal-300 border border-white/10 backdrop-blur-sm shadow-xs">
                        {evt.dateBadge}
                      </span>
                    </div>
                  </div>

                  {/* Content Area: Consistent Spacing and Alignment */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="text-[11px] font-semibold text-slate-400 line-clamp-1">
                        {evt.source}
                      </div>
                      <h3 className="text-base font-bold text-brand-navy-950 leading-snug line-clamp-2 min-h-[2.75rem]">
                        {evt.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {evt.excerpt}
                      </p>
                    </div>

                    {/* Card Footer with Dedicated Read More Button */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedEvent(evt)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-brand-navy-900 bg-slate-100 hover:bg-brand-navy-900 hover:text-white transition-all cursor-pointer group/btn"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </button>

                      {evt.articleUrl && (
                        <a
                          href={evt.articleUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Open original article"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-teal-700 hover:text-brand-teal-800 transition-colors"
                        >
                          <span>Article</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* ============================================================== */}
          {/* Additional Image-Only Archive Entries (Items 7 - 11)           */}
          {/* ============================================================== */}
          <div className="mt-14 pt-10 border-t border-slate-200">
            <div className="mb-6">
              <Badge variant="teal">Photographic Records</Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-brand-navy-950 mt-1">
                Additional Activity Archives
              </h3>
            </div>

            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {archiveDocuments.map((item) => (
                <StaggerItem key={item.id}>
                  <div
                    onClick={() => setSelectedDoc(item)}
                    className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 group cursor-pointer relative"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-brand-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-white/90 text-brand-navy-900 flex items-center justify-center shadow-md">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. FULL DETAILS MODAL FOR DOCUMENTED EVENTS                     */}
      {/* ============================================================== */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 bg-brand-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 my-auto p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              aria-label="Close details"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-10">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="teal">{selectedEvent.dateBadge}</Badge>
                <span className="text-xs font-semibold text-slate-400">
                  {selectedEvent.source}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-brand-navy-950 leading-snug">
                {selectedEvent.title}
              </h3>
            </div>

            {/* Uncropped Full Photo Container */}
            <div className="rounded-2xl overflow-hidden bg-slate-100 max-h-80 sm:max-h-96 flex items-center justify-center border border-slate-200/80">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.alt}
                className="w-full h-full max-h-80 sm:max-h-96 object-contain"
              />
            </div>

            {/* Full Uncut Description Paragraphs */}
            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedEvent.fullParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Signoff Details */}
            {selectedEvent.signoff && (
              <div className="pt-3 border-t border-slate-100">
                <div className="text-sm font-bold text-brand-navy-950">
                  – {selectedEvent.signoff.name}
                </div>
                {selectedEvent.signoff.org && (
                  <div className="text-xs text-brand-teal-700 font-medium">
                    {selectedEvent.signoff.role ? `${selectedEvent.signoff.role} • ` : ''}{selectedEvent.signoff.org}
                  </div>
                )}
              </div>
            )}

            {/* Action Links & Close */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {selectedEvent.articleUrl && (
                  <a
                    href={selectedEvent.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-brand-navy-900 hover:bg-brand-navy-800 transition-colors shadow-sm"
                  >
                    <span>{selectedEvent.articleLabel || 'Read Full Article'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {selectedEvent.whatsappUrl && (
                  <a
                    href={selectedEvent.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{selectedEvent.whatsappLabel || 'Join WhatsApp Group'}</span>
                  </a>
                )}
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors ml-auto cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 6. LIGHTBOX FOR ARCHIVE DOCUMENTS (Items 7 - 11)              */}
      {/* ============================================================== */}
      {selectedDoc && (
        <div
          className="fixed inset-0 z-50 bg-brand-navy-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
          onClick={() => setSelectedDoc(null)}
        >
          <div
            className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 my-auto p-5 sm:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pr-8">
              <h4 className="text-base sm:text-lg font-bold text-brand-navy-950">
                {selectedDoc.title}
              </h4>
              <button
                onClick={() => setSelectedDoc(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden bg-slate-100 max-h-[70vh] flex items-center justify-center">
              <img
                src={selectedDoc.src}
                alt={selectedDoc.alt}
                className="w-full h-full max-h-[70vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};

export default Programs;
