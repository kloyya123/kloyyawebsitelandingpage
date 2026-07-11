# Product Requirements Document (PRD)

## Next-Generation Landing Page & Value-Driven Waitlist Architecture for Kloyya: The AI Chief of Staff

| Attribute                       | Details                          |
| :------------------------------ | :------------------------------- |
| **Document Version**      | v1.0                             |
| **Target Implementation** | Claude Code Automation Scripting |
| **Author**                | Product Strategy Team            |
| **Date**                  | July 7, 2026                     |
| **Status**                | Approved for Code Generation     |

---

## 1. Executive Summary & Product Vision

**Kloyya** is an enterprise-grade AI Chief of Staff designed to serve as the unified intelligence behind every professional decision a leader makes. Unlike traditional unified inboxes or messaging aggregators (e.g., Kinso) that focus strictly on consolidation, UI tidiness, and manual triage, Kloyya operates as an *active cognitive engine*. It processes signals across all communications, documents, and corporate tools to deliver synthesis, execute workflows, and surface strategic insights.

The goal of this document is to specify the frontend, architectural, and data verification requirements for Kloyya's primary Landing Page and high-fidelity Waitlist engine. The waitlist system strictly outlaws arbitrary, artificial counter numbers or gamified "fake progress" metrics. Instead, it relies on deep transparency and interactive progress communication to cultivate trust with sophisticated enterprise users[cite: 2].

---

## 2. Core High-Level Goals

* **Strategic Positioning Accentuation:** Clearly differentiate Kloyya from mechanical messaging hubs[cite: 2]. Position it as an active *Chief of Staff* capable of multi-app reasoning[cite: 2].
* **Authentic Waitlist Integrity:** Reject artificial counter tickers[cite: 2]. Build user momentum through genuine updates, development milestone tracking, and contextual onboarding[cite: 2].
* **Claude Code Executability:** Provide explicit architectural structure, layout parameters, configuration objects, and asset guidelines so that Claude Code can synthesize clean, responsive React/Next.js files instantly[cite: 2].

---

## 3. User Persona & Value Narrative

The primary target user is the high-bandwidth executive, startup founder, or enterprise department lead who manages over 5 active operational channels (Slack, Email, LinkedIn, Notion, Jira, CRM) and suffers from cognitive fragmentation[cite: 2].

> **The Core Value Loop:**
> "Kloyya doesn't just clean your inbox; it reads between the lines, prepares your follow-ups, queries your tech stack, and informs your strategic execution layout before you even ask."[cite: 2]

---

## 4. Landing Page UI/UX Functional Structure

The landing page layout inherits structural polish from modern clean-tech landing grids (such as Kinso's UI hierarchy), optimized for deep content-driven sections[cite: 2].

### 4.1 Navigation Header Block

* **Left:** Minimalist SVG logo typography for "kloyya"[cite: 2].
* **Center:** Text links for "Product Core", "Integrations", "Security Matrix"[cite: 2].
* **Right:** Solid accent button: "Request Access"[cite: 2].

### 4.2 Hero Section (The Intelligence Matrix)

* **Primary Copy:** "The intelligence behind every decision you make."[cite: 2]
* **Supporting Paragraph:** "Kloyya aggregates cross-application operational telemetry to act as your autonomous AI Chief of Staff. Stop managing notifications. Start executing strategy."[cite: 2]
* **CTA Component:** Dual input block (Work Email Field + "Secure Waitlist Priority" Button)[cite: 2].
* **Visual Presentation:** An interactive CSS-rendered canvas grid symbolizing interconnected neural pathways linking disparate corporate applications[cite: 2].

### 4.3 "Under the Hood" Architecture (Process & Intelligence Over Triage)

This dedicated block details exactly what Kloyya is doing while the platform is "Under Active Build," establishing extreme tech credibility instead of an empty landing wall[cite: 2].

| Operational State                       | What Kloyya Executes Authentically                                                                            | User Engineering Benefit                                             |
| :-------------------------------------- | :------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------- |
| **Cross-Platform Ingestion**      | Ingestes and maps deep webhooks across corporate communications, CRMs, documentation, and task hubs[cite: 2]. | Eradicates manual application hopping and contextual loss[cite: 2].  |
| **Cognitive Graph Mapping**       | Builds real-time relational vectors between tasks, people, blockers, and timelines[cite: 2].                  | Surfaces non-obvious operational bottlenecks automatically[cite: 2]. |
| **Autonomous Briefing Synthesis** | Compiles deep executive summaries, action items, and decision frameworks continuously[cite: 2].               | Prepares context arrays before leadership team touchpoints[cite: 2]. |

---

## 5. Third-Party Ecosystem Integrations

Kloyya operates by binding directly to the enterprise data layers[cite: 2]. The landing page must feature a structured integration directory matrix including[cite: 2]:

* **Communication Hubs:** Gmail, Slack Workspace, WhatsApp Business, LinkedIn Enterprise Message Webhooks[cite: 2].
* **Knowledge Graphs & Tasks:** Notion API, Jira Software, Linear, Google Drive File Streams[cite: 2].
* **Operations & Financials:** Salesforce CRM, HubSpot Ecosystem, Stripe Transaction Ledger Logs[cite: 2].

---

## 6. Anti-Fraud Waitlist Engine (No Fake Counters)

To build trust with high-tier B2B customers, artificial user counters are strictly forbidden[cite: 2]. The system tracks momentum via functional progress states[cite: 2].

### 6.1 Form Input Requirements & Validation Rules

* **Email Validation:** Must enforce strict regex checking for active work domains or normal domains [cite: 2].  emails (e.g., `gmail.com`, `yahoo.com`) via a toggleable environment
* **Contextual Enrichment Step (Post-Submit Drawer):** Upon successful email verification, instead of displaying a static number, open a slide-out profile form asking[cite: 2]:
  * *"Which 3 tools fracture your focus the most daily?"* (Multi-select pills matched to the integration suite)[cite: 2]
  * *"What is your team or company headcount size?"*[cite: 2]

### 6.2 Transparent "Being Built" Dynamic Progress Blueprint

Replace the fake counter with an authentic "Development Sprint Ledger"[cite: 2]. This displays a live data object fetched from a configuration array tracking real platform components under assembly[cite: 2].

| Module Name                          | Current Engineering Target                                                    | Development Status           |
| :----------------------------------- | :---------------------------------------------------------------------------- | :--------------------------- |
| **Multi-Vector Context Parse** | Structuring cross-app thread linkage via semantic token alignment[cite: 2].   | `In QA Isolation`[cite: 2] |
| **Secure Webhook Pipeline**    | OAuth2 framework validation matrices for Slack and Jira pipelines[cite: 2].   | `Completed`[cite: 2]       |
| **Executive Decision Engine**  | Fine-tuning LLM reasoning loops against sparse operational matrices[cite: 2]. | `Active Sprint`[cite: 2]   |

---

## 7. Technical Implementation Spec for Claude Code

To enable autonomous structural compilation via Claude Code, use the following clean layout code model properties[cite: 2]:

### 7.1 Tailwind CSS Theme Configuration Values

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        kloyya: {
          slate: '#0f172a',
          accent: '#2563eb',
          surface: '#f8fafc',
          emerald: '#10b981',
          amber: '#f59e0b'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  }
}
```
