'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isRTL = locale === 'ar';

  const otherLocale = locale === 'ar' ? 'fr' : 'ar';
  const switchLang = () => {
    const newPath = pathname.replace(`/${locale}`, '') || '/';
    router.push(`/${otherLocale}${newPath}`);
  };

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/catalogue?cat=canapes', label: t('sofas') },
    { href: '/catalogue?cat=tables', label: t('tables') },
    { href: '/catalogue?cat=lustres', label: t('chandeliers') },
    { href: '/catalogue?cat=decoration', label: t('decoration') },
    { href: '/realisations', label: t('gallery') },
    { href: '/a-propos', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#EDE8D0]/95 backdrop-blur-sm border-b border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex-shrink-0">
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-700 text-dark tracking-wide">
                {locale === 'ar' ? 'حيتم للأثاث' : 'Haithem Fourniture'}
              </span>
              <span className="text-[10px] text-[#008E47] tracking-[0.2em] uppercase">
                {locale === 'ar' ? 'الأناقة على مقاسك' : 'L\'élégance taillée pour vous'}
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href === '/' ? '' : link.href}`}
                className="text-[13px] text-dark/70 hover:text-[#008E47] transition-colors font-medium tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right utilities */}
          <div className="flex items-center gap-3">
            {/* Lang toggle */}
            <button
              onClick={switchLang}
              className="text-[12px] font-bold text-[#008E47] border border-[#008E47] px-3 py-1 hover:bg-[#008E47] hover:text-white transition-all"
            >
              {t('lang')}
            </button>

            {/* Quote CTA */}
            <Link
              href={`/${locale}/devis`}
              className="hidden sm:block bg-[#008E47] text-white text-[12px] px-4 py-2 hover:bg-[#006B35] transition-all font-medium tracking-wide"
            >
              {t('quote')}
            </Link>

            {/* Cart */}
            <Link href={`/${locale}/panier`} className="relative text-dark hover:text-[#008E47] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden text-dark p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden pb-4 border-t border-[#C9A84C]/20 mt-1 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href === '/' ? '' : link.href}`}
                className="block py-2.5 px-2 text-[14px] text-dark/70 hover:text-[#008E47] transition-colors border-b border-[#EDE8D0]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/devis`}
              className="block mt-3 bg-[#008E47] text-white text-center py-2.5 text-[13px] font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {t('quote')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
