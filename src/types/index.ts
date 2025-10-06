export interface Article {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  author: string;
  author_avatar?: string;
  tags: string[];
  category: string;
  published_at: string;
  reading_time: number;
  featured: boolean;
  image_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Course {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number;
  lessons_count: number;
  image_url?: string;
  created_at: string;
}

export interface Lesson {
  id: string;
  course_id: string;
  title: string;
  slug: string;
  content: string;
  order_index: number;
  duration: number;
  code_demo_url?: string;
  created_at: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  tech_stack: string[];
  description: string;
  content: string;
  metrics: Record<string, any>;
  image_url?: string;
  images: string[];
  quote?: string;
  quote_author?: string;
  published_at: string;
  created_at: string;
}

export interface UserPreferences {
  id: string;
  user_id?: string;
  theme: 'light' | 'dark';
  bookmarks: string[];
  completed_lessons: string[];
  search_history: string[];
  created_at: string;
  updated_at: string;
}

export interface LighthouseScore {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}

export interface SearchResult {
  type: 'article' | 'course' | 'case_study';
  id: string;
  title: string;
  description: string;
  url: string;
}
