import React from 'react';
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
  Newspaper,
  Image as ImageIcon
} from 'lucide-react';
import { programsData } from '../data/programs';
import { upcomingEvents } from '../data/events';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';
import { HelplineBanner } from '../components/common/HelplineBanner';
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

export const Programs: React.FC = () => {
  return (
    <div className="space-y-0">

      {/* 1. DISTINCTIVE HERO BANNER (Desktop: Full-width background; Mobile: Photo first) */}
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
                    <div>
                      {/* Image Header with hover zoom */}
                      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
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

          {/* The 6 Supplied Archive Items */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* EVENT 1 */}
            <StaggerItem className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full hover:-translate-y-1">
                <div>
                  <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
                    <img
                      src="/images/event_1_article.jpg"
                      alt="യുവജന ശക്തീകരണ ക്യാമ്പ് നാളെ മുതൽ"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-navy-950/85 text-teal-300 border border-white/10 backdrop-blur-sm">
                        APRIL 17, 2026 - FRIDAY
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="text-[11px] font-semibold text-slate-400">
                      www.bangalorejalakam.com — Malayalam News Portal in Bangalore
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy-950 leading-snug">
                      യുവജന ശക്തീകരണ ക്യാമ്പ് നാളെ മുതൽ
                    </h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 space-y-2 border-t border-slate-100 mt-2">
                  <a
                    href="https://bangalorejalakam.com/youth-empowerment-camp-starts-tomorrow/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal-700 hover:text-brand-teal-800 transition-colors pt-2"
                  >
                    <span>Read Article</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <div>
                    <a
                      href="https://chat.whatsapp.com/IGp27JPR2UbBIPfIp9B8u7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>ബാംഗ്ലൂർ ജാലകം WHATSAPP GROUPൽ JOIN ചെയ്യാം</span>
                    </a>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* EVENT 2 */}
            <StaggerItem className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full hover:-translate-y-1">
                <div>
                  <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
                    <img
                      src="/images/youth-empowerment.jpg"
                      alt="Youth in Sumanahalli campus"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-navy-950/85 text-teal-300 border border-white/10 backdrop-blur-sm">
                        AFOI & Hope Society
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-brand-navy-950 leading-snug">
                      Sumanahalli Campus Youth Anti-Addiction Movement
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      20 Youth cutting linguistic, religious and professional lines spent two days in Sumanahalli campus laying the foundation for an anti addiction movement to reach out to their challenged peers - under the banner of Antidote Foundation of India and Hope Society.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                      They made a resolve to invest their time and energy to engage youth in educational settings to create a better environment to live and study.
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 border-t border-slate-100">
                  <div className="text-[11px] text-teal-700 font-semibold pt-2">
                    Two-Day Residential Collaborative Initiative
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* EVENT 3 */}
            <StaggerItem className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full hover:-translate-y-1">
                <div>
                  <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
                    <img
                      src="/images/event_3_article.jpg"
                      alt="മൂല്യാധിഷ്ഠിത ജീവിത ക്രമത്തിനായി യുവജന സംഗമം"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-navy-950/85 text-teal-300 border border-white/10 backdrop-blur-sm">
                        Madhyamam News
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-brand-navy-950 leading-snug">
                      ⭕മൂല്യാധിഷ്ഠിത ജീവിത ക്രമത്തിനായി യുവജന സംഗമം
                    </h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 space-y-2 border-t border-slate-100 mt-2">
                  <a
                    href="https://www.madhyamam.com/n-1514220"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal-700 hover:text-brand-teal-800 transition-colors pt-2"
                  >
                    <span>Read Article on Madhyamam</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <div>
                    <a
                      href="https://chat.whatsapp.com/HKxb0tQeAgKEgx1KngqwYP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>🟨🟥കന്നഡ നാട്ടിലെ കൂടുതൽ വാർത്തകളറിയാൻ ജോയിൻ ചെയ്യാം</span>
                    </a>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* EVENT 4 */}
            <StaggerItem className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full hover:-translate-y-1">
                <div>
                  <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
                    <img
                      src="/images/community_volunteering.jpg"
                      alt="Second Youth Empowerment Camp at Hesaraghatta Lake"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-navy-950/85 text-teal-300 border border-white/10 backdrop-blur-sm">
                        14th June 2026
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-brand-navy-950 leading-snug">
                      Second Youth Empowerment Camp · Hesaraghatta Lake
                    </h3>
                    <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
                      <p>
                        Hello everyone,
                      </p>
                      <p>
                        We are happy to share that the second Youth Empowerment Camp under Antidote Foundation was successfully conducted on 14th June 2026 at Hesaraghatta Lake. The camp brought together young minds for meaningful discussions, self-reflection, learning experiences, and activities focused on personal growth, relationships, social media awareness, and understanding different perspectives.
                      </p>
                      <p>
                        A follow-up session for the participants of this camp will be conducted soon to continue the conversations and strengthen the learning journey. Further details will be shared shortly.
                      </p>
                      <p>
                        Thank you for your continued support and encouragement towards building a more aware, connected, and empowered youth community.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-2">
                  <div className="text-xs font-semibold text-brand-navy-950 pt-2">
                    – Archana Sheejith
                  </div>
                  <div className="text-[11px] text-teal-700">Antidote Foundation</div>
                </div>
              </div>
            </StaggerItem>

            {/* EVENT 5 */}
            <StaggerItem className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full hover:-translate-y-1">
                <div>
                  <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
                    <img
                      src="/images/event_5_article.jpg"
                      alt="ലഹരി വിരുദ്ധ കൂട്ടായ്മ; മലയാളി സംഘടനകളുടെ പൊതുയോഗം 5 ന്"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-navy-950/85 text-teal-300 border border-white/10 backdrop-blur-sm">
                        JULY 02, 2026
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="text-[11px] font-semibold text-slate-400">
                      NewsBengaluru.com — No 1 Malayalam News Portal in Karnataka
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-brand-navy-950 leading-snug">
                      ലഹരി വിരുദ്ധ കൂട്ടായ്മ; മലയാളി സംഘടനകളുടെ പൊതുയോഗം 5 ന്
                    </h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 space-y-2 border-t border-slate-100 mt-2">
                  <a
                    href="https://newsbengaluru.com/anti-drug-coalition-general-meeting-of-malayali-organizations-on-5th/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal-700 hover:text-brand-teal-800 transition-colors pt-2"
                  >
                    <span>Read on NewsBengaluru.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <div>
                    <a
                      href="https://chat.whatsapp.com/KzWxvY5hRWFFyrHMR7ngmf?mode=gi_t"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>👁️🗨️ ഞങ്ങളുടെ വാട്സാപ്പ് ഗ്രൂപ്പിൽ ചേരൂ</span>
                    </a>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* EVENT 6 */}
            <StaggerItem className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full hover:-translate-y-1">
                <div>
                  <div className="relative h-48 sm:h-52 bg-slate-100 overflow-hidden">
                    <img
                      src="/images/event_6_cop_meet.jpg"
                      alt="Volunteers meeting with Bengaluru City Commissioner of Police Sri. B Dayananda IPS"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-navy-950/85 text-teal-300 border border-white/10 backdrop-blur-sm">
                        High-Level Delegation
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-brand-navy-950 leading-snug">
                      Meeting with Bengaluru City Commissioner of Police, Sri. B Dayananda IPS
                    </h3>
                    <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-2">
                      <p>Dear All,</p>
                      <p>
                        We are pleased to share that our group of four volunteers met with Bengaluru City Commissioner of Police, Sri. B Dayananda IPS, today evening. The Commissioner assured all support to this burning issue and facilitated our connection with Mr. Vinay, a renowned NGO leader in substance abuse eradication, de addiction and counselling who has been collaborating with major colleges in Bengaluru.
                      </p>
                      <p>
                        We had a brief telephonic conversation with Mr. Vinay, and he graciously agreed to attend our next meeting on Saturday to give few guidance as per the advice of COP on 9th February. Following his guidance, we will determine our specific area of focus and update the Commissioner on our plans in near future.
                      </p>
                      <p>
                        We look forward to your cooperation in making a positive impact in our community.
                      </p>
                      <p>
                        Once solicited your presence and active participation to take key important decisions and the selection of Cordinators across bangalore and to form an NGO to mitigate this burning issue.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-2">
                  <div className="text-xs font-semibold text-brand-navy-950 pt-2">
                    Regards,
                  </div>
                  <div className="text-xs font-bold text-teal-800">PA ISSAC</div>
                  <div className="text-[11px] text-slate-500">Antidote Foundation of India</div>
                </div>
              </div>
            </StaggerItem>

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
              {[
                { id: 'archive_7', src: '/images/archive_7.jpg', alt: 'AFOI Archive Document 7' },
                { id: 'archive_8', src: '/images/archive_8.jpg', alt: 'AFOI Archive Document 8' },
                { id: 'archive_9', src: '/images/archive_9.jpg', alt: 'AFOI Archive Document 9' },
                { id: 'archive_10', src: '/images/archive_10.jpg', alt: 'AFOI Archive Document 10' },
                { id: 'archive_11', src: '/images/archive_11.jpg', alt: 'AFOI Archive Document 11' }
              ].map((item) => (
                <StaggerItem key={item.id}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 group">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </section>

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};

export default Programs;
