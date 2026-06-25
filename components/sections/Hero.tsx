'use client';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1A1A1A]">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&auto=format&fit=crop')" }}
      />
      {/* Gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/70 to-transparent" />
      {/* Warm bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1A1A] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 py-32">
        <div className="max-w-2xl">
          {/* Label */}
          <p className="text-[#C9A84C] text-[11px] sm:text-[13px] tracking-[0.3em] uppercase font-medium mb-6">
            {t('label')}
          </p>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
            {t('title')}
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-lg">
            {t('subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/${locale}/catalogue`}
              className="bg-[#008E47] text-white px-8 py-4 text-[14px] font-medium tracking-wide hover:bg-[#006B35] transition-all"
            >
              {t('cta_shop')}
            </Link>
            <Link
              href={`/${locale}/catalogue?cat=tables`}
              className="border border-[#C9A84C] text-[#C9A84C] px-8 py-4 text-[14px] font-medium tracking-wide hover:bg-[#C9A84C] hover:text-dark transition-all"
            >
              {t('cta_design')}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/40" />
        <span className="text-[10px] tracking-widest uppercase">scroll</span>
      </div>
    </section>
  );
}
