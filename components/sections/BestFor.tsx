export function BestFor() {
  const bestFor = [
    'Private practices that want consistent weekly content without hiring in-house.',
    'Clinics that need compliance-safe education content across blog, email, and social.',
    'Teams that want strategy + execution, not just random post writing.',
  ];

  const notBestFor = [
    'Practices looking for one-off viral content with no strategy.',
    'Brands that want aggressive medical claims or fear-based messaging.',
    'Teams unwilling to provide basic brand voice/input during onboarding.',
  ];

  return (
    <section id="best-for" className="section section-dark">
      <div className="container">
        <p className="eyebrow">FIT CHECK</p>
        <h2 className="section-title">Who Hikima is best for</h2>
        <div className="grid-two" style={{ marginTop: 20 }}>
          <div className="card">
            <h3>Best fit</h3>
            <ul>
              {bestFor.map((item) => (
                <li key={item}>→ {item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>Not a fit</h3>
            <ul>
              {notBestFor.map((item) => (
                <li key={item}>→ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
