import { ProblemCard, SolutionCard, HowItWorksStep, BenefitItem, CaseStudyCard, ServiceDetail, IndustryDetail } from './types';

export const PROBLEMS: ProblemCard[] = [
  {
    id: 'missed-calls',
    title: 'Missed Calls & Lost Leads',
    impact: '62% of inbound calls to small businesses go unanswered. When a prospect calls and you don\'t pick up, they immediately call your competitor.',
    icon: 'PhoneMissed',
    details: 'Every unanswered call is direct revenue handed to someone else. Hiring receptionist staff is expensive, and they don\'t work 24/7/365.'
  },
  {
    id: 'slow-followups',
    title: 'Slow Follow-up Times',
    impact: 'Leads contacted within 5 minutes are 21x more likely to qualify. Most businesses take hours or even days to respond.',
    icon: 'Hourglass',
    details: 'In the digital age, speed-to-lead is everything. If you don\'t respond instantly, the lead cools down and goes elsewhere.'
  },
  {
    id: 'leads-forgotten',
    title: 'Leads Forgotten in Inbox',
    impact: 'Up to 70% of sales leads are never followed up. Leads get lost in sticky notes, email threads, and manual spreadsheets.',
    icon: 'Inbox',
    details: 'Without a centralized CRM and automated tracking, valuable opportunities slip through the cracks of a busy daily schedule.'
  },
  {
    id: 'manual-admin',
    title: 'Hours Spent on Manual Admin',
    impact: 'Business owners spend up to 15+ hours per week copying data, scheduling appointments, sending reminders, and writing emails.',
    icon: 'ClipboardList',
    details: 'Repetitive admin tasks take you away from high-value work, scaling your team, or serving your clients.'
  },
  {
    id: 'poor-cx',
    title: 'Disconnected Software Silos',
    impact: 'When your website, CRM, email, and scheduler don\'t talk to each other, data gets lost and errors multiply.',
    icon: 'Layers',
    details: 'Manually transferring data between disconnected platforms creates bottlenecks and compromises client data integrity.'
  },
  {
    id: 'customer-exp',
    title: 'Friction-Filled Client Experience',
    impact: 'Modern clients expect instant booking, text reminders, fast answers, and seamless communication.',
    icon: 'UserX',
    details: 'If booking an appointment requires back-and-forth emails, you will lose tech-savvy buyers to easier alternatives.'
  }
];

export const SOLUTIONS: SolutionCard[] = [
  {
    id: 'ai-receptionist',
    title: 'AI Voice & Chat Receptionist',
    description: 'A custom-trained conversational agent that answers inbound phone calls, speaks like a human, qualifies leads, and books meetings 24/7.',
    bullets: [
      'Answers 100% of calls instantly',
      'Integrates directly with your calendar',
      'Collects name, email, phone, and requirements',
      'Handles complex FAQs with natural phrasing'
    ],
    icon: 'Bot',
    outcome: 'Eliminate missed opportunities and reduce front-desk receptionist overhead by up to 75%.'
  },
  {
    id: 'lead-automation',
    title: 'AI Speed-to-Lead Automation',
    description: 'An intelligent pipeline that trigger instant follow-ups via email, text, or WhatsApp the millisecond a lead is captured.',
    bullets: [
      'Sub-5-second multi-channel response',
      'AI-driven qualification conversations',
      'Automated nurture sequence and triggers',
      'GoHighLevel & custom API routing'
    ],
    icon: 'Zap',
    outcome: 'Multiply lead-to-booking conversion rates by 2.5x and build immediate professional trust.'
  },
  {
    id: 'crm-systems',
    title: 'Unified CRM Implementations',
    description: 'We construct and configure a high-converting, central pipeline using modern systems like GoHighLevel or custom databases.',
    bullets: [
      'Visual sales drag-and-drop pipelines',
      'Unified inbox for SMS, Email, GMB, & socials',
      'Live dashboard with deal value tracking',
      'Custom fields mapped precisely to your business'
    ],
    icon: 'Database',
    outcome: 'Never lose a lead again. Gain total transparency into your sales pipeline and marketing ROI.'
  },
  {
    id: 'business-automation',
    title: 'End-to-End Business Workflows',
    description: 'Connect all your software tools into unified, trigger-based automations that execute complex internal procedures.',
    bullets: [
      'Auto-generate invoices and contracts',
      'Trigger instant Slack/Teams team notifications',
      'Sync leads between ads, spreadsheets, and CRMs',
      'Automated client onboarding handoffs'
    ],
    icon: 'Workflow',
    outcome: 'Save up to 15 hours per week of manual labor and eradicate costly operational errors.'
  }
];

export const HOW_IT_WORKS: HowItWorksStep[] = [
  {
    stepNumber: 1,
    title: 'Free AI & CRM Audit',
    description: 'We analyze your current lead capture, sales process, and operational bottlenecks to build an automation blueprint tailored to your industry.',
    timeline: 'Day 1'
  },
  {
    stepNumber: 2,
    title: 'Automation Strategy',
    description: 'We design the step-by-step architecture of your AI voice agents, SMS follow-up workflows, and unified CRM pipeline.',
    timeline: 'Week 1'
  },
  {
    stepNumber: 3,
    title: 'Build & Deploy',
    description: 'Our expert team builds your custom AI agents, configures your CRM, programs integrations, and thoroughly tests the system.',
    timeline: 'Weeks 2-4'
  },
  {
    stepNumber: 4,
    title: 'Ongoing Optimization',
    description: 'We continuously train your AI models, monitor call/chat logs, adjust workflow triggers, and deliver monthly performance updates.',
    timeline: 'Continuous'
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    id: 'reduce-manual',
    title: 'Eradicate Repetitive Admin Work',
    description: 'Delegate repetitive data entry, follow-ups, and calendar coordination to automated background systems.',
    metric: '15+ Hours Saved',
    icon: 'Sparkles'
  },
  {
    id: 'respond-every',
    title: 'Never Miss Another Prospect',
    description: 'Engage 100% of web leads and phone calls instantly—even on weekends, holidays, and after-hours.',
    metric: '100% Lead Capture',
    icon: 'MessageSquareCheck'
  },
  {
    id: 'increase-meetings',
    title: 'Increase Appointment Volume',
    description: 'Our conversational AI qualifies leads and puts booked appointments directly onto your sales team\'s calendars.',
    metric: '+30% Bookings',
    icon: 'CalendarDays'
  },
  {
    id: 'improve-cx',
    title: 'Frictionless Client Experience',
    description: 'Deliver instant, premium, digital-first support that matches the standard of enterprise brands.',
    metric: '4.9/5 CSAT Est.',
    icon: 'HeartHandshake'
  },
  {
    id: 'save-hours',
    title: 'Scale Revenue, Not Overhead',
    description: 'Grow your sales volume and client capacity without hiring expensive full-time administrative staff.',
    metric: '75% Ops Savings',
    icon: 'TrendingUp'
  },
  {
    id: 'scale-wo-hiring',
    title: 'Fully Autonomous Operations',
    description: 'Configure intelligent workflows that automatically coordinate billing, routing, and notifications.',
    metric: '0% Manual Handoffs',
    icon: 'Cpu'
  }
];

export const CASE_STUDIES: CaseStudyCard[] = [
  {
    id: 'case-clinic',
    company: 'Evergreen Health Clinic',
    industry: 'Healthcare (Multi-location Clinic)',
    metric: '45% Faster Response',
    metricLabel: 'Lead Response Time',
    summary: 'A multi-location medical clinic struggled with high call volumes, resulting in unanswered inquiries and lost appointments. We deployed an AI Receptionist alongside a secure CRM scheduling pipeline.',
    before: 'Staff spent 20+ hours/week scheduling appointments. Over 30% of incoming calls went to voicemail during peak hours.',
    after: 'AI voice agent handles 100% of FAQs and schedules check-ups. Patient booking friction reduced to zero, saving front desk staff 18 hours per week.'
  },
  {
    id: 'case-re',
    company: 'Vanguard Realty Group',
    industry: 'Real Estate Brokerage',
    metric: '30% More Appointments',
    metricLabel: 'Meetings Booked Automatically',
    summary: 'Zillow and web leads were cooling down before agents could call them back. We engineered a speed-to-lead follow-up system triggering SMS & email within 10 seconds of lead capture.',
    before: 'Average lead follow-up was 45 minutes. Contact rate was under 40% as competitors reached buyers first.',
    after: 'Sub-5-second automated text conversation qualifies home-buyers and schedules a call with agents. Booking rate surged by 30% within 30 days.'
  },
  {
    id: 'case-agency',
    company: 'Apex Media Corp',
    industry: 'Marketing & Ad Agency',
    metric: '15 Hours Saved',
    metricLabel: 'Per Employee per Week',
    summary: 'An agency generating high lead volumes had their media buyers manually transferring contact data, drafting proposals, and copying client logs into disconnected Google Sheets.',
    before: 'Chaotic workflow silos. Leads often forgotten, resulting in lost retainer contracts worth thousands.',
    after: 'Deployed a unified GoHighLevel CRM connected with automated onboarding workflows. Contracts and onboarding forms send autonomously upon deal close.'
  },
  {
    id: 'case-home',
    company: 'Prime Plumbing & HVAC',
    industry: 'Home Services Business',
    metric: '60% Less Manual Work',
    metricLabel: 'Eradicated Administrative Admin',
    summary: 'Dispatched plumbers spent too much time calling back homeowners to confirm booking times. We built a text-based dispatch automated pipeline and WhatsApp reminder system.',
    before: 'High manual dispatcher work. Customers complained about late arrivals and lack of SMS notifications.',
    after: 'Client triggers automation by booking online. System text coordinates dispatchers, sends route times to plumbers, and updates the homeowner automatically.'
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    id: 'ai-receptionist',
    title: 'AI Receptionist & Booking Bot',
    problem: 'Front-desk receptionists are expensive, take breaks, go home at 5 PM, and can only handle one phone call or chat conversation at a time.',
    solution: 'An intelligent, conversational AI assistant embedded on your website, SMS, and phone lines. It qualifies incoming leads, schedules bookings in real-time, and answers complex business FAQs in seconds.',
    outcomes: [
      '24/7/365 active client acquisition',
      'Zero missed leads or phone call voicemails',
      'Seamless direct sync with Google Calendar, Outlook, or CRM calendars',
      'Automated qualification ensures your sales reps only talk to hot buyers'
    ],
    icon: 'Bot'
  },
  {
    id: 'ai-voice-agents',
    title: 'AI Voice Agents (Conversational AI)',
    problem: 'Cold-calling, outbound lead qualification, and answering inbound service calls requires major call center overhead and constant management.',
    solution: 'State-of-the-art conversational voice AI agents that speak naturally, understand complex contexts, handle accents, and talk directly on standard phone lines.',
    outcomes: [
      'Immediate answer with sub-second voice response latency',
      'Ability to handle thousands of concurrent calls simultaneously',
      'Automated collection of caller requirements routed straight to CRM',
      'Polite, professional, and consistent representation of your brand'
    ],
    icon: 'PhoneCall'
  },
  {
    id: 'crm-implementation',
    title: 'GoHighLevel & Custom CRM Setup',
    problem: 'Valuable contacts are scattered across spreadsheets, sticky notes, and email inbox threads with zero sales pipeline transparency.',
    solution: 'A complete custom-engineered CRM infrastructure that visualizes your sales pipeline, aggregates all communications into a unified inbox, and tracks ROI.',
    outcomes: [
      'Unified chat inbox for SMS, Email, WhatsApp, Instagram, and Webchat',
      'Drag-and-drop visual deal pipeline tracking every stage of the funnel',
      'Integrated payment links, contract sign-offs, and custom client records',
      'Automated revenue tracking and marketing conversion dashboards'
    ],
    icon: 'Database'
  },
  {
    id: 'lead-automation',
    title: 'Multi-Channel Lead Automation',
    problem: 'Leads buy from the provider who responds first. Delaying follow-up by even 15 minutes drops conversion likelihood by over 80%.',
    solution: 'Trigger-based workflows that contact fresh leads instantly across Email, SMS, and WhatsApp to initiate natural qualification conversations.',
    outcomes: [
      'Sub-10-second automated response to web-forms, FB ads, and Zillow leads',
      'Interactive text dialogue qualifies the buyer\'s budget and timeline',
      'Instant callback triggers connecting your sales representative to the lead',
      'Automated multi-step nurture flows to convert cold prospects'
    ],
    icon: 'Zap'
  },
  {
    id: 'workflow-automation',
    title: 'End-to-End Business Operations',
    problem: 'Your team spends hours copying customer details between ads, schedulers, invoice tools, and notification chats.',
    solution: 'Connecting your cloud platforms (Stripe, Slack, HubSpot, Zapier, Make) into seamless, reliable background automation loops.',
    outcomes: [
      'Automated client contract creation and payment invoice distribution',
      'Slack/Teams push notifications alerting your account managers of new sign-ups',
      'Background data syncing ensuring zero database inconsistency',
      'Autonomous client onboarding triggers upon Stripe checkout completion'
    ],
    icon: 'Workflow'
  },
  {
    id: 'website-landing-pages',
    title: 'High-Converting Landing Pages',
    problem: 'Beautiful websites often fail because they are not structured to convert traffic, lacking clear CTAs and CRM integration.',
    solution: 'Modern, blazing-fast, and premium landing pages designed explicitly to capture leads and hook directly into your backend CRM workflows.',
    outcomes: [
      'Optimized layout using conversion psychology and clear calls to action',
      'Pre-integrated CRM lead forms, calendar widgets, and live chats',
      'Optimized performance with Google PageSpeed scores above 95/100',
      'Perfect responsiveness across mobile, tablet, and desktop viewports'
    ],
    icon: 'Laptop'
  }
];

export const INDUSTRIES: IndustryDetail[] = [
  {
    id: 'healthcare',
    name: 'Healthcare Clinics',
    tagline: 'Streamline patient bookings and reduce phone congestion.',
    challenges: [
      'Front desk staff overwhelmed with scheduling checkups and answering basic FAQs.',
      'High rates of appointment no-shows due to lack of timely multi-channel reminders.',
      'Potential patients calling after-hours and leaving voicemails that are never returned.'
    ],
    solutions: [
      'AI Voice Agent answering calls 24/7 to book clinic visits.',
      'Automated SMS/WhatsApp reminder flows with quick-reply confirmations.',
      'Interactive online scheduler integrated directly with EHR/CRM platforms.'
    ],
    outcomes: [
      '35% reduction in front desk call volume, freeing staff for in-clinic care.',
      'Up to 80% decrease in appointment no-shows using interactive text reminders.',
      '100% of after-hours patient queries qualified and captured instantly.'
    ],
    icon: 'Stethoscope'
  },
  {
    id: 'real-estate',
    name: 'Real Estate Companies',
    tagline: 'Instantly follow up with property buyers and schedule showings.',
    challenges: [
      'Zillow, Realtor.com, and website leads go cold because agents are busy in showings.',
      'Manually qualifying buyers regarding budget, pre-approval status, and timeframe is slow.',
      'Property inquiries coming in 24/7 with zero automated reply structure.'
    ],
    solutions: [
      'Instant SMS speed-to-lead automation initiating a qualification conversation in under 10 seconds.',
      'Conversational Chatbot asking pre-screening questions and booking showings on agent calendars.',
      'Centralized property CRM organizing buyers by budget and region.'
    ],
    outcomes: [
      '2.5x increase in buyer contact rate by responding within seconds.',
      'Agents spend 100% of their time talking with qualified buyers, not tire-kickers.',
      'Automated property recommendation sheets sent instantly upon form submit.'
    ],
    icon: 'Home'
  },
  {
    id: 'marketing-agencies',
    name: 'Marketing Agencies',
    tagline: 'Automate client onboarding and pipeline management.',
    challenges: [
      'Agency owners and account managers spend hours manually copying lead data and setting up client boards.',
      'Client onboarding processes are fragmented, delaying project launch times.',
      'Struggling to track exact ad-spend ROI across disconnected platforms.'
    ],
    solutions: [
      'End-to-end client onboarding automation triggered by Stripe invoice checkout.',
      'Autonomous generation of contracts, Slack channels, and ClickUp boards.',
      'Custom GoHighLevel ROI dashboard compiling all lead metrics.'
    ],
    outcomes: [
      'Onboarding setup time reduced from 3 hours to 0 minutes per client.',
      'Drastically improved client retention by delivering an instant, high-end onboarding journey.',
      'Complete tracking transparency from ad click to final invoice payment.'
    ],
    icon: 'Megaphone'
  },
  {
    id: 'home-services',
    name: 'Home Service Businesses',
    tagline: 'Book emergency service jobs instantly and track dispatches.',
    challenges: [
      'Homeowners with emergency leaks/HVAC failures call multiple companies and hire whoever answers first.',
      'Field technicians spending too much time call-coordinating coordinates with homeowners.',
      'Unanswered emergency calls during evening hours representing massive missed jobs.'
    ],
    solutions: [
      'AI Voice Receptionist answering every call, dispatching emergency jobs immediately.',
      'SMS Dispatch alerts keeping the client updated on technician arrival times.',
      'Quick booking widget on Google Maps and landing page with instant routing.'
    ],
    outcomes: [
      'Capture 40% more service jobs by answering the phone 24/7.',
      'Drastically lower technician phone-coordination overhead in the field.',
      'Premium customer satisfaction resulting in higher Google Reviews volume.'
    ],
    icon: 'Wrench'
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    tagline: 'Qualify consulting leads and automate onboarding agreements.',
    challenges: [
      'Consultants, coaches, and legal firms wasting valuable hours on unqualified consultation bookings.',
      'Back-and-forth email loops trying to find a mutual calendar opening.',
      'Slow process for sending proposals, service agreements, and collecting retainer deposits.'
    ],
    solutions: [
      'Pre-qualification booking forms filtering out low-budget leads automatically.',
      'Seamless multi-calendar synchronization displaying live agent availability.',
      'Trigger-based document automation creating custom proposals upon meeting booking.'
    ],
    outcomes: [
      'Eradicate 100% of unqualified appointment tire-kickers.',
      'Consultants focus solely on client advisory and high-ticket sales closings.',
      'Significantly faster contract close rate using instant text-to-sign agreements.'
    ],
    icon: 'Briefcase'
  },
  {
    id: 'startups',
    name: 'Growing Startups',
    tagline: 'Scale product-led pipelines and workflow integrations.',
    challenges: [
      'Scaling customer acquisition faster than the operational capacity of a lean team.',
      'Custom database structures that are not integrated with customer success and billing systems.',
      'Scattered client communications causing delays and churn.'
    ],
    solutions: [
      'Fully automated, API-driven workflows bridging Stripe, CRM, and SaaS DB.',
      'Custom AI Agent handling Level-1 support and routing tickets.',
      'Real-time automated analytics reporting dashboard.'
    ],
    outcomes: [
      'Scale sales capacity by 10x without raising operational overhead or headcount.',
      'Flawless operational consistency with direct zero-delay API integrations.',
      'Real-time metrics tracking ensures agile decision making.'
    ],
    icon: 'Rocket'
  }
];
