import React, { Fragment } from 'react';
import './body-rigth.css';

function BodyRigth({state, setState}){

    const handelClick = (e, type) => {
        e.preventDefault();
        switch(type){
            case "presentes":
                const listP = state.listPresentes;
                listP.push(state.presentes);
                setState({...state,  listPresentes:listP, presentes:""})
                break;
            
            case "bloqueo":
                const listB = state.listBloqueo;
                listB.push(state.bloqueo);
                setState({...state,  listBloqueo:listB, bloqueo:""})
                break;
            
            case "residuales":
                const listR = state.listResiduales;
                listR.push(state.residuales);
                setState({...state,  listResiduales:listR, residuales:""})
                break;
            
            case "puesta":
                const listPu = state.listPuesta;
                listPu.push(state.puesta);
                setState({...state,  listPuesta:listPu, puesta:""})
                break;
            
            case "pabe":
                const listPa = state.listPabe;
                const text = state.pabeAmount + state.pabe;
                listPa.push(text);
                setState({...state,  listPabe:listPa, pabe:"" , pabeAmount:""})
                break;

            default:
                break;
        }
    }

    return (
      <Fragment>
        <div className="red-box">
          <div className="row">
            <div className="header-red-box ancho">
              <p>
                <b>Energías Presentes</b>
              </p>
            </div>
            <div className="header-grey-box ancho">
              <p>
                <b>Lugar del Bloqueo</b>
              </p>
            </div>

                <div className="row">
                    <div className="ancho">
                        <div className="row input-center">
                            <input type="text" value={state.presentes}  name="presentes" /> 
                            <button type="button" onClick={e=> handelClick(e, 'presentes')}>Guardar</button>
                        </div>
                        <ul className="decoration">
                            {state.listPresentes.map((pre, key) => <li key={key}> {pre} </li>)}
                        </ul>
                    </div>
                    <div className="ancho">
                        <div className="row input-center">
                            <input type="text" value={state.bloqueo}  name="bloqueo" /> 
                            <button type="button" onClick={e=> handelClick(e, 'bloqueo')}>Guardar</button>
                        </div>
                        <ul className="decoration">
                            {state.listBloqueo.map((pre, key) => <li key={key}> {pre} </li>)}
                        </ul>
                    </div>
                </div>
          </div>
        </div>
        
        <div className="red-box">
            <div className="row">
                <div className="header-red-box ancho">
                    <p>
                        <b>Energías Residuales</b>
                    </p>
                </div>
                <div className="header-grey-box ancho">
                    <p>
                        <b>Puesta a Cero</b>
                    </p>
                </div>

                <div className="row">
                    <div className="ancho">
                        <div className="row input-center">
                            <input type="text" value={state.residuales}  name="residuales" /> 
                            <button type="button" onClick={e=> handelClick(e, 'residuales')}>Guardar</button>
                        </div>
                        <ul className="decoration">
                            {state.listResiduales.map((pre, key) => <li key={key}> {pre} </li>)}
                        </ul>
                    </div>
                    <div className="ancho">
                        <div className="row input-center">
                            <input type="text" value={state.puesta}  name="puesta" /> 
                            <button type="button" onClick={e=> handelClick(e, 'puesta')}>Guardar</button>
                        </div>
                        <ul className="decoration">
                            {state.listPuesta.map((pre, key) => <li key={key}> {pre} </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="red-box">
            <div className="header-red-box">
                <p><b>Requerimiento para PABE</b></p>
            </div>
            <div className="row">
                <div className="ancho">
                    <div className="row input-center">
                        <input type="number" className="input-number" value={state.pabeAmount} name="pabeAmount" />
                        <input type="text" value={state.pabe}  name="pabe" /> 
                        <button type="button" onClick={e=> handelClick(e, 'pabe')}>Guardar</button>
                    </div>
                    <ul className="decoration left">
                        {state.listPabe.map((pre, key) => <li key={key}> {pre} </li>)}
                    </ul>
                </div>
                <div className="ancho row">
                    <div className="img-txt"> 
                        <p> img1 </p>
                        <p> text1 </p>
                    </div>
                    <div className="img-txt"> 
                        <p> img1 </p>
                        <p> text1 </p>
                    </div>
                    <div className="img-txt"> 
                        <p> img1 </p>
                        <p> text1 </p>
                    </div>
                    <div className="img-txt">
                        <p> img1 </p>
                        <p> text1 </p>
                    </div>
                </div>
            </div>
        </div>


        <div className="red-box">
          <div className="header-red-box">
            <p>
              <b>Paso PABE</b>
            </p>
          </div>
          <ol>
            <li>Notificar a todo el personal sobre el requerimiento de PABE</li>
            <li>Apagar los equipos usando el protocolo regular de apagado</li>
            <li>Localizar y aislar el equipo de toda fuente de energía</li>
            <li>
              Liberar cualquier energía almacenada (Medir la puesta a cero)
            </li>
            <li>
              Aislar, Bloquear y Etiquetar usando dispositivos, candados y
              tarjetas
            </li>
            <li>
              Después de asegurarse que no hay personal expuesto activar el
              equipo y asegurarse que no se active
            </li>
            <li className="text-green">Ejecutar el Trabajo</li>
            <li>
              Verificar el área (herramientas y personas) y remover candado y
              etiqueta
            </li>
            <li>
              Notificar la finalización del trabajo a todo el personal y activar
              el equipo
            </li>
          </ol>
        </div>
      </Fragment>
    );
}

export default BodyRigth;