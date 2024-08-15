import Form from "./Components/Form";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  return (
    <div className="App">
      <h1>Busca la bandera de tu pais</h1>
      <p>Solo se aceptan paises de sudamerica que su nombre tenga mas de 6 letras</p>
      <Form/>
    </div>
  );
}

export default App;
