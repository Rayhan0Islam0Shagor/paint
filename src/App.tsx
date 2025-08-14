import Navbar from './components/ui/Navbar';
import CallToAction from './pages/Home/call-to-action';
import FeatureSection from './pages/Home/feature-section';
import HeroSection from './pages/Home/hero-section';
import Testimonial2 from './pages/Home/Testimonial2';
import WeProvide from './pages/Home/we-provide';

function App() {
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <HeroSection />
      <div className="relative">
        <FeatureSection />
        {/* <Testimonial /> */}
        <Testimonial2 />
      </div>
      <WeProvide />
      <CallToAction />
    </div>
  );
}

export default App;
