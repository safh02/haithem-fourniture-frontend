'use client';
import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';

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
  variants: any[];
}

export default function ProductPage({ params }: { params: { id: string; locale: string } }) {
  const locale = useLocale();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeImg, setActiveImg] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/products/${params.id}`)
      .then(r => r.json())
      .then(d => { setProduct(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, [params.id]);

  if (loading) return (
    <div className="min-h-screen bg-[#EDE8D0] pt-16 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#008E47] border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!product) return (
    <div className="min-h-screen bg-[#EDE8D0] pt-16 flex items-center justify-center">
      <p className="text-dark/40">{locale === 'ar' ? 'المنتج غير موجود' : 'Produit introuvable'}</p>
    </div>
  );

  const name = locale === 'ar' ? product.name_ar || product.name_fr : product.name_fr || product.name_ar;
  const desc = locale === 'ar' ? product.description_ar || product.description_fr : product.description_fr || product.description_ar;
  const waMsg = locale === 'ar'
    ? `مرحبا، أريد الاستفسار عن: ${name}`
    : `Bonjour, je suis intéressé par: ${name}`;
  const waHref = `https://wa.me/213XXXXXXXXX?text=${encodeURIComponent(waMsg)}`;

  return (
    <div className="min-h-screen bg-[#EDE8D0] pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
        {/* Breadcrumb */}
        <nav className="text-[12px] text-dark/40 mb-8 flex items-center gap-2">
          <Link href={`/${locale}`} className="hover:text-[#008E47]">
            {locale === 'ar' ? 'الرئيسية' : 'Accueil'}
          </Link>
          <span>/</span>
          <Link href={`/${locale}/catalogue`} className="hover:text-[#008E47]">
            {locale === 'ar' ? 'الكتالوج' : 'Catalogue'}
          </Link>
          <span>/</span>
          <span className="text-dark">{name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="aspect-square bg-white overflow-hidden mb-3">
              {product.images?.[activeImg] ? (
                <img src={product.images[activeImg].url} alt={name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#C9A84C]/20">
                  <svg className="w-20 h-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
              )}
            </div>
            {product.images?.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`flex-shrink-0 w-16 h-16 overflow-hidden border-2 transition-all ${i === activeImg ? 'border-[#C9A84C]' : 'border-transparent'}`}
                  >
                    <img src={img.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            {product.category_name && (
              <span className="text-[#008E47] text-[11px] tracking-[0.3em] uppercase font-medium mb-3">
                {product.category_name}
              </span>
            )}
            <h1 className="font-display text-3xl font-bold text-dark mb-4">{name}</h1>

            {/* Price */}
            <div className="mb-6">
              {product.is_quote_only || !product.price ? (
                <p className="text-[#008E47] text-lg font-medium">
                  {locale === 'ar' ? 'السعر عند الطلب' : 'Prix sur devis'}
                </p>
              ) : (
                <p className="text-dark text-3xl font-bold">
                  {product.price.toLocaleString()} <span className="text-[18px] font-normal text-dark/60">DA</span>
                </p>
              )}
            </div>

            <div className="w-16 h-px bg-[#C9A84C] mb-6" />

            {desc && (
              <p className="text-dark/70 text-[15px] leading-relaxed mb-8">{desc}</p>
            )}

            {/* CTAs */}
            <div className="flex flex-col gap-3 mt-auto">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 text-[14px] font-medium hover:bg-[#1ebe5d] transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {locale === 'ar' ? 'تواصل عبر واتساب' : 'Commander via WhatsApp'}
              </a>
              <Link
                href={`/${locale}/devis?product=${product.id}`}
                className="flex items-center justify-center gap-2 border border-[#008E47] text-[#008E47] py-4 text-[14px] font-medium hover:bg-[#008E47] hover:text-white transition-all"
              >
                {locale === 'ar' ? 'اطلب عرض سعر' : 'Demander un devis'}
              </Link>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mt-8 pt-8 border-t border-[#C9A84C]/20">
              {[
                { icon: '🚚', ar: 'توصيل لكل الجزائر', fr: 'Livraison nationale' },
                { icon: '🔧', ar: 'تركيب مجاني', fr: 'Installation gratuite' },
                { icon: '✓', ar: 'جودة مضمونة', fr: 'Qualité garantie' },
              ].map((b) => (
                <div key={b.ar} className="text-center">
                  <span className="text-2xl block mb-1">{b.icon}</span>
                  <p className="text-dark/50 text-[11px]">{locale === 'ar' ? b.ar : b.fr}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
