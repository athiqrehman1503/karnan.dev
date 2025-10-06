import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setTimeout(() => {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }, 500);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-12 h-12 text-white mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated
        </h2>
        <p className="text-blue-100 text-lg mb-8">
          Get the latest web development insights, tutorials, and best practices delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          {subscribed ? (
            <div className="flex items-center justify-center space-x-2 text-white bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Thanks for subscribing!</span>
            </div>
          ) : (
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors"
              >
                Subscribe
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
