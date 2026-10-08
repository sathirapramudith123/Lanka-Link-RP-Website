# 🎓 Lanka-Link — Research Project Website

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-Website-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img alt="No JavaScript" src="https://img.shields.io/badge/JavaScript-None-lightgrey?style=for-the-badge">
  <img alt="Size" src="https://img.shields.io/badge/Size-8.6%20MB%20%2F%2020%20MB-success?style=for-the-badge">
  <img alt="SLIIT" src="https://img.shields.io/badge/SLIIT-R26--IT--139-purple?style=for-the-badge">
</p>

<p align="center">
  <b>Smart Merchant Support Platform for Agency Banking and Procurement</b><br>
  Research project website — IT4010 Research Project, R26-IT-139, SLIIT
</p>

---

## ✨ About This Website

This is the official website of the **Lanka-Link** research project. It presents the research — its domain, milestones, documents, presentation slides and the team — to supervisors, examiners and other visitors.

It is built to the **SLIIT research-website guideline**:

| Guideline requirement | This website |
| --- | --- |
| Technology: WordPress, HTML, CSS | Plain **HTML + CSS** — no JavaScript, no framework, no server |
| Disk space: maximum 20 MB | **8.6 MB** |
| Tabs: Home, Domain, Milestones, Documents, Presentations, About us, Contact us | ✅ all seven, same navigation on every page |

---

## 📄 Pages

| Page | File | Content (as the guideline asks) |
| --- | --- | --- |
| Home | `index.html` | Project introduction, the four research components, key results |
| Domain | `domain.html` | Literature survey, research gap, research problem, objectives, methodology, technologies, system diagrams |
| Milestones | `milestones.html` | Every assessment — details, date and marks — chosen from a drop-down menu, plus the full timeline |
| Documents | `documents.html` | Project charter, proposal, check lists, research paper, thesis reports (links; pending ones marked "Coming soon") |
| Presentations | `presentations.html` | Proposal, Progress Presentation 1 and 2 slide decks; Final presentation (upcoming) |
| About Us | `about.html` | Supervisors and group members — photo, student ID, component, e-mail |
| Contact Us | `contact.html` | Team e-mails, supervisor, and an e-mail form (opens the visitor's e-mail program) |

---

## 🏗️ Project Structure

```text
Lanka-Link-RP-Website/
│
├── static-site/              ← the website (upload everything inside this folder)
│   ├── index.html            Home
│   ├── domain.html           Domain
│   ├── milestones.html       Milestones
│   ├── documents.html        Documents
│   ├── presentations.html    Presentations
│   ├── about.html            About Us
│   ├── contact.html          Contact Us
│   │
│   ├── css/
│   │   └── style.css         the only stylesheet
│   ├── fonts/                web fonts (.woff2) used by style.css
│   ├── images/               team and supervisor photos (.jpg)
│   ├── presentations/        slide decks (.pptx)
│   ├── favicon.ico
│   └── favicon.svg
│
├── README.md
└── package.json
```

All links between pages and to files are **relative** (`about.html`, `images/m1.jpg`, …), so the folder works from any location — on the course web, in a sub-folder, or opened straight from the disk.

---

## ▶️ Viewing the Website

### Option 1 — open the file

Open `static-site/index.html` in any browser (double-click it). No installation is needed.

### Option 2 — a local web server

To view it exactly as the course web will serve it:

```bash
python -m http.server 8080 --directory static-site
```

Then open <http://localhost:8080>. Stop the server with `Ctrl + C`.

---

## ⬆️ Uploading to the Course Web

1. Upload **everything inside** `static-site/` — the `.html` files and the `css/`, `fonts/`, `images/` and `presentations/` folders.
2. Keep the folder structure as it is — the pages refer to `css/style.css`, `images/…` and so on.
3. The start page is `index.html`.

Total size: **8.6 MB** of the 20 MB allowed.

---

## ✏️ Updating the Content

The pages are plain HTML, so content is edited directly in the `.html` files:

| What to change | Where |
| --- | --- |
| Milestone dates and marks (currently "TBA") | `milestones.html` — both the drop-down panels and the timeline |
| Document links (Google Drive) | `documents.html` — the `href` of the "Open" / "Download" buttons |
| A new slide deck | put the file in `presentations/` and link it from `presentations.html` |
| A member photo | put a `.jpg` in `images/` and use it in `about.html` |

The **navigation bar and footer are repeated on every page** — when you change them, change all seven files.

### How the interactive parts work without JavaScript

| Feature | Done with |
| --- | --- |
| Phone menu (☰) | a hidden checkbox and its `<label>` — CSS shows the menu when it is checked |
| Milestone drop-down | a CSS menu that opens on hover / tap; each assessment links to a `#panel`, and `:target` shows it |
| Contact form | a normal `<form action="mailto:…">` — the visitor's e-mail program sends the message |

---

## 🛠️ Built With

* **HTML5** — the seven pages
* **CSS3** — one stylesheet (`css/style.css`), responsive for phone, tablet and desktop
* **SVG** — the system diagrams on the Domain page are drawn inline in the HTML

The pages were first designed with Next.js and Tailwind CSS, then exported to plain HTML and CSS to meet the course-web rules. Only the exported HTML / CSS is kept in this repository.

---

## 📱 Responsive Design

Every page has been checked at phone width (375 px) and on desktop — nothing scrolls sideways, and on phones the navigation collapses into the ☰ menu.

---

## 👥 Research Team

**R26-IT-139 · Sri Lanka Institute of Information Technology (SLIIT)**

| Member | Student ID | Component |
| --- | --- | --- |
| Karunaweera L.M (Team Leader) | IT22050212 | Simulated Agency Banking |
| Aponsu G.M.P.S | IT22266682 | Demand Forecast |
| Pramudith K.G.S | IT22152978 | Inventory and Supplier Management |
| Ruwani P.A.M.J | IT22268730 | Smart Procurement & Decision Support |

**Supervisor:** Dr. Shanta Rajapaksha Yapa
**Co-Supervisor:** Ms. Suwani Hettiarachchi

---

## 📄 License

Developed for **academic and educational purposes** as part of the IT4010 Research Project at SLIIT.
