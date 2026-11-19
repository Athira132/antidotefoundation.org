import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { ProgramDetail } from './pages/ProgramDetail';
import { Campaigns } from './pages/Campaigns';
import { CampaignDetail } from './pages/CampaignDetail';
import { FindRehabCentres } from './pages/FindRehabCentres';
import { Volunteer } from './pages/Volunteer';
import { VolunteerThankYou } from './pages/VolunteerThankYou';
import { Donate } from './pages/Donate';
import { DonateThankYou } from './pages/DonateThankYou';
import { Resources } from './pages/Resources';
import { ResourceDetail } from './pages/ResourceDetail';
import { Gallery } from './pages/Gallery';
import { News } from './pages/News';
import { NewsArticle } from './pages/NewsArticle';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { ThankYou } from './pages/ThankYou';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="volunteer/thank-you" element={<VolunteerThankYou />} />
          <Route path="resources" element={<Resources />} />
          <Route path="resources/:slug" element={<ResourceDetail />} />
          <Route path="find-rehab-centres" element={<FindRehabCentres />} />
          
          {/* Programs & Events primary route */}
          <Route path="programs-events" element={<Programs />} />
          <Route path="programs-events/:slug" element={<ProgramDetail />} />
          <Route path="programs" element={<Programs />} />
          <Route path="programs/:slug" element={<ProgramDetail />} />

          {/* Blog */}
          <Route path="blog" element={<Blog />} />

          {/* Contact */}
          <Route path="contact" element={<Contact />} />

          {/* Gallery */}
          <Route path="gallery" element={<Gallery />} />

          {/* Secondary routes */}
          <Route path="campaigns" element={<Campaigns />} />
          <Route path="campaigns/:slug" element={<CampaignDetail />} />
          <Route path="news" element={<News />} />
          <Route path="news/:slug" element={<NewsArticle />} />
          <Route path="donate" element={<Donate />} />
          <Route path="donate/thank-you" element={<DonateThankYou />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
