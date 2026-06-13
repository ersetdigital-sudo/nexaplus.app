import { ImageResponse } from 'next/og';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';
export const alt = 'Artikel Blog NexaPlus - Jasa Pembuatan Website Profesional';
export const size = { width: 1200, height: 628 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data: post } = await supabase
    .from('blog_posts')
    .select('title, category, meta_title')
    .eq('slug', params.slug)
    .single();

  const title = post?.meta_title || post?.title || 'NexaPlus Blog';
  const category = post?.category || 'Blog';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top: category badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '20px',
              padding: '6px 16px',
              fontSize: '18px',
              color: '#ffffff',
              fontWeight: 600,
            }}
          >
            {category}
          </div>
        </div>

        {/* Middle: title */}
        <div
          style={{
            fontSize: title.length > 60 ? '42px' : '52px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.2,
            maxWidth: '900px',
          }}
        >
          {title}
        </div>

        {/* Bottom: branding */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              background: '#ffffff',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontWeight: 800,
              color: '#2563eb',
            }}
          >
            N
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff' }}>
              NexaPlus
            </span>
            <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>
              nexaplus.app
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
