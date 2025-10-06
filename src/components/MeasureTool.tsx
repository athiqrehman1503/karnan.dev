import { useState } from 'react';
import { Search, Gauge, CheckCircle, AlertCircle } from 'lucide-react';

interface ScoreDisplay {
  label: string;
  score: number;
  recommendations: string[];
}

export const MeasureTool = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<ScoreDisplay[] | null>(null);

  const handleMeasure = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);

    setTimeout(() => {
      setResults([
        {
          label: 'Performance',
          score: 87,
          recommendations: [
            'Reduce unused JavaScript',
            'Serve images in next-gen formats',
            'Minimize main-thread work'
          ]
        },
        {
          label: 'Accessibility',
          score: 94,
          recommendations: [
            'Add ARIA labels to buttons',
            'Improve color contrast',
          ]
        },
        {
          label: 'Best Practices',
          score: 92,
          recommendations: [
            'Use HTTPS',
            'Remove console.log statements'
          ]
        },
        {
          label: 'SEO',
          score: 100,
          recommendations: []
        }
      ]);
      setLoading(false);
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 dark:text-green-400';
    if (score >= 50) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreBackground = (score: number) => {
    if (score >= 90) return 'bg-green-100 dark:bg-green-900/30';
    if (score >= 50) return 'bg-yellow-100 dark:bg-yellow-900/30';
    return 'bg-red-100 dark:bg-red-900/30';
  };

  return (
    <section id="measure" className="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
            <Gauge className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Measure Your Site
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Get a comprehensive analysis of your website's performance and quality
          </p>
        </div>

        <form onSubmit={handleMeasure} className="mb-8">
          <div className="flex gap-2">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your website URL (e.g., https://example.com)"
              className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium transition-colors flex items-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  <span>Analyze</span>
                </>
              )}
            </button>
          </div>
        </form>

        {results && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {results.map((result) => (
                <div
                  key={result.label}
                  className={`p-6 rounded-xl text-center ${getScoreBackground(result.score)} border-2 ${
                    result.score >= 90 ? 'border-green-200 dark:border-green-800' :
                    result.score >= 50 ? 'border-yellow-200 dark:border-yellow-800' :
                    'border-red-200 dark:border-red-800'
                  }`}
                >
                  <div className={`text-4xl font-bold mb-2 ${getScoreColor(result.score)}`}>
                    {result.score}
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Recommendations
              </h3>

              <div className="space-y-4">
                {results.map((result) => (
                  result.recommendations.length > 0 && (
                    <div key={result.label}>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {result.label}
                      </h4>
                      <ul className="space-y-2">
                        {result.recommendations.map((rec, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2 text-gray-700 dark:text-gray-300"
                          >
                            {result.score >= 90 ? (
                              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                            ) : (
                              <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                            )}
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
