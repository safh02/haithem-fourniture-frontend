'use client';
import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const API = process.env.NEXT_PUBLIC_API_URL || 'https://haithem-fourniture-backend-production.up.railway.app';

interface Product {
  id: number;
  name_fr: string;
  name_ar: string;
  description_fr: string;
  description_ar: string;
  price: number | null;
  is_quote_only: boolean;
  images: { url: string }[];
  category_name: string;
  status: string;
}

export default function CataloguePage() {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const cat = searchParams.get('cat');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = cat
      ? `${API}/api/products?status=published&category=${cat}`
      : `${API}/api/products?status=published`;
    fetch(url)
      .then(r => r.json())
      .then(d => { setProducts(d.products || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, [cat]);

  const getName = (p: Product) => locale === 'ar' ? p.name_ar || p.name_fr : p.name_fr || p.name_ar;
  const getDesc = (p: Product) => locale === 'ar' ? p.description_ar || p.description_fr : p.description_fr || p.description_ar;

  const CATEGORIES = [
    { key: null, label_ar: 'الكل', label_fr: 'Tout voir' },
    { key: 'canapes', label_ar: 'أرائك', label_fr: 'Canapés' },
    { key: 'tables', label_ar: 'طاولات', label_fr: 'Tables' },
    { key: 'lustres', label_ar: 'ثريات', label_fr: 'Lustres' },
    { key: 'decoration', label_ar: 'ديكور', label_fr: 'Décoration' },
  ];

  return (
    <div className="min-h-screen bg-[#EDE8D0] pt-16">
      {/* Header */}
      <div className="bg-[#1A1A1A] py-16 px-4 sm:px-8 text-center">
        <p className="text-[#C9A84C] text-[11px] tracking-[0.3em] uppercase font-medium mb-3">
          {locale === 'ar' ? 'اكتشف مجموعتنا' : 'Découvrez notre gamme'}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
          {locale === 'ar' ? 'الكتالوج' : 'Catalogue'}
        </h1>
      </div>

      {/* Filter tabs */}
      <div className="bg-white border-b border-[#EDE8D0] sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex gap-1 overflow-x-auto py-3">
          {CATEGORIES.map((c) => (
            <Link
              key={c.key ?? 'all'}
              href={c.key ? `/${locale}/catalogue?cat=${c.key}` : `/${locale}/catalogue`}
              className={`whitespace-nowrap px-5 py-2 text-[13px] font-medium transition-all border ${
                cat === c.key
                  ? 'bg-[#008E47] text-white border-[#008E47]'
                  : 'bg-transparent text-dark/60 border-transparent hover:text-[#008E47]'
              }`}
            >
              {locale === 'ar' ? c.label_ar : c.label_fr}
            </Link>
          ))}
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 py-12">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white animate-pulse aspect-[3/4]" />
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-dark/40 text-lg font-display">
              {locale === 'ar' ? 'لا توجد منتجات حالياً' : 'Aucun produit disponible pour le moment'}
            </p>
            <p className="text-dark/30 text-[13px] mt-2">
              {locale === 'ar' ? 'تواصل معنا للاستفسار' : 'Contactez-nous pour plus d\'informations'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((p) => (
              <Link key={p.id} href={`/${locale}/produit/${p.id}`} className="group bg-white overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[4/3] bg-[#F5F5F5] overflow-hidden">
                  {p.images?.[0] ? (
                    <img
                      src={p.images[0].url}
                      alt={getName(p)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#C9A84C]/30">
                      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                  )}
                  {/* Category badge */}
                  {p.category_name && (
                    <span className="absolute top-3 start-3 bg-[#1A1A1A]/70 text-white text-[10px] px-2 py-0.5 tracking-wide">
                      {p.category_name}
                    </span>
                  )}
                </div>
                {/* Info */}
                <div className="p-4">
                  <h3 className="font-display font-semibold text-dark text-[15px] leading-tight mb-1 line-clamp-1">
                    {getName(p)}
                  </h3>
                  <p className="text-dark/50 text-[12px] line-clamp-2 mb-3">{getDesc(p)}</p>
                  <div className="flex items-center justify-between">
                    {p.is_quote_only || !p.price ? (
                      <span className="text-[#008E47] text-[13px] font-medium">
                        {locale === 'ar' ? 'السعر عند الطلب' : 'Prix sur devis'}
                      </span>
                    ) : (
                      <span className="text-dark font-bold text-[15px]">
                        {p.price.toLocaleString()} DA
                      </span>
                    )}
                    <span className="text-[#C9A84C] text-[20px] group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
