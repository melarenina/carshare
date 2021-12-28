const Principal = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-container">
                <h1>Mobile App Landing Page</h1>
                <p className="p-large p-heading">
                  Start focusing on your goals and get more things done with
                  Sync mobile application. It's the first app to harness the
                  power of social connections to help you stay focused and get
                  organized
                </p>
                <a className="btn-solid-lg" href="#your-link">
                  <i className="fab fa-apple"></i>DOWNLOAD
                </a>
                <a className="btn-solid-lg" href="#your-link">
                  <i className="fab fa-google-play"></i>DOWNLOAD
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="images/header-iphone.png"
                  alt="alternative"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="deco-white-circle-1">
          <img src="images/decorative-white-circle.svg" alt="alternative" />
        </div>
        <div className="deco-white-circle-2">
          <img src="images/decorative-white-circle.svg" alt="alternative" />
        </div>
        <div className="deco-blue-circle">
          <img src="images/decorative-blue-circle.svg" alt="alternative" />
        </div>
        <div className="deco-yellow-circle">
          <img src="images/decorative-yellow-circle.svg" alt="alternative" />
        </div>
        <div className="deco-green-diamond">
          <img src="images/decorative-green-diamond.svg" alt="alternative" />
        </div>
      </header>
      <div className="cards-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-image">
                  <i className="fas fa-users"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Identify Goals</h5>
                </div>
              </div>

              <div className="card">
                <div className="card-image green">
                  <i className="fas fa-code"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Situation Analysis</h5>
                </div>
              </div>

              <div className="card">
                <div className="card-image red">
                  <i className="fas fa-cog"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Tasks Settings</h5>
                </div>
              </div>

              <div className="card">
                <div className="card-image yellow">
                  <i className="fas fa-comments"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Social Interaction</h5>
                </div>
              </div>

              <div className="card">
                <div className="card-image blue">
                  <i className="fas fa-rocket"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Get Things Done</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principal;
