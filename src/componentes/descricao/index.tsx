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
                <h2>Organize Your Time And Start Getting Results</h2>
                <p>
                  Sync is the first mobile app on the market to harness the
                  power of social connections to help you stop procrastinating
                  and start getting things done. Give it a try and see the
                  changes right away
                </p>
                <ul className="list-unstyled li-space-lg">
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">
                      Analyse and evaluate your current status and productivity
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">
                      Begin monitoring your day to day routine with Sync app
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-square"></i>
                    <div className="media-body">
                      See the improved results in no more than a couple of weeks
                    </div>
                  </li>
                </ul>
                <a
                  className="btn-solid-reg popup-with-move-anim"
                  href="#description-1-details-lightbox"
                >
                  LIGHTBOX
                </a>
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
          <div className="col-lg-8">
            <div className="image-container">
              <img
                className="img-fluid"
                src="images/description-1-details-lightbox.jpg"
                alt="alternative"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <h3>Goals Setting</h3>
            <hr />
            <p>
              The app can easily help you track your personal development
              evolution if you take the time to set it up.
            </p>
            <h4>User Feedback</h4>
            <p>
              This is a great app which can help you save time and make your
              live easier. And it will help improve your productivity.
            </p>
            <ul className="list-unstyled li-space-lg">
              <li className="media">
                <i className="far fa-check-square"></i>
                <div className="media-body">Splash screen panel</div>
              </li>
              <li className="media">
                <i className="far fa-check-square"></i>
                <div className="media-body">Statistics graph report</div>
              </li>
              <li className="media">
                <i className="far fa-check-square"></i>
                <div className="media-body">Events calendar layout</div>
              </li>
              <li className="media">
                <i className="far fa-check-square"></i>
                <div className="media-body">Location details screen</div>
              </li>
              <li className="media">
                <i className="far fa-check-square"></i>
                <div className="media-body">Onboarding steps interface</div>
              </li>
            </ul>
            <a className="btn-solid-reg mfp-close page-scroll" href="#download">
              DOWNLOAD
            </a>{" "}
            <button
              className="btn-outline-reg mfp-close as-button"
              type="button"
            >
              BACK
            </button>
          </div>
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
                      <i className="far fa-clock"></i>Schedule
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
                      <strong>Schedule tasks</strong> to keep track of their
                      completion. Sync provides multiple scheduling options
                      including alarms and reminders.
                    </p>
                    <ul className="list-unstyled li-space-lg">
                      <li className="media">
                        <i className="far fa-check-square"></i>
                        <div className="media-body">
                          You can always add new tasks or change the settings of
                          existing ones in your calendar view or the app control
                          panel
                        </div>
                      </li>
                      <li className="media">
                        <i className="far fa-check-square"></i>
                        <div className="media-body">
                          It's easy to stay focused on your most important daily
                          activities that will get you closer to meeting your
                          goals
                        </div>
                      </li>
                      <li className="media">
                        <i className="far fa-check-square"></i>
                        <div className="media-body">
                          Use phone reminders to free up your long term memory
                          which will reduce stress and make you more productive
                        </div>
                      </li>
                    </ul>
                    <a
                      className="btn-solid-reg page-scroll"
                      href="terms-conditions.html"
                    >
                      TERMS
                    </a>{" "}
                    <a
                      className="btn-outline-reg page-scroll"
                      href="privacy-policy.html"
                    >
                      PRIVACY
                    </a>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab-2"
                    role="tabpanel"
                    aria-labelledby="tab-2"
                  >
                    <p>
                      <strong>Keep track of everything</strong> and analyse your
                      progress while using the app. In less than a month you
                      should be seeing improved results when it comes to time
                      management and task prioritization
                    </p>
                    <p>
                      <strong>Anyone can enjoy the app</strong> no matter their
                      gender, age, occupation or location in the world. Sync's
                      algorithms have been built to be flexible and functional
                      for any person in the world
                    </p>
                    <p>
                      <strong>Achieve the impossible</strong> just by carefully
                      monitoring your progress and keeping the app updated with
                      daily operations. It's easier than you think and it only
                      takes a couple of minutes
                    </p>
                    <a className="red" href="terms-conditions.html">
                      Terms & Conditions
                    </a>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab-3"
                    role="tabpanel"
                    aria-labelledby="tab-3"
                  >
                    <p>
                      <strong>Use the power of social interactivity</strong> to
                      keep you motivated and focused on your daily and long term
                      goals. It's revolutionary
                    </p>
                    <ul className="list-unstyled li-space-lg">
                      <li className="media">
                        <i className="far fa-check-square"></i>
                        <div className="media-body">
                          Commiting to something in front of a crowd gives you
                          little room to walk back on your promise and makes you
                          push on
                        </div>
                      </li>
                      <li className="media">
                        <i className="far fa-check-square"></i>
                        <div className="media-body">
                          No more frustrations of loosing focus and not being
                          efficient. Sync main purpose is to solve just that and
                          make you happy
                        </div>
                      </li>
                      <li className="media">
                        <i className="far fa-check-square"></i>
                        <div className="media-body">
                          It's the first mobile app that can turn you in a
                          better organized person without the pressure of
                          failing like other systems
                        </div>
                      </li>
                      <li className="media">
                        <i className="far fa-check-square"></i>
                        <div className="media-body">
                          Recognized by a lot of trainers and life coaches Sync
                          is the number one tool they recommend time management
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
