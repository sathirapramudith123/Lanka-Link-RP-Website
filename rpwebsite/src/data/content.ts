export const site = {
  projectId: "Lanak Link",
  title: "Simulated Agency Banking and Smart Procument", // TODO: Real project title
  subtitle:
    "A machine learning research project combining credit readiness scoring, demand forecasting, procurement risk, and agency banking analytics — each explained with SHAP.", // TODO: Real subtitle
  module: "Research Project", // TODO: e.g. "IT4010 - Research Project"
  year: 2026, // TODO: Real year
  university: "SLIIT", // TODO: Real university/faculty name
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/scope", label: "Domain" },
  { href: "/milestones", label: "Milestones" },
  { href: "/downloads", label: "Documents" },
  { href: "/presentations", label: "Presentations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const abstract = {
  heading: "Project Overview", // TODO: Real heading
  paragraphs: [
    "TODO: Replace with the first paragraph of your project abstract, describing the problem domain and motivation.",
    "TODO: Replace with the second paragraph, describing your proposed approach and expected contribution.",
  ],
};

export const components = [
  {
    id: "C1",
    icon: "💳",
    task: "Classification",
    title: "Credit Readiness Component",
    desc: "TODO: Short description of the credit readiness ML component.", // TODO
    metric: "TODO: e.g. Accuracy 92%",
  },
  {
    id: "C2",
    icon: "📈",
    task: "Forecasting",
    title: "Demand Forecast Component",
    desc: "TODO: Short description of the demand forecasting ML component.", // TODO
    metric: "TODO: e.g. MAPE 8%",
  },
  {
    id: "C3",
    icon: "📦",
    task: "Risk Analysis",
    title: "Procurement Component",
    desc: "TODO: Short description of the procurement risk ML component.", // TODO
    metric: "TODO: e.g. F1 0.89",
  },
  {
    id: "C4",
    icon: "🏦",
    task: "Classification",
    title: "Agency Banking Component",
    desc: "TODO: Short description of the agency banking ML component.", // TODO
    metric: "TODO: e.g. Accuracy 90%",
  },
];

export const scope = {
  intro:
    "TODO: One or two sentences introducing the research scope and approach.", // TODO

  literatureSurvey: {
    heading: "Literature Survey",
    paragraphs: [
      "TODO: Summarize existing research and systems related to your problem domain. What has already been done, and by whom?",
      "TODO: Add a second paragraph if needed, covering another angle of prior work (e.g. academic research vs. industry tools).",
    ],
  },

  researchGap: {
    heading: "Research Gap",
    paragraphs: [
      "TODO: Explain what is missing in existing solutions — the specific gap your research fills.",
    ],
  },

  researchProblem: {
    heading: "Research Problem",
    paragraphs: [
      "TODO: State the core problem your research addresses, in one or two clear sentences.",
    ],
  },

  objectives: [
    "TODO: Objective 1 — e.g. Develop an explainable credit readiness scoring model.",
    "TODO: Objective 2 — e.g. Build a demand forecasting model for SME inventory planning.",
    "TODO: Objective 3 — e.g. Design a procurement risk assessment component.",
    "TODO: Objective 4 — e.g. Implement an agency banking risk classification model.",
  ],

  methodology: {
    heading: "Methodology",
    paragraphs: [
      "TODO: Describe your overall research approach and process — data collection, model development, evaluation, etc.",
    ],
  },

  technologies: [
    { name: "Python", category: "Language" }, // TODO: real tech stack
    { name: "TensorFlow", category: "ML Framework" }, // TODO
    { name: "SHAP", category: "Explainability" }, // TODO
    { name: "Next.js", category: "Frontend" }, // TODO
    { name: "TODO Tech", category: "TODO Category" }, // TODO
  ],

  images: [
    { src: "/images/scope/literature_survey.svg", caption: "Literature Survey" }, // TODO: add file to public/images/scope/
    { src: "/images/scope/research_gap.svg", caption: "Research Gap" }, // TODO: add file to public/images/scope/
    { src: "/images/scope/technologies_used.svg", caption: "Technologies Used" }, // TODO: add file to public/images/scope/
    { src: "/images/scope/methodology.svg", caption: "Methodology" }, // TODO: add file to public/images/scope/
  ],
};

export const milestones = [
  {
    phase: "Proposal",
    date: "TODO: e.g. Jan 2026", // TODO
    status: "done",
    items: [
      "TODO: e.g. Topic selection and approval",
      "TODO: e.g. Proposal document submitted",
    ],
  },
  {
    phase: "Research & Design",
    date: "TODO: e.g. Mar 2026", // TODO
    status: "current",
    items: [
      "TODO: e.g. Literature survey completed",
      "TODO: e.g. System architecture designed",
    ],
  },
  {
    phase: "Implementation",
    date: "TODO: e.g. Jun 2026", // TODO
    status: "upcoming",
    items: [
      "TODO: e.g. Model development for all four components",
      "TODO: e.g. Integration and testing",
    ],
  },
  {
    phase: "Final Evaluation",
    date: "TODO: e.g. Sep 2026", // TODO
    status: "upcoming",
    items: [
      "TODO: e.g. Final report submission",
      "TODO: e.g. Viva / presentation",
    ],
  },
];

export const downloads = [
  {
    title: "Research Proposal",
    desc: "Initial project proposal document.", // TODO
    href: "/downloads/proposal.pdf",
    available: false,
  },
  {
    title: "Progress Report",
    desc: "Mid-project progress report.", // TODO
    href: "/downloads/progress-report.pdf",
    available: false,
  },
  {
    title: "Final Report",
    desc: "Final thesis / research report.", // TODO
    href: "/downloads/final-report.pdf",
    available: false,
  },
];

export const presentations = [
  {
    title: "Lanak Link",
    subtitle: "SME Credit & Agency Banking Risk Platform", // TODO
    tag: "Proposal Presentation",
    status: "available", // "available" | "upcoming"
    desc: "Introduction to Lanak Link, project motivation, research problem, objectives, scope, methodology, and expected outcomes.", // TODO
    stage: "Proposal Stage",
    fileType: "PDF",
    actionLabel: "Open PDF",
    href: "/presentations/proposal.pdf",
    available: true,
  },
  {
    title: "Lanak Link PP1",
    subtitle: "Model Prototypes and Early Components", // TODO
    tag: "Progress Presentation 1",
    status: "available",
    desc: "Demonstrates the initial model pipelines, credit scoring flow, demand forecasting prototype, and early dashboard components.", // TODO
    stage: "Progress Stage",
    fileType: "PPT",
    actionLabel: "Open PPT",
    href: "/presentations/progress-1.pptx",
    available: true,
  },
  {
    title: "Lanak Link PP2",
    subtitle: "Integration, Explainability and Dashboards", 
    tag: "Progress Presentation 2",
    status: "available",
    desc: "Covers integrating all four ML components, SHAP explainability layer, dashboards, testing progress, and evaluation preparation.", // TODO
    stage: "Progress Stage",
    fileType: "PPT",
    actionLabel: "Open PPT",
    href: "/presentations/progress-2.pptx",
    available: true,
  },
  {
    title: "Lanak Link Final",
    subtitle: "Final Research Presentation",
    tag: "Final Presentation",
    status: "upcoming",
    desc: "Final research presentation slide deck covering the completed Lanak Link system, evaluation results, conclusions, and future enhancements. This is currently upcoming.", // TODO
    stage: "Final Stage",
    fileType: "Upcoming",
    actionLabel: "Open Folder",
    href: "/presentations/final.pdf",
    available: true, // TODO: Change to false if the final presentation is not yet available
  },
];
export const contact = {
  generalEmail: "lanaklink.team@example.com",
  supervisorEmail: "shanta.y@sliit.lk", 
  institution: "Sri Lanka Institute of Information Technology (SLIIT)", 
  subjects: [
    "General Inquiry",
    "Collaboration",
    "Feedback",
    "Other",
  ],
};

export const team = {
  supervisors: [
    {
      name: "Dr. Shanta Rajapaksha Yapa",
      role: "Supervisor",
      photo: "/images/supervisor.png",
      university: "Sri Lanka Institute of Information Technology",
      faculty: "Faculty of Business", // TODO
      department: "Department of Information Management",
      email: "shanta.y@sliit.lk",
      linkType: "scholar",
      link: "https://scholar.google.com/citations?user=hX9X2RYAAAAJ&hl=en",
    },
    {
      name: "Ms. Suwani Hettiarachchi",
      role: "Co-Supervisor",
      photo: "/images/cosupervisor.png",
      university: "Sri Lanka Institute of Information Technology",
      faculty: "Faculty of Business",
      department: "Computer Systems Engineering",
      email: "suwani.h@sliit.lk",
      linkType: "scholar",
      link: "https://scholar.google.com/citations?user=udSXe-MAAAAJ&hl=en",
    },
  ],
  members: [
    {
      name: "Aponsu G.M.P.S",
      studentId: "IT22266682",
      role: "Group Member",
      componentRole: "Demand Forecast Component",
      description:
        "TODO: One or two sentences on what this component does and this member's contribution.",
      tags: ["Forecasting", "Time Series", "TODO Tag"],
      photo: "/images/m2.png",
      university: "Sri Lanka Institute of Information Technology",
      faculty: "Faculty of Computing",
      department: "Computer Systems Engineering", // TODO: confirm
      email: "parameeaponsu@icloud.com",
      linkType: "linkedin",
      link: "https://www.linkedin.com/in/paramee-aponsu-61b43836a/",
    },
    {
      name: "PRAMUDITH K G S",
      studentId: "IT22152978",
      role: "Group Member",
      componentRole: "Inventory and Supplier Management Component",
      description:
        "TODO: One or two sentences on what this component does and this member's contribution.",
      tags: ["Risk Analysis", "TODO Tag"],
      photo: "/images/m3.png",
      university: "Sri Lanka Institute of Information Technology",
      faculty: "Faculty of Computing",
      department: "Computer Systems Engineering", // TODO: confirm
      email: "sathirapramudith1@gmail.com",
      linkType: "linkedin",
      link: "https://www.linkedin.com/in/sathira-pramudith-805284318/",
    },
    {
      name: "Ruwani P A M J",
      studentId: "IT22268730",
      role: "Group Member",
      componentRole: "Smart Procurement &  decision Support Component",
      description:
        "TODO: One or two sentences on what this component does and this member's contribution.",
      tags: ["Classification", "SHAP", "TODO Tag"],
      photo: "/images/m1.png",
      university: "Sri Lanka Institute of Information Technology",
      faculty: "Faculty of Computing",
      department: "Computer Systems Engineering", // TODO: confirm
      email: "maheshajayaruwani@gmail.com",
      linkType: "linkedin",
      link: "https://www.linkedin.com/in/mahesha-jayaruwani-0507a4362/",
    },
    {
      name: "Karunaweera L.M",
      studentId: "IT22050212",
      role: "Group Leader",
      componentRole: "Simulated Agency Banking Component",
      description:
        "TODO: One or two sentences on what this component does and this member's contribution.",
      tags: ["Classification", "TODO Tag"],
      photo: "/images/m4.png",
      university: "Sri Lanka Institute of Information Technology",
      faculty: "Faculty of Computing",
      department: "Computer Systems Engineering", // TODO: confirm
      email: "lakshithakarunaweera@gmail.com",
      linkType: "linkedin",
      link: "https://www.linkedin.com/in/lakshithakarunaweera/",
    },
  ],
};



export const documentSections = [
  {
    icon: "📑",
    title: "Research Paper",
    desc: "Official research paper prepared for the Lanak Link research project.",
    documents: [
      {
        fileType: "PDF",
        title: "Lanak Link Research Paper",
        desc: "Research paper presenting the Lanak Link project background, research problem, methodology, implementation, evaluation, results, and conclusions.", // TODO
        tag: "Research Paper",
        status: "upcoming", // "available" | "upcoming"
        actionLabel: "Open PDF",
        openHref: "", // TODO: Google Drive "view" link
        downloadHref: "", // TODO: Google Drive "download" link
      },
    ],
  },
  {
    icon: "📁",
    title: "Group Research Documents",
    desc: "Group-level research documents prepared for the complete Lanak Link project.",
    documents: [
      {
        fileType: "PDF",
        title: "Group Thesis Report",
        desc: "Final group thesis report covering the complete Lanak Link research system, methodology, implementation, evaluation, results, conclusions, and future enhancements.", // TODO
        tag: "Final Report",
        status: "upcoming",
        actionLabel: "Open PDF",
        openHref: "", // TODO
        downloadHref: "", // TODO
      },
    ],
  },
  {
    icon: "📊",
    title: "Presentation Slide Decks",
    desc: "Presentation files prepared during the Lanak Link research project.",
    documents: [
      {
        fileType: "PDF",
        title: "Proposal Presentation PDF",
        desc: "Initial project proposal presentation covering the research problem, objectives, scope, methodology, and expected outcomes.", // TODO
        tag: "Proposal Presentation",
        status: "available",
        actionLabel: "Open PDF",
        openHref: "https://drive.google.com/file/d/1u6AYZRFNrKaKwAW3aPy969_C-STpFD5L/view?usp=sharing", // TODO
        downloadHref: "https://drive.google.com/file/d/1u6AYZRFNrKaKwAW3aPy969_C-STpFD5L/download?usp=sharing", // TODO
      },
      {
        fileType: "PPT",
        title: "Progress Presentation 1 PPT",
        desc: "Progress presentation 1 slide deck explaining early model prototypes and initial component development.", // TODO
        tag: "Progress Presentation 1",
        status: "available",
        actionLabel: "Open PPT",
        openHref: "https://docs.google.com/presentation/d/1mNJnC5VOoYIAsEp3OZgB6lUxzmgje_Ef/edit?usp=sharing&ouid=115379467692197163432&rtpof=true&sd=true", // TODO
        downloadHref: "https://docs.google.com/presentation/d/1mNJnC5VOoYIAsEp3OZgB6lUxzmgje_Ef/download?usp=sharing&ouid=115379467692197163432&rtpof=true&sd=true", // TODO
      },
      {
        fileType: "PPT",
        title: "Progress Presentation 2 PPT",
        desc: "Progress presentation 2 slide deck explaining integration, explainability, dashboards, and evaluation preparation.", // TODO
        tag: "Progress Presentation 2",
        status: "available",
        actionLabel: "Open PPT",
        openHref: "https://docs.google.com/presentation/d/1mNJnC5VOoYIAsEp3OZgB6lUxzmgje_Ef/edit?usp=sharing&ouid=115379467692197163432&rtpof=true&sd=true", // TODO
        downloadHref: "https://docs.google.com/presentation/d/1mNJnC5VOoYIAsEp3OZgB6lUxzmgje_Ef/download?usp=sharing&ouid=115379467692197163432&rtpof=true&sd=true", // TODO
      },
      {
        fileType: "PPT",
        title: "Final Presentation PPT",
        desc: "Final research presentation slide deck covering the completed Lanak Link system, evaluation results, conclusions, and future enhancements.", // TODO
        tag: "Final Presentation",
        status: "upcoming",
        actionLabel: "Open PPT",
        openHref: "", // TODO
        downloadHref: "", // TODO
      },
    ],
  },
  {
    icon: "📄",
    title: "Individual Proposal Reports",
    desc: "Individual proposal reports prepared by each Lanak Link research team member.",
    documents: [
      {
        fileType: "PDF",
        title: "APONSU G.M.P.S - Individual Proposal Report",
        desc: "Research component: Demand Forecast Component.", // TODO
        tag: "IT22266682",
        status: "upcoming",
        actionLabel: "View Report",
        openHref: "", // TODO
        downloadHref: "", // TODO
      },
      {
        fileType: "PDF",
        title: "PRAMUDITH K.G.S - Individual Proposal Report",
        desc: "Research component: Inventory and Supplier Management Component.", // TODO
        tag: "IT22152978",
        status: "upcoming",
        actionLabel: "View Report",
        openHref: "", // TODO
        downloadHref: "", // TODO
      },
      {
        fileType: "PDF",
        title: "RUWANI P.A.M.J - Individual Proposal Report",
        desc: "Research component: Smart Procurement & Decision Support Component.", // TODO
        tag: "IT22268730",
        status: "upcoming",
        actionLabel: "View Report",
        openHref: "", // TODO
        downloadHref: "", // TODO
      },
      {
        fileType: "PDF",
        title: "KARUNAWEERA L.M - Individual Proposal Report",
        desc: "Research component: Simulated Agency Banking Component.", // TODO
        tag: "IT22050212",
        status: "upcoming",
        actionLabel: "View Report",
        openHref: "", // TODO
        downloadHref: "", // TODO
      },
    ],
  },
  {
    icon: "📚",
    title: "Individual Thesis Reports",
    desc: "Final individual thesis reports prepared for each Lanak Link research component.",
    documents: [
      {
        fileType: "PDF",
        title: "APONSU G.M.P.S - Individual Thesis Report",
        desc: "Individual thesis report for the Demand Forecast Component.", // TODO
        tag: "IT22266682",
        status: "upcoming",
        actionLabel: "Open PDF",
        openHref: "", // TODO
        downloadHref: "", // TODO
      },
      {
        fileType: "PDF",
        title: "PRAMUDITH K.G.S - Individual Thesis Report",
        desc: "Individual thesis report for the Inventory and Supplier Management Component.", // TODO
        tag: "IT22152978",
        status: "upcoming",
        actionLabel: "Open PDF",
        openHref: "", // TODO
        downloadHref: "", // TODO
      },
      {
        fileType: "PDF",
        title: "RUWANI P.A.M.J - Individual Thesis Report",
        desc: "Individual thesis report for the Smart Procurement & Decision Support Component.", // TODO
        tag: "IT22268730",
        status: "upcoming",
        actionLabel: "Open PDF",
        openHref: "", // TODO
        downloadHref: "", // TODO
      },
      {
        fileType: "PDF",
        title: "KARUNAWEERA L.M - Individual Thesis Report",
        desc: "Individual thesis report for the Simulated Agency Banking Component.", // TODO
        tag: "IT22050212",
        status: "upcoming",
        actionLabel: "Open PDF",
        openHref: "", // TODO
        downloadHref: "", // TODO
      },
    ],
  },
];