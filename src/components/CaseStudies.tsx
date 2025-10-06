import { useState } from 'react';
import { TrendingUp, Quote } from 'lucide-react';
import { mockCaseStudies } from '../data/mockData';

const industries = ['All', 'E-commerce', 'Media', 'Finance', 'Healthcare', 'Technology'];

export const CaseStudies = () => {
  const [activeIndustry, setActiveIndustry] = useState('All');

  const filteredStudies = activeIndustry === 'All'
    ? mockCaseStudies
    : mockCaseStudies.filter(study => study.industry === activeIndustry);

  return (
    <section id="case-studies" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world success stories from teams building exceptional web experiences
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setActiveIndustry(industry)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeIndustry === industry
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <img
                src={study.image_url}
                alt={study.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium">
                    {study.industry}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {study.client}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {study.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {study.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tech_stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="text-center p-3 rounded-lg bg-green-50 dark:bg-green-900/20"
                    >
                      <div className="flex items-center justify-center mb-1">
                        <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {value}%
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {study.quote && (
                  <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                    <Quote className="w-5 h-5 text-blue-600 dark:text-blue-400 mb-2" />
                    <p className="text-gray-700 dark:text-gray-300 italic mb-2">
                      "{study.quote}"
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      — {study.quote_author}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
