import React from "react";

const Descricao = () => {
  return (
    <div>
      <div id="description" className="basic-1 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="images/description-1-app.png"
                  alt="alternative"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-container">
                <h2>Organize seu tempo e nunca mais chegue atrasado!</h2>
                <p>
                  Através desse aplicativo, você pode selecionar suas pessoas
                  favoritas para pedir carona, economizando gasolina e ajudando
                  o meio ambiente com menos poluição nas ruas.
                </p>
                <ul className="list-unstyled li-space-lg">
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">
                      Seleciona caronas favoritas
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">
                      Organize por ordem de preferência
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">Seja feliz :)</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="description-1-details-lightbox"
        className="lightbox-basic zoom-anim-dialog mfp-hide"
      >
        <div className="row">
          <button
            title="Close (Esc)"
            type="button"
            className="mfp-close x-button"
          >
            ×
          </button>
        </div>
      </div>

      <div className="tabs">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tabs-container">
                <ul className="nav nav-tabs" id="cedoTabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="nav-tab-1"
                      data-toggle="tab"
                      href="#tab-1"
                      role="tab"
                      aria-controls="tab-1"
                      aria-selected="true"
                    >
                      <i className="far fa-clock"></i>Programe
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="nav-tab-2"
                      data-toggle="tab"
                      href="#tab-2"
                      role="tab"
                      aria-controls="tab-2"
                      aria-selected="false"
                    >
                      <i className="fas fa-list"></i>Tracking
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="nav-tab-3"
                      data-toggle="tab"
                      href="#tab-3"
                      role="tab"
                      aria-controls="tab-3"
                      aria-selected="false"
                    >
                      <i className="far fa-calendar-alt"></i>Organize
                    </a>
                  </li>
                </ul>

                <div className="tab-content" id="cedoTabsContent">
                  <div
                    className="tab-pane fade show active"
                    id="tab-1"
                    role="tabpanel"
                    aria-labelledby="tab-1"
                  >
                    <p>
                      <strong>Programe caronas</strong> para manter registro de
                      locais e caronas compleas. A sincronização oferece várias
                      opções de agendamento incluindo alarmes e lembretes.
                    </p>
                    <ul className="list-unstyled li-space-lg">
                      <li className="media">
                        <i className="far fa-check-square"></i>
                        <div className="media-body">
                          Você sempre pode adicionar novas caronas ou alterar as
                          configurações das existentes na visualização do
                          calendário ou no painel de controle do aplicativo
                        </div>
                      </li>
                      <li className="media">
                        <i className="far fa-check-square"></i>
                        <div className="media-body">
                          É fácil manter o foco em suas atividades diárias mais
                          importantes que o aproximarão de seus objetivos
                        </div>
                      </li>
                      <li className="media">
                        <i className="far fa-check-square"></i>
                        <div className="media-body">
                          Use lembretes de telefone para liberar sua memória de
                          longo prazo, o que reduzirá o estresse e o tornará
                          mais produtivo
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab-2"
                    role="tabpanel"
                    aria-labelledby="tab-2"
                  >
                    <p>
                      <strong>Acompanhe tudo</strong> e analise seu progresso
                      enquanto usa o aplicativo. Em menos de um mês, você deve
                      estar vendo melhores resultados quando se trata de gastos
                      e habilidade social.
                    </p>
                    <p>
                      <strong>
                        Qualquer pessoa pode desfrutar do aplicativo
                      </strong>{" "}
                      não importa seu sexo, idade, ocupação ou localização no
                      mundo. Os algoritmos do Sync foram desenvolvidos para
                      serem flexíveis e funcionais para qualquer pessoa no mundo
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab-3"
                    role="tabpanel"
                    aria-labelledby="tab-3"
                  >
                    <p>
                      <strong>Use o poder da interatividade social</strong> para
                      mantê-lo motivado e focado em seus objetivos diários e de
                      longo prazo. É revolucionário
                    </p>
                    <ul className="list-unstyled li-space-lg">
                      <li className="media">
                        <i className="far fa-check-square"></i>
                        <div className="media-body">
                          Comprometer-se com algo na frente de uma multidão lhe
                          dá pouco espaço para voltar atrás em sua promessa e
                          faz você seguir em frente
                        </div>
                      </li>
                      <li className="media">
                        <i className="far fa-check-square"></i>
                        <div className="media-body">
                          Chega de gastar, chegar atrasado e não ser eficiente.
                          O objetivo principal do Sync é resolver exatamente
                          isso e fazer você feliz
                        </div>
                      </li>
                      <li className="media">
                        <i className="far fa-check-square"></i>
                        <div className="media-body">
                          É o primeiro aplicativo móvel que pode transformá-lo
                          em uma pessoa mais organizada e boa para o meio
                          ambiente sem a pressão de falhar como outros sistemas
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="images/description-2-app.png"
                  alt="alternative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descricao;
