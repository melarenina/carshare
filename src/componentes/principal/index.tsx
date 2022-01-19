const Principal = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-container">
                <h1>CarShare</h1>
                <p className="p-large p-heading">
                  Economize gasolina e ganhe um amigo (e uma carona!)
                </p>
                <a
                  className="btn-solid-lg"
                  href="https://www.apple.com/br/app-store/"
                  target="_blank"
                >
                  <i className="fab fa-apple"></i>DOWNLOAD
                </a>
                <a
                  className="btn-solid-lg"
                  href="https://play.google.com/store"
                  target="_blank"
                >
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
                  <h5 className="card-title">Identificar objetivos</h5>
                </div>
              </div>

              <div className="card">
                <div className="card-image green">
                  <i className="fas fa-code"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Análise das situações</h5>
                </div>
              </div>

              <div className="card">
                <div className="card-image red">
                  <i className="fas fa-cog"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Configurações das tarefas</h5>
                </div>
              </div>

              <div className="card">
                <div className="card-image yellow">
                  <i className="fas fa-comments"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Interações sociais</h5>
                </div>
              </div>

              <div className="card">
                <div className="card-image blue">
                  <i className="fas fa-rocket"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Faça acontecer!</h5>
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
