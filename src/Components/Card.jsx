//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({bandera}) {
  return (
    <div className="container-bandera">
      <h2>La bandera de tu pais es: </h2>
      <img src={bandera} alt={bandera} />
    </div>
  );
}

export default Card;
