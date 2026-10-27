// All text on the site lives in this file. Edit it and the page updates.
// Paths starting with "/" point to files in the /public folder.

export const site = {
  title: "Omkar Jadhav · Software Developer, Payments & DevOps",
  description:
    "Omkar Jadhav, Software Developer in Pune working with Python, Flask, PostgreSQL, DevOps and AI. Building payment platforms and deploying them end to end.",
};

export const profile = {
  firstName: "Omkar",
  lastName: "Jadhav",
  photo: "/omkar.jpg",
  photoAlt: "Portrait of Omkar Jadhav",
  // RESUME: put your PDF in the /public folder as "resume.pdf" (replace the old one).
  // Every resume button on the site (hero, contact, footer) opens this file.
  // If you use a different file name, change this path to match, e.g. "/Omkar_Jadhav_Resume.pdf".
  resume: "/resume.pdf",
  email: "omkarjadhav2426@gmail.com",
  phone: "+91 92843 13575",
  github: "https://github.com/Omkya2601",
  githubLabel: "github.com/Omkya2601",
  linkedin: "https://www.linkedin.com/in/omkar-jadhav-b72516261",
  linkedinLabel: "linkedin.com/in/omkar-jadhav-b72516261",
  location: "Pune, India",
};

export const nav = [
  { id: "about", label: "About me" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "integrations", label: "Integrations" },
  { id: "skills", label: "Skills" },
];
export const navContact = { id: "contact", label: "Contact" };

export const hero = {
  name: "Omkar Jadhav!",
  // The tagline is split so the middle word can be orange.
  tagline: { before: "I build ", highlight: "payments", after: " & ship servers" },
  intro:
    "Software Developer from Pune, working with Python, Flask, PostgreSQL, DevOps and AI. I build payment platforms and deploy them myself, from the code to the server. Open to DevOps and Full Stack roles.",
  buttons: {
    contact: "Contact me",
    work: "See my work",
    resume: "View resume",
  },
  links: { github: "GitHub", linkedin: "LinkedIn", email: "Email" },
  status: "Open to DevOps & Full Stack roles",
  current: "Currently: Software Developer at WebPayX",
  scroll: "Scroll",
  // the sliding strip at the bottom of the hero
  stack: ["Python", "Flask", "PostgreSQL", "Redis", "Docker", "Nginx", "GitHub Actions", "Linux", "AWS", "Django", "FastAPI", "React.js"],
};

export const about = {
  title: "About me",
  subtitle: "Who I am",
  paragraphs: [
    "I'm a software developer at a fintech startup in Pune, working mostly with Python, Flask and PostgreSQL. I also handle the DevOps side of the team: the servers, Docker, CI/CD pipelines and deployments.",
    "Before fintech I built projects in Python and Django, including a chatbot and a project marketplace. Today my main work is WebPayX, a fintech platform for payments, AEPS, BBPS and verification that I built and deployed myself, from the first line of code to the production server.",
  ],
  facts: [
    { label: "Based in", value: "Pune, India" },
    { label: "Education", value: "M.Sc. (Tech)" },
    { label: "Open to", value: "DevOps & Full Stack roles" },
    { label: "Also available for", value: "Freelance work" },
  ],
  pillarsTitle: "What I do",
  pillars: [
    {
      title: "Backend & APIs",
      text: "Python and Flask services on PostgreSQL and Redis, with clean REST APIs and the dashboards that sit on top of them.",
    },
    {
      title: "Payment integrations",
      text: "Gateways, UPI intent, in-store EDC, KYC and settlement, with callbacks that keep every merchant balance correct.",
    },
    {
      title: "DevOps & servers",
      text: "Linux servers, Docker, Nginx, CI/CD with GitHub Actions and SSL. I deploy what I build and keep it running.",
    },
  ],
};

export type Row = { org: string; role: string; period?: string; place?: string; description: string; tags?: string[] };

export const experience = {
  title: "Experience",
  subtitle: "Where I've worked",
  items: [
    {
      org: "WebPayX",
      role: "Software Developer",
      period: "Jul 2026 – Present",
      place: "Pune",
      description:
        "Full-time at Fixnest Services LLP. I build and deploy the WebPayX fintech platform end to end: the merchant dashboard, AEPS and BBPS services, verification APIs, and real-time payment routing across PhonePe, Pine Labs, Paytm, Vimo and UPI intent. I also manage the production server, Docker, CI/CD and SSL.",
      tags: ["Python", "Flask", "Redis", "Docker", "Nginx", "GitHub Actions"],
    },
    {
      org: "WebPayX",
      role: "Python Developer Intern",
      period: "Apr 2026 – Jul 2026",
      place: "Pune",
      description:
        "Built dashboard features in Python and started on deployment work. Moved to a full-time role after three months.",
      tags: ["Python", "Flask", "Linux"],
    },
    {
      org: "MIT ACSC",
      role: "System Operator (Earn and Learn Scheme)",
      place: "Alandi, Pune",
      description:
        "Managed the college computer labs: installing, configuring and troubleshooting hardware and software. Supported faculty and students with system and network issues, and looked after backups, security and lab upgrades. Awarded \"Best Earn & Learn Student\" for my work in system operations.",
      tags: ["Linux", "Networking", "System Administration"],
    },
  ] as Row[],
};

export const education = {
  title: "Education",
  subtitle: "Where I studied",
  items: [
    {
      org: "M.Sc. (Tech)",
      role: "Industrial Mathematics with Computer Applications",
      period: "2022 – 2025",
      description: "MIT Arts, Commerce and Science College, Alandi, Pune · CGPA 8.86/10",
    },
    {
      org: "B.Sc.",
      role: "Science",
      period: "2019 – 2022",
      description: "Maharashtra Mahavidyalaya, Nilanga · CGPA 9.21/10",
    },
    {
      org: "Certification",
      role: "Cloud Computing Fundamentals",
      period: "Jan 2026",
      description:
        "IBM SkillsBuild · Cloud models (IaaS, PaaS, SaaS), virtualisation, storage, networking and cloud security basics.",
    },
  ] as Row[],
};

// status: "live" = green dot, "building" = orange dot, "built" = grey dot
export type Status = "live" | "building" | "built";
export type Card = {
  label: string;
  title: string;
  description: string;
  status?: Status;
  bullets?: string[];
  tags?: string[];
  link?: { label: string; href: string };
  services?: string[]; // highlighted service chips
  flow?: { title: string; steps: string[] }; // small "how it works" diagram
  wide?: boolean; // true = card spans the full width
};

export const statusLabels: Record<Status, string> = { live: "Live", building: "Building", built: "Built" };

export const projects = {
  title: "Projects",
  subtitle: "What I've built",
  items: [
    {
      label: "Fintech platform · Payments",
      title: "WebPayX",
      status: "live",
      wide: true,
      description:
        "A fintech platform and merchant dashboard that I built and run in production. It brings payments, AEPS, BBPS and verification services into one place, and routes real payments across multiple gateways based on their limits, with callbacks that keep every merchant balance correct.",
      services: ["Payments", "AEPS", "BBPS", "Verification", "Settlement"],
      flow: { title: "How a payment flows", steps: ["Merchant", "WebPayX", "Routing", "Gateway", "Status", "Callback"] },
      bullets: [
        "Merchant dashboard with wallet balance, transactions and settlements",
        "AEPS (Aadhaar Enabled Payment System) banking services",
        "BBPS (Bharat Bill Payment System) bill payments",
        "Verification APIs: PAN and Aadhaar OTP KYC for onboarding",
        "Real-time routing across PhonePe, Pine Labs, Paytm, Vimo and UPI intent",
        "In-store EDC payments through Cloud and App-to-App modes",
        "UPI settlement for merchant payouts",
        "Docker Compose, Redis, load balancing, rate limiting and push-to-deploy CI/CD",
      ],
      tags: ["Python", "Flask", "PostgreSQL", "Redis", "Docker", "Nginx", "GitHub Actions"],
      link: { label: "webpayx.cloud ↗", href: "https://webpayx.cloud" },
    },
    {
      label: "DevOps · CI/CD",
      title: "One-Click Deployment Automation",
      status: "built",
      description:
        "A push-to-deploy pipeline for containerised Python apps. Every push builds a fresh Docker image and ships it to AWS EC2, with no manual steps on the server.",
      bullets: [
        "GitHub Actions workflow builds the Docker image on every push",
        "Deploys to EC2 over SSH and restarts the container on the latest build",
        "Turns manual server deploys into a fast, repeatable release",
      ],
      tags: ["GitHub Actions", "Docker", "AWS EC2", "SSH", "Linux"],
    },
    {
      label: "DevOps · Monitoring",
      title: "Linux Server Monitoring & Alerts",
      status: "built",
      description:
        "A lightweight monitoring system for Linux servers. It watches resources and services, and sends an alert on Telegram as soon as something goes wrong.",
      bullets: [
        "Python checks scheduled with cron track CPU, RAM, disk and service uptime",
        "Real-time Telegram alerts when a threshold is crossed or a service goes down",
        "Catches failures and resource spikes early, so they get fixed quickly",
      ],
      tags: ["Python", "Linux", "cron", "Telegram API"],
    },
    {
      label: "Cloud · AWS",
      title: "Flask on AWS",
      status: "building",
      description:
        "Deploying a Flask application on AWS the way production systems run: EC2 behind a load balancer, with storage, access control and monitoring on managed AWS services.",
      bullets: [
        "EC2 instances behind a load balancer",
        "S3 for storage and IAM for access control",
        "CloudWatch for logs, metrics and monitoring",
      ],
      tags: ["Flask", "AWS EC2", "Load Balancer", "S3", "IAM", "CloudWatch"],
    },
    {
      label: "Marketplace · Full stack",
      title: "MessGo",
      status: "building",
      description:
        "A multi-vendor platform that connects students and travellers with local mess and tiffin services, so finding a daily meal in a new city is simple.",
      bullets: [
        "Multi-vendor design: each mess or tiffin service runs its own listing",
        "Built around students and travellers who need regular, local meals",
      ],
      tags: ["Python", "Multi-vendor", "Web app"],
    },
    {
      label: "AI · Python",
      title: "Chatbot using Python",
      status: "built",
      description:
        "A conversational chatbot built in Python with a modular design, so the model, the memory and the interface can each be changed on their own.",
      bullets: [
        "Model-loading module that keeps the model separate from the app logic",
        "Conversation memory that keeps context across the chat",
        "Clean interaction layer, with structured and documented code",
      ],
      tags: ["Python", "Chatbot", "Automation"],
    },
    {
      label: "Web · Django",
      title: "Project Marketplace",
      status: "built",
      description:
        "A Django marketplace for sharing software projects, with free downloads and paid access through PayPal.",
      bullets: [
        "Project management with file uploads and download tracking",
        "PayPal checkout to unlock paid projects",
        "Responsive UI with HTML, CSS and Bootstrap",
      ],
      tags: ["Django", "Python", "PayPal", "Bootstrap"],
    },
  ] as Card[],
};

export const integrations = {
  title: "Integrations",
  subtitle: "Payment & API work",
  items: [
    {
      label: "Payment gateway",
      title: "PhonePe",
      description: "In-store and online payments through PhonePe.",
      tags: ["Cloud EDC", "App-to-App", "Pay Link", "Refund"],
    },
    {
      label: "In-store POS",
      title: "Pine Labs",
      description: "Pine Labs POS terminals connected for in-store payments.",
      tags: ["Cloud POS", "App-to-App POS"],
    },
    {
      label: "UPI",
      title: "UPI Intent Generation",
      description: "Generating UPI intent links so customers can pay from any UPI app.",
      tags: ["UPI", "Intent"],
    },
    {
      label: "Payment gateway",
      title: "Paytm",
      description: "Paytm gateway integration for collecting payments and receiving their status.",
      tags: ["Payments", "Status callbacks"],
    },
    {
      label: "Payment gateway",
      title: "Vimo",
      description: "Vimo gateway integration, routed alongside the other gateways in WebPayX.",
      tags: ["Payments", "Routing"],
    },
    {
      label: "Payment gateway",
      title: "Cashfree",
      description: "Cashfree integration built in Laravel for UPI intent payments.",
      tags: ["Laravel", "UPI intent"],
    },
    {
      label: "Compliance · Payouts",
      title: "KYC & Settlement APIs",
      wide: true,
      description: "PAN and Aadhaar OTP verification for merchant KYC, and UPI settlement APIs to send funds to merchants.",
      tags: ["PAN KYC", "Aadhaar OTP", "UPI settlement"],
    },
  ] as Card[],
};

export const skills = {
  title: "Skills",
  subtitle: "What I work with",
  groups: [
    { title: "Languages", items: ["Python", "Java", "JavaScript", "SQL", "C++", "Bash"] },
    { title: "Frameworks", items: ["Flask", "Django", "FastAPI", "React.js", "Node.js", "REST API", "Microservices"] },
    { title: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
    {
      title: "DevOps & Networking",
      items: ["Linux", "Networking", "Nginx", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Git"],
    },
    { title: "Cloud", items: ["AWS EC2", "EKS", "ECS", "S3", "IAM", "CloudWatch"] },
    { title: "AI", items: ["Chatbots", "Automation"] },
  ],
};

export const contact = {
  title: "Contact",
  subtitle: "Let's talk",
  text: "I'm open to DevOps and Full Stack Developer roles, and also available for freelance work. The quickest way to reach me is email.",
  copy: "Copy email",
  copied: "Copied",
  send: "Send email",
  labels: { phone: "Phone", github: "GitHub", linkedin: "LinkedIn", resume: "Resume" },
  resumeValue: "Open PDF ↗",
  status: "Available for new roles",
};

export const footer = {
  role: "Software Developer · Payments & DevOps",
};
