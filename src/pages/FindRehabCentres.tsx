import React, { useState, useMemo } from 'react';
import {
  MapPin,
  PhoneCall,
  ShieldCheck,
  RotateCcw,
  Building,
  CheckCircle,
  ExternalLink,
  HeartHandshake,
  Filter
} from 'lucide-react';
import { verifiedRehabCentres } from '../data/rehabCentres';
import { organizationData } from '../data/organization';
import { RehabCentre } from '../types';
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

export const FindRehabCentres: React.FC = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCentreForAssistance, setSelectedCentreForAssistance] = useState<RehabCentre | null>(null);

  // Extract unique filter options
  const states = useMemo(() => {
    return Array.from(new Set(verifiedRehabCentres.map(c => c.state))).sort();
  }, []);

  const districts = useMemo(() => {
    const list = selectedState
      ? verifiedRehabCentres.filter(c => c.state === selectedState).map(c => c.district)
      : verifiedRehabCentres.map(c => c.district);
    return Array.from(new Set(list)).sort();
  }, [selectedState]);

  const cities = useMemo(() => {
    let list = verifiedRehabCentres;
    if (selectedState) list = list.filter(c => c.state === selectedState);
    if (selectedDistrict) list = list.filter(c => c.district === selectedDistrict);
    return Array.from(new Set(list.map(c => c.city))).sort();
  }, [selectedState, selectedDistrict]);

  // Filtered results
  const filteredCentres = useMemo(() => {
    return verifiedRehabCentres.filter(c => {
      const matchesState = !selectedState || c.state === selectedState;
      const matchesDistrict = !selectedDistrict || c.district === selectedDistrict;
      const matchesCity = !selectedCity || c.city === selectedCity;

      return matchesState && matchesDistrict && matchesCity;
    });
  }, [selectedState, selectedDistrict, selectedCity]);

  const handleReset = () => {
    setSelectedState('');
    setSelectedDistrict('');
    setSelectedCity('');
  };

  return (
    <div className="space-y-0">
      <SEO
        title="Drug Rehabilitation Centres in India | AFOI"
        description="Find rehabilitation centre information across India. Search by city, district or state and explore support options for individuals and families."
        canonicalPath="/find-rehab-centres"
        keywords="Drug Rehabilitation Centres in India, De-addiction centres in India, Rehab centres Bengaluru, Rehab centres Karnataka, Addiction treatment centres India"
        breadcrumbs={[{ name: 'Find Rehab Centres', path: '/find-rehab-centres' }]}
      />
      
      {/* 1. DISTINCTIVE HERO BANNER (Desktop: Full background; Mobile: Photo first) */}
      <PageHero
        badge="Verified Public Care Directory"
        badgeVariant="teal"
        badgeIcon={ShieldCheck}
        title="Find Accredited Rehabilitation & De-Addiction Centres"
        subtitle="Search recognized government medical colleges, autonomous psychiatric institutes, and state mission facilities across India."
        breadcrumbs={[{ label: 'Find Rehab Centres' }]}
        imageSrc="/images/rehabilitation-recovery.jpg"
        imageAlt="Verified government rehabilitation and psychiatric care facilities"
        imageBadgeText="100% Non-Commercial Healthcare Directory"
        variant="background"
        stats={[
          { label: 'Public Facilities', value: `${verifiedRehabCentres.length}+` },
          { label: 'Accreditation', value: '100% Gov/Autonomous' },
          { label: 'Assistance', value: '24/7 Helpline' },
          { label: 'Commercial Bias', value: 'Zero' }
        ]}
      />

      {/* 2. Main Search & Directory */}
      <section className="py-14 bg-slate-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Card */}
          <FadeUp className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-subtle mb-10 space-y-6">
            
            {/* Quick State Pills */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                Quick Region Filter
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedState('');
                    setSelectedDistrict('');
                    setSelectedCity('');
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedState === ''
                      ? 'bg-brand-navy-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  All Regions ({verifiedRehabCentres.length})
                </button>
                {states.map((st) => {
                  const count = verifiedRehabCentres.filter(c => c.state === st).length;
                  return (
                    <button
                      key={st}
                      type="button"
                      onClick={() => {
                        setSelectedState(st);
                        setSelectedDistrict('');
                        setSelectedCity('');
                      }}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedState === st
                          ? 'bg-brand-navy-900 text-white shadow-sm'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {st} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filter Dropdowns Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center pt-2 border-t border-slate-100">
              
              {/* State Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                  State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    setSelectedDistrict('');
                    setSelectedCity('');
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-700 focus:bg-white focus:border-brand-teal-500 focus:ring-1 focus:ring-brand-teal-500 outline-none"
                >
                  <option value="">All States</option>
                  {states.map((st) => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>

              {/* District Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                  District
                </label>
                <select
                  value={selectedDistrict}
                  onChange={(e) => {
                    setSelectedDistrict(e.target.value);
                    setSelectedCity('');
                  }}
                  disabled={districts.length === 0}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-700 focus:bg-white focus:border-brand-teal-500 focus:ring-1 focus:ring-brand-teal-500 outline-none disabled:opacity-50"
                >
                  <option value="">All Districts</option>
                  {districts.map((dst) => (
                    <option key={dst} value={dst}>{dst}</option>
                  ))}
                </select>
              </div>

              {/* City Filter */}
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">
                  City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  disabled={cities.length === 0}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-700 focus:bg-white focus:border-brand-teal-500 focus:ring-1 focus:ring-brand-teal-500 outline-none disabled:opacity-50"
                >
                  <option value="">All Cities</option>
                  {cities.map((ct) => (
                    <option key={ct} value={ct}>{ct}</option>
                  ))}
                </select>
              </div>

              {/* Reset Button */}
              <div className="sm:self-end pt-1 sm:pt-0">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>

            </div>

            {/* Active filters indicators */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs text-slate-500">
              <div>
                Showing <strong className="text-brand-navy-950 font-bold">{filteredCentres.length}</strong> verified public healthcare centres
                {(selectedState || selectedDistrict || selectedCity) && ' matching your selected criteria'}
              </div>

              <div className="flex items-center gap-2 text-teal-700 font-semibold">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>Verified Non-Commercial Directory</span>
              </div>
            </div>

          </FadeUp>

          {/* Directory Listings Grid (Staggered Entrance) */}
          {filteredCentres.length === 0 ? (
            <FadeUp className="bg-white p-12 rounded-3xl border border-slate-200 text-center max-w-xl mx-auto space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Filter className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy-950">
                No matching centres found
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                We could not find any verified centres matching your selected criteria. Try resetting filters or call our helpline for personal assistance.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-brand-navy-900 rounded-xl text-xs font-bold cursor-pointer"
                >
                  Reset Filters
                </button>
                <a
                  href={`tel:${organizationData.contact.helpline}`}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl text-xs font-bold inline-flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call 24/7 Helpline</span>
                </a>
              </div>
            </FadeUp>
          ) : (
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredCentres.map((centre) => (
                <StaggerItem key={centre.id} className="h-full">
                  <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-subtle hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between space-y-5 h-full">
                    <div className="space-y-3">
                      
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200 inline-block mb-1">
                            {centre.type}
                          </span>
                          <h3 className="text-base sm:text-lg font-extrabold text-brand-navy-950 leading-snug">
                            {centre.name}
                          </h3>
                        </div>
                        {centre.isVerified && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-700 bg-teal-50/70 px-2 py-0.5 rounded-md border border-teal-100 shrink-0">
                            <CheckCircle className="w-3 h-3 text-teal-600" />
                            <span>Gov Verified</span>
                          </span>
                        )}
                      </div>

                      {/* Location & Address */}
                      <div className="flex items-start gap-2 text-xs text-slate-600">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{centre.address}, {centre.city}, {centre.state} - {centre.pinCode}</span>
                      </div>

                      {/* Phone Contact */}
                      <div className="flex items-center gap-2 text-xs font-semibold text-brand-navy-900">
                        <PhoneCall className="w-4 h-4 text-teal-600 shrink-0" />
                        <a href={`tel:${centre.phone.replace(/[^0-9+]/g, '')}`} className="hover:underline">
                          {centre.phone}
                        </a>
                      </div>

                      {/* Services list */}
                      <div className="pt-2">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                          Services Offered
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {centre.services.map((svc, i) => (
                            <span
                              key={i}
                              className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-lg border border-slate-200/60"
                            >
                              {svc}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Action Footer */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedCentreForAssistance(centre)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-teal-700 hover:text-brand-teal-800 transition-colors cursor-pointer"
                      >
                        <HeartHandshake className="w-3.5 h-3.5" />
                        <span>Contact & Assistance Info</span>
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={`tel:${centre.phone.replace(/[^0-9+]/g, '')}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-navy-900 hover:bg-brand-navy-950 text-white rounded-xl text-xs font-bold transition-transform hover:-translate-y-0.5 shadow-sm"
                        >
                          <PhoneCall className="w-3 h-3" />
                          <span>Call Centre</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

        </div>
      </section>

      {/* Guided Assistance Modal (Informational Only - No Form) */}
      {selectedCentreForAssistance && (
        <div className="fixed inset-0 z-50 bg-brand-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold text-teal-800 uppercase tracking-wider bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200 inline-block mb-1">
                  Rehabilitation Guidance Desk
                </span>
                <h3 className="text-lg font-bold text-brand-navy-950">
                  {selectedCentreForAssistance.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCentreForAssistance(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-600">
              <p className="leading-relaxed">
                Antidote Foundation of India provides direct guidance and psycho-social counselling navigation to help families connect with verified public care institutions.
              </p>

              <div className="p-4 rounded-2xl bg-brand-navy-50 border border-brand-navy-100 space-y-2">
                <div className="text-xs font-bold text-brand-navy-950">Direct Helpline Numbers:</div>
                <div className="space-y-1 text-sm">
                  <div>
                    <a href="tel:+917777927742" className="text-brand-navy-950 font-bold hover:underline flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-teal-600" />
                      <span>+91 77779 27742 (24/7 Helpline)</span>
                    </a>
                  </div>
                  <div>
                    <a href="tel:+919148820193" className="text-brand-navy-950 font-bold hover:underline flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-teal-600" />
                      <span>+91 91488 20193 (Secretariat)</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500 border border-slate-200">
                Direct Facility Contact: <strong className="text-slate-800">{selectedCentreForAssistance.phone}</strong> • {selectedCentreForAssistance.address}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-100">
              <a
                href={`tel:${organizationData.contact.helpline}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow transition-transform hover:-translate-y-0.5"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Helpline Now</span>
              </a>

              <button
                type="button"
                onClick={() => setSelectedCentreForAssistance(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};