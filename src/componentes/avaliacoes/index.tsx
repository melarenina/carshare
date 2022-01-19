import "./avaliacoes.css";
import firebase from "../../db/firebase";
import { database } from "../../db/firebase";
import { useEffect, useState } from "react";

const Avaliacoes = () => {
  const [avaliacoes, setAvaliacoes] = useState<any>([]);
  const [nome, setNome] = useState("");
  const [profissao, setProfissao] = useState("");
  const [avaliacaoTexto, setAvaliacaoTexto] = useState("");

  const ref = firebase.firestore().collection("avaliacoes");
  const db = firebase.firestore();

  useEffect(() => {
    getAvaliacoes();
  }, []);

  const getAvaliacoes = async () => {
    setAvaliacoes([]);
    const data = await ref.get();
    data.docs.forEach((item) => {
      setAvaliacoes((avaliacoes: any) => [...avaliacoes, item.data()]);
    });
  };

  const pushAvaliacoes = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Add data to the store
    db.collection("avaliacoes")
      .add({
        nome: nome,
        profissao: profissao,
        avaliacao: avaliacaoTexto,
      })
      .then((docRef) => {
        alert("Avaliação enviada com sucesso! Obrigado!");
        getAvaliacoes();
      })
      .catch((error) => {
        console.error("Houve um erro:", error);
      });
  };

  return (
    <div>
      <div className="cards-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Avaliações</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {avaliacoes &&
                avaliacoes.map((avaliacao: any) => {
                  return (
                    <div className="card" key={avaliacao.nome}>
                      <div className="card-image">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <hr className="testimonial-line" />
                      </div>
                      <div className="card-body">
                        <div className="testimonial-text">
                          {avaliacao.avaliacao}
                        </div>
                        <div className="testimonial-author">
                          {avaliacao.nome} - {avaliacao.profissao}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mb-5">Deixe a sua também!</div>
            <div className="col-lg-12 mb-5">
              <form
                className="avaliacoes-form"
                onSubmit={(event) => {
                  pushAvaliacoes(event);
                }}
              >
                <div className="inputs">
                  <div className="col-lg-6 col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      placeholder="Nome completo"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 form-group">
                    <input
                      type="profissão"
                      className="form-control"
                      id="profissao"
                      placeholder="Profissão"
                      value={profissao}
                      onChange={(e) => setProfissao(e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Deixe sua opinião!"
                    value={avaliacaoTexto}
                    onChange={(e) => setAvaliacaoTexto(e.target.value)}
                    rows={8}
                  ></textarea>
                </div>

                <div className="col-lg-12 col-md-12">
                  <button className="btn-solid-lg submit" type="submit">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avaliacoes;
