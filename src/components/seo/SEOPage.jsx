import { notFound } from 'next/navigation';
import { getInternalLinks, generatePageContent } from '@/lib/seoEngine';
import { unslugify } from '@/lib/db';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { InternalLinks } from '@/components/seo/InternalLinks';

export default function SEOPage({ state, city, location, service }) {
  const content = generatePageContent(city, location, service);
  const links = getInternalLinks(state, city, location, service);

  if (!content) return notFound();

  return (
    <article className="max-w-5xl mx-auto px-4 py-8 md:py-12 text-gray-800">
      
      {/* 1. Breadcrumbs */}
      <Breadcrumbs state={state} city={city} location={location} service={service} />

      {/* 2. Main H1 and unique intro */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 drop-shadow-sm">
          {content.h1}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {content.introText}
        </p>
      </header>

      {/* 3. Services Section */}
      <section className="mb-12 bg-white rounded-lg shadow-sm p-8 border border-gray-100">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Expert {unslugify(service)} Services</h2>
        <p className="text-gray-700 leading-loose text-lg">
          {content.paragraph2}
        </p>
      </section>

      {/* 4. Why Choose Us (Localized) */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Why Businesses in {unslugify(location)} Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.whyUs.map((reason, idx) => (
            <div key={idx} className="flex items-start space-x-3 p-4 bg-blue-50/50 rounded-lg">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span className="text-gray-700 font-medium">{reason}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Local Trust Content */}
      <section className="mb-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 drop-shadow-sm">Local Coverage near {unslugify(location)}</h2>
        <p className="text-gray-700 leading-loose text-lg">
          {content.paragraph3}
        </p>
      </section>

      {/* 6. 5 Unique FAQs */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {content.faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 pb-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Strong CTA */}
      <section className="mb-16 text-center bg-blue-600 text-white rounded-2xl p-10 shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to elevate your business in {unslugify(location)}?</h2>
        <p className="text-xl mb-6 opacity-90">Get a free consultation for our {unslugify(service)}.</p>
        <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg shadow-md hover:bg-gray-100 transition-all transform hover:scale-105 active:scale-95">
          Contact Us Today
        </button>
      </section>

      {/* 8. Internal Linking Component */}
      <InternalLinks links={links} />

    </article>
  );
}
