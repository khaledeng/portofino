export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  highlightName: string;
  lastName: string;
  tagline: string;
  title: string;
  roles: string[];
  bio: string;
  aboutText: string[];
  location: string;
  email: string;
  phone: string;
  availability: string;
  cvUrl: string;
  photoUrl: string;
  socials: {
    github: string;
    linkedin: string;
  };
}

export interface HighlightStat {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description?: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'networking' | 'ai' | 'tools';
  iconType: string;
  badgeBg?: string;
  badgeColor?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  type: string; // e.g., 'ITI Graduation Project', 'Freelance', 'Academic Coursework'
  date?: string;
  summary: string;
  description: string;
  techStack: string[];
  features: string[];
  icon: string;
  client?: string;
  githubUrl?: string;
  githubFrontendUrl?: string;
  githubBackendUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  employmentType: string;
  period: string;
  location?: string;
  icon: string;
  bullets: string[];
  techOrDomain: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  department?: string;
  graduationProject?: {
    name: string;
    grade: string;
  };
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  hours?: string;
  score?: string;
  period?: string;
  details: string[];
  badgeUrl?: string;
  imagePreview?: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface PortfolioContent {
  nav: {
    brandName: string;
    links: NavLink[];
    downloadCv: string;
  };
  hero: {
    firstName: string;
    highlightName: string;
    lastName: string;
    greeting: string;
    rolesText: string;
    bioText: string;
    viewProjectsBtn: string;
    contactBtn: string;
    floatingBadges: string[];
  };
  highlights: HighlightStat[];
  about: {
    title: string;
    paragraphs: string[];
    statusBadge: string;
  };
  skills: {
    title: string;
    filterAll: string;
    categories: SkillCategory[];
  };
  projects: {
    title: string;
    viewAll: string;
    items: ProjectItem[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  education: {
    title: string;
    degrees: EducationItem[];
    certificationsTitle: string;
    certifications: CertificationItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationValue: string;
    copyTooltip: string;
    copiedTooltip: string;
    sendEmailBtn: string;
  };
  footer: {
    copyright: string;
    builtWith: string;
    motto: string;
  };
}
