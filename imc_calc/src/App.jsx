// importando componentes:
import { ImcCalc } from "./components/ImcCalc";
import { useState } from "react";
import { ImcTable } from "./components/ImcTable";
import { data } from "./data/data";

import "./App.css";

function App() {
  // criando dos states para manipulação
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  // calculo IMC
  const calcImc = (e, altura, peso) => {
    e.preventDefault();

    if (!altura || !peso) return;

    const alturaFloat = +altura.replace(",", ".");
    const pesoFloat = +peso.replace(",", ".");

    const imcResult = (pesoFloat / (alturaFloat * alturaFloat)).toFixed(1);

    setImc(imcResult);

    // trabalhando com as cores do IMC
    data.forEach((itens) => {
      if (imcResult >= itens.min && imcResult <= itens.max) {
        setInfo(itens.info);
        setInfoClass(itens.infoClass);
      }
    });
    if (!info) return;
  };
  // Botão limpar
  const resetCalc = (e) => {
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  };

  return (
    <div>
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <ImcTable
          data={data}
          imc={imc}
          info={info}
          infoClass={infoClass}
          resetCalc={resetCalc}
        />
      )}
    </div>
  );
}

export default App;
