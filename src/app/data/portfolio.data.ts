import { PortfolioContent, PersonalInfo } from '../core/models/portfolio.model';

/**
 * =========================================================================
 * SINGLE SOURCE OF TRUTH FOR KHALED AHMED EZZAT'S PORTFOLIO
 * =========================================================================
 * Modify this file to update personal details, skills, projects,
 * work experience, education, social links, or translations.
 * No need to modify individual component files for content changes!
 * =========================================================================
 */

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Khaled Ahmed Ezzat',
  firstName: 'Khaled',
  highlightName: 'Ahmed',
  lastName: 'Ezzat',
  tagline: "Hello, I'm",
  title: 'Full-Stack Developer (.NET & Angular) | Networking (CCNA)',
  roles: [
    'Full-Stack Developer (.NET & Angular)',
    'Database Specialist',
    'Networking (CCNA)',
    'Programming Instructor'
  ],
  bio: "I'm an IT graduate from South Valley University and a full-stack developer with hands-on experience in .NET, Angular, databases and networking. I build practical solutions and enjoy turning ideas into real, working applications.",
  aboutText: [
    "I'm a B.Sc. IT graduate from South Valley University, with a solid foundation in networking, databases and full-stack development.",
    "I completed ITI's 630-hour Full Stack Web & Generative AI track using .NET and gained hands-on experience with Angular, TypeScript, ASP.NET Core, and both SQL Server and MySQL.",
    "I'm passionate about building efficient, scalable web applications and continuously learning new technologies."
  ],
  location: 'Qena, Egypt',
  email: 'khaled.pro.963@gmail.com',
  phone: '+20 106 256 8365',
  availability: 'Always open to new opportunities.',
  cvUrl: 'assets/cv/Khaled_Ahmed_Ezzat_CV.pdf',
  photoUrl: 'assets/images/khaled-profile.jpg',
  // You can replace these with your exact profile URLs if different
  socials: {
    github: 'https://github.com/khaled-ezzat',
    linkedin: 'https://www.linkedin.com/in/khaled-ezzat3/'
  }
};

export const PORTFOLIO_CONTENT_EN: PortfolioContent = {
  nav: {
    brandName: 'KHALED AHMED EZZAT',
    links: [
      { id: 'home', label: 'Home', href: '#hero' },
      { id: 'about', label: 'About', href: '#about' },
      { id: 'skills', label: 'Skills', href: '#skills' },
      { id: 'projects', label: 'Projects', href: '#projects' },
      { id: 'experience', label: 'Experience', href: '#experience' },
      { id: 'education', label: 'Education & Certs', href: '#education' },
      { id: 'contact', label: 'Contact', href: '#contact' }
    ],
    downloadCv: 'Download CV'
  },
  hero: {
    firstName: 'Khaled',
    highlightName: 'Ahmed',
    lastName: 'Ezzat',
    greeting: "Hello, I'm",
    rolesText: 'Full-Stack Developer (.NET & Angular) | Networking (CCNA)',
    bioText: "I'm an IT graduate from South Valley University and a full-stack developer with hands-on experience in .NET, Angular, databases and networking. I build practical solutions and enjoy turning ideas into real, working applications.",
    viewProjectsBtn: 'View Projects',
    contactBtn: 'Contact Me',
    floatingBadges: ['Build', 'Learn', 'Grow']
  },
  highlights: [
    {
      id: 'h-degree',
      icon: 'graduation-cap',
      title: 'B.Sc. IT',
      subtitle: 'South Valley University',
      description: 'Faculty of Computers and Information (2021 – 2025) | Networks I & II | Grad Project Grade: A+'
    },
    {
      id: 'h-iti',
      icon: 'certificate',
      title: '630h ITI',
      subtitle: 'Full Stack + Generative AI',
      description: 'Information Technology Institute (ITI) Qena | Full Stack Web & GenAI Development using .NET'
    },
    {
      id: 'h-stack',
      icon: 'code',
      title: 'Angular + .NET',
      subtitle: 'Frontend & Backend',
      description: 'Enterprise REST APIs with ASP.NET Core, JWT auth, and dynamic reactive Angular applications'
    },
    {
      id: 'h-ccna',
      icon: 'network',
      title: 'CCNA',
      subtitle: 'Networking & Routing',
      description: 'Routing, switching, subnetting, VLANs, LAN design, and Cisco Packet Tracer network simulation'
    }
  ],
  about: {
    title: 'About Me',
    paragraphs: [
      "I'm a B.Sc. IT graduate from South Valley University, with a solid foundation in networking, databases and full-stack development. I completed ITI's 630-hour Full Stack Web & Generative AI track using .NET and gained hands-on experience with Angular, TypeScript, ASP.NET Core, and both SQL Server and MySQL. I'm passionate about building efficient, scalable web applications and continuously learning new technologies."
    ],
    statusBadge: 'Always open to new opportunities.'
  },
  skills: {
    title: 'Technical Skills',
    filterAll: 'All Skills',
    categories: [
      {
        id: 'frontend',
        label: 'Frontend',
        skills: [
          { name: 'Angular', category: 'frontend', iconType: 'angular', highlight: true },
          { name: 'TypeScript', category: 'frontend', iconType: 'typescript', highlight: true },
          { name: 'Reactive Forms', category: 'frontend', iconType: 'angular' },
          { name: 'Localization (i18n)', category: 'frontend', iconType: 'i18n' },
          { name: 'JavaScript (ES6+)', category: 'frontend', iconType: 'javascript' },
          { name: 'HTML5', category: 'frontend', iconType: 'html5' },
          { name: 'CSS3 / SCSS', category: 'frontend', iconType: 'css3' },
          { name: 'Bootstrap', category: 'frontend', iconType: 'bootstrap' }
        ]
      },
      {
        id: 'backend',
        label: 'Backend',
        skills: [
          { name: 'C#', category: 'backend', iconType: 'csharp', highlight: true },
          { name: '.NET Core', category: 'backend', iconType: 'dotnet', highlight: true },
          { name: 'ASP.NET Core Web API', category: 'backend', iconType: 'dotnet', highlight: true },
          { name: 'REST APIs', category: 'backend', iconType: 'api' },
          { name: 'JWT Authentication', category: 'backend', iconType: 'jwt' }
        ]
      },
      {
        id: 'database',
        label: 'Databases',
        skills: [
          { name: 'SQL Server', category: 'database', iconType: 'sqlserver', highlight: true },
          { name: 'MySQL', category: 'database', iconType: 'mysql' },
          { name: 'Entity Framework Core', category: 'database', iconType: 'dotnet' },
          { name: 'T-SQL', category: 'database', iconType: 'database' },
          { name: 'Relational Database Design', category: 'database', iconType: 'database' },
          { name: 'Data Modeling', category: 'database', iconType: 'database' }
        ]
      },
      {
        id: 'networking',
        label: 'Networking',
        skills: [
          { name: 'Networking / CCNA', category: 'networking', iconType: 'network', highlight: true },
          { name: 'Routing & Switching', category: 'networking', iconType: 'network' },
          { name: 'LAN Design', category: 'networking', iconType: 'network' },
          { name: 'IP Addressing & Subnetting', category: 'networking', iconType: 'network' },
          { name: 'VLAN Configuration', category: 'networking', iconType: 'network' },
          { name: 'Static & Dynamic Routing', category: 'networking', iconType: 'network' },
          { name: 'Cisco Packet Tracer', category: 'networking', iconType: 'cisco' },
          { name: 'Network Troubleshooting', category: 'networking', iconType: 'network' }
        ]
      },
      {
        id: 'ai',
        label: 'AI & GenAI',
        skills: [
          { name: 'Generative AI Fundamentals', category: 'ai', iconType: 'ai' },
          { name: 'HCIA-AI (Huawei / NTI)', category: 'ai', iconType: 'ai', highlight: true }
        ]
      },
      {
        id: 'tools',
        label: 'Languages & Tools',
        skills: [
          { name: 'Git / GitHub', category: 'tools', iconType: 'github', highlight: true },
          { name: 'Node.js', category: 'tools', iconType: 'nodejs' },
          { name: 'Python', category: 'tools', iconType: 'python' },
          { name: 'Visual Studio', category: 'tools', iconType: 'visualstudio' },
          { name: 'VS Code', category: 'tools', iconType: 'vscode' }
        ]
      }
    ]
  },
  projects: {
    title: 'Projects',
    viewAll: 'View All',
    items: [
      {
        id: 'arena-gym',
        title: 'Arena – AI-Powered Gym Management System',
        category: 'Full-Stack Web Application',
        type: 'ITI Graduation Project',
        summary: 'Architected a full-stack platform with JWT authentication, QR-based check-in, and payment processing.',
        description: 'Arena is an enterprise gym management solution featuring client-facing portals and admin dashboards for member registration, subscription lifecycle tracking, and trainer scheduling.',
        techStack: ['Angular', 'TypeScript', 'Reactive Forms', 'i18n', 'ASP.NET Core Web API', 'SQL Server', 'JWT'],
        features: [
          'Architected a full-stack platform with secure JWT authentication and role-based authorization',
          'Integrated QR-based check-in and automated payment processing',
          'Built client-facing and admin Angular dashboards for member registration, subscription management, and trainer scheduling',
          'Implemented Angular Reactive Forms for robust, structured, validated user input across the platform',
          'Implemented Angular localization (i18n) for complete Arabic and English bilingual support',
          'Integrated Angular frontend with a secure ASP.NET Core Web API backend and SQL Server database'
        ],
        icon: 'barbell',
        githubUrl: 'https://github.com/rwidagaber/Arena-Frontend',
        githubFrontendUrl: 'https://github.com/rwidagaber/Arena-Frontend',
        githubBackendUrl: 'https://github.com/rwidagaber/Arena-Backend'
      },
      {
        id: 'ecommerce-backend',
        title: '.NET Backend Developer – E-commerce Project',
        category: 'Backend Architecture & REST API',
        type: 'ITI Training Project',
        date: 'Feb 2026',
        summary: 'Built RESTful API endpoints across Orders, Products, Categories, and Authentication modules.',
        description: 'A scalable .NET backend system engineered with clean architectural principles, Entity Framework Core ORM, and SQL Server persistence.',
        techStack: ['C#', '.NET Core', 'ASP.NET Core Web API', 'SQL Server', 'EF Core', 'JWT'],
        features: [
          'Built high-performance RESTful API endpoints across Orders, Products, Categories, and Authentication modules',
          'Structured clean data modeling and relational constraints using Entity Framework Core and SQL Server',
          'Implemented token-based authentication and secure endpoint protection with JWT',
          'Designed modular controllers and services ensuring high cohesion and loose coupling'
        ],
        icon: 'cart',
        githubUrl: 'https://github.com/khaled-ezzat'
      },
      {
        id: 'finishx-corporate',
        title: 'FinishX – Corporate Website',
        category: 'Frontend Development (Freelance)',
        type: 'Freelance (Mostaqel Platform)',
        date: '2025 – 2026',
        client: 'Saudi Client (Mostaqel)',
        summary: 'Built an Angular-based corporate website for a Saudi client — a second branch site for the same client group.',
        description: 'Professional responsive corporate web presence delivered through the Mostaqel freelance platform, tailored to commercial enterprise requirements in Saudi Arabia.',
        techStack: ['Angular', 'TypeScript', 'Responsive Design', 'HTML5', 'CSS3/SCSS'],
        features: [
          'Developed modern, fast-loading responsive corporate web interfaces for a Saudi business client',
          'Delivered a dedicated branch web portal adhering to client branding specifications',
          'Optimized layout performance, cross-browser compatibility, and mobile responsiveness',
          'Maintained clean component structure enabling straightforward future updates'
        ],
        icon: 'globe',
        liveUrl: 'https://finish-x.vercel.app/'
      },
      {
        id: 'networking-labs',
        title: 'University Networking Labs',
        category: 'Network Engineering & Simulation',
        type: 'Academic Coursework',
        summary: 'Designed and simulated LAN topologies covering IP addressing/subnetting, static and dynamic routing, VLAN configuration, and switch/router setup.',
        description: 'Comprehensive network engineering projects and simulations executed in Cisco Packet Tracer as part of Networks I & II and CCNA self-study curriculum.',
        techStack: ['Cisco Packet Tracer', 'Routing & Switching', 'VLANs', 'Subnetting', 'CLI Config'],
        features: [
          'Designed and simulated complex enterprise LAN topologies covering hierarchical network architecture',
          'Configured IP addressing schemes, VLSM, and subnetting across multiple sub-networks',
          'Implemented and verified static and dynamic routing protocols (OSPF, RIP)',
          'Configured VLAN segmentation, trunking (802.1Q), and inter-VLAN routing on switches and routers',
          'Practiced hands-on troubleshooting of connectivity, ACLs, and validating network configurations in simulated environments'
        ],
        icon: 'network',
        githubUrl: 'https://github.com/khaled-ezzat'
      }
    ]
  },
  experience: {
    title: 'Experience',
    items: [
      {
        id: 'ischool',
        role: 'Programming Instructor – Game Development',
        company: 'iSchool',
        employmentType: 'Full-time',
        period: 'Jun 2026 – Present',
        location: 'Egypt / Remote',
        icon: 'gamepad',
        bullets: [
          'Teach programming and game development to students across different age groups, adapting explanations and pacing to each learner’s level.',
          'Break down complex technical concepts into simple, hands-on, age-appropriate lessons.',
          'Built strong patience, communication, and classroom management skills through daily student engagement.'
        ],
        techOrDomain: ['Programming Fundamentals', 'Game Development', 'Instructional Pedagogy', 'Technical Communication']
      }
    ]
  },
  education: {
    title: 'Education & Certifications',
    degrees: [
      {
        degree: 'Bachelor of Science (B.Sc.) in Information Technology',
        institution: 'Faculty of Computers and Information, South Valley University',
        period: '2021 – 2025',
        department: 'IT Department, Qena, Egypt',
        graduationProject: {
          name: 'Automatic Irrigation System',
          grade: 'A+'
        },
        highlights: [
          'Completed in-depth coursework in Networks I & II: routing, switching, network design, and cloud computing fundamentals',
          'Graduation Project: Automatic Irrigation System — achieved Grade A+',
          'Strong academic foundation in database systems, software engineering, and network architecture'
        ]
      },
      {
        degree: 'Full Stack Web & Generative AI Development using .NET',
        institution: 'Information Technology Institute (ITI) – Qena Branch',
        period: 'Jan – Jun 2026 (630 Hours)',
        department: 'Intensive Code Camp Track',
        highlights: [
          'In-depth, hands-on training covering Angular, TypeScript, ASP.NET Core Web API, SQL Server, and Generative AI',
          'Graduation Project: Arena – AI-Powered Gym Management System with full bilingual (EN/AR) support'
        ]
      }
    ],
    certificationsTitle: 'Certifications & Professional Programs',
    certifications: [
      {
        title: 'HCIA-AI (Artificial Intelligence)',
        issuer: 'Huawei / National Telecommunications Institute (NTI)',
        hours: '80 Hours',
        score: '83%',
        period: 'Apr – Jun 2025',
        details: [
          'NTI / Huawei Egyptian Talent Academy Track in Artificial Intelligence',
          'Trained on core machine learning concepts, neural networks, and AI fundamentals'
        ],
        imagePreview: 'assets/images/cert-huawei-ai.jpg'
      },
      {
        title: 'McKinsey.org Forward Program',
        issuer: 'McKinsey.org',
        period: 'Completed Jul 2025',
        details: [
          'Practical skills for success in the future of work: problem solving, effective communication, adaptable mindset, digital toolkit'
        ],
        imagePreview: 'assets/images/cert-mckinsey.jpg'
      },
      {
        title: 'CCNA Curriculum (Self-Study)',
        issuer: 'Cisco Networking Academy Materials & Self-Study',
        details: [
          'Studied independently via Cisco materials and technical resources',
          'Covering routing, switching, IP subnetting, VLANs, and network fundamentals'
        ]
      }
    ]
  },
  contact: {
    title: 'Contact',
    subtitle: "Let's connect!",
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    locationValue: 'Qena, Egypt',
    copyTooltip: 'Click to copy',
    copiedTooltip: 'Copied to clipboard!',
    sendEmailBtn: 'Send an Email'
  },
  footer: {
    copyright: 'Khaled Ahmed Ezzat © 2026. All rights reserved.',
    builtWith: 'Built with Angular',
    motto: 'Code • Learn • Build'
  }
};

export const PORTFOLIO_CONTENT_AR: PortfolioContent = {
  nav: {
    brandName: 'خالد أحمد عزت',
    links: [
      { id: 'home', label: 'الرئيسية', href: '#hero' },
      { id: 'about', label: 'عنّي', href: '#about' },
      { id: 'skills', label: 'المهارات', href: '#skills' },
      { id: 'projects', label: 'المشاريع', href: '#projects' },
      { id: 'experience', label: 'الخبرة', href: '#experience' },
      { id: 'education', label: 'التعليم والشهادات', href: '#education' },
      { id: 'contact', label: 'التواصل', href: '#contact' }
    ],
    downloadCv: 'تحميل السيرة الذاتية'
  },
  hero: {
    firstName: 'خالد',
    highlightName: 'أحمد',
    lastName: 'عزت',
    greeting: 'مرحباً، أنا',
    rolesText: 'مهندس شبكات و مطور مواقع ويب Full-Stack (.NET & Angular)',
    bioText: 'خريج كلية حاسبات و معلومات جامعة جنوب الوادي (قنا) ومطور Full-Stack بخبرة عملية في تقنيات .NET و Angular وقواعد البيانات والشبكات. أبني حلولاً برمجية عملية وأستمتع بتحويل الأفكار إلى تطبيقات حقيقية فعالة.',
    viewProjectsBtn: 'عرض المشاريع',
    contactBtn: 'تواصل معي',
    floatingBadges: ['بناء', 'تعلّم', 'نمو']
  },
  highlights: [
    {
      id: 'h-degree',
      icon: 'graduation-cap',
      title: 'بكالوريوس تكنولوجيا المعلومات',
      subtitle: 'جامعة جنوب الوادي',
      description: 'كلية الحاسبات والمعلومات (2021 – 2025) | شبكات 1 و 2 | مشروع التخرج: امتياز مرتفع A+'
    },
    {
      id: 'h-iti',
      icon: 'certificate',
      title: '630 ساعة ITI',
      subtitle: 'تطوير الويب الكامل والذكاء الاصطناعي التوليدي',
      description: 'معهد تكنولوجيا المعلومات (ITI) فرع قنا | مسار .NET و Angular والذكاء الاصطناعي التوليدي'
    },
    {
      id: 'h-stack',
      icon: 'code',
      title: 'Angular + .NET',
      subtitle: 'الواجهة الأمامية والخلفية',
      description: 'بناء واجهات برمجة تطبيقات REST API مؤسسية وحلول Angular تفاعلية متقدمة'
    },
    {
      id: 'h-ccna',
      icon: 'network',
      title: 'CCNA',
      subtitle: 'الشبكات والتوجيه',
      description: 'التوجيه والتبديل وتقسيم الشبكات الفرعية وتصميم شبكات LAN ومحاكاة Cisco Packet Tracer'
    }
  ],
  about: {
    title: 'نبذة عني',
    paragraphs: [
      'خريج بكالوريوس تكنولوجيا المعلومات من كلية الحاسبات والمعلومات بجامعة جنوب الوادي، بأساس تقني متين يشمل الشبكات وقواعد البيانات وتطوير تطبيقات الويب المتكاملة.',
      'أتممت مسار معهد تكنولوجيا المعلومات (ITI) المكثف لمدة 630 ساعة في تطوير الويب والذكاء الاصطناعي التوليدي باستخدام .NET، واكتسبت خبرة عملية قوية في Angular و TypeScript و ASP.NET Core وقواعد بيانات SQL Server و MySQL.',
      'شغوف ببناء تطبيقات ويب فعالة وقابلة للتوسع والتطوير المستمر لمهاراتي في أحدث التقنيات.'
    ],
    statusBadge: 'متاح ومستعد دائماً للفرص الجديدة.'
  },
  skills: {
    title: 'المهارات التقنية',
    filterAll: 'جميع المهارات',
    categories: PORTFOLIO_CONTENT_EN.skills.categories
  },
  projects: {
    title: 'المشاريع',
    viewAll: 'عرض الكل',
    items: PORTFOLIO_CONTENT_EN.projects.items.map(item => {
      if (item.id === 'arena-gym') {
        return {
          ...item,
          title: 'نظام Arena – إدارة الصالات الرياضية الذكي',
          summary: 'تصميم منصة متكاملة تشمل مصادقة JWT، وتسجيل الدخول عبر رمز QR، ومعالجة المدفوعات.',
          description: 'نظام متكامل لإدارة الصالات الرياضية يتضمن بوابات للمشتركين ولوحات تحكم إدارية لتسجيل الأعضاء وإدارة الاشتراكات وجداول المدربين بدعم كامل للغتين العربية والإنجليزية.'
        };
      }
      if (item.id === 'ecommerce-backend') {
        return {
          ...item,
          title: 'مطور خلفي .NET – مشروع التجارة الإلكترونية',
          summary: 'بناء واجهات برمجية RESTful لنقاط نهاية الطلبات والمنتجات والتصنيفات والمصادقة.'
        };
      }
      if (item.id === 'finishx-corporate') {
        return {
          ...item,
          title: 'FinishX – موقع مؤسسي لشركة سعودية',
          summary: 'تطوير موقع مؤسسي متجاوب مبني بتقنية Angular لعميل سعودي عبر منصة مستقل كفرع ثانٍ لنفس المجموعة.'
        };
      }
      return {
        ...item,
        title: 'مختبرات شبكات جامعية (Cisco Packet Tracer)',
        summary: 'تصميم ومحاكاة طبولوجيا الشبكات المحلية بما يشمل العنونة والتوجيه الثابت والديناميكي وتكوين VLANs.'
      };
    })
  },
  experience: {
    title: 'الخبرة العملية',
    items: [
      {
        id: 'ischool',
        role: 'مدرب برمجة – تطوير الألعاب',
        company: 'iSchool',
        employmentType: 'دوام كامل',
        period: 'يونيو 2026 – حتى الآن',
        location: 'مصر / عن بُعد',
        icon: 'gamepad',
        bullets: [
          'تدريس البرمجة وتطوير الألعاب للطلاب من فئات عمرية مختلفة، ومواءمة الشرح ومعدل التعلم لكل فئة.',
          'تبسيط المفاهيم التقنية المعقدة إلى دروس تطبيقية ممتعة وتناسب أعمار الطلاب.',
          'تطوير مهارات عالية في الصبر والتواصل وإدارة الصفوف من خلال التفاعل اليومي مع الطلاب.'
        ],
        techOrDomain: ['أساسيات البرمجة', 'تطوير الألعاب', 'طرق التدريس', 'التواصل التقني']
      }
    ]
  },
  education: {
    title: 'التعليم والشهادات',
    degrees: [
      {
        degree: 'بكالوريوس تكنولوجيا المعلومات (B.Sc. IT)',
        institution: 'كلية الحاسبات والمعلومات – جامعة جنوب الوادي',
        period: '2021 – 2025',
        department: 'قسم تكنولوجيا المعلومات، قنا، مصر',
        graduationProject: {
          name: 'نظام الري الآلي (Automatic Irrigation System)',
          grade: 'امتياز مرتفع A+'
        },
        highlights: [
          'إتمام مقررات متقدمة في شبكات الحاسب (شبكات 1 و 2): التوجيه والتبديل وتصميم الشبكات والحوسبة السحابية',
          'مشروع التخرج: نظام الري الذكي الآلي بتقدير امتياز مرتفع A+',
          'أساس أكاديمي راسخ في هندسة البرمجيات وبنية الشبكات وقواعد البيانات'
        ]
      },
      {
        degree: 'تطوير الويب الكامل والذكاء الاصطناعي التوليدي باستخدام .NET',
        institution: 'معهد تكنولوجيا المعلومات (ITI) – فرع قنا',
        period: 'يناير – يونيو 2026 (630 ساعة تدريبية)',
        department: 'مسار معسكر التدريب المكثف',
        highlights: [
          'تدريب عملي مكثف يشمل Angular و TypeScript و ASP.NET Core Web API و SQL Server والذكاء الاصطناعي التوليدي',
          'مشروع التخرج: منصة Arena لإدارة الجيم والنوادي الرياضية بدعم ثنائي اللغة (عربي / إنجليزي)'
        ]
      }
    ],
    certificationsTitle: 'الشهادات والبرامج المهنية',
    certifications: [
      {
        title: 'شهادة HCIA-AI في الذكاء الاصطناعي',
        issuer: 'هواوي / المعهد القومي للاتصالات (NTI)',
        hours: '80 ساعة',
        score: 'الدرجة: 83%',
        period: 'أبريل – يونيو 2025',
        details: [
          'مسار أكاديمية المواهب المصرية NTI / Huawei في مجال الذكاء الاصطناعي',
          'دراسة عملية لأساسيات تعلم الآلة والشبكات العصبية وتطبيقات الذكاء الاصطناعي'
        ],
        imagePreview: 'assets/images/cert-huawei-ai.jpg'
      },
      {
        title: 'برنامج Forward من منظمة ماكنزي (McKinsey.org)',
        issuer: 'McKinsey.org',
        period: 'يوليو 2025',
        details: [
          'مهارات عملية لمستقبل العمل: حل المشكلات المعقدة، التواصل الفعال، المرونة المهنية، والأدوات الرقمية الحديثة'
        ],
        imagePreview: 'assets/images/cert-mckinsey.jpg'
      },
      {
        title: 'منهج CCNA (دراسة ذاتية)',
        issuer: 'مواد أكاديمية سيسكو للشبكات والمصادر التقنية',
        details: [
          'دراسة مستقلة معمقة لتوجيه وتبديل حزم البيانات، تقنيات VLANs، وتصميم الشبكات'
        ]
      }
    ]
  },
  contact: {
    title: 'تواصل معي',
    subtitle: 'يسعدني التواصل معك دائماً!',
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'الهاتف',
    locationLabel: 'الموقع',
    locationValue: 'قنا، مصر',
    copyTooltip: 'اضغط للنسخ',
    copiedTooltip: 'تم النسخ للحافظة!',
    sendEmailBtn: 'إرسال بريد إلكتروني'
  },
  footer: {
    copyright: 'خالد أحمد عزت © 2026. جميع الحقوق محفوظة.',
    builtWith: 'تم البناء باستخدام Angular',
    motto: 'برمجة • تعلّم • بناء'
  }
};
