const Features = () => {
  return (
    <div>
      <div id="features" className="basic-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Principais features</h2>
              <p className="p-heading">
                Os recursos do CareShare são projetados para ajudá-lo a melhorar
                suas habilidades de gerenciamento de tempo e se tornar uma
                pessoa mais pontual. Organize suas caronas, agende seus
                compromissos e ajude o planeta com o CarShare
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <ul className="list-unstyled li-space-lg first">
                <li className="media">
                  <span className="fa-stack">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-users fa-stack-1x"></i>
                  </span>
                  <div className="media-body">
                    <h4>Objetivos</h4>
                    <p>
                      Como qualquer processo de autoaperfeiçoamento, tudo começa
                      com a definição de seus objetivos e o compromisso com eles
                    </p>
                  </div>
                </li>
                <li className="media">
                  <span className="fa-stack">
                    <i className="fas fa-circle fa-stack-2x green"></i>
                    <i className="fas fa-code fa-stack-1x"></i>
                  </span>
                  <div className="media-body">
                    <h4>Análise de situações</h4>
                    <p>
                      CarShare fornece um editor visual bem projetado e
                      ergonômico para você enviar mensagens rápidas
                    </p>
                  </div>
                </li>
                <li className="media">
                  <span className="fa-stack">
                    <i className="fas fa-circle fa-stack-2x red"></i>
                    <i className="fas fa-cog fa-stack-1x"></i>
                  </span>
                  <div className="media-body">
                    <h4>Tarefas</h4>
                    <p>
                      Cada opção exibida nos menus do aplicativo é fornecida
                      para melhorar você pessoalmente
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <img
                className="img-fluid"
                src="images/features-app.jpg"
                alt="alternative"
              />
            </div>
            <div className="col-lg-4">
              <ul className="list-unstyled li-space-lg">
                <li className="media">
                  <span className="fa-stack">
                    <i className="fas fa-circle fa-stack-2x yellow"></i>
                    <i className="fas fa-comments fa-stack-1x"></i>
                  </span>
                  <div className="media-body">
                    <h4>Interação social</h4>
                    <p>
                      Agende suas caronas e avaliações periódicas usando as
                      ferramentas
                    </p>
                  </div>
                </li>
                <li className="media">
                  <span className="fa-stack">
                    <i className="fas fa-circle fa-stack-2x blue"></i>
                    <i className="fas fa-rocket fa-stack-1x"></i>
                  </span>
                  <div className="media-body">
                    <h4>Faça acontecer!</h4>
                    <p>Não fique esperando alguém te oferecer carona, peça!</p>
                  </div>
                </li>
                <li className="media">
                  <span className="fa-stack">
                    <i className="fas fa-circle fa-stack-2x"></i>
                    <i className="fas fa-download fa-stack-1x"></i>
                  </span>
                  <div className="media-body">
                    <h4>Bom fundamento</h4>
                    <p>
                      CarShare funciona em qualquer tipo de aparelho celular!
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
