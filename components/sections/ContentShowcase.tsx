export function ContentShowcase() {
  const items = [
    { title: 'Blog', detail: 'Evidence-based, SEO-ready article in your brand voice.' },
    { title: 'Handout', detail: 'Patient-friendly printable summary with action steps.' },
    { title: 'Email', detail: 'Nurture-style copy that drives consult conversations.' },
    { title: 'Social', detail: 'Repurposed short-form captions from core weekly themes.' },
  ];

  return (
    <section id="showcase" className="section">
      <div className="container">
        <p className="eyebrow">DELIVERABLE PREVIEW</p>
        <h2 className="section-title">What your weekly content stack looks like</h2>
        <div className="grid-two" style={{ marginTop: 20 }}>
          {items.map((item) => (
            <div key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
