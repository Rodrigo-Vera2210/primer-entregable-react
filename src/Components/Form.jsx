import React, { useState } from "react";
import Card from "./Card";

function Form() {
    const [bandera, setBandera] = useState('')

    const banderas= {
        ecuador:"https://flagcdn.com/ec.svg",
        peru:"https://flagcdn.com/pe.svg",
        colombia:"https://flagcdn.com/co.svg",
        venezuela:"https://flagcdn.com/ve.svg",
        uruguay:"https://flagcdn.com/uy.svg",
        argentina:"https://flagcdn.com/ar.svg",
        brasil:"https://flagcdn.com/br.svg",
        chile:"https://flagcdn.com/cl.svg",
        bolivia:"https://flagcdn.com/bo.svg",
        paraguay:"https://flagcdn.com/py.svg",
    }

    const [cliente, setCliente] = useState({
        nombre: "",
        pais: "",
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)


    const handleChangeNombre = (e)=>{
        setCliente({...cliente, nombre: e.target.value})
    }
    const handleChangePais = (e)=>{
        setCliente({...cliente, pais: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(
            cliente.nombre.length > 3
            && cliente.nombre[0] != " "
            && cliente.pais.length > 6
        ){
            setBandera(banderas[cliente.pais.toLowerCase()])
            setShow(true);
            setError(false);
        }else{
            setError(true);
            setShow(false);
        }
    }

    return (
        <>
            <div className="container-form">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Ingresa tu nombre"
                        onChange={handleChangeNombre} 
                    />
                    <input 
                        type="text" 
                        placeholder="Ingresa el nombre de tu pais" 
                        onChange={handleChangePais} 
                    />
                    <button>ENVIAR</button>
                    {
                        error
                        ? <p id="mensaje-error">Por favor chequea que la información sea correcta</p>
                        : <></>
                    }
                </form>
            </div>

            {show ? <Card bandera = {bandera != '' ? bandera : ''}/> : <></>}

            
        </>
    );
}

export default Form;
