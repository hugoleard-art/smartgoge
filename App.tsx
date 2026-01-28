
import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  Briefcase, 
  CheckCircle2, 
  MessageCircle, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Star, 
  ChevronRight 
} from 'lucide-react';
import Hero from './components/Hero';
import ModelSection from './components/ModelSection';
import StatsSection from './components/StatsSection';
import BenefitsSection from './components/BenefitsSection';
import ProcessSection from './components/ProcessSection';
import ProfileSection from './components/ProfileSection';
import AuthoritySection from './components/AuthoritySection';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5500000000000?text=Quero%20receber%20informações%20sobre%20a%20franquia%20Smart%20System', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header (Logo Only) */}
      <header className="py-6 px-4 border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-center">
          <img 
            src="https://raw.githubusercontent.com/ai-gen-images/smart-system/main/logo.png" 
            alt="Smart System Garabetti" 
            className="h-16 md:h-20"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/smartsystem/300/100";
            }}
          />
        </div>
      </header>

      <main>
        <Hero onCTA={openWhatsApp} onSecCTA={scrollToForm} />
        <ModelSection />
        <StatsSection />
        <BenefitsSection />
        <ProcessSection />
        <ProfileSection />
        <AuthoritySection />
        
        {/* Final Conversion Section */}
        <section className="bg-zinc-950 py-20 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Essa pode ser a oportunidade que vai transformar sua vida financeira.
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl mb-10">
              Não perca tempo em modelos de negócio ultrapassados. Venha para a evolução do mercado de planejados.
            </p>
            <button 
              onClick={openWhatsApp}
              className="w-full sm:w-auto bg-brand-orange hover:bg-orange-600 text-white font-bold py-5 px-10 rounded-full text-xl shadow-2xl shadow-orange-500/20 transition-all flex items-center justify-center gap-3 mx-auto"
            >
              <MessageCircle size={24} />
              Falar agora com um consultor no WhatsApp
            </button>
          </div>
        </section>

        <section id="lead-form">
          <LeadForm />
        </section>
      </main>

      <Footer />

      {/* Sticky CTA for Mobile/Desktop */}
      {showStickyCTA && (
        <div className="fixed bottom-6 right-6 z-[100] animate-bounce">
          <button 
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center gap-2"
          >
            <MessageCircle size={28} />
            <span className="hidden md:inline font-bold">Falar no WhatsApp</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
