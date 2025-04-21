// Estrutura HTML do site
// Importando componentes
import { Button } from "./Button";
import "./ImcCalc.css";

export const ImcCalc = () => {
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
            />
          </div>
          <div className="form-control">
            <label htmlFor="peso">Peso:</label>
            <input type="text" name="peso" id="peso" placeholder="81" />
          </div>
          <div className="action-button">
            <Button id="calc-btn" text="Calcular" />
            <Button id="clear-btn" text="Limpar" />
          </div>
        </div>
      </form>
    </div>
  );
};
