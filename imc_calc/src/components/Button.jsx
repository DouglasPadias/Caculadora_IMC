// Criando os botões
import "./Button.css";

export const Button = ({ id, text, action }) => {
  const eventButton = (e) => {
    action(e);
  };
  return (
    <button id={id} onClick={eventButton}>
      {text}
    </button>
  );
};
