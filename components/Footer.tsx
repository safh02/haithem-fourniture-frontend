'use client';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const n = useTranslations('nav');
  const locale = useLocale();

  return (
    <footer className="bg-[#111] text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p className="font-display text-xl font-bold text-white">
                {locale === 'ar' ? 'حيتم للأثاث' : 'Haithem Fourniture'}
              </p>
              <p className="text-[#C9A84C] text-[11px] tracking-[0.2em] mt-1">
                {locale === 'ar' ? 'الأناقة على مقاسك' : "L'élégance taillée pour vous"}
              </p>
            </div>
            <p className="text-[13px] leading-relaxed mb-5">{t('tagline')}</p>
            {/* Social */}
            <div className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=100077938660833" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/haithem_fourniture/" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9a8.19 8.19 0 004.77 1.52V7.1a4.85 4.85 0 01-1-.41z"/></svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white text-[12px] font-semibold tracking-[0.2em] uppercase mb-5">{t('shop')}</h4>
            <ul className="space-y-3 text-[13px]">
              {['sofas','tables','chandeliers','decoration'].map(k => (
                <li key={k}><Link href={`/${locale}/catalogue?cat=${k}`} className="hover:text-[#C9A84C] transition-colors">{n(k as any)}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-[12px] font-semibold tracking-[0.2em] uppercase mb-5">{t('company')}</h4>
            <ul className="space-y-3 text-[13px]">
              <li><Link href={`/${locale}/a-propos`} className="hover:text-[#C9A84C] transition-colors">{n('about')}</Link></li>
              <li><Link href={`/${locale}/realisations`} className="hover:text-[#C9A84C] transition-colors">{n('gallery')}</Link></li>
              <li><Link href={`/${locale}/contact`} className="hover:text-[#C9A84C] transition-colors">{n('contact')}</Link></li>
            </ul>
          </div>

          {/* Support + Contact */}
          <div>
            <h4 className="text-white text-[12px] font-semibold tracking-[0.2em] uppercase mb-5">{t('support')}</h4>
            <ul className="space-y-3 text-[13px] mb-6">
              <li><Link href={`/${locale}/livraison`} className="hover:text-[#C9A84C] transition-colors">{t('delivery')}</Link></li>
              <li><Link href={`/${locale}/faq`} className="hover:text-[#C9A84C] transition-colors">{t('faq')}</Link></li>
            </ul>
            <div className="text-[12px] space-y-1">
              <p className="text-white/40 uppercase tracking-wider text-[10px] mb-2">Showroom</p>
              <p>{locale === 'ar' ? 'شارع بحلولي — العلمة، سطيف' : 'Rue Bahlouli — El-Eulma, Sétif'}</p>
              <p className="text-[#008E47]">TODO: +213 XXX XXX XXX</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-white/30">
          <p>© {new Date().getFullYear()} Haithem Fourniture. {t('rights')}.</p>
          <p className="text-[#C9A84C]/50">حيتم للأثاث — El-Eulma, Sétif, Algérie</p>
        </div>
      </div>
    </footer>
  );
}
