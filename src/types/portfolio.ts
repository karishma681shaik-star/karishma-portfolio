export interface PersonalInfo {
  name: string;
  title: string;
  roleSubtitle: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  bio: string;
  careerObjective: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  year: string;
  cgpa: string;
  highlight?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  techBadges: string[];
  keyFeatures: string[];
  githubUrl: string;
  gradient: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  score?: string;
  description: string;
  verifyUrl: string;
  concepts: string[];
}

export interface TechnicalFocus {
  title: string;
  description: string;
  icon: string;
}

