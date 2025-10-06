import { useState } from 'react';
import { Clock, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockArticles } from '../data/mockData';

export const FeaturedArticles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredArticles = mockArticles.filter(a => a.featured);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredArticles.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
  };

  const article = featuredArticles[currentIndex];

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Articles</h2>

        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-96 object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-3xl font-bold mb-3">{article.title}</h3>
              <p className="text-lg text-gray-200 mb-4 line-clamp-2">{article.description}</p>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.reading_time} min read</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
            aria-label="Previous article"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
            aria-label="Next article"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {featuredArticles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
