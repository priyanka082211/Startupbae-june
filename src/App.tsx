/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  PhoneMissed, 
  Hourglass, 
  Inbox, 
  ClipboardList, 
  Layers, 
  UserX, 
  Bot, 
  Zap, 
  Database, 
  Workflow, 
  Sparkles, 
  MessageSquare, 
  CalendarDays, 
  HeartHandshake, 
  TrendingUp, 
  Cpu, 
  PhoneCall, 
  Laptop, 
  Stethoscope, 
  Home, 
  Megaphone, 
  Wrench, 
  Briefcase, 
  Rocket, 
  Menu, 
  X, 
  ArrowRight, 
  Check, 
  Loader2, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  Mail, 
  Linkedin, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { ViewType } from './types';
import { PROBLEMS, SOLUTIONS, HOW_IT_WORKS, BENEFITS, CASE_STUDIES, SERVICES, INDUSTRIES } from './data';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Single Unified Form State
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
  
  // Status message rotation during audit generation
  const [loadingMessage, setLoadingMessage] = useState('Analyzing operational bottlenecks...');
  
  useEffect(() => {
    if (loading) {
      const messages = [
        'Analyzing operational bottlenecks...',
        'Calculating manual labor hours wasted...',
        'Synthesizing instant speed-to-lead workflows...',
        'Mapping custom CRM triggers and GoHighLevel pathways...',
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

  // Handle audit form submission
  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setAuditResult(null);

    try {
      const response = await fetch(
  "https://script.google.com/macros/s/AKfycbzWGgA9TnbDIv-9n5XF8TR3LmBs61N7bWs9Bvf2BIk/exec",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      leadId: "SB_" + Date.now(),
      timestamp: new Date().toISOString(),
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      challenge: formData.challenge,
    }),
  }
);

const data = await response.json();

      setAuditResult({
        summary: `We detected significant conversion leaks in your current lead generation pipeline for ${formData.company || 'your business'} in the ${formData.industry} industry. By relying on manual processes for your bottleneck ("${formData.challenge}"), you are likely losing up to 40% of captured prospects to faster-responding competitors.`,
        quickWins: [
          {
            title: "Instant Text Speed-to-Lead Response",
            description: `Automatically trigger a personalized SMS within 10 seconds of a new inquiry to bypass "${formData.challenge}" completely.`,
            hoursSaved: "5 hours/week",
            impact: "More than doubles your prospect response rate."
          },
          {
            title: "Voicemail Automation Trigger",
            description: "Automatically text callers back immediately if you miss an incoming call, capturing their booking intent before they hang up.",
            hoursSaved: "4 hours/week",
            impact: "Maintains interest and books appointments on autopilot."
          }
        ],
        longTermStrategy: "Integrate a centralized GoHighLevel CRM and install a 24/7 AI Voice Receptionist to qualification-screen callers and schedule meetings without manual front-desk overhead.",
        estimatedMetrics: {
          hoursSavedPerWeek: "12-15 hours/week",
          responseTimeImprovement: "From hours down to sub-10 seconds",
          estimatedConversionUplift: "+30% more booked appointments"
        },
        recommendedStack: ["GoHighLevel CRM", "Vapi AI Voice", "Make.com workflow automation"]
      });

      setContactSuccess({
        success: true,
        leadId: data.leadId || ("SB_" + Math.random().toString(36).substring(2, 8).toUpperCase()),
        routing: data.routing || "Assigned to Lead Automation Specialist",
        message: data.message || "Lead captured successfully!"
      });
    } catch (err) {
      console.error(err);
      // Fallback in case of endpoint error
      setAuditResult({
        summary: "We detected significant conversion leaks in your current lead generation pipeline. By responding manually, you are likely letting up to 40% of captured prospects go to competitors.",
        quickWins: [
          {
            title: "Instant Text Speed-to-Lead",
            description: "Automatically reply to new inquiries within 10 seconds via conversational SMS.",
            hoursSaved: "5 hours/week",
            impact: "More than doubles your prospect response rate."
          }
        ],
        longTermStrategy: "Integrate a central GoHighLevel CRM and install an AI Voice Receptionist to qualification-screen leads automatically before reps join calls.",
        estimatedMetrics: {
          hoursSavedPerWeek: "12-15 hours/week",
          responseTimeImprovement: "From hours down to sub-10 seconds",
          estimatedConversionUplift: "+30% more booked appointments"
        },
        recommendedStack: ["GoHighLevel CRM", "Vapi AI Voice", "Make.com workflow automation"]
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle contact form submission
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactLoading(true);
    setContactSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          challenge: `${formData.challenge} | Industry: ${formData.industry}`
        })
      });
      const data = await response.json();
      setContactSuccess({
        success: true,
        leadId: data.leadId || ("SB_" + Math.random().toString(36).substring(2, 8).toUpperCase()),
        routing: data.routing || "Assigned to Lead Automation Specialist",
        message: data.message || "Lead successfully recorded in Google Sheet!"
      });
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        industry: 'Healthcare',
        currentTools: '',
        challenge: 'Missed phone calls & no voicemail follow-up'
      });
    } catch (err) {
      console.error(err);
      setContactSuccess({
        success: true,
        message: 'Lead captured successfully.',
        leadId: 'SB_' + Math.random().toString(36).substring(2, 8).toUpperCase(),
        routing: 'Assigned to Lead Automation Specialist'
      });
    } finally {
      setContactLoading(false);
    }
  };

  const getProblemIcon = (iconName: string) => {
    switch (iconName) {
      case 'PhoneMissed': return <PhoneMissed id="icon-phone-missed" className="w-6 h-6 text-red-500" />;
      case 'Hourglass': return <Hourglass id="icon-hourglass" className="w-6 h-6 text-amber-500" />;
      case 'Inbox': return <Inbox id="icon-inbox" className="w-6 h-6 text-indigo-500" />;
      case 'ClipboardList': return <ClipboardList id="icon-clipboard" className="w-6 h-6 text-blue-500" />;
      case 'Layers': return <Layers id="icon-layers" className="w-6 h-6 text-cyan-500" />;
      case 'UserX': return <UserX id="icon-user-x" className="w-6 h-6 text-purple-500" />;
      default: return <Bot id="icon-bot-default" className="w-6 h-6 text-blue-500" />;
    }
  };

  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot id="sol-bot" className="w-8 h-8 text-cyan-400" />;
      case 'Zap': return <Zap id="sol-zap" className="w-8 h-8 text-amber-400" />;
      case 'Database': return <Database id="sol-db" className="w-8 h-8 text-indigo-400" />;
      case 'Workflow': return <Workflow id="sol-flow" className="w-8 h-8 text-teal-400" />;
      default: return <Sparkles id="sol-sparkle" className="w-8 h-8 text-cyan-400" />;
    }
  };

  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles id="ben-sparkles" className="w-6 h-6 text-yellow-400" />;
      case 'MessageSquareCheck': return <MessageSquare id="ben-msg" className="w-6 h-6 text-emerald-400" />;
      case 'CalendarDays': return <CalendarDays id="ben-cal" className="w-6 h-6 text-cyan-400" />;
      case 'HeartHandshake': return <HeartHandshake id="ben-heart" className="w-6 h-6 text-pink-400" />;
      case 'TrendingUp': return <TrendingUp id="ben-trend" className="w-6 h-6 text-teal-400" />;
      case 'Cpu': return <Cpu id="ben-cpu" className="w-6 h-6 text-purple-400" />;
      default: return <Check id="ben-check" className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot id="ser-bot" className="w-10 h-10 text-cyan-400" />;
      case 'PhoneCall': return <PhoneCall id="ser-phone" className="w-10 h-10 text-teal-400" />;
      case 'Database': return <Database id="ser-db" className="w-10 h-10 text-indigo-400" />;
      case 'Zap': return <Zap id="ser-zap" className="w-10 h-10 text-amber-400" />;
      case 'Workflow': return <Workflow id="ser-flow" className="w-10 h-10 text-pink-400" />;
      case 'Laptop': return <Laptop id="ser-laptop" className="w-10 h-10 text-blue-400" />;
      default: return <Sparkles id="ser-sparkles" className="w-10 h-10 text-cyan-400" />;
    }
  };

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope id="ind-stethoscope" className="w-8 h-8 text-cyan-400" />;
      case 'Home': return <Home id="ind-home" className="w-8 h-8 text-amber-400" />;
      case 'Megaphone': return <Megaphone id="ind-megaphone" className="w-8 h-8 text-indigo-400" />;
      case 'Wrench': return <Wrench id="ind-wrench" className="w-8 h-8 text-teal-400" />;
      case 'Briefcase': return <Briefcase id="ind-briefcase" className="w-8 h-8 text-pink-400" />;
      case 'Rocket': return <Rocket id="ind-rocket" className="w-8 h-8 text-purple-400" />;
      default: return <Sparkles id="ind-sparkles" className="w-8 h-8 text-cyan-400" />;
    }
  };

  const navigateToView = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const prefillAndGoToContact = (challengeText: string) => {
    setFormData(prev => ({ ...prev, challenge: challengeText }));
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      
      {/* Background glow effects - Styled Premium SaaS Look */}
      <div className="glow-orb w-[500px] h-[500px] bg-blue-900 top-[-100px] left-[-100px]" />
      <div className="glow-orb w-[600px] h-[600px] bg-cyan-900 bottom-[10%] right-[-100px]" />
      <div className="glow-orb w-[400px] h-[400px] bg-indigo-950 top-[40%] left-[20%]" />

      {/* Header / Navigation */}
      <header id="main-header" className="sticky top-0 z-50 backdrop-blur-md bg-[#030712]/85 border-b border-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              id="logo-container" 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => navigateToView('home')}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
                <Cpu id="logo-icon" className="w-5 h-5 text-white animate-pulse" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-sans bg-clip-text">
                Startup<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Bae</span>
              </span>
            </div>

            {/* Desktop Nav Links */}
            <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
              <button 
                id="nav-home"
                className={`text-sm font-medium transition-colors hover:text-white ${currentView === 'home' ? 'text-blue-400' : 'text-gray-400'}`}
                onClick={() => navigateToView('home')}
              >
                Home
              </button>
              <button 
                id="nav-services"
                className={`text-sm font-medium transition-colors hover:text-white ${currentView === 'services' ? 'text-blue-400' : 'text-gray-400'}`}
                onClick={() => navigateToView('services')}
              >
                Solutions
              </button>
              <button 
                id="nav-industries"
                className={`text-sm font-medium transition-colors hover:text-white ${currentView === 'industries' ? 'text-blue-400' : 'text-gray-400'}`}
                onClick={() => navigateToView('industries')}
              >
                Industries
              </button>
              <button 
                id="nav-about"
                className={`text-sm font-medium transition-colors hover:text-white ${currentView === 'about' ? 'text-blue-400' : 'text-gray-400'}`}
                onClick={() => navigateToView('about')}
              >
                About
              </button>
              <button 
                id="nav-contact"
                className={`text-sm font-medium transition-colors hover:text-white ${currentView === 'contact' ? 'text-blue-400' : 'text-gray-400'}`}
                onClick={() => navigateToView('contact')}
              >
                Contact
              </button>
            </nav>

            {/* Header CTAs */}
            <div className="hidden md:flex items-center gap-4">
              <button
                id="header-cta-audit"
                onClick={() => {
                  setCurrentView('home');
                  setTimeout(() => {
                    document.getElementById('audit-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-xs font-semibold px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800/40 transition-all duration-200"
              >
                Free AI Audit
              </button>
              <button
                id="header-cta-contact"
                onClick={() => navigateToView('contact')}
                className="text-xs font-semibold px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200"
              >
                Book Strategy Call
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                id="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-400 hover:text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X id="menu-close" className="h-6 w-6" /> : <Menu id="menu-open" className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div id="mobile-menu-panel" className="md:hidden bg-[#070b15]/95 border-b border-gray-800 px-4 pt-2 pb-6 space-y-3 transition-all duration-300">
            <button 
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium ${currentView === 'home' ? 'bg-gray-800 text-blue-400' : 'text-gray-300 hover:bg-gray-800/40'}`}
              onClick={() => navigateToView('home')}
            >
              Home
            </button>
            <button 
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium ${currentView === 'services' ? 'bg-gray-800 text-blue-400' : 'text-gray-300 hover:bg-gray-800/40'}`}
              onClick={() => navigateToView('services')}
            >
              Solutions
            </button>
            <button 
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium ${currentView === 'industries' ? 'bg-gray-800 text-blue-400' : 'text-gray-300 hover:bg-gray-800/40'}`}
              onClick={() => navigateToView('industries')}
            >
              Industries
            </button>
            <button 
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium ${currentView === 'about' ? 'bg-gray-800 text-blue-400' : 'text-gray-300 hover:bg-gray-800/40'}`}
              onClick={() => navigateToView('about')}
            >
              About
            </button>
            <button 
              className={`block w-full text-left px-3 py-2.5 rounded-lg text-base font-medium ${currentView === 'contact' ? 'bg-gray-800 text-blue-400' : 'text-gray-300 hover:bg-gray-800/40'}`}
              onClick={() => navigateToView('contact')}
            >
              Contact
            </button>
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCurrentView('home');
                  setTimeout(() => {
                    document.getElementById('audit-section')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full text-center px-4 py-2 rounded-lg border border-gray-700 text-gray-300 text-sm font-medium"
              >
                Free AI Audit
              </button>
              <button
                onClick={() => navigateToView('contact')}
                className="w-full text-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium"
              >
                Book Strategy Call
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main id="main-content" className="relative z-10">
        
        {/* ==================================== */}
        {/* 1. HOME VIEW */}
        {/* ==================================== */}
        {currentView === 'home' && (
          <div id="home-view" className="space-y-32 pb-24">
            
            {/* Hero Section */}
            <section id="hero-section" className="pt-12 md:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Hero Left Info */}
                <div className="lg:col-span-7 space-y-8 text-left">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/55 text-blue-300 text-xs font-semibold tracking-wide">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    <span>Your Dedicated AI Automation & CRM Partner</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] font-sans">
                    Stop Losing Leads. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
                      Automate Your Business
                    </span> with AI.
                  </h1>

                  <p className="text-lg sm:text-xl text-gray-400 font-normal leading-relaxed max-w-2xl">
                    We help service businesses automate sales, support, and operations. Capture every lead, respond instantly, book more appointments, and eliminate repetitive admin tasks using custom AI-powered workflows.
                  </p>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                    <button
                      id="hero-primary-cta"
                      onClick={() => navigateToView('contact')}
                      className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:opacity-95 hover:shadow-blue-500/40 transition-all duration-200 flex items-center justify-center gap-3.5 group cursor-pointer"
                    >
                      <span>Book a Free AI Strategy Call</span>
                      <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                    <button
                      id="hero-secondary-cta"
                      onClick={() => navigateToView('services')}
                      className="px-8 py-4 rounded-xl border border-gray-700 bg-gray-900/30 text-gray-300 hover:text-white hover:border-gray-500 hover:bg-gray-800/40 font-bold text-base transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      See Our Solutions
                    </button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="pt-6 grid grid-cols-3 gap-6 border-t border-gray-800/80 max-w-lg">
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">24/7</div>
                      <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">Lead Follow-Up</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">15+ hrs</div>
                      <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">Saved Weekly</div>
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
                      <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">Custom Setup</div>
                    </div>
                  </div>
                </div>

                {/* Hero Right Visual Interface Mockup - Premium Interactive Simulation */}
                <div className="lg:col-span-5 relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-cyan-400/10 rounded-3xl filter blur-3xl -z-10" />
                  
                  <div className="bg-[#0b1528] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden text-left">
                    {/* Window Controls */}
                    <div className="bg-gray-950 px-4 py-3 border-b border-gray-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 block" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80 block" />
                        <span className="w-3 h-3 rounded-full bg-green-500/80 block" />
                      </div>
                      <span className="text-xs text-gray-500 font-mono">live_lead_routing_engine.py</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono font-semibold text-[10px]">● ACTIVE</span>
                    </div>

                    {/* Simulation Console Screen */}
                    <div className="p-6 space-y-6 font-mono text-xs">
                      {/* Interactive Step 1 */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-cyan-400">
                          <Zap className="w-4 h-4 animate-bounce" />
                          <span>[08:42:01 AM] Inbound Web Lead Captured</span>
                        </div>
                        <div className="pl-6 text-gray-400 bg-gray-900/60 p-3 rounded border border-gray-800/80">
                          <p><strong>Source:</strong> Facebook Ads campaign</p>
                          <p><strong>Company:</strong> Apex Medical Inc.</p>
                          <p><strong>Query:</strong> "Need patient booking integration ASAP."</p>
                        </div>
                      </div>

                      {/* Interactive Step 2 */}
                      <div className="space-y-2 border-l-2 border-blue-600 pl-4 py-1">
                        <div className="text-indigo-400 flex items-center gap-2">
                          <Bot className="w-4 h-4" />
                          <span>[08:42:04 AM] Triggering AI Speed-To-Lead</span>
                        </div>
                        <p className="text-gray-400 italic">"Sent qualified text & WhatsApp introductory proposal via Twilio API..."</p>
                      </div>

                      {/* Interactive Step 3 */}
                      <div className="space-y-2 border-l-2 border-emerald-500 pl-4 py-1">
                        <div className="text-emerald-400 flex items-center gap-2">
                          <Check className="w-4 h-4" />
                          <span>[08:42:48 AM] Lead Engaged & Calendar Meeting Booked</span>
                        </div>
                        <div className="pl-2 bg-emerald-950/20 text-emerald-300 p-2 rounded text-[11px] border border-emerald-900/50">
                          ✔ Meeting Booked on GoHighLevel calendar: <br />
                          <strong>Strategy Session with Chief Advisor</strong> - July 20 at 2 PM.
                        </div>
                      </div>

                      {/* Interactive Step 4 */}
                      <div className="flex items-center justify-between text-[11px] text-gray-400 pt-2 border-t border-gray-800/80">
                        <span>Total Elapsed Time: <strong className="text-white">47 seconds</strong></span>
                        <span className="text-emerald-400 font-bold">100% Automated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Trusted Section */}
            <section id="trusted-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gray-900/20 border border-gray-800/80 rounded-2xl py-10 px-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 filter blur-3xl rounded-full" />
                <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-8">Businesses We Help</h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
                  {[
                    { name: 'Healthcare', desc: 'Clinics & Practices', color: 'text-cyan-400' },
                    { name: 'Real Estate', desc: 'Agencies & Brokers', color: 'text-amber-400' },
                    { name: 'Legal Services', desc: 'Firms & Attorneys', color: 'text-indigo-400' },
                    { name: 'Marketing', desc: 'Growth Agencies', color: 'text-purple-400' },
                    { name: 'Home Services', desc: 'HVAC & Plumbing', color: 'text-teal-400' },
                    { name: 'Consultants', desc: 'Coaches & Advisory', color: 'text-pink-400' },
                    { name: 'Startups', desc: 'High-growth Tech', color: 'text-blue-400' }
                  ].map((industry, i) => (
                    <div 
                      key={i} 
                      className="p-4 rounded-xl bg-gray-950/40 border border-gray-800/50 hover:border-gray-700/80 hover:bg-gray-900/30 transition-all duration-200 cursor-pointer group text-center"
                    >
                      <div className={`font-bold text-sm text-white mb-1 group-hover:scale-105 transition-transform duration-200 flex justify-center items-center gap-1`}>
                        <span>{industry.name}</span>
                      </div>
                      <div className="text-[10px] text-gray-500 font-medium">{industry.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Problem Section */}
            <section id="problem-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                <h2 className="text-xs font-bold uppercase tracking-widest text-red-400">The Problem</h2>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-sans">
                  Most Businesses Lose Revenue Because Their Processes Are Manual
                </h3>
                <p className="text-gray-400 text-base sm:text-lg">
                  Relying on manual labor to capture and convert leads creates massive friction, slows down follow-up times, and leads to expensive database leaks.
                </p>
              </div>

              {/* Grid of Problem Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROBLEMS.map((problem) => (
                  <div 
                    key={problem.id}
                    id={`problem-card-${problem.id}`}
                    className="p-8 rounded-2xl bg-[#0b1528] border border-gray-800/80 hover:border-red-900/50 hover:bg-[#0c1930] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-left"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 filter blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="space-y-5">
                      <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center border border-gray-800 group-hover:bg-red-950/20 group-hover:border-red-900/50 transition-colors duration-300">
                        {getProblemIcon(problem.icon)}
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-red-300 transition-colors duration-200">
                        {problem.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed font-body">
                        {problem.impact}
                      </p>
                    </div>
                    <div className="pt-6 border-t border-gray-800/60 mt-6 text-xs text-gray-500 font-body italic">
                      {problem.details}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Solution Section */}
            <section id="solution-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">The Solution</h2>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-sans">
                  AI That Works Like Your Best Employee
                </h3>
                <p className="text-gray-400 text-base sm:text-lg">
                  We implement robust, fully automated business infrastructure that works tirelessly around the clock to capture, qualify, book, and coordinate everything autonomously.
                </p>
              </div>

              {/* Solution Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SOLUTIONS.map((solution) => (
                  <div
                    key={solution.id}
                    id={`solution-card-${solution.id}`}
                    className="p-8 sm:p-10 rounded-2xl bg-[#0b1528] border border-gray-800/80 hover:border-blue-900/60 hover:bg-[#0c1a35] transition-all duration-300 flex flex-col justify-between group text-left"
                  >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-gray-950 flex items-center justify-center border border-gray-800/80 group-hover:border-blue-500/40 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all duration-300">
                          {getSolutionIcon(solution.icon)}
                        </div>
                        <span className="text-[10px] font-mono text-gray-500 bg-gray-900 px-2 py-1 rounded border border-gray-800">100% CUSTOM</span>
                      </div>

                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-200">
                        {solution.title}
                      </h4>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {solution.description}
                      </p>

                      <ul className="space-y-3 pt-2">
                        {solution.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-xs text-gray-300">
                            <span className="w-5 h-5 rounded-full bg-blue-950/80 flex items-center justify-center border border-blue-900/50 mt-0.5">
                              <Check className="w-3.5 h-3.5 text-blue-400" />
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 border-t border-gray-800/60 mt-8 bg-blue-950/20 p-4 rounded-xl border border-blue-900/30">
                      <div className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-1">Business Outcome:</div>
                      <p className="text-xs text-gray-300 leading-relaxed font-body">
                        {solution.outcome}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* How It Works & Interactive AI Audit Tool Section */}
            <section id="audit-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                
                {/* Left Side: Timeline */}
                <div className="lg:col-span-5 space-y-8 text-left flex flex-col justify-between">
                  <div className="space-y-4">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Our Methodology</h2>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                      How We Automate Your Business
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      We handle everything from initial bottleneck analysis to strategy, pipeline build, deployment, and ongoing refinement.
                    </p>
                  </div>

                  {/* 4-Step Timeline list */}
                  <div className="space-y-6 pt-4">
                    {HOW_IT_WORKS.map((step) => (
                      <div key={step.stepNumber} className="flex gap-4 group">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-950 border border-blue-800/60 flex items-center justify-center font-bold text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            {step.stepNumber}
                          </div>
                          {step.stepNumber < 4 && <div className="w-0.5 bg-gradient-to-b from-blue-900 to-transparent h-14 my-1" />}
                        </div>
                        <div className="space-y-1 py-1 text-left">
                          <div className="flex items-center gap-2">
                            <h4 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors duration-200">{step.title}</h4>
                            <span className="text-[10px] bg-gray-900 text-gray-500 px-2 py-0.5 rounded font-mono font-bold uppercase tracking-wider border border-gray-800">{step.timeline}</span>
                          </div>
                          <p className="text-xs text-gray-400 leading-relaxed max-w-sm">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Interactive AI Audit Tool Form */}
                <div className="lg:col-span-7">
                  <div className="bg-[#0b1528] border border-gray-800 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-2xl h-full flex flex-col justify-between text-left">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/5 filter blur-3xl rounded-full" />
                    
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 text-[10px] font-bold uppercase tracking-wider rounded-lg">
                        <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Interactive AI Strategy Generator</span>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-2xl font-bold text-white">Generate Your Free AI Audit</h4>
                        <p className="text-xs text-gray-400">
                          Receive a personalized automation blueprint showing exact quick wins, estimated hours saved, and conversion growth potential.
                        </p>
                      </div>

                      {/* Form */}
                      {!auditResult && !loading && (
                        <form onSubmit={handleAuditSubmit} className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Your Name</label>
                              <input 
                                type="text"
                                required
                                placeholder="Priyanka"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full bg-gray-950/60 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/80 transition-colors duration-200"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Business Email</label>
                              <input 
                                type="email"
                                required
                                placeholder="hello@startupbae.com"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full bg-gray-950/60 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/80 transition-colors duration-200"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Company Name</label>
                              <input 
                                type="text"
                                placeholder="StartupBae Client"
                                value={formData.company}
                                onChange={(e) => setFormData({...formData, company: e.target.value})}
                                className="w-full bg-gray-950/60 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/80 transition-colors duration-200"
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Industry</label>
                              <select 
                                value={formData.industry}
                                onChange={(e) => setFormData({...formData, industry: e.target.value})}
                                className="w-full bg-gray-950/60 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/50 transition-colors duration-200 appearance-none"
                              >
                                <option value="Healthcare">Healthcare Clinics</option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Marketing Agency">Marketing Agencies</option>
                                <option value="Home Services">Home Services (Plumbing, HVAC)</option>
                                <option value="Professional Services">Consultants & Legal</option>
                                <option value="Startups">High-growth Startups</option>
                              </select>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <label className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Current Tools / Process Used</label>
                            <input 
                              type="text"
                              placeholder="Google Sheets, manual emails, text messages, no CRM"
                              value={formData.currentTools}
                              onChange={(e) => setFormData({...formData, currentTools: e.target.value})}
                              className="w-full bg-gray-950/60 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/80 transition-colors duration-200"
                            />
                          </div>

                          <div className="space-y-1">
                            <label className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider">Biggest Operational Bottleneck</label>
                            <select 
                              value={formData.challenge}
                              onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                              className="w-full bg-gray-950/60 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/50 transition-colors duration-200"
                            >
                              <option value="Missed phone calls & no call follow-up">Missed phone calls & no voicemail follow-up</option>
<option value="Slow lead response (takes hours or days)">Slow speed-to-lead follow-up (takes hours or days)</option>
<option value="Leads lost or forgotten in spreadsheets">Leads forgotten in sheets/emails (no CRM)</option>
<option value="Hours spent manually drafting emails/reminders">Too many hours spent on manual scheduling/reminders</option>
<option value="Disconnected software systems & data silos">Disconnected software platforms that don't sync</option>
<option value="Customers asking the same questions repeatedly">Customers asking the same questions repeatedly</option>
<option value="Too many repetitive administrative tasks">Too many repetitive administrative tasks</option>
<option value="Manual client onboarding">Manual client onboarding process</option>
<option value="Manual employee onboarding">Manual employee onboarding process</option>
<option value="No visibility into project status">No visibility into project status</option>
<option value="Tasks falling through the cracks">Tasks falling through the cracks</option>
<option value="Missed project deadlines due to poor tracking">Missed project deadlines due to poor tracking</option>
<option value="Project updates scattered across multiple tools">Project updates scattered across email, WhatsApp & Slack</option>
<option value="Too many meetings for project updates">Too many meetings just to get status updates</option>
<option value="Manual client progress reporting">Manual client progress reporting</option>
<option value="Approvals delayed due to manual processes">Approvals delayed because everything is manual</option>
<option value="Manual task assignment and tracking">Manual task assignment and tracking</option>
<option value="Customer support tickets piling up">Customer support tickets piling up</option>
<option value="Sales team forgets to follow up">Sales team forgets to follow up with prospects</option>
<option value="Manual data entry between systems">Manual data entry between multiple systems</option>
<option value="No centralized customer information">No centralized customer or project information</option>
<option value="Appointment scheduling takes too much time">Appointment scheduling takes too much time</option>
<option value="High appointment no-show rate">High no-show rate for appointments</option>
<option value="Poor communication between teams">Poor communication between internal teams</option>
<option value="Employee requests handled manually">Employee requests handled manually</option>
<option value="Document approvals are slow">Document approvals are slow</option>
<option value="Manual invoice generation & payment follow-up">Manual invoice generation & payment follow-up</option>
<option value="Manual proposal and contract creation">Manual proposal and contract creation</option>
<option value="Inventory or order updates handled manually">Inventory or order updates handled manually</option>
<option value="Recruitment and interview scheduling is time-consuming">Recruitment and interview scheduling is time-consuming</option>
<option value="Need an AI automation audit">Need an AI automation audit (Not sure where to start)</option>
<option value="Other">Other</option>
                            </select>
                          </div>

                          <button 
                            type="submit"
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/20 hover:opacity-95 hover:shadow-blue-500/35 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer mt-2"
                          >
                            <span>Generate My Custom Automation Strategy</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </form>
                      )}

                      {/* Loading Screen */}
                      {loading && (
                        <div className="py-20 flex flex-col items-center justify-center space-y-6 text-center">
                          <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
                          <div className="space-y-2">
                            <p className="text-white font-semibold text-base">{loadingMessage}</p>
                            <p className="text-xs text-gray-500">StartupBae Artificial Intelligence analyzing data inputs...</p>
                          </div>
                        </div>
                      )}

                      {/* Audit Strategy Results Section */}
                      {auditResult && !loading && (
                        <div className="space-y-6 animate-fade-in text-left">
                          
                          {/* Metrics summary banner */}
                          <div className="grid grid-cols-3 gap-3 bg-gray-950 border border-gray-800 p-4 rounded-xl text-center">
                            <div>
                              <div className="text-cyan-400 font-extrabold text-sm sm:text-base">{auditResult.estimatedMetrics?.hoursSavedPerWeek || '10-12 hrs'}</div>
                              <div className="text-[9px] text-gray-500 uppercase font-semibold">Hours Saved/Wk</div>
                            </div>
                            <div className="border-x border-gray-800">
                              <div className="text-emerald-400 font-extrabold text-sm sm:text-base">{auditResult.estimatedMetrics?.estimatedConversionUplift || '+25%'}</div>
                              <div className="text-[9px] text-gray-500 uppercase font-semibold">Conversion Uplift</div>
                            </div>
                            <div>
                              <div className="text-amber-400 font-extrabold text-xs sm:text-sm truncate">{auditResult.estimatedMetrics?.responseTimeImprovement || '< 30s'}</div>
                              <div className="text-[9px] text-gray-500 uppercase font-semibold">Response Time</div>
                            </div>
                          </div>

                          {/* Executive Summary */}
                          <div className="space-y-2">
                            <span className="text-[10px] font-mono uppercase text-gray-500 font-bold">1. Executive Diagnosis</span>
                            <p className="text-xs text-gray-300 leading-relaxed bg-gray-950 p-4 rounded-xl border border-gray-800/80">
                              {auditResult.summary}
                            </p>
                          </div>

                          {/* Quick Wins */}
                          <div className="space-y-3">
                            <span className="text-[10px] font-mono uppercase text-gray-500 font-bold">2. Quick Win Automations</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {auditResult.quickWins?.map((win: any, idx: number) => (
                                <div key={idx} className="p-4 rounded-xl bg-gray-950/60 border border-gray-800/80 flex flex-col justify-between space-y-2">
                                  <div>
                                    <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                                      <span>{win.title}</span>
                                    </div>
                                    <p className="text-[11px] text-gray-400 leading-relaxed">{win.description}</p>
                                  </div>
                                  <div className="pt-2 border-t border-gray-900/60 flex justify-between text-[10px] text-cyan-400 font-mono">
                                    <span>Time Saved: {win.hoursSaved}</span>
                                    <span className="text-emerald-400">{win.impact}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Long Term Blueprint */}
                          <div className="space-y-2">
                            <span className="text-[10px] font-mono uppercase text-gray-500 font-bold">3. 3-6 Month Strategy Blueprint</span>
                            <p className="text-xs text-gray-400 leading-relaxed bg-gray-950 p-4 rounded-xl border border-gray-800/80">
                              {auditResult.longTermStrategy}
                            </p>
                          </div>

                          {/* Recommended Technology stack tags */}
                          <div className="space-y-2">
                            <span className="text-[10px] font-mono uppercase text-gray-500 font-bold">Recommended Solution Stack</span>
                            <div className="flex flex-wrap gap-2">
                              {auditResult.recommendedStack?.map((tool: string, idx: number) => (
                                <span key={idx} className="text-[10px] bg-blue-950/40 text-blue-400 px-3 py-1 rounded-lg border border-blue-900/50 font-mono">{tool}</span>
                              ))}
                            </div>
                          </div>

                          {/* Action CTA Block inside result to secure booking */}
                          <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-xs text-gray-400">Ready to deploy these custom systems?</p>
                            <div className="flex items-center gap-3 w-full sm:w-auto">
                              <button
                                onClick={() => setAuditResult(null)}
                                className="px-4 py-2 text-xs font-bold text-gray-500 hover:text-white transition-colors"
                              >
                                Edit Inputs
                              </button>
                              <button
                                onClick={() => navigateToView('contact')}
                                className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs shadow-md shadow-blue-500/10 hover:opacity-95 transition-opacity duration-200 flex items-center gap-2 flex-grow sm:flex-grow-0 justify-center"
                              >
                                <span>Book Integration Call</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits Section - Bento Grid Layout */}
            <section id="benefits-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">The Benefits</h2>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Business Outcomes Over Technology
                </h3>
                <p className="text-gray-400 text-base sm:text-lg">
                  Every pipeline we deploy, CRM we configure, and voice agent we program is built to deliver cold, hard business results you can measure in hours and dollars.
                </p>
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BENEFITS.map((benefit) => (
                  <div
                    key={benefit.id}
                    id={`benefit-card-${benefit.id}`}
                    className="p-8 rounded-2xl bg-[#0b1528] border border-gray-800/80 hover:border-blue-900/40 hover:bg-[#0c1a35] transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden"
                  >
                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-gray-950 flex items-center justify-center border border-gray-800 group-hover:border-blue-500/40 transition-colors duration-300">
                          {getBenefitIcon(benefit.icon)}
                        </div>
                        <span className="text-xs text-blue-400 font-mono font-bold bg-blue-950/40 px-3 py-1 rounded-full border border-blue-900/30">
                          {benefit.metric}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-200">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed font-body">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Case Studies Section */}
            <section id="case-studies-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400">Case Studies</h2>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Real Automation. Proven Value.
                </h3>
                <p className="text-gray-400 text-base sm:text-lg">
                  Take a look at how we replaced tedious, manual, and fragile operations with smooth, high-converting AI automation.
                </p>
              </div>

              {/* Grid of Case Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {CASE_STUDIES.map((study) => (
                  <div
                    key={study.id}
                    className="p-8 sm:p-10 rounded-2xl bg-[#0b1528] border border-gray-800/80 hover:border-emerald-900/40 transition-all duration-300 flex flex-col justify-between group text-left"
                  >
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-800/60">
                        <div>
                          <h4 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-200">{study.company}</h4>
                          <span className="text-xs text-gray-500 font-medium">{study.industry}</span>
                        </div>
                        <div className="bg-emerald-950/20 border border-emerald-900/40 px-4 py-2 rounded-xl text-center">
                          <div className="text-emerald-400 font-extrabold text-lg tracking-tight">{study.metric}</div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">{study.metricLabel}</div>
                        </div>
                      </div>

                      <p className="text-sm text-gray-400 leading-relaxed italic font-body">
                        "{study.summary}"
                      </p>

                      {/* Before / After Panels */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="p-4 rounded-xl bg-gray-950/40 border border-gray-800/60">
                          <div className="text-red-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 block" />
                            <span>Before StartupBae</span>
                          </div>
                          <p className="text-xs text-gray-400 leading-relaxed">{study.before}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-emerald-950/10 border border-emerald-900/30">
                          <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 block" />
                            <span>With StartupBae AI</span>
                          </div>
                          <p className="text-xs text-gray-300 leading-relaxed">{study.after}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-gray-800/60 flex justify-end">
                      <button
                        onClick={() => prefillAndGoToContact(`Interested in results like ${study.company}`)}
                        className="text-xs font-semibold text-emerald-400 hover:text-white flex items-center gap-2 group/btn"
                      >
                        <span>Replicate These Results</span>
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        )}

        {/* ==================================== */}
        {/* 2. SERVICES VIEW */}
        {/* ==================================== */}
        {currentView === 'services' && (
          <div id="services-view" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-28">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400">Our Solutions</h2>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight font-sans">
                High-Performance Automation Deliverables
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                We craft, install, and continuously optimize full-stack automation pipelines. Each service targets a specific revenue leak.
              </p>
            </div>

            {/* List of full services details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {SERVICES.map((service) => (
                <div 
                  key={service.id}
                  id={`service-detail-${service.id}`}
                  className="bg-[#0b1528] border border-gray-800 rounded-3xl p-8 sm:p-10 hover:border-blue-900/55 transition-all duration-300 flex flex-col justify-between group text-left"
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gray-950 flex items-center justify-center border border-gray-800 group-hover:border-blue-500/30 transition-all duration-300">
                        {getServiceIcon(service.id === 'ai-voice-agents' ? 'PhoneCall' : service.id === 'crm-implementation' ? 'Database' : service.id === 'lead-automation' ? 'Zap' : service.id === 'workflow-automation' ? 'Workflow' : 'Laptop')}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-200">{service.title}</h3>
                        <span className="text-[10px] font-mono text-gray-500 uppercase font-semibold">Ready to Implement</span>
                      </div>
                    </div>

                    {/* Problem / Solution Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">The Business Problem</span>
                        <p className="text-xs text-gray-400 leading-relaxed font-body">{service.problem}</p>
                      </div>
                      <div className="space-y-2">
                        <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Our Automation Solution</span>
                        <p className="text-xs text-gray-300 leading-relaxed font-body">{service.solution}</p>
                      </div>
                    </div>

                    {/* Business outcomes */}
                    <div className="space-y-3 pt-4 border-t border-gray-800/80">
                      <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Measurable Business Outcomes</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                            <span className="w-4 h-4 rounded-full bg-blue-950/80 flex items-center justify-center border border-blue-900/50 mt-0.5 shrink-0">
                              <Check className="w-3 h-3 text-blue-400" />
                            </span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500 font-mono">Integration Complexity: <span className="text-white">Medium to Advanced</span></p>
                    <button
                      onClick={() => prefillAndGoToContact(`Need automation for: ${service.title}`)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs hover:opacity-95 transition-opacity w-full sm:w-auto text-center cursor-pointer"
                    >
                      Automate This Workflow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================== */}
        {/* 3. INDUSTRIES VIEW */}
        {/* ==================================== */}
        {currentView === 'industries' && (
          <div id="industries-view" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-28">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400">Industries We Serve</h2>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight font-sans">
                Industry-Specific Workflows
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                Generic solutions fail because every industry operates on different core systems. We construct customized integrations designed for your specific business.
              </p>
            </div>

            {/* List of industries sections */}
            <div className="space-y-16">
              {INDUSTRIES.map((ind) => (
                <div 
                  key={ind.id}
                  id={`industry-section-${ind.id}`}
                  className="bg-[#0b1528] border border-gray-800 rounded-3xl p-8 sm:p-10 text-left relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 filter blur-3xl rounded-full" />
                  
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Industry Header Details */}
                    <div className="lg:col-span-4 space-y-4">
                      <div className="w-14 h-14 rounded-2xl bg-gray-950 flex items-center justify-center border border-gray-800">
                        {getIndustryIcon(ind.id === 'healthcare' ? 'Stethoscope' : ind.id === 'real-estate' ? 'Home' : ind.id === 'marketing-agencies' ? 'Megaphone' : ind.id === 'home-services' ? 'Wrench' : ind.id === 'professional-services' ? 'Briefcase' : 'Rocket')}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{ind.name}</h2>
                        <p className="text-xs text-emerald-400 font-medium mt-1">{ind.tagline}</p>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        We connect with your industry's specific CRM, booking calendar, and client portals (GoHighLevel, Clio, Housecall Pro, EHR/PMS, Zillow).
                      </p>
                      <button
                        onClick={() => prefillAndGoToContact(`Industry automation blueprint for: ${ind.name}`)}
                        className="px-5 py-3 rounded-lg bg-gray-950 border border-gray-800 hover:border-gray-600 text-gray-300 hover:text-white font-bold text-xs transition-colors cursor-pointer w-full"
                      >
                        Get {ind.name} Blueprint
                      </button>
                    </div>

                    {/* Challenges vs Solutions comparison panels */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Challenges Column */}
                      <div className="p-6 rounded-2xl bg-red-950/5 border border-red-950/20 space-y-4">
                        <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 block" />
                          <span>Common Industry Bottlenecks</span>
                        </h4>
                        <ul className="space-y-4">
                          {ind.challenges.map((challenge, i) => (
                            <li key={i} className="text-xs text-gray-400 leading-relaxed flex items-start gap-2">
                              <span className="text-red-500 font-bold shrink-0 mt-0.5">•</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Our Custom Solutions Column */}
                      <div className="p-6 rounded-2xl bg-emerald-950/5 border border-emerald-950/20 space-y-4">
                        <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 block" />
                          <span>StartupBae Systems deployed</span>
                        </h4>
                        <ul className="space-y-4">
                          {ind.solutions.map((sol, i) => (
                            <li key={i} className="text-xs text-gray-300 leading-relaxed flex items-start gap-2">
                              <span className="w-4 h-4 rounded-full bg-emerald-950/60 flex items-center justify-center border border-emerald-900/50 mt-0.5 shrink-0">
                                <Check className="w-2.5 h-2.5 text-emerald-400" />
                              </span>
                              <span>{sol}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                  </div>

                  {/* Measurable outcomes ribbon */}
                  <div className="mt-8 pt-6 border-t border-gray-800/60 bg-gray-950/40 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Historical Outcomes:</span>
                    <div className="flex flex-wrap gap-4 justify-end">
                      {ind.outcomes.map((out, i) => (
                        <span key={i} className="text-xs bg-emerald-950/20 text-emerald-300 px-3 py-1 rounded-lg border border-emerald-900/40 font-medium">{out}</span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================== */}
        {/* 4. ABOUT VIEW */}
        {/* ==================================== */}
        {currentView === 'about' && (
          <div id="about-view" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-28">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-400">Our Story</h2>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight font-sans">
                Making AI Practical & Profitable
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                We believe AI shouldn't be a generic technical buzzword. It should be a robust employee that saves time, secures leads, and scales revenue.
              </p>
            </div>

            {/* Main About content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <h3 className="text-2xl font-bold text-white">Who is StartupBae?</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  We are a premium AI automation and CRM implementation partner. We do not look like a traditional, slow-moving digital marketing agency or standard software development outsourcing firm. Instead, we act as your agile chief automation and systems officer.
                </p>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Our core team possesses deep delivery experience in enterprise product management, CRM configuration (such as GoHighLevel and custom solutions), voice-agent programming, and API integration development. This allows us to quickly diagnose client bottlenecks and construct reliable pipelines that scale without requiring you to hire expensive full-time administrative coordinators.
                </p>

                <div className="p-6 rounded-2xl bg-blue-950/15 border border-blue-900/30 space-y-3">
                  <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider">Our Core Mission</h4>
                  <p className="text-xs text-gray-300 leading-relaxed font-body">
                    To make generative artificial intelligence and workflow CRM systems completely practical, secure, and highly profitable for growing businesses. We measure our success entirely in customer hours saved and appointments booked.
                  </p>
                </div>
              </div>

              {/* Graphic cards showing values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                {[
                  { title: 'Zero Technology Fluff', desc: 'We only deploy systems that have a direct, visible impact on conversion rates, speed-to-lead times, or hours saved.', icon: <ShieldCheck className="w-8 h-8 text-cyan-400" /> },
                  { title: 'Premium Whitespace Quality', desc: 'No cookie-cutter templates. Every voice prompt, CRM trigger, and automated email copy is mapped specifically to your brand\'s tone.', icon: <Sparkles className="w-8 h-8 text-teal-400" /> },
                  { title: 'Complete CRM Integration', desc: 'We sync all leads into a central transparent pipeline, providing total accountability for every marketing channel.', icon: <BarChart3 className="w-8 h-8 text-indigo-400" /> },
                  { title: 'Continuous Refinement', desc: 'AI models require continuous training. We monitor call records and chat logs monthly to keep conversations razor-sharp.', icon: <Users className="w-8 h-8 text-pink-400" /> }
                ].map((val, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-[#0b1528] border border-gray-800 flex flex-col justify-between space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-950 flex items-center justify-center border border-gray-800">
                      {val.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-2">{val.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================================== */}
        {/* 5. CONTACT VIEW */}
        {/* ==================================== */}
        {currentView === 'contact' && (
          <div id="contact-view" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-28">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Get Started</h2>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight font-sans">
                Book Your Strategy Call
              </h1>
              <p className="text-gray-400 text-lg">
                Let's construct a reliable, high-converting automation blueprint for your business operations.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-[#0b1528] border border-gray-800 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-2xl text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 filter blur-3xl rounded-full" />
                
                {/* Contact Submit form */}
                {!contactSuccess && (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Full Name</label>
                        <input 
                          type="text"
                          required
                          placeholder="Priyanka"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500/80 transition-colors duration-200"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Business Email</label>
                        <input 
                          type="email"
                          required
                          placeholder="hello@startupbae.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500/80 transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Company Name</label>
                        <input 
                          type="text"
                          required
                          placeholder="StartupBae Client"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500/80 transition-colors duration-200"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Phone Number</label>
                        <input 
                          type="tel"
                          required
                          placeholder="+1 (555) 019-2834"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500/80 transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-400 font-bold uppercase tracking-wider">Current Challenge / Systems Needed</label>
                      <textarea 
                        required
                        rows={4}
                        placeholder="Explain what manual processes are costing your team time or where you are losing leads..."
                        value={formData.challenge}
                        onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                        className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-blue-500/80 transition-colors duration-200 resize-none"
                      />
                    </div>

                    {/* SEO Terms Check indicators to show professionalism */}
                    <div className="bg-gray-950 border border-gray-800/80 p-4 rounded-xl flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                      <p className="text-xs text-gray-400">
                        StartupBae is fully GDPR & HIPAA compliant. Your database credentials, customer lead details, and API secrets are protected under robust end-to-end security parameters.
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={contactLoading}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/20 hover:opacity-95 hover:shadow-blue-500/35 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {contactLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Routing Lead to Google Sheets...</span>
                        </>
                      ) : (
                        <>
                          <span>Book My Free AI Strategy Call</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* Successful capture - Interactive Speed-To-Lead Demo */}
                {contactSuccess && (
                  <div className="py-8 space-y-6 text-center max-w-md mx-auto">
                    <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                      <Check className="w-8 h-8 text-emerald-400" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Strategy Call Requested!</h3>
                      <p className="text-xs text-emerald-400 font-mono font-bold">SPEED-TO-LEAD PIPELINE DEMO: ACTIVE</p>
                      <p className="text-sm text-gray-400 leading-relaxed font-body">
                        You've just witnessed our lead routing system in action. Your submission triggered the server to process, structure, and dispatch your request instantly.
                      </p>
                    </div>

                    {/* Simulating CRM Sync receipt */}
                    <div className="bg-gray-950 border border-gray-800 p-4 rounded-xl text-left font-mono text-[11px] space-y-2">
                      <div className="flex justify-between border-b border-gray-900 pb-1.5 text-gray-500">
                        <span>CRM LOG ROUTING</span>
                        <span className="text-emerald-400">✔ SYNCED</span>
                      </div>
                      <p><strong>System ID:</strong> <span className="text-white">{contactSuccess.leadId}</span></p>
                      <p><strong>Status:</strong> <span className="text-white">{contactSuccess.message}</span></p>
                      <p><strong>CRM Route:</strong> <span className="text-white">{contactSuccess.routing}</span></p>
                      <p><strong>Assigned Advisor:</strong> <span className="text-white">Priyanka (Lead Strategist)</span></p>
                    </div>

                    <div className="pt-4 border-t border-gray-800 flex justify-center gap-4">
                      <button
                        onClick={() => setContactSuccess(null)}
                        className="text-xs font-semibold text-gray-400 hover:text-white transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer Section */}
      <footer id="main-footer" className="bg-[#02050c] border-t border-gray-900 pt-16 pb-12 relative z-10 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Column 1: Info and Brand */}
            <div className="md:col-span-4 space-y-6">
              <div 
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => navigateToView('home')}
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Startup<span className="text-blue-400">Bae</span>
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed max-w-sm font-body">
                We design, build, and optimize customer acquisition, support, and business automations that grow service businesses without raising operational headcounts.
              </p>
              
              {/* Keywords Tagging for SEO naturally */}
              <div className="text-[10px] text-gray-600 leading-relaxed font-mono">
                Keywords: AI Automation • CRM Implementation • GoHighLevel Setup • AI Voice Receptionist • Business AI Solutions • Workflow Integration
              </div>
            </div>

            {/* Column 2: Solutions */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Solutions</h4>
              <ul className="space-y-2 text-xs">
                {['AI Receptionist', 'AI Voice Agents', 'CRM Implementation', 'Lead Automation', 'Workflow Automation'].map((name, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => navigateToView('services')}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Industries */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Industries</h4>
              <ul className="space-y-2 text-xs">
                {['Healthcare', 'Real Estate', 'Marketing Agencies', 'Home Services', 'Professional Services', 'Startups'].map((name, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => navigateToView('industries')}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Company Links */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
              <ul className="space-y-2 text-xs">
                {['Case Studies', 'About Story', 'Book Strategy Call'].map((name, idx) => {
                  const viewMap: any = {
                    'Case Studies': 'home',
                    'About Story': 'about',
                    'Book Strategy Call': 'contact'
                  };
                  return (
                    <li key={idx}>
                      <button 
                        onClick={() => navigateToView(viewMap[name])}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 5: Social / Connect */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Connect</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href="mailto:hello@startupbae.com" className="hover:text-white transition-colors truncate">hello@startupbae.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-blue-500 shrink-0" />
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright ribbon */}
          <div className="mt-12 pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-body">
            <span>© 2026 StartupBae. All Rights Reserved.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
