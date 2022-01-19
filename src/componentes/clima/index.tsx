import { useState, useEffect } from "react";
import "./clima.css";

const Clima = () => {
  const [cidade, setCidade] = useState<any>();
  const [pesquisa, setPesquisa] = useState("Sao Paulo");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${pesquisa}&units=metric&appid=f1e54a75b1c4bed47a561452a949c466`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCidade(resJson.main);
    };
    fetchApi();
  }, [pesquisa]);

  return (
    <>
      <div>
        <div className="counter">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 alinhamento">
                <div className="col-lg-4 col-md-4">
                  <input
                    type="text"
                    className="mt-5 form-control"
                    id="cidade"
                    placeholder="Cheque a sua cidade"
                    onChange={(event) => {
                      setPesquisa(event.target.value);
                    }}
                  />
                </div>
                {!cidade ? (
                  <p className="error mt-5">Cidade não encontrada :(</p>
                ) : (
                  <div className="seconddiv">
                    <div className="img">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        fill="currentColor"
                        className="bi bi-brightness-high"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                      </svg>
                    </div>
                    <h2>{pesquisa}</h2>
                    <h3>{cidade.temp} °C</h3>
                    <p>
                      Min {cidade.temp_min} °C | Max {cidade.temp_max} °C
                    </p>
                    <p>Pressão {cidade.pressure} hPa</p>
                    <p>Humidade {cidade.humidity} %</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clima;
