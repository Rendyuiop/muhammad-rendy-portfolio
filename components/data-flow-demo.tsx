"use client";

import { useState } from "react";

const modes = {
  streaming: {
    label: "Streaming",
    detail: "Events arrive continuously and are processed with low latency.",
    source: "Kafka topic",
    cadence: "real-time",
    volume: "3 partitions",
  },
  batch: {
    label: "Batch",
    detail: "A scheduled job processes a bounded amount of data at once.",
    source: "Object storage",
    cadence: "scheduled",
    volume: "daily partitions",
  },
} as const;

type Mode = keyof typeof modes;

export default function DataFlowDemo() {
  const [mode, setMode] = useState<Mode>("streaming");
  const [run, setRun] = useState(0);
  const activeMode = modes[mode];

  return (
    <section className="lab-section section-shell" id="data-lab">
      <div className="lab-intro">
        <p className="section-kicker">02 / SEE DATA IN MOTION</p>
        <h2>What does a<br /><em>Data Engineer</em> do?</h2>
        <p className="lab-description">Move the data through a simple version of the systems I build. No jargon required—just follow the journey from a raw event to a useful dataset.</p>
        <div className="mode-switch" role="group" aria-label="Choose data processing mode">
          {(Object.keys(modes) as Mode[]).map((item) => <button className={mode === item ? "active" : ""} key={item} onClick={() => setMode(item)}>{modes[item].label}</button>)}
        </div>
      </div>
      <div className="lab-card">
        <div className="lab-card-top"><span>{activeMode.label.toUpperCase()} PIPELINE</span><span className="lab-run">RUN {String(run).padStart(2, "0")}</span></div>
        <p className="lab-detail">{activeMode.detail}</p>
        <div className="flow-steps">
          <div className="flow-step"><span>01</span><strong>Ingest</strong><small>{activeMode.source}</small></div>
          <div className="flow-connector"><i /></div>
          <div className="flow-step"><span>02</span><strong>Transform</strong><small>clean + enrich</small></div>
          <div className="flow-connector"><i /></div>
          <div className="flow-step"><span>03</span><strong>Validate</strong><small>data quality</small></div>
          <div className="flow-connector"><i /></div>
          <div className="flow-step"><span>04</span><strong>Serve</strong><small>analytics-ready</small></div>
        </div>
        <div className="lab-stats"><span><b>{activeMode.cadence}</b> cadence</span><span><b>{activeMode.volume}</b> setup</span><span><b>99.9%</b> quality target</span></div>
        <button className="run-button" onClick={() => setRun((current) => current + 1)}>Run pipeline <span>→</span></button>
      </div>
    </section>
  );
}
