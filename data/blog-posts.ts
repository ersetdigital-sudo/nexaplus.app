export type BlogCategory =
  | 'SEO'
  | 'Website'
  | 'Bisnis Online'
  | 'UMKM'
  | 'Toko Online';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedDate: Date;
  coverImage: string;
  content: string;
}

// Static data kept empty — blog now served from Supabase
export const blogPosts: BlogPost[] = [];
