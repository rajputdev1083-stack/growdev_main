import Link from 'next/link';

export function InternalLinks({ links }) {
  return (
    <section className="mt-12 bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-3">Explore More Local Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Parent / City Level */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">View All</h3>
          <ul className="space-y-3">
            {links.parentLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.url} className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Same Location */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">In Same Location</h3>
          <ul className="space-y-3">
            {links.sameLocationServices.map((link, idx) => (
              <li key={idx}>
                <Link href={link.url} className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Cross Location Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Nearby Locations</h3>
          <ul className="space-y-3">
            {links.crossLocationLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.url} className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sibling Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Other Locations</h3>
          <ul className="space-y-3">
            {links.siblingLinks.slice(0, 5).map((link, idx) => (
              <li key={idx}>
                <Link href={link.url} className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
