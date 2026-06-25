'use client';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

const CATS = [
  {
    key: 'sofas',
    href: '/catalogue?cat=canapes',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop',
  },
  {
    key: 'tables',
    href: '/catalogue?cat=tables',
    img: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800&auto=format&fit=crop',
  },
  {
    key: 'chandeliers',
    href: '/catalogue?cat=lustres',
    img: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=800&auto=format&fit=crop',
  },
  {
    key: 'decoration',
    href: '/catalogue?cat=decoration',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop',
  },
];

export default function Categories() {
  const t = useTranslations('categories');
  const locale = useLocale();

  return (
    <section className="py-24 bg-[#EDE8D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#008E47] text-[11px] tracking-[0.3em] uppercase font-medium mb-3">{t('subtitle')}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark">{t('title')}</h2>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mt-6" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {CATS.map((cat) => (
            <Link
              key={cat.key}
              href={`/${locale}${cat.href}`}
              className="group relative overflow-hidden aspect-[3/4] bg-dark"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${cat.img}')` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/20 to-transparent" />
              {/* Gold accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-white text-xl font-bold">{t(cat.key as any)}</h3>
                <p className="text-white/60 text-[12px] mt-1">{t(`${cat.key}_desc` as any)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
