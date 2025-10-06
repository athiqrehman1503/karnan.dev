import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedArticles } from './components/FeaturedArticles';
import { ArticleGrid } from './components/ArticleGrid';
import { CourseExplorer } from './components/CourseExplorer';
import { CaseStudies } from './components/CaseStudies';
import { MeasureTool } from './components/MeasureTool';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <main>
        <Hero />
        <FeaturedArticles />
        <ArticleGrid />
        <CourseExplorer />
        <CaseStudies />
        <MeasureTool />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
