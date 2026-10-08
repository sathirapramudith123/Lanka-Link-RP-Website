/*
 * Lanka-Link system diagrams (Domain page). Every box describes what the R26-IT-139 code does:
 * backend/src (controllers, utils/stock.js, utils/features.js), backend/sql/atomic_banking.sql,
 * ml_service/app.py and the model cards in "ML model/".
 */
import { Arrow, Box, Chip, Flow, Lane, Note } from "./kit";

/* 1 ─────────────────────────────── Overall architecture ─────────────────────────────── */
export function ArchitectureDiagram() {
  return (
    <div className="space-y-2">
      <Lane title="Users — shop owner / agency-banking agent" tone="slate">
        <div className="grid gap-3 sm:grid-cols-2">
          <Box title="Web app" icon="💻" tone="blue" items={["Next.js 15 + Tailwind CSS", "English / Sinhala", "PDF & Excel reports, Google Maps"]} />
          <Box title="Mobile app (Android)" icon="📱" tone="blue" items={["Flutter (Dart)", "English / Sinhala", "Token kept in encrypted storage"]} />
        </div>
      </Lane>
      <Arrow down label="HTTPS · JSON · Bearer JWT" />
      <Lane title="Backend API — Node.js + Express" tone="blue">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Box title="Security" tone="slate" items={["JWT (8 h) + token revocation", "bcrypt passwords", "Rate limits, CORS, helmet"]} />
          <Box title="Validation" tone="slate" items={["Joi schema per request", "Only the user's own rows (user_id)"]} />
          <Box title="Business rules" tone="slate" items={["FIFO stock batches", "Double-entry journal", "CBSL daily limits"]} />
          <Box title="Feature builder" tone="slate" items={["Model inputs built from the shop's ledger", "Notifications & email alerts"]} />
        </div>
      </Lane>
      <div className="grid gap-2 lg:grid-cols-3">
        <div className="flex flex-col">
          <Arrow down label="SQL / RPC" />
          <Box title="Supabase (PostgreSQL)" icon="🗄️" tone="green" className="flex-none" items={["Ledger tables: transactions, inventory, suppliers, procurement, agency banking", "Atomic banking functions (one DB transaction + row lock)", "Row Level Security"]} />
        </div>
        <div className="flex flex-col">
          <Arrow down label="POST /predict" />
          <Box title="ML service — Python FastAPI" icon="🤖" tone="violet" className="flex-none" items={["C1 Credit readiness · C2 Procurement", "C3 Weekly demand · C4 Banking anomaly", "SHAP explanation for every prediction"]} />
        </div>
        <div className="flex flex-col">
          <Arrow down label="REST" />
          <Box title="External services" icon="🌐" tone="amber" className="flex-none" items={["Google Maps: Places search, Routes (road distance)", "SMTP: password-reset & alert emails"]} />
        </div>
      </div>
      <Note>The web and mobile apps never call the ML service directly — every request goes through the backend, which checks the login and builds the model inputs from the shop&apos;s own data.</Note>
    </div>
  );
}

/* 2 ──────────────────────────── End-to-end workflow ──────────────────────────── */
export function EndToEndDiagram() {
  return (
    <div className="space-y-3">
      <Flow>
        <Box n={1} title="Record" icon="🧾" items={["Sales, purchases, expenses", "Stock batches, suppliers", "Agency-banking transactions"]} />
        <Arrow label="save" />
        <Box n={2} title="One digital ledger" icon="📒" tone="green" items={["Supabase tables", "Journal (debit / credit)", "FIFO stock & cost of goods"]} />
        <Arrow label="features" />
        <Box n={3} title="Predict" icon="🤖" tone="violet" items={["Backend builds inputs", "FastAPI runs the model", "Probability / forecast"]} />
        <Arrow label="why?" />
        <Box n={4} title="Explain" icon="🔍" tone="violet" items={["SHAP: top factors that pushed the result up or down"]} />
      </Flow>
      <Flow>
        <Box n={5} title="Apply business rules" icon="⚖️" tone="amber" items={["Credit bands & hard blocks", "Reorder point & safety stock", "Anomaly threshold 0.87"]} />
        <Arrow />
        <Box n={6} title="Show the owner" icon="📱" items={["Dashboard & Predictions hub", "Reasons in plain language", "English / Sinhala"]} />
        <Arrow />
        <Box n={7} title="Act" icon="✅" tone="green" items={["Apply for a loan / improve score", "Restock — buy now or wait", "Verify a flagged customer"]} />
        <Arrow />
        <Box n={8} title="Reports" icon="📊" tone="slate" items={["Journal, P&L, goods movement", "PDF / Excel export", "Low-stock & banking alerts"]} />
      </Flow>
    </div>
  );
}

/* 3 ──────────────────────── Model development & evaluation ──────────────────────── */
export function ModelPipelineDiagram() {
  return (
    <div className="space-y-3">
      <Flow>
        <Box n={1} title="Data" icon="📂" tone="slate" items={["Synthetic ledger — 2,500 shops", "Market prices — 67 items, 2023–26", "Weekly sales — 26 items", "PaySim — 164,260 transactions"]} />
        <Arrow />
        <Box n={2} title="Features" icon="🧮" items={["Cash flow, margin, stock-out rate", "Lags & 4-week means (past only)", "Avurudu / festival season", "Amount z-score, Isolation Forest flag"]} />
        <Arrow />
        <Box n={3} title="Split — no leakage" icon="✂️" tone="amber" items={["Stratified 80 / 20 (credit, anomaly)", "Time split + 4-week gap (demand, price)"]} />
        <Arrow />
        <Box n={4} title="Model selection" icon="🏁" tone="violet" items={["5 algorithms: LR, DT, RF, GB, XGBoost", "Cross-validation on training data only"]} />
      </Flow>
      <Flow>
        <Box n={5} title="Test once" icon="🎯" tone="violet" items={["Champion scored on unseen data", "Threshold tuned out-of-fold (anomaly)"]} />
        <Arrow />
        <Box n={6} title="Compare honestly" icon="⚖️" tone="amber" items={["vs bank rules / naive forecasts", "Bootstrap 95 % confidence intervals", "Money saved, left-over stock, false alarms"]} />
        <Arrow />
        <Box n={7} title="Explain" icon="🔍" items={["SHAP TreeExplainer (trees)", "Coefficient × value (logistic regression)"]} />
        <Arrow />
        <Box n={8} title="Deploy" icon="🚀" tone="green" items={["Saved pipeline (.pkl)", "Served by FastAPI", "Model card + limitations"]} />
      </Flow>
    </div>
  );
}

/* 4 ─────────────────────────── How the four models connect ─────────────────────────── */
export function ModelsConnectDiagram() {
  return (
    <div className="space-y-2">
      <Box title="Digital ledger (what the shop records once)" icon="📒" tone="green" items={["Sales & items sold · purchases & costs · stock batches · suppliers · banking transactions"]} />
      <div className="grid gap-3 lg:grid-cols-4">
        {[
          {
            id: "C3", title: "Weekly demand forecast", tone: "blue" as const,
            items: ["Random forest", "Next week's units per item", "→ reorder point = forecast × lead time + safety stock"],
          },
          {
            id: "C2", title: "Procurement: buy now / wait", tone: "blue" as const,
            items: ["Random forest", "Will the price rise in 4 weeks?", "→ “Good price now” / “Prices may improve”"],
          },
          {
            id: "C1", title: "Credit readiness", tone: "blue" as const,
            items: ["Logistic regression", "Score 0–100 → approved ≥ 70, conditional 50–69", "Loan limit = 3.5 × monthly net cash flow"],
          },
          {
            id: "C4", title: "Banking anomaly", tone: "blue" as const,
            items: ["XGBoost + Isolation Forest input", "Flag when probability ≥ 0.87", "CBSL limits refused before saving"],
          },
        ].map((m) => (
          <div key={m.id} className="flex flex-col">
            <Arrow down />
            <Box n={m.id} title={m.title} tone={m.tone} items={m.items} />
          </div>
        ))}
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        <div className="flex flex-col">
          <Arrow down label="C3 + C2 together" />
          <Box title="Restock decision" icon="🛒" tone="amber" items={["Stock below reorder point → Buy", "Price context from C2 decides bulk / moderate / wait"]} />
        </div>
        <div className="flex flex-col">
          <Arrow down label="steady stock lowers stock-out rate" />
          <Box title="Better credit readiness" icon="💳" tone="amber" items={["Fewer stock-outs and more digital payments raise the C1 score"]} />
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 pt-1">
        <Chip tone="violet">Every result comes with SHAP reasons</Chip>
        <Chip tone="violet">Every model compared with a simple rule</Chip>
      </div>
    </div>
  );
}

/* 5 ─────────────────────────── Agency banking transaction ─────────────────────────── */
export function BankingDiagram() {
  return (
    <div className="space-y-3">
      <Flow>
        <Box n={1} title="Agent enters transaction" icon="🏦" items={["Deposit / withdrawal / transfer", "Customer name, phone, NIC", "Bank (float account), amount"]} />
        <Arrow />
        <Box n={2} title="Validate" icon="✔️" tone="slate" items={["Joi schema", "Account number required", "Source of funds for deposits (AML)"]} />
        <Arrow />
        <Box n={3} title="Risk score" icon="🤖" tone="violet" items={["Amount z-score vs agent's last 50 transactions", "ML service: XGBoost (≥ 0.87)", "CBSL amount ratio"]} />
      </Flow>
      <Lane title="4 · Database function banking_post — one transaction (all or nothing)" tone="green">
        <Flow>
          <Box n="a" title="Lock cash pool" tone="green" items={["SELECT … FOR UPDATE", "Daily reset of opening cash"]} />
          <Arrow />
          <Box n="b" title="CBSL limits" tone="rose" items={["Per-transaction limit", "Daily limit per customer", "Over the limit → refused"]} />
          <Arrow />
          <Box n="c" title="Save transaction" tone="green" items={["agency_banking row", "is_anomaly + risk score"]} />
          <Arrow />
          <Box n="d" title="Move money" tone="green" items={["Bank float ↔ shared cash pool", "Double-entry float ledger", "Insufficient float → refused"]} />
        </Flow>
      </Lane>
      <Flow>
        <Box n={5} title="Flagged?" icon="⚠️" tone="amber" items={["In-app notification", "Alert email (throttled)"]} />
        <Arrow />
        <Box n={6} title="Agent verifies" icon="🧑‍💼" items={["Sees the reasons (SHAP)", "Checks the customer", "Can mark the transaction safe"]} />
        <Arrow />
        <Box n={7} title="Dashboards" icon="📊" tone="slate" items={["My Banks: float health per bank", "Cash available for top-up", "Journal & reports"]} />
      </Flow>
    </div>
  );
}

/* 6 ─────────────────────────── Procurement & inventory ─────────────────────────── */
export function ProcurementDiagram() {
  return (
    <div className="space-y-3">
      <Flow>
        <Box n={1} title="Demand forecast (C3)" icon="📈" items={["Next week's units per item", "Avurudu / festival aware"]} />
        <Arrow />
        <Box n={2} title="Reorder point" icon="📏" tone="slate" items={["forecast × lead time", "+ 1.65 × error × √lead time"]} />
        <Arrow />
        <Box n={3} title="Buy / wait (C2)" icon="🏷️" tone="violet" items={["Stock below reorder point?", "Price likely to rise in 4 weeks?"]} />
        <Arrow />
        <Box n={4} title="Purchase order" icon="🛒" tone="amber" items={["Items, quantities, unit cost", "Delivery location on the map"]} />
      </Flow>
      <Flow>
        <Box n={5} title="Rank suppliers" icon="🏆" tone="amber" items={["Items they carry (cover)", "Total price", "Road distance (Google Routes)"]} />
        <Arrow />
        <Box n={6} title="Order → Received" icon="🚚" items={["Status: pending → ordered → received", "Expected arrival date"]} />
        <Arrow />
        <Box n={7} title="Stock in (FIFO batches)" icon="📦" tone="green" items={["Each item becomes a batch at its real cost", "Sales use the oldest batch first (COGS)"]} />
        <Arrow />
        <Box n={8} title="Alerts" icon="🔔" tone="rose" items={["Running out ≤ reorder level", "Out of stock", "Reverting an order removes the stock again"]} />
      </Flow>
    </div>
  );
}

export const diagrams = [
  {
    id: "architecture",
    title: "Overall System Architecture",
    desc: "How the web and mobile apps, the Node.js backend, the Supabase database, the FastAPI ML service and external services work together.",
    Diagram: ArchitectureDiagram,
  },
  {
    id: "end-to-end",
    title: "End-to-End Workflow",
    desc: "From recording a sale to an explained AI insight the shop owner can act on.",
    Diagram: EndToEndDiagram,
  },
  {
    id: "models",
    title: "How the Four Models Connect",
    desc: "One ledger feeds every model; the demand forecast and price model decide restocking, and steady stock improves the credit score.",
    Diagram: ModelsConnectDiagram,
  },
  {
    id: "ml-pipeline",
    title: "Model Development & Evaluation Pipeline",
    desc: "The research method used for all four components: leakage-free splits, model selection on training data only, a single test, honest baselines and SHAP.",
    Diagram: ModelPipelineDiagram,
  },
  {
    id: "banking",
    title: "Agency Banking Transaction Workflow",
    desc: "Validation, ML risk scoring, CBSL limits and the atomic database function that moves float and cash safely.",
    Diagram: BankingDiagram,
  },
  {
    id: "procurement",
    title: "Smart Procurement & Inventory Workflow",
    desc: "Forecast → reorder point → buy / wait → supplier ranking → FIFO stock batches and alerts.",
    Diagram: ProcurementDiagram,
  },
];
