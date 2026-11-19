import React, { useState, useMemo } from 'react';
import {
  Search,
  MapPin,
  PhoneCall,
  ShieldCheck,
  RotateCcw,
  Building,
  CheckCircle,
  ExternalLink,
  AlertCircle,
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
import {
  FadeUp,
  StaggerContainer,
  StaggerItem
} from '../components/animations/MotionComponents';

export const FindRehabCentres: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCentreForAssistance, setSelectedCentreForAssistance] = useState<RehabCentre | null>(null);
  const [assistanceSent, setAssistanceSent] = useState(false);
  const [assistancePhone, setAssistancePhone] = useState('');

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
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = !q ||
        c.name.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q) ||
        c.district.toLowerCase().includes(q) ||
        c.state.toLowerCase().includes(q) ||
        c.pinCode.includes(q) ||
        c.services.some(s => s.toLowerCase().includes(q));

      const matchesState = !selectedState || c.state === selectedState;
      const matchesDistrict = !selectedDistrict || c.district === selectedDistrict;
      const matchesCity = !selectedCity || c.city === selectedCity;

      return matchesQuery && matchesState && matchesDistrict && matchesCity;
    });
  }, [searchQuery, selectedState, selectedDistrict, selectedCity]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedState('');
    setSelectedDistrict('');
    setSelectedCity('');
  };

  const handleRequestAssistance = (e: React.FormEvent) => {
    e.preventDefault();
    if (assistancePhone.trim()) {
      setAssistanceSent(true);
    }
  };

  return (
    <div className="space-y-0">
      
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
          
          {/* Search & Filter Card with entrance reveal */}
          <FadeUp className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-subtle mb-10 space-y-6">
            
            {/* Search Input Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by centre name, city, district, state, PIN code or treatment service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-teal-500 focus:ring-2 focus:ring-brand-teal-500/20 text-sm sm:text-base outline-none transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 bg-slate-200 px-2 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Dropdowns Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
              
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
                  onClick={handleReset}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All Filters</span>
                </button>
              </div>

            </div>

            {/* Active filters indicators */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs text-slate-500">
              <div>
                Showing <strong className="text-brand-navy-950 font-bold">{filteredCentres.length}</strong> verified facilities
                {(selectedState || selectedDistrict || selectedCity || searchQuery) && ' matching your criteria'}
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
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy-950">
                No matching centres found
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                We could not find any verified centres matching your search terms. Try clearing filters or call our helpline for personal navigation.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-brand-navy-900 rounded-xl text-xs font-bold"
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
                          <h3 className="text-lg sm:text-xl font-bold text-brand-navy-950 leading-snug">
                            {centre.name}
                          </h3>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Verified</span>
                        </span>
                      </div>

                      {/* Address & Contact Details */}
                      <div className="space-y-2 text-xs sm:text-sm text-slate-600 pt-1">
                        <div className="flex items-start gap-2.5">
                          <MapPin className="w-4 h-4 text-brand-navy-700 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{centre.address}</span>
                        </div>

                        <div className="flex items-center gap-2.5">
                          <PhoneCall className="w-4 h-4 text-brand-navy-700 shrink-0" />
                          <span>Contact / EPABX: <strong className="text-brand-navy-950">{centre.phone}</strong></span>
                        </div>
                      </div>

                      {/* Services Tags */}
                      <div className="pt-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Specialized Clinical Services:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {centre.services.map((svc) => (
                            <span
                              key={svc}
                              className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg"
                            >
                              {svc}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Notes */}
                      {centre.notes && (
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500 leading-relaxed">
                          <strong className="text-slate-700 font-semibold">Institutional Note:</strong> {centre.notes}
                        </div>
                      )}

                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => {
                          setSelectedCentreForAssistance(centre);
                          setAssistanceSent(false);
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-navy-900 hover:bg-brand-navy-800 text-white text-xs font-bold rounded-xl transition-colors"
                      >
                        <HeartHandshake className="w-3.5 h-3.5 text-teal-400" />
                        <span>Request Guided Assistance</span>
                      </button>

                      <a
                        href={`tel:${centre.phone.replace(/[^0-9]/g, '')}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-brand-navy-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Call Centre</span>
                      </a>
                    </div>

                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          {/* Integration & Verification Standards Box */}
          <FadeUp delay={0.2} className="mt-12 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-subtle space-y-3">
            <div className="flex items-center gap-2 text-brand-navy-950 font-bold text-base">
              <ShieldCheck className="w-5 h-5 text-teal-600" />
              <span>Verified Database & Hospital Integration Notice</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              AFOI strictly catalogs verified autonomous institutes, government medical college psychiatry units, and state mission de-addiction facilities. We do not invent addresses or publish unaccredited private facilities.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              <strong>Database Integration Point:</strong> State de-addiction missions and medical directorates seeking API or dataset synchronization can establish direct interoperability with our public assistance registry by contacting the AFOI technical committee.
            </p>
          </FadeUp>

        </div>
      </section>

      {/* Guided Assistance Modal */}
      {selectedCentreForAssistance && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setSelectedCentreForAssistance(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
            >
              ✕
            </button>

            <div className="space-y-1">
              <Badge variant="teal">Confidential Patient Referral</Badge>
              <h3 className="text-xl font-bold text-brand-navy-950">
                Request Assisted Navigation
              </h3>
              <p className="text-xs text-slate-500">
                Centre: <strong className="text-brand-navy-900">{selectedCentreForAssistance.name}</strong>
              </p>
            </div>

            {assistanceSent ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center space-y-2">
                <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-950 text-sm">Assistance Request Logged</h4>
                <p className="text-xs text-emerald-800">
                  Our counsellor will connect with you at <strong>{assistancePhone}</strong> during working hours to help navigate admission protocols.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedCentreForAssistance(null)}
                    className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRequestAssistance} className="space-y-4">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Navigating de-addiction admissions can be daunting. Enter your contact number and our trained guidance counsellor will call you back to explain admission procedures, documents, and what to expect.
                </p>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={assistancePhone}
                    onChange={(e) => setAssistancePhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-teal-500 focus:ring-1 focus:ring-brand-teal-500 text-sm outline-none"
                  />
                </div>

                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span>100% confidential. Your details are never shared with third parties.</span>
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCentreForAssistance(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-brand-navy-900 hover:bg-brand-navy-800 text-white text-xs font-bold rounded-xl shadow"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}

            <div className="pt-3 border-t border-slate-100 text-center">
              <span className="text-xs text-slate-500">Need urgent help right now? </span>
              <a
                href={`tel:${organizationData.contact.helpline}`}
                className="text-xs font-bold text-amber-600 hover:underline"
              >
                Call 24/7 Helpline: {organizationData.contact.helplineDisplay}
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Helpline Banner */}
      <HelplineBanner />

    </div>
  );
};
