// Resultado do IMC
import { Button } from "./Button";
import "./imcTable.css";

export const ImcTable = ({ data, imc, info, infoClass, resetCalc }) => {
  return (
    <div className="result-container">
      <p id="imc-number">
        Seu IMC: <span className={infoClass}>{imc}</span>
      </p>
      <p id="imc-info">
        Situação Atual: <span className={infoClass}>{info}</span>
      </p>
      <h3>Confira as Classificações:</h3>
      <div className="imc-table">
        <div className="table-header">
          <h4>IMC</h4>
          <h4>Classificação</h4>
          <h4>Obsidade</h4>
        </div>
        {/* Trazendo as informações do data.js que poderia ser de uma API */}
        {data.map((itens) => (
          <div className="table-data" key={itens.info}>
            <p>{itens.classification}</p>
            <p>{itens.info}</p>
            <p>{itens.obesity}</p>
          </div>
        ))}
      </div>
      <Button id="back-btn" text="Voltar" action={resetCalc} />
    </div>
  );
};
