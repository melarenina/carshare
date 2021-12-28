const Contador = () => {
  return (
    <div>
      <div className="counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="counter">
                <div className="cell">
                  <i className="fas fa-users"></i>
                  <div className="counter-value number-count" data-count="231">
                    1
                  </div>
                  <p className="counter-info">Happy Users</p>
                </div>
                <div className="cell">
                  <i className="fas fa-code green"></i>
                  <div className="counter-value number-count" data-count="385">
                    1
                  </div>
                  <p className="counter-info">Issues Solved</p>
                </div>
                <div className="cell">
                  <i className="fas fa-cog red"></i>
                  <div className="counter-value number-count" data-count="159">
                    1
                  </div>
                  <p className="counter-info">Good Reviews</p>
                </div>
                <div className="cell">
                  <i className="fas fa-comments yellow"></i>
                  <div className="counter-value number-count" data-count="127">
                    1
                  </div>
                  <p className="counter-info">Case Studies</p>
                </div>
                <div className="cell">
                  <i className="fas fa-rocket blue"></i>
                  <div className="counter-value number-count" data-count="211">
                    1
                  </div>
                  <p className="counter-info">Orders Received</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contador;
