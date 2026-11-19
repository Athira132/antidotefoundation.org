# Antidote Foundation of India (AFOI) — Official Web Platform

> **Protect Young Lives. Build a Drug-Free India.**  
> Registered Non-Profit Society • Registration No: **DRB1/SOR/257/2025-2026** (Karnataka Societies Registration Act)  
> Headquartered at: No. 38, Lakshman Layout, J. P. Nagar, Bengaluru, Karnataka 560 078, India.  
> 24/7 Helpline: **+91 77779 27742**

---

## 🏛️ About the Organisation

**Antidote Foundation of India** is a premier non-profit movement dedicated to youth empowerment (ages 13–30), substance abuse prevention, free confidential psychological first aid, and community-driven recovery across India. 

- **Tagline:** Building a Drug-Free India
- **Mission:** Empowering Youth. Preventing Addiction. Transforming India.
- **Audience:** Youth aged 13–30, parents, educators, schools, colleges, volunteers, and communities.
- **Core Message:** Protect Young Lives. Build a Drug-Free India.

---

## 🌐 Complete Multi-Page Architecture (13 Main Pages + Sub-routes)

1. **Home (`/`)**: High-impact editorial hero with authentic Indian youth imagery, verified pillars, 24/7 helpline strip, core mission journey, 6 program pillars, verified rehab finder feature, active campaigns, upcoming events, and dual volunteer/donate CTAs.
2. **About Us (`/about`)**: Organization purpose, registered charter, timeline, vision, mission, and six core values (Integrity, Compassion, Hope, Community, Protection, Trust).
3. **Programs & Events (`/programs`)**: The 6 core intervention pillars:
   - *Drug Abuse Prevention* (`/programs/drug-abuse-prevention`)
   - *School & College Awareness* (`/programs/school-college-awareness`)
   - *Family Counselling* (`/programs/family-counselling`)
   - *Mental Health Support* (`/programs/mental-health-support`)
   - *Community & Corporate Outreach* (`/programs/community-corporate-outreach`)
   - *Research & Advocacy* (`/programs/research-advocacy`)
   - Plus scheduled 2026–2027 workshops and webinars.
4. **Campaigns (`/campaigns`)**: Grassroots campaigns with filterable status, regional titles including *Anti-Drug & Substance Abuse Awareness (ലഹരിവിരുദ്ധ ക്യാമ്പയിൻ)*, *Project SHIELD for Schools*, *Operation Toofan Public Dialogue*, and *Campus Ambassador Fellowship*, with dedicated detail routes (`/campaigns/:slug`).
5. **Find Rehab Centres (`/find-rehab-centres`)**: Curated non-commercial public directory of accredited facilities (NIMHANS, BMCRI Victoria Hospital, Government General Hospital Vimukthi Mission centres), search by name, city, district, state, PIN code, multi-parameter filters, reset functionality, and guided patient assistance modal.
6. **Volunteer (`/volunteer`)**: Recruitment landing page detailing 5 pathways (Campus Ambassador, Counsellor, Event Coordinator, Creative Volunteer, Community Leader), structured validation form, privacy consent, and success route (`/volunteer/thank-you`).
7. **Donate (`/donate`)**: Transparent contribution portal featuring exact preset tiers (₹500, ₹1,000, ₹2,500, ₹5,000, ₹10,000, ₹25,000), custom amounts, donor information form, intended payment channel selection (UPI, Bank Transfer, Card, Net Banking), clear regulatory treasury notices, and confirmation route (`/donate/thank-you`).
8. **Resources (`/resources`)**: Dedicated knowledge hub with tabbed sections and individual detail routes (`/resources/:slug`):
   - **Students:** *Know the Risks. Know Your Choices.* (Peer refusal, stress management, warning signs).
   - **Parents:** *Notice. Listen. Support.* (Early behavioural shifts, non-adversarial home conversations).
   - **Teachers:** *Observe. Understand. Act.* (Safeguarding protocols, campus observation).
   - **Downloads:** Free high-resolution printable posters, family dialogue handbooks, and institutional safeguarding templates.
   - **Universal Rule:** *NOTICE → TALK → GET HELP*.
9. **Gallery (`/gallery`)**: Category-filtered photography showcase with full-screen keyboard-navigable Lightbox and explicit "Illustrative Representation" transparency labeling.
10. **News / Dispatches (`/news`)**: Editorial press updates, including the July 2, 2026 dialogue update regarding Operation Toofan, society incorporation dispatches, and individual article views (`/news/:slug`).
11. **Contact Us (`/contact`)**: 24/7 Helpline (+91 77779 27742), registered Bengaluru address, office hours, registration number, category-based inquiry form, and interactive OpenStreetMap.
12. **Privacy Policy (`/privacy-policy`)**: Comprehensive data governance and confidentiality standards marked as draft for legal review.
13. **Terms of Use (`/terms-of-use`)**: Educational fair use, medical triage disclaimer, and jurisdiction terms.
14. **Utility Routes**: `/thank-you` and 404 handler (`*`).

---

## 🛠️ Technology Stack

- **Framework:** React 18 + TypeScript + Vite 6
- **Styling:** Tailwind CSS with custom branding tokens (Deep Navy `#0C2340`, Teal `#14B8A6`, Amber `#F59E0B`)
- **Routing:** React Router v6 (SPA with automatic scroll-to-top)
- **Animations:** Framer Motion (page reveals, modal transitions, hamburger drawers, prefers-reduced-motion friendly)
- **Icons:** Lucide React
- **SEO & Metatags:** Open Graph, Twitter Cards, semantic schema, `robots.txt`, and XML `sitemap.xml`

---

## 💻 Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd antidotefoundation.org
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   Generates optimized assets inside the `dist/` directory.

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🚀 Deployment to Vercel

The project includes pre-configured SPA routing and security headers in `vercel.json`:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Steps to Deploy:
1. Connect this repository to your **Vercel** account.
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Deploy! All routes will resolve properly without 404 errors on refresh.

---

## 🛡️ Truth & Non-Profit Trust Standards

In strict accordance with legal non-profit governance:
- **No Fabricated Statistics:** Unverified figures (e.g. 50,000+ reached, 350+ rehab centres) are never published as established facts.
- **No Simulated Payments:** We never simulate successful credit card or UPI transactions without official banking integration.
- **No Fake Compliance Badges:** 80G / FCRA status is transparently stated as undergoing statutory processing following society incorporation.
- **Public Health Disclaimer:** AFOI provides educational and supportive guidance; our resources and helpline are not substitutes for clinical emergencies or hospital admissions. In emergencies, citizens are directed to dial **112**.

---

## 📞 Official Contacts

- **24/7 Confidential Helpline:** [+91 77779 27742](tel:+917777927742)
- **Secretariat:** No. 38, Lakshman Layout, J. P. Nagar, Bengaluru, Karnataka 560 078, India
- **Office Hours:** Monday–Saturday, 9:00 AM – 6:00 PM IST
- **Society Registration:** DRB1/SOR/257/2025-2026
- **Social Media:**
  - [Instagram](https://instagram.com/antidote_foundation_of_india)
  - [YouTube](https://youtube.com/@antidotefoundation)
  - [Facebook](https://facebook.com/antidotefoundationofindia)
