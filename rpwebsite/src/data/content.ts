export const site = {
  projectId: "Lanka-Link",
  title: "Smart Merchant Support Platform for Agency Banking and Procurement",
  tagline: "A digital platform with explainable machine learning for rural Sri Lankan micro-merchants",
  subtitle:
    "A web and mobile platform with explainable machine learning for rural Sri Lankan micro-merchants — credit readiness, weekly demand forecasting, buy-now-or-wait procurement advice and banking anomaly detection, each explained with SHAP.",
  module: "IT4010 Research Project · R26-IT-139",
  year: 2026,
  university: "SLIIT",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/scope", label: "Domain" },
  { href: "/scope#architecture", label: "Architecture" },
  { href: "/milestones", label: "Milestones" },
  { href: "/downloads", label: "Documents" },
  { href: "/presentations", label: "Presentations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const abstract = {
  heading: "Project Overview",
  paragraphs: [
    "Many small shop owners (“kade” owners) in rural Sri Lanka still run their business on paper. Without records they cannot show a bank that they are credit-worthy, they run out of stock or over-stock, they buy without knowing whether prices are about to rise, and — when they also work as agency-banking agents — they have no way to spot a suspicious customer transaction.",
    "Lanka-Link is a web and mobile platform that turns a shop’s day-to-day records — sales, stock, suppliers, purchases and agency-banking transactions — into one digital ledger, and uses four explainable machine-learning models on that ledger: a credit-readiness score with a loan limit, a weekly demand forecast that sets the reorder point, buy-now-or-wait price advice for procurement, and anomaly detection for banking transactions. Every prediction shows the factors that raised or lowered it (SHAP), and every model is evaluated honestly against simple rules and naive baselines.",
  ],
};

export const components = [
  {
    id: "C1",
    icon: "💳",
    task: "Classification",
    title: "Credit Readiness",
    desc: "Scores a shop 0–100 from its digital ledger (months active, cash flow, margin, digital payments, stock-out rate) and sets a loan limit of 3.5 × monthly net cash flow. Logistic regression.",
    metric: "ROC-AUC 0.839 · F1 0.75 vs 0.68 for bank rules",
  },
  {
    id: "C2",
    icon: "📦",
    task: "Classification + Regression",
    title: "Smart Procurement (Buy now / Wait)",
    desc: "Predicts whether an item’s market price will rise in the next 4 weeks and forecasts that price, adding “good price now / prices may improve” advice to each purchase. Random forest.",
    metric: "ROC-AUC 0.795 on future weeks · saves ≈ 2.2 % of the bill",
  },
  {
    id: "C3",
    icon: "📈",
    task: "Time-series Forecasting",
    title: "Weekly Demand Forecast",
    desc: "Forecasts next week’s units per item, including Avurudu and festival effects; the forecast sets each item’s reorder point and safety stock. Random forest.",
    metric: "21.7 % lower error than “same as last week” · 64 % after Avurudu",
  },
  {
    id: "C4",
    icon: "🏦",
    task: "Anomaly Detection",
    title: "Agency Banking Anomaly Detection",
    desc: "Flags unusual deposits, withdrawals and transfers for the agent to verify, while CBSL daily limits are enforced as hard blocks. XGBoost with an Isolation Forest input.",
    metric: "False alarms cut from 136 to 19 per 1,000 customers",
  },
];

// Headline results for the home page — every number is from the model cards
// (R26-IT-139/ML model/*/README.md).
export const highlights = [
  { value: 0.839, decimals: 3, prefix: "", suffix: "", label: "ROC-AUC", detail: "Credit readiness" },
  { value: 21.7, decimals: 1, prefix: "", suffix: "%", label: "lower forecast error", detail: "Weekly demand vs naive" },
  { value: 2.25, decimals: 2, prefix: "", suffix: "%", label: "saved on purchases", detail: "Buy now / wait advice" },
  { value: 86, decimals: 0, prefix: "", suffix: "%", label: "fewer false alarms", detail: "Banking anomalies (136 → 19)" },
];

// The shop owner's problem and what the platform does about it
export const problems = [
  { icon: "📒", problem: "“I have no records, so no bank will give me a loan.”", solution: "Every sale is recorded in a digital ledger that produces an AI credit-readiness score and a loan limit." },
  { icon: "📦", problem: "“I keep running out of stock — or have too much.”", solution: "The AI forecasts next week’s sales per item and sets the reorder point with safety stock." },
  { icon: "🏷️", problem: "“I don’t know the best time to buy.”", solution: "Market-price trends tell the owner whether prices are likely to rise (buy now) or not (wait)." },
  { icon: "🛡️", problem: "“How do I spot a suspicious transaction?”", solution: "Unusual agency-banking transactions are flagged for the agent, while CBSL limits are enforced." },
];

// How the parts connect (home page diagram)
export const pipeline = [
  { step: "01", title: "Record", text: "Sales, purchases, stock, suppliers and banking go into one digital ledger — on web or mobile, in English or Sinhala." },
  { step: "02", title: "Predict", text: "A FastAPI service runs the four models on features built from the shop’s own data, behind a secure backend." },
  { step: "03", title: "Explain", text: "SHAP shows the factors that raised or lowered every prediction, in plain language." },
  { step: "04", title: "Decide", text: "The owner gets a credit score, restock and buy / wait advice, and flagged transactions to check." },
];

// Model vs the simple alternative, per component (bar chart on the home page).
// `better: "higher" | "lower"` says which direction is good for that metric.
export const results = [
  {
    id: "C1",
    title: "Credit readiness",
    metric: "F1 score (test set, 500 shops)",
    better: "higher",
    bars: [
      { label: "ML model", value: 0.753, display: "0.753", ours: true },
      { label: "Bank rules", value: 0.681, display: "0.681" },
      { label: "Strict bank rules", value: 0.49, display: "0.490" },
    ],
    note: "ML beats the bank rules by +0.071 F1 (95 % CI +0.024 to +0.122).",
  },
  {
    id: "C2",
    title: "Smart procurement",
    metric: "Money saved vs always buying now",
    better: "higher",
    bars: [
      { label: "Perfect foresight", value: 3.31, display: "3.31 %" },
      { label: "ML model", value: 2.25, display: "2.25 %", ours: true },
      { label: "Rule: price fell", value: 2.23, display: "2.23 %" },
    ],
    note: "Captures about two-thirds of the best possible saving on unseen future weeks.",
  },
  {
    id: "C3",
    title: "Weekly demand forecast",
    metric: "Mean absolute error (units / week)",
    better: "lower",
    bars: [
      { label: "ML model", value: 10.89, display: "10.89", ours: true },
      { label: "Same as last week", value: 13.9, display: "13.90" },
      { label: "Mean of past 4 weeks", value: 14.15, display: "14.15" },
    ],
    note: "21.7 % lower error overall and 64 % lower right after Avurudu.",
  },
  {
    id: "C4",
    title: "Banking anomaly detection",
    metric: "False alarms per 1,000 honest customers",
    better: "lower",
    bars: [
      { label: "ML (threshold 0.87)", value: 19, display: "19", ours: true },
      { label: "ML (threshold 0.50)", value: 136, display: "136" },
      { label: "CBSL limit as a detector", value: 579, display: "579" },
    ],
    note: "So CBSL limits are enforced as hard blocks, and the ML model is the detector.",
  },
];

// Platform modules (what the app contains)
export const modules = [
  { icon: "📊", title: "Dashboard", text: "Income, expenses, profit and stock at a glance." },
  { icon: "🧾", title: "Transactions", text: "Every sale, purchase and expense, with items." },
  { icon: "📒", title: "Journal & Reports", text: "Double-entry ledger, P&L, PDF and Excel reports." },
  { icon: "📦", title: "Inventory", text: "FIFO batches, low-stock alerts, lead times." },
  { icon: "🚚", title: "Suppliers", text: "Items, prices and road routes on Google Maps." },
  { icon: "🛒", title: "Procurement", text: "Orders with suppliers ranked by cover, price and distance." },
  { icon: "🏦", title: "Agency Banking", text: "Deposits, withdrawals and transfers with CBSL limits." },
  { icon: "💼", title: "My Banks", text: "Float account per bank and a shared cash pool." },
  { icon: "🤖", title: "Predictions", text: "All four AI insights, each with its reasons." },
];

export const scope = {
  intro:
    "Lanka-Link sits where micro-enterprise finance, retail operations and agency banking meet. The research asks whether explainable machine learning, built on a shop’s own digital records, can give rural micro-merchants decision support they can trust — and measures that honestly.",

  literatureSurvey: {
    heading: "Literature Survey",
    paragraphs: [
      "Earlier work shows that alternative data — transaction histories, cash flow and digital-payment activity — can predict the credit-worthiness of “thin-file” small businesses that have no formal credit history. Retail studies apply machine learning to sales forecasting and inventory control, and commodity-price forecasting is widely used to time purchases. In digital finance, fraud and anomaly detection is commonly studied on simulated mobile-money data such as PaySim.",
      "Explainable AI methods such as SHAP make individual predictions understandable, which is essential when the users are not data experts. Most existing solutions, however, treat each of these problems separately, target banks or large retailers rather than the shop owner, and are often evaluated with random splits that overstate results on time-ordered data. The full list of references is in the research proposal.",
    ],
  },

  researchGap: {
    heading: "Research Gap",
    paragraphs: [
      "There is no single tool for rural Sri Lankan micro-merchants that connects day-to-day record keeping with credit, stock, procurement and agency-banking decisions. Existing models are mostly black boxes, ignore local factors such as the Avurudu festival season and CBSL agency-banking limits, and are rarely compared against the simple rules a shop owner or bank already uses — so it is unclear whether the machine learning adds real value.",
    ],
  },

  researchProblem: {
    heading: "Research Problem",
    paragraphs: [
      "How can a single digital ledger, with explainable machine-learning models built on it, help rural micro-merchants become credit-ready, keep the right stock, buy at the right time and run agency banking safely — and how much better is it than the simple rules they would otherwise follow?",
    ],
  },

  objectives: [
    "Build a credit-readiness model that scores a shop from its own ledger and sets an explainable loan limit, and compare it with standard bank rules.",
    "Forecast weekly demand per item — including Avurudu and festival effects — and use it to set reorder points and safety stock.",
    "Advise whether to buy now or wait using market-price trends, and measure the money it saves on real price data.",
    "Detect unusual agency-banking transactions while enforcing CBSL daily limits, keeping false alarms low.",
    "Explain every prediction with SHAP, and deliver all four models in one web and mobile platform (English and Sinhala) through a secure backend.",
  ],

  methodology: {
    heading: "Methodology",
    paragraphs: [
      "Data: a synthetic digital ledger of 2,500 shops (credit readiness), public market prices of 67 items from 2023 to 2026 (procurement), a weekly sales series of 26 items from 2022 to 2026 (demand) and 164,260 PaySim transactions adapted to agency banking (anomaly detection).",
      "For each component five algorithms were compared — logistic regression, decision tree, random forest, gradient boosting and XGBoost. The model is chosen by cross-validation on the training data only (time-based expanding-window validation for the time-series models) and tested once on unseen data; time-series models are tested on future weeks with a gap so no future information leaks in.",
      "Every model is compared with simple rules or naive forecasts, with bootstrap 95 % confidence intervals, and turned into practical terms (money saved, left-over stock, false alarms per 1,000 customers). SHAP explains each prediction. The models run in a Python FastAPI service behind a Node.js backend that checks the login and builds the inputs from the shop’s own data, used by a Next.js web app and a Flutter mobile app.",
    ],
  },

  technologies: [
    { name: "Next.js", category: "Web app" },
    { name: "Flutter", category: "Mobile app" },
    { name: "Node.js + Express", category: "Backend API" },
    { name: "Supabase (PostgreSQL)", category: "Database" },
    { name: "Python + FastAPI", category: "ML service" },
    { name: "scikit-learn", category: "Machine learning" },
    { name: "XGBoost", category: "Machine learning" },
    { name: "SHAP", category: "Explainability" },
    { name: "pandas", category: "Data" },
    { name: "Google Maps", category: "Maps & routes" },
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
    phase: "Proposal & Research Design",
    date: "Early 2026", // confirm
    status: "done",
    items: [
      "Research problem, objectives and scope defined; proposal presented",
      "Literature survey and selection of the four datasets",
      "System architecture: web, mobile, backend, ML service and database",
    ],
  },
  {
    phase: "Progress Presentation 1 — Prototypes",
    date: "May – June 2026", // confirm (development started 30 Apr 2026)
    status: "done",
    items: [
      "Digital ledger: transactions, inventory, suppliers and procurement",
      "First model pipelines for credit scoring and demand forecasting",
      "Early web and mobile dashboards",
    ],
  },
  {
    phase: "Progress Presentation 2 — Integration & Explainability",
    date: "July – September 2026", // confirm
    status: "done",
    items: [
      "All four models served by the FastAPI ML service, with SHAP explanations",
      "Honest evaluation: time-based tests, baselines and bootstrap confidence intervals",
      "Agency banking with CBSL limits, float accounts and a shared cash pool",
      "Journal, financial reports (PDF / Excel) and Sinhala language support",
    ],
  },
  {
    phase: "Final Evaluation & Viva",
    date: "October 2026",
    status: "current",
    items: [
      "Final thesis and research paper",
      "Final presentation and viva — 20 October 2026",
    ],
  },
];

export const presentations = [
  {
    title: "Lanka-Link",
    subtitle: "SME Credit & Agency Banking Risk Platform", // TODO
    tag: "Proposal Presentation",
    status: "available", // "available" | "upcoming"
    desc: "Introduction to Lanka-Link, project motivation, research problem, objectives, scope, methodology, and expected outcomes.", // TODO
    stage: "Proposal Stage",
    fileType: "PDF",
    actionLabel: "Open PDF",
    href: "/presentations/proposal.pdf", // download
    openHref: "/presentations/proposal.pdf", // opens in the browser's PDF viewer
    available: true,
  },
  {
    title: "Lanka-Link PP1",
    subtitle: "Model Prototypes and Early Components", // TODO
    tag: "Progress Presentation 1",
    status: "available",
    desc: "Demonstrates the initial model pipelines, credit scoring flow, demand forecasting prototype, and early dashboard components.", // TODO
    stage: "Progress Stage",
    fileType: "PPT",
    actionLabel: "Open PPT",
    href: "/presentations/progress-1.pptx", // download
    openHref: "https://docs.google.com/presentation/d/1mNJnC5VOoYIAsEp3OZgB6lUxzmgje_Ef/edit?usp=sharing&ouid=115379467692197163432&rtpof=true&sd=true",
    available: true,
  },
  {
    title: "Lanka-Link PP2",
    subtitle: "Integration, Explainability and Dashboards", 
    tag: "Progress Presentation 2",
    status: "available",
    desc: "Covers integrating all four ML components, SHAP explainability layer, dashboards, testing progress, and evaluation preparation.", // TODO
    stage: "Progress Stage",
    fileType: "PPT",
    actionLabel: "Open PPT",
    href: "/presentations/progress-2.pptx", // download
    openHref: "https://docs.google.com/presentation/d/18AOQX9Y_VmhB6oD7GbxUNbMfpXwNiszq/edit?usp=sharing&ouid=101829673040225473750&rtpof=true&sd=true",
    available: true,
  },
  {
    title: "Lanka-Link Final",
    subtitle: "Final Research Presentation",
    tag: "Final Presentation",
    status: "upcoming",
    desc: "Final research presentation slide deck covering the completed Lanka-Link system, evaluation results, conclusions, and future enhancements. This is currently upcoming.", // TODO
    stage: "Final Stage",
    fileType: "Upcoming",
    actionLabel: "Open Folder",
    href: "",
    available: false, // set true (and add the file / link) once the final deck is ready
  },
];
export const contact = {
  generalEmail: "lankalink.team@example.com",
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
      linkType: "scholar" as const,
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
      linkType: "scholar" as const,
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
        "Forecasts next week’s sales of every item from past sales, prices and the Avurudu / festival season, and turns the forecast into a reorder point with safety stock so the shop neither runs out nor over-stocks.",
      tags: ["Forecasting", "Time Series", "Random Forest", "Inventory"],
      photo: "/images/m2.png",
      university: "Sri Lanka Institute of Information Technology",
      faculty: "Faculty of Computing",
      department: "Computer Systems Engineering", // TODO: confirm
      email: "parameeaponsu@icloud.com",
      linkType: "linkedin" as const,
      link: "https://www.linkedin.com/in/paramee-aponsu-61b43836a/",
    },
    {
      name: "PRAMUDITH K G S",
      studentId: "IT22152978",
      role: "Group Member",
      componentRole: "Inventory and Supplier Management Component",
      description:
        "Keeps stock in FIFO batches with low-stock and out-of-stock alerts and delivery lead times, and manages suppliers — the items and prices they carry and their location on the map, with the road route and distance from the shop.",
      tags: ["Inventory", "FIFO", "Suppliers", "Google Maps"],
      photo: "/images/m3.png",
      university: "Sri Lanka Institute of Information Technology",
      faculty: "Faculty of Computing",
      department: "Computer Systems Engineering", // TODO: confirm
      email: "sathirapramudith1@gmail.com",
      linkType: "linkedin" as const,
      link: "https://www.linkedin.com/in/sathira-pramudith-805284318/",
    },
    {
      name: "Ruwani P A M J",
      studentId: "IT22268730",
      role: "Group Member",
      componentRole: "Smart Procurement & Decision Support Component",
      description:
        "Builds purchase orders and ranks suppliers by items covered, price and distance, and uses market-price trends to advise whether to buy now or wait — saving about 2.2 % of the purchase bill on unseen weeks.",
      tags: ["Procurement", "Classification", "Random Forest", "SHAP"],
      photo: "/images/m1.png",
      university: "Sri Lanka Institute of Information Technology",
      faculty: "Faculty of Computing",
      department: "Computer Systems Engineering", // TODO: confirm
      email: "maheshajayaruwani@gmail.com",
      linkType: "linkedin" as const,
      link: "https://www.linkedin.com/in/mahesha-jayaruwani-0507a4362/",
    },
    {
      name: "Karunaweera L.M",
      studentId: "IT22050212",
      role: "Group Leader",
      componentRole: "Simulated Agency Banking Component",
      description:
        "Simulates agency banking for customers — deposits, withdrawals and transfers with CBSL daily limits, float accounts per bank and a shared cash pool — and flags unusual transactions with an explainable XGBoost model.",
      tags: ["Agency Banking", "Anomaly Detection", "XGBoost", "CBSL Limits"],
      photo: "/images/m4.png",
      university: "Sri Lanka Institute of Information Technology",
      faculty: "Faculty of Computing",
      department: "Computer Systems Engineering", // TODO: confirm
      email: "lakshithakarunaweera@gmail.com",
      linkType: "linkedin" as const,
      link: "https://www.linkedin.com/in/lakshithakarunaweera/",
    },
  ],
};



export const documentSections = [
  {
    icon: "📑",
    title: "Research Paper",
    desc: "Official research paper prepared for the Lanka-Link research project.",
    documents: [
      {
        fileType: "PDF",
        title: "Lanka-Link Research Paper",
        desc: "Research paper presenting the Lanka-Link project background, research problem, methodology, implementation, evaluation, results, and conclusions.", // TODO
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
    desc: "Group-level research documents prepared for the complete Lanka-Link project.",
    documents: [
      {
        fileType: "PDF",
        title: "Group Thesis Report",
        desc: "Final group thesis report covering the complete Lanka-Link research system, methodology, implementation, evaluation, results, conclusions, and future enhancements.", // TODO
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
    desc: "Presentation files prepared during the Lanka-Link research project.",
    documents: [
      {
        fileType: "PDF",
        title: "Proposal Presentation PDF",
        desc: "Initial project proposal presentation covering the research problem, objectives, scope, methodology, and expected outcomes.", // TODO
        tag: "Proposal Presentation",
        status: "available",
        actionLabel: "Open PDF",
        openHref: "https://drive.google.com/file/d/1u6AYZRFNrKaKwAW3aPy969_C-STpFD5L/view?usp=sharing", // TODO
        downloadHref: "https://drive.google.com/uc?export=download&id=1u6AYZRFNrKaKwAW3aPy969_C-STpFD5L", // TODO
      },
      {
        fileType: "PPT",
        title: "Progress Presentation 1 PPT",
        desc: "Progress presentation 1 slide deck explaining early model prototypes and initial component development.", // TODO
        tag: "Progress Presentation 1",
        status: "available",
        actionLabel: "Open PPT",
        openHref: "https://docs.google.com/presentation/d/1mNJnC5VOoYIAsEp3OZgB6lUxzmgje_Ef/edit?usp=sharing&ouid=115379467692197163432&rtpof=true&sd=true", // TODO
        downloadHref: "https://drive.google.com/uc?export=download&id=1mNJnC5VOoYIAsEp3OZgB6lUxzmgje_Ef", // TODO
      },
      {
        fileType: "PPT",
        title: "Progress Presentation 2 PPT",
        desc: "Progress presentation 2 slide deck explaining integration, explainability, dashboards, and evaluation preparation.", // TODO
        tag: "Progress Presentation 2",
        status: "available",
        actionLabel: "Open PPT",
        openHref: "https://docs.google.com/presentation/d/18AOQX9Y_VmhB6oD7GbxUNbMfpXwNiszq/edit?usp=sharing&ouid=101829673040225473750&rtpof=true&sd=true",
        downloadHref: "https://drive.google.com/uc?export=download&id=18AOQX9Y_VmhB6oD7GbxUNbMfpXwNiszq",
      },
      {
        fileType: "PPT",
        title: "Final Presentation PPT",
        desc: "Final research presentation slide deck covering the completed Lanka-Link system, evaluation results, conclusions, and future enhancements.", // TODO
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
    desc: "Individual proposal reports prepared by each Lanka-Link research team member.",
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
    desc: "Final individual thesis reports prepared for each Lanka-Link research component.",
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