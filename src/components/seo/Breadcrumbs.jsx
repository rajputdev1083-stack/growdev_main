import Link from 'next/link';
import { unslugify } from '@/lib/db';

export function Breadcrumbs({ state, city, location, service }) {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: unslugify(state), path: `/${state}` },
    { name: unslugify(city), path: `/${state}/${city}` },
    { name: unslugify(location), path: `/${state}/${city}/${location}` },
    { name: unslugify(service), path: `/${state}/${city}/${location}/${service}` }
  ];

  return (
    <nav aria-label="Breadcrumb" className="my-4 text-sm text-gray-500">
      <ol className="flex space-x-2 flex-wrap">
        {crumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
            {index === crumbs.length - 1 ? (
              <span className="text-gray-900 font-semibold" aria-current="page">
                {crumb.name}
              </span>
            ) : (
              <Link href={crumb.path} className="hover:text-blue-600 transition-colors">
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
