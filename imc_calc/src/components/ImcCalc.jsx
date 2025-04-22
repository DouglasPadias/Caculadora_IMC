// Estrutura HTML do site
// Importando componentes
import { useState } from "react";
import { Button } from "./Button";
import "./ImcCalc.css";

export const ImcCalc = ({ calcImc }) => {
  // manipulando altura e peso com usestates
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  // limpando campo altura e peso
  const clearForm = (e) => {
    e.preventDefault();
    setAltura("");
    setPeso("");
  };
  // função para bloquer digitos ou caracteres especificos
  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };
  // limpando altura e limitando caracteres
  const handleAltura = (e) => {
    const updatedValue = validDigits(e.target.value);
    setAltura(updatedValue);
  };
  // limpando peso e limitando caracteres
  const handlePeso = (e) => {
    const updatedValue = validDigits(e.target.value);
    setPeso(updatedValue);
  };
  return (
    <div className="container">
      <h2>Calculadora IMC</h2>
      <form id="imc-form">
        <div className="form-input">
          <div className="form-control">
            <label htmlFor="altura">Altura:</label>
            <input
              type="text"
              name="altura"
              id="altura"
              placeholder="Exemplo 1,75"
              onChange={(e) => handleAltura(e)}
              value={altura}
            />
          </div>
          <div className="form-control">
            <label htmlFor="peso">Peso:</label>
            <input
              type="text"
              name="peso"
              id="peso"
              placeholder="81"
              onChange={(e) => handlePeso(e)}
              value={peso}
            />
          </div>
          <div className="action-button">
            <Button
              id="calc-btn"
              text="Calcular"
              action={(e) => calcImc(e, altura, peso)}
            />
            <Button id="clear-btn" text="Limpar" action={clearForm} />
          </div>
        </div>
      </form>
    </div>
  );
};
