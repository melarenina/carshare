import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div className="container">
          <a className="navbar-brand logo-image" href="/">
            <img src="images/logo.png" alt="alternative" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-awesome fas fa-bars"></span>
            <span className="navbar-toggler-awesome fas fa-times"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link page-scroll" href="/descricao">
                  DESCRIÇÃO <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="/features">
                  FEATURES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="/avaliacoes">
                  AVALIAÇÕES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link page-scroll" href="/clima">
                  CHEQUE O CLIMA!
                </a>
              </li>
            </ul>
            <span className="nav-item">
              <a
                className="btn-outline-sm page-scroll"
                href="https://www.apple.com/br/app-store/"
                target="_blank"
              >
                DOWNLOAD
              </a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
