// importando componentes:
import { ImcCalc } from "./components/ImcCalc";
import { useState } from "react";
import { ImcTable } from "./components/ImcTable";

import "./App.css";

function App() {
  // criando dos states para manipulação
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  // calculo imc
  const calcImc = (e, altura, peso) => {
    e.preventDefault();
    console.log(peso, altura);

    if (!altura || !peso) return;

    const alturaFloat = +altura.replace(",", ".");
    const pesoFloat = +peso.replace(",", ".");

    const imcResult = (pesoFloat / (alturaFloat * alturaFloat)).toFixed(1);

    setImc(imcResult);
  };

  return <div>{!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable />}</div>;
}

export default App;
