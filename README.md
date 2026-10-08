# 🏪 Lanka-Link Research Introduction Website

## Lanka-Link

**Smart Merchant Support Platform for Agency Banking and Procurement**

---

## ✨ About This Website

This website is the official research introduction and presentation website for **Lanka-Link**. It is designed to present the project in a clear, modern, and professional way for lecturers, evaluators, supervisors, students, and other visitors.

The site introduces the research idea, explains the problem domain, showcases the four AI research components, presents project milestones and documents, and provides information about the team behind the project. Its purpose is to act as the public-facing academic website for the Lanka-Link research project.

---

## 🎯 Project Overview

**Lanka-Link** is a web and mobile platform for rural Sri Lankan micro-merchants (“kade” owners). It turns a shop’s day-to-day records — sales, stock, suppliers, purchases and agency-banking transactions — into one digital ledger, and builds four explainable machine-learning models on top of it.

Each prediction is explained with **SHAP** in plain language, and every model is compared honestly with the simple rule a shop owner or bank would otherwise use. The platform is available in **English and Sinhala**.

This website highlights the main idea of the research and presents the project in a structured academic format.

---

## 🔍 What the Website Showcases

The Lanka-Link website presents:

* a strong introduction to the research project
* the main research domain and background
* the four AI research components and their results
* the system diagrams of the platform
* project milestones, dates and marks
* project documents and presentation materials
* team member and supervisor information
* contact details for the project

---

## 🧩 Core Research Components Featured

The website highlights the four Lanka-Link research components:

### 💳 Credit Readiness

Scores a shop from 0 to 100 using its own digital ledger — months active, cash flow, profit margin, digital payments and stock-out rate — and sets an explainable loan limit. Logistic regression, **ROC-AUC 0.839**, and better than standard bank rules (F1 0.75 vs 0.68).

### 🛒 Smart Procurement (Buy Now / Wait)

Predicts whether an item’s market price will rise in the coming weeks and advises the shop owner to buy now or wait. Suppliers are ranked by items covered, price and distance. Random forest, saving about **2.2 %** of the purchase bill on unseen weeks.

### 📦 Weekly Demand Forecast

Forecasts next week’s sales of every item, including Avurudu and festival effects, and turns the forecast into a reorder point with safety stock. Random forest, **21.7 %** lower error than “same as last week”.

### 🏦 Agency Banking Anomaly Detection

Flags unusual deposits, withdrawals and transfers for the agent to verify, while CBSL daily limits are enforced as hard blocks. XGBoost with an Isolation Forest input, cutting false alarms from **136 to 19** per 1,000 honest customers.

---

## 🖥️ Main Website Pages

The website includes the following pages:

* **Home** – project introduction, the four AI components, results and key capabilities
* **Domain** – literature survey, research gap, research problem, objectives, methodology, system diagrams and technologies
* **Milestones** – the five graded assessments with dates, marks and progress
* **Documents** – project charter, proposal, check lists, research paper and thesis reports
* **Presentations** – proposal and progress presentation slides
* **About Us** – team member and supervisor details
* **Contact Us** – project contact information and a message form

---

## 📅 Assessment Milestones

| Assessment | Date | Marks |
| --- | --- | --- |
| Project Proposal | 15 – 18 March 2026 | 6% |
| Progress Presentation – 1 | 11 – 13 May 2026 | 15% |
| Progress Presentation – 2 | 31 August – 02 September 2026 | 18% |
| Final Presentation and Viva | 19 – 21 October 2026 | 40% |
| Final Report Submission | 28 October 2026 | 21% |

---

## 🎨 Website Style

The Lanka-Link website is designed to be:

* modern
* academic
* attractive
* easy to navigate
* visually consistent
* responsive on phone, tablet and desktop
* suitable for a research presentation context

The home page especially focuses on presenting the project in a visually engaging way using a hero section, an “AI insights” preview, research component cards, result charts, capability cards, and a call to action.

---

## 🛠️ Built With

* **HTML**
* **CSS**

This is a static multi-page website built for research presentation purposes, following the SLIIT course-web guideline (*Technology allowed: WordPress, HTML, CSS* · *Disk space: maximum 20 MB*). It uses **no JavaScript** — the phone menu, the milestone drop-down and filter, and the contact form all work with plain HTML and CSS. The whole site is about **8.6 MB**.

---

## 📁 Website Files

```text
static-site/
├── index.html            Home
├── domain.html           Domain
├── milestones.html       Milestones
├── documents.html        Documents
├── presentations.html    Presentations
├── about.html            About Us
├── contact.html          Contact Us
├── css/style.css         the only stylesheet
├── images/               team photos and system diagrams
└── presentations/        presentation slide files
```

To view the website, open `static-site/index.html` in any browser. To publish it, upload everything inside `static-site/` to the course web.

---

## 📌 Purpose of This Repository

This repository contains the source code for the **Lanka-Link Research Introduction Website**.

It is used to:

* maintain the project’s academic website
* update research presentation content
* manage page content and styling
* present Lanka-Link professionally during evaluations and reviews

---

## 👥 Team

**Lanka-Link Research Group**
**SLIIT Final Year Research Project · R26-IT-139**
**2025–2026**

| Member | Student ID | Component |
| --- | --- | --- |
| Karunaweera L.M (Team Leader) | IT22050212 | Simulated Agency Banking |
| Aponsu G.M.P.S | IT22266682 | Demand Forecast |
| Pramudith K.G.S | IT22152978 | Inventory and Supplier Management |
| Ruwani P.A.M.J | IT22268730 | Smart Procurement & Decision Support |

**Supervisor:** Dr. Shanta Rajapaksha Yapa
**Co-Supervisor:** Ms. Suwani Hettiarachchi

**Team e-mail:** lankalink.team@gmail.com

The website includes a dedicated About Us page with student roles, IDs, emails, and supervisor details.

---

## 📚 Project Title

**Lanka-Link**
**Smart Merchant Support Platform for Agency Banking and Procurement**

---

## ⭐ Summary

The **Lanka-Link Research Introduction Website** is a polished academic website that presents the vision, structure, progress, and people behind the Lanka-Link project. It serves as the main public presentation layer for the research and helps communicate the project clearly and professionally.
