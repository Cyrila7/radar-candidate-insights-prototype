import { ArrowLeft, Bookmark, BriefcaseBusiness, CheckCircle2, ExternalLink, MapPin } from 'lucide-react'
import CandidateProcess from './components/CandidateProcess.jsx'
import { candidateInsights } from './data/candidateInsights.js'

const insight = candidateInsights['ramp-swe-intern-2027']

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-mark">R</div>
        <div className="brand-copy"><strong>Early Career Radar</strong><span>Prototype</span></div>
        <nav><span>Internships</span><span>Applications</span><span>Alerts</span></nav>
      </header>

      <main className="page">
        <button className="back"><ArrowLeft size={17} /> Back to internships</button>

        <div className="layout">
          <div className="main-column">
            <section className="job-header card">
              <div className="company-logo">R</div>
              <div className="job-title-wrap">
                <div className="job-kicker">Ramp · Internship</div>
                <h1>Software Engineering Intern</h1>
                <div className="job-facts"><span><MapPin size={16} /> New York, NY</span><span><BriefcaseBusiness size={16} /> Software Engineering</span></div>
              </div>
              <button className="icon-button" aria-label="Save job"><Bookmark size={20} /></button>
            </section>

            <section className="description card">
              <div className="section-heading"><div><span className="eyebrow neutral">Employer-provided</span><h2>Job description</h2></div><span className="muted">Captured from employer · 2027 cycle</span></div>
              <p>Ramp is looking for software engineering interns interested in building products and systems that solve real customer problems. Interns work alongside engineers and contribute to production-facing projects.</p>
              <h3>What you'll do</h3>
              <ul><li>Build and ship product and platform features.</li><li>Collaborate with engineers and cross-functional partners.</li><li>Write maintainable code and reason through implementation tradeoffs.</li></ul>
              <h3>What we're looking for</h3>
              <ul><li>Strong programming fundamentals and problem-solving skills.</li><li>Experience building software through coursework, projects, or internships.</li></ul>
              <p className="prototype-note">Job copy is intentionally abbreviated for this standalone prototype.</p>
            </section>

            <CandidateProcess insight={insight} />

            <section className="application-card card">
              <span className="eyebrow neutral">Private to you</span>
              <h2>Your application</h2>
              <div className="application-row"><CheckCircle2 size={19} /><div><strong>Track your progress</strong><p>Save notes and update your stage as your application moves forward.</p></div></div>
            </section>
          </div>

          <aside className="sidebar">
            <div className="card action-card"><button className="apply-button">Apply on Ramp <ExternalLink size={17} /></button><p>Opens the employer's application.</p></div>
            <div className="card sidebar-facts"><h3>Role details</h3><div><span>Work mode</span><strong>Hybrid</strong></div><div><span>Level</span><strong>Internship</strong></div><div><span>Eligibility</span><strong>Undergraduate</strong></div></div>
          </aside>
        </div>
      </main>
    </div>
  )
}
