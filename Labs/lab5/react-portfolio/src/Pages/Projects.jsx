export default function Projects() {
  const items = [
    { title: "Sports Live", tech: "React + API", role: "Frontend & data wiring" },
    { title: "Churn Prediction", tech: "Python + XGBoost", role: "EDA & modeling" },
  ];
  return (
    <main id="main" className="container section">
      <h1>Projects</h1>
      <p className="mb-4">A few projects with short notes (detailed writeups can come later).</p>
      <div className="row g-3">
        {items.map((p) => (
          <div key={p.title} className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text"><strong>Tech:</strong> {p.tech}</p>
                <p className="card-text"><strong>My role:</strong> {p.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
