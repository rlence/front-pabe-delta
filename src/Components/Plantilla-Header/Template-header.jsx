import React, {useState} from 'react';
import './template-header.css';

function TemplateHeader(props){

    const [state, setState] = useState({
        maquina:"",
        activo:"",
        identificacion:"",
        area:"",
        ubicacion:"",
        fecha:"",
        revision:"",
        rev:""

    })

    const handelSubmit = e => {
        e.preventDefault();

    }

    console.log(state)
    return (
        <from onChange={ e => setState({...state, [e.target.name]: e.target.value})} submit={handelSubmit} >
            <div className="row">
                <div className="col-sm-7 col-md-7 title">
                    <h6> FICHA Procedimiento de Aislamiento </h6>
                    <h6> Bloqueo y Etiquetado (PABE) </h6>
                </div>
            <div className="col-sm-5 col-md-5">img alimentos polar</div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-6 line">
                    <p><b>Descripción de máquina o equipo:</b> </p>
                    <div className="row">
                        <input type="text" name="maquina" />
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 line">
                    <div className="row">
                        <p><b>Nº de activo</b></p>
                        <input type="text" name="activo" />
                    </div>
                    <div className="row">
                        <p><b>Nº de identificación de campo</b></p>
                        <input type="text" name="identificacion" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-5 col-md-5 line">
                    <p><b>Área</b></p>
                    <input type="text" name="area" />
                </div>
                <div className="col-sm-7 col-md-7 line">
                    <p><b>Ubicación</b></p>
                    <input type="text" name="ubicacion" />
                </div>
            </div>
            <div className="row" >
                <div className="col-sm-5  col-md-5 line">
                    <p><b>Fecha de origen</b></p>
                    <input type="text " name="fecha" />
                </div>
                <div className="col-sm-4 col-md-4 line">
                    <p><b>Fecha de Revisión</b></p>
                    <input type="text " name="revision" />
                </div>
                <div className="col-sm-3 col-md-3 line">
                    <p><b>Rev</b></p>
                    <input type="text " name="rev" />
                </div>
            </div>
        </from>
    );
};

export default TemplateHeader;