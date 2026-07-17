export type ViewType = 'home' | 'services' | 'industries' | 'about' | 'contact';

export interface ProblemCard {
  id: string;
  title: string;
  impact: string;
  icon: string;
  details: string;
}

export interface SolutionCard {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
  outcome: string;
}

export interface HowItWorksStep {
  stepNumber: number;
  title: string;
  description: string;
  timeline: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  metric: string;
  icon: string;
}

export interface CaseStudyCard {
  id: string;
  company: string;
  industry: string;
  metric: string;
  metricLabel: string;
  summary: string;
  before: string;
  after: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  problem: string;
  solution: string;
  outcomes: string[];
  icon: string;
}

export interface IndustryDetail {
  id: string;
  name: string;
  tagline: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  icon: string;
}

export interface ContactFormFields {
  name: string;
  email: string;
  company: string;
  phone: string;
  challenge: string;
}

export interface AuditRecommendation {
  type: string;
  title: string;
  description: string;
  timeSaved: string;
  revenueImpact: string;
  easeOfSetup: 'Easy' | 'Medium' | 'Advanced';
}
