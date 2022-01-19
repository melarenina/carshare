const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-col first">
                <h5>CarShare</h5>
                <p className="p-small">
                  Trabalho realizado para a matéria de Desenvolvimento Web, com
                  o professor Leandro Ledel.
                </p>
              </div>
              <div className="footer-col second">
                <h5>Informações de contato</h5>
                <ul className="list-unstyled li-space-lg p-small">
                  <li className="media">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="media-body">
                      Rua dos bobos, n0 - Campinas, SP
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-envelope"></i>
                    <div className="media-body">
                      <a href="#">carshare@contato.com</a>
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-phone-alt"></i>
                    <div className="media-body">
                      <a href="#">+55 (19) 3282-4517</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="footer-col third">
                <h5>Links de Valor</h5>
                <ul className="list-unstyled li-space-lg p-small">
                  <li>
                    <a href="#">Termos e condições</a>
                  </li>
                  <li>
                    <a href="#">Políticas de privacidade</a>
                  </li>
                  <li>
                    <a href="#">Detalhes do artigo</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col fifth">
                <span className="fa-stack">
                  <a href="#">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="#">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-twitter fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="#">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-pinterest-p fa-stack-1x"></i>
                  </a>
                </span>
                <span className="fa-stack">
                  <a href="#">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fab fa-instagram fa-stack-1x"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="p-small">
                Copyright © 2022 <a href="#">CarShare</a> - Todos os direitos
                reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
