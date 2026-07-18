/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  PhoneMissed, Hourglass, Inbox, ClipboardList, Layers, UserX, Bot, Zap, 
  Database, Workflow, Sparkles, MessageSquare, CalendarDays, HeartHandshake, 
  TrendingUp, Cpu, PhoneCall, Laptop, Stethoscope, Home, Megaphone, 
  Wrench, Briefcase, Rocket, Menu, X, ArrowRight, Check, Loader2, 
  ShieldCheck, BarChart3, Users, Mail, Linkedin, ExternalLink
} from 'lucide-react';

// Types for navigation
type ViewType = 'home' | 'services' | 'industries' | 'about' | 'contact';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Unified Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: 'Healthcare',
    currentTools: '',
    challenge: 'Missed phone calls & no voicemail follow-up'
  });

  const [loading, setLoading] = useState(false);
  const [auditResult, setAuditResult] = useState<any | null>(null);
  const [contactSuccess, setContactSuccess] = useState<any | null>(null);
  const [contactLoading, setContactLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Analyzing operational bottlenecks...');

  // Effect for rotating loading messages
  useEffect(() => {
    if (loading) {
      const messages = [
        'Analyzing operational bottlenecks...',
        'Calculating manual labor hours wasted...',
        'Synthesizing instant speed-to-lead workflows...',
        'Mapping custom CRM triggers...',
        'Formulating high-converting receptionist flows...'
      ];
      let index = 0;
      const interval = setInterval(() => {
        index = (index + 1) % messages.length;
        setLoadingMessage(messages[index]);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [loading]);

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzWGgA9TnbDIv-9n5XF8TR3LmBs61N7bWs9Bvf2BIk/exec";

  // Navigation Helper
  const navigateToView = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // Handler for Audit Submission
  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAuditResult(null);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Scripts sometimes
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "AUDIT",
          leadId: "SB_" + Date.now(),
          ...formData
        }),
      });

      // Simulation of AI processing for the UI
      setTimeout(() => {
        setAuditResult({
          summary: `We detected significant leaks in the ${formData.industry} pipeline for ${formData.company || 'your business'}. Relying on manual handling for "${formData.challenge}" is costing you leads.`,
          quickWins: [
            { title: "Instant SMS Speed-to-Lead", description: "Reply within 10s automatically.", hoursSaved: "5h/wk", impact: "+40% Resp" },
            { title: "AI Missed Call Back", description: "Text callers back immediately.", hoursSaved: "4h/wk", impact: "0% Leakage" }
          ],
          estimatedMetrics: { hoursSavedPerWeek: "12-15 hrs", estimatedConversionUplift: "+30%" }
        });
        setLoading(false);
      }, 2000);

    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  // Handler for Contact Submission
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactLoading(true);
    setContactSuccess(null);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "CONTACT",
          leadId: "SB_" + Date.now(),
          ...formData
        }),
      });

      setContactSuccess({
        success: true,
        message: 'Strategy Call Request Received.',
        leadId: 'SB_' + Math.random().toString(36).substring(2, 8).toUpperCase(),
        routing: 'Assigned to Priyanka (Lead Strategist)'
      });
    } catch (error) {
      console.error(error);
    } finally {
      setContactLoading(false);
    }
  };

  // Icon Helpers
  const getProblemIcon = (icon: string) => {
    const props = { className: "w-6 h-6" };
    switch (icon) {
      case 'PhoneMissed': return <PhoneMissed {...props} className="w-6 h-6 text-red-500" />;
      case 'Hourglass': return <Hourglass {...props} className="w-6 h-6 text-amber-500" />;
      case 'Inbox': return <Inbox {...props} className="w-6 h-6 text-indigo-500" />;
      default: return <Bot {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* Background glow effects */}
      <div className="fixed w-[500px] h-[500px] bg-blue-900/20 top-[-100px] left-[-100px] blur-[120px] rounded-full -z-10" />
      <div className="fixed w-[600px] h-[600px] bg-cyan-900/20 bottom-[10%] right-[-100px] blur-[120px] rounded-full -z-10" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#030712]/85 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigateToView('home')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Startup<span className="text-blue-400">Bae</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {(['home', 'services', 'industries', 'about', 'contact'] as ViewType[]).map((view) => (
              <button 
                key={view}
                onClick={() => navigateToView(view)}
                className={`capitalize text-sm font-medium transition-colors hover:text-white ${currentView === view ? 'text-blue-400' : 'text-gray-400'}`}
              >
                {view}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => navigateToView('contact')} className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold hover:opacity-90">
              Book Strategy Call
            </button>
          </div>

          <button className="md:hidden text-gray-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#070b15] border-b border-gray-800 p-4 flex flex-col gap-4">
            {(['home', 'services', 'industries', 'about', 'contact'] as ViewType[]).map((view) => (
              <button key={view} onClick={() => navigateToView(view)} className="text-left py-2 capitalize text-gray-300">{view}</button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        
        {currentView === 'home' && (
          <div className="space-y-32">
            {/* Hero Section */}
            <section className="text-center space-y-8 pt-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-800 text-blue-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Premium AI Automation & CRM Partner</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                Stop Losing Leads. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Automate Business</span> with AI.
              </h1>
              <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                We build custom AI-powered workflows that capture leads 24/7, respond in seconds, and eliminate repetitive admin work.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button onClick={() => navigateToView('contact')} className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center gap-2">
                  Book Strategy Call <ArrowRight className="w-5 h-5" />
                </button>
                <button onClick={() => navigateToView('services')} className="px-8 py-4 rounded-xl border border-gray-700 bg-gray-900/30 text-gray-300 font-bold">
                  View Solutions
                </button>
              </div>
            </section>

            {/* Audit Form Section */}
            <section id="audit-section" className="bg-[#0b1528] border border-gray-800 rounded-3xl p-8 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Generate Your Free AI Audit</h2>
                <p className="text-gray-400 text-sm">See exactly how much time and revenue you are losing to manual processes.</p>
              </div>

              {!auditResult && !loading && (
                <form onSubmit={handleAuditSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input placeholder="Name" required className="bg-gray-950 border border-gray-800 p-3 rounded-lg" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  <input placeholder="Email" type="email" required className="bg-gray-950 border border-gray-800 p-3 rounded-lg" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  <select className="bg-gray-950 border border-gray-800 p-3 rounded-lg md:col-span-2" value={formData.challenge} onChange={e => setFormData({...formData, challenge: e.target.value})}>
                    <option>Missed phone calls & no voicemail follow-up</option>
                    <option>Slow lead response (takes hours or days)</option>
                    <option>Manual data entry between multiple systems</option>
                  </select>
                  <button type="submit" className="md:col-span-2 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold">
                    Generate My AI Audit
                  </button>
                </form>
              )}

              {loading && (
                <div className="text-center py-12 space-y-4">
                  <Loader2 className="w-10 h-10 text-blue-500 animate-spin mx-auto" />
                  <p className="text-white font-medium">{loadingMessage}</p>
                </div>
              )}

              {auditResult && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="grid grid-cols-2 gap-4 bg-gray-950 p-6 rounded-xl text-center border border-gray-800">
                    <div>
                      <div className="text-cyan-400 text-2xl font-bold">{auditResult.estimatedMetrics.hoursSavedPerWeek}</div>
                      <div className="text-xs text-gray-500">Hours Saved / Week</div>
                    </div>
                    <div>
                      <div className="text-emerald-400 text-2xl font-bold">{auditResult.estimatedMetrics.estimatedConversionUplift}</div>
                      <div className="text-xs text-gray-500">Revenue Uplift Potential</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed p-4 bg-blue-900/10 border border-blue-900/30 rounded-lg">
                    {auditResult.summary}
                  </p>
                  <button onClick={() => navigateToView('contact')} className="w-full py-4 bg-blue-600 rounded-xl font-bold">
                    Discuss Integration Roadmap
                  </button>
                </div>
              )}
            </section>
          </div>
        )}

        {currentView === 'contact' && (
          <section className="max-w-2xl mx-auto bg-[#0b1528] border border-gray-800 p-10 rounded-3xl">
             <h2 className="text-3xl font-bold text-white mb-6">Book Your Strategy Call</h2>
             {!contactSuccess ? (
               <form onSubmit={handleContactSubmit} className="space-y-6">
                 <input placeholder="Full Name" required className="w-full bg-gray-950 border border-gray-800 p-4 rounded-xl" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                 <input placeholder="Business Email" type="email" required className="w-full bg-gray-950 border border-gray-800 p-4 rounded-xl" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                 <textarea placeholder="Tell us about your manual bottlenecks..." required rows={4} className="w-full bg-gray-950 border border-gray-800 p-4 rounded-xl" value={formData.challenge} onChange={e => setFormData({...formData, challenge: e.target.value})} />
                 <button type="submit" disabled={contactLoading} className="w-full py-4 bg-blue-600 rounded-xl font-bold flex items-center justify-center gap-2">
                   {contactLoading ? <Loader2 className="animate-spin" /> : "Send Strategy Request"}
                 </button>
               </form>
             ) : (
               <div className="text-center space-y-6 py-10">
                 <div className="w-16 h-16 bg-emerald-950 border border-emerald-500 rounded-full flex items-center justify-center mx-auto">
                   <Check className="text-emerald-400 w-8 h-8" />
                 </div>
                 <h3 className="text-2xl font-bold text-white">{contactSuccess.message}</h3>
                 <p className="text-gray-400">{contactSuccess.routing}</p>
                 <button onClick={() => setContactSuccess(null)} className="text-blue-400 underline">Send another inquiry</button>
               </div>
             )}
          </section>
        )}
        
        {/* Placeholder for other views */}
        {(currentView === 'services' || currentView === 'industries' || currentView === 'about') && (
          <div className="text-center py-24">
            <h2 className="text-3xl font-bold text-white mb-4 capitalize">{currentView} Solutions</h2>
            <p className="text-gray-400">Content for this section is loading based on the {currentView} data module...</p>
            <button onClick={() => navigateToView('home')} className="mt-8 text-blue-400 flex items-center gap-2 mx-auto">
              <ArrowRight className="rotate-180" /> Back to Home
            </button>
          </div>
        )}
      </main>

      <footer className="border-t border-gray-900 py-12 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 StartupBae. AI Automation Agency.</p>
        </div>
      </footer>
    </div>
  );
}
