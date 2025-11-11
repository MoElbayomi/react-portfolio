export default function Home() {
  return (
    <main id="main" className="container section">
      <h1 className="mb-3">Hi, I’m Mohamed </h1>
      <p className="lead">
        CS student at Dalhousie and Opposition data analyst at Darlington F.C. This portfolio shows my projects and goals.
      </p>
      <div className="row g-3 mt-3" role="list">
        <div className="col-md-4" role="listitem">
          <div className="card h-100">
            <img src="https://picsum.photos/seed/one/600/400" className="card-img-top" alt="Sample project for now"/>
            <div className="card-body">
              <h5 className="card-title">Featured work</h5>
              <p className="card-text">Quick view of a recent analysis dashboard prototype, I am trying to make it private.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
