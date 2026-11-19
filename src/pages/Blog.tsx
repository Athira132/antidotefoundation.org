import React from 'react';
import { Newspaper } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';

export const Blog: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Dedicated Hero with heading 'Blog' and left-to-centre dark gradient */}
      <PageHero
        badge="Antidote Foundation Journal"
        badgeVariant="teal"
        badgeIcon={Newspaper}
        title="Blog"
        subtitle="Insights, updates, educational commentary, and community stories on youth empowerment and addiction prevention."
        breadcrumbs={[{ label: 'Blog' }]}
        imageSrc="/images/campaign_awareness.jpg"
        imageAlt="Antidote Foundation Blog"
        variant="background"
      />

      {/* 
        Empty body: ready for future content without dummy posts, sample articles or placeholders
      */}
      <section className="py-20 sm:py-28 bg-slate-50 min-h-[360px] flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Kept clean and empty for future publication */}
        </div>
      </section>
    </div>
  );
};

export default Blog;

