import { Clock3, Code2, Info, Route, Sparkles } from 'lucide-react'

function BulletList({ items }) {
  return (
    <ul className="bullet-list">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )
}

export default function CandidateProcess({ insight }) {
  if (!insight) return null

  return (
    <section className="candidate-section" aria-labelledby="candidate-process-title">
      <div className="candidate-heading">
        <div>
          <span className="eyebrow"><Sparkles size={14} /> Candidate-reported</span>
          <h2 id="candidate-process-title">Recruiting process</h2>
          <p className="candidate-meta">{insight.company} · {insight.role} · {insight.cycle}</p>
        </div>
        <span className="updated">Updated {insight.lastUpdated}</span>
      </div>

      <div className="trust-note">
        <Info size={16} />
        <span>Based on recent candidate reports. Experiences may vary.</span>
      </div>

      <div className="process-block">
        <div className="block-label"><Route size={17} /> Reported stages</div>
        <div className="stage-row">
          {insight.stages.map((stage, index) => (
            <React.Fragment key={stage}>
              <span className="stage-pill">{stage}</span>
              {index < insight.stages.length - 1 && <span className="arrow">→</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="detail-grid">
        <div className="detail-block">
          <div className="block-label"><Code2 size={17} /> Online assessment</div>
          <h3>Format</h3>
          <BulletList items={insight.assessment.format} />
          <h3>Reported topics</h3>
          <BulletList items={insight.assessment.topics} />
        </div>

        <div className="detail-block">
          <div className="block-label">Interviews</div>
          <BulletList items={insight.interviews} />
          <div className="timing">
            <div className="block-label"><Clock3 size={17} /> Response timing</div>
            <p>{insight.responseTiming}</p>
          </div>
        </div>
      </div>

      <p className="disclaimer">{insight.disclaimer}</p>
    </section>
  )
}
