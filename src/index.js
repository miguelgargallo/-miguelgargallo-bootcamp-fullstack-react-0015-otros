import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

const App = (props) => {
  return <h1>{props.contadorInicial}</h1>;
};

let contador = 0;

ReactDOM.render(<App contadorInicial={contador} />, rootElement);

contador = contador + 1;

ReactDOM.render(<App contadorInicial={contador} />, rootElement);

contador = contador + 1;

ReactDOM.render(<App contadorInicial={contador} />, rootElement);
