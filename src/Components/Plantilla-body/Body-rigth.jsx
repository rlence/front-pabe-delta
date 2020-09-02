import React, { Fragment, useState } from 'react';
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

    const [ opciones, setOpciones] = useState({
        opcion1:'',
        text1:"",
        show1: false,
        opcion2:'',
        text2:"",
        show2: false,
        opcion3:'',
        text3:"",
        show3: false,
        opcion4:'',
        text4:"",
        show4: false,
    });

    const listImg = [
        { type: 'Breaker', value:"https://firebasestorage.googleapis.com/v0/b/fichas-pabe-delta.appspot.com/o/Breaker.jpg?alt=media&token=60148f32-7c7c-4114-9cc1-270b483d9442"},
        { type: 'Cable', value:"https://firebasestorage.googleapis.com/v0/b/fichas-pabe-delta.appspot.com/o/Cable.jpg?alt=media&token=732cec47-5283-4c9d-b183-5c93847fe576"},
        { type: 'Candado', value:"https://firebasestorage.googleapis.com/v0/b/fichas-pabe-delta.appspot.com/o/Candado.jpg?alt=media&token=f0e19459-61e5-41df-a105-d5d0dbc02c5c"},
        { type: 'Etiqueta', value:"https://firebasestorage.googleapis.com/v0/b/fichas-pabe-delta.appspot.com/o/Etiqueta.jpg?alt=media&token=a52d0fbe-2a4d-482d-889f-c260007e83ce"},
        { type: 'Universal Breaker', value:"https://firebasestorage.googleapis.com/v0/b/fichas-pabe-delta.appspot.com/o/Universal%20Breaker%20ML.jpg?alt=media&token=51a69802-cde3-42df-b2df-80c02e17724d"},
        { type: 'Valvula', value:"https://firebasestorage.googleapis.com/v0/b/fichas-pabe-delta.appspot.com/o/Valvula.jpg?alt=media&token=6dd750c3-a7b1-46b9-9089-d8c6e48e50ab"},
        { type: 'Pinzas', value:"https://firebasestorage.googleapis.com/v0/b/fichas-pabe-delta.appspot.com/o/pinza.jpg?alt=media&token=46badb09-fa3c-4174-9c9a-b26db5cdd373"}
    ]

    const handelChange = (e, type) => {
        console.log(type)
        console.log(e.target.value)
        setOpciones({...opciones,[type]:e.target.value })
        switch(type){
            case 'opcion1':
                setState({...state, opcion1:e.target.value });
                break;

            case 'opcion2':
                setState({...state, opcion2:e.target.value });
                break;

            case 'opcion3':
                setState({...state, opcion3:e.target.value });
                break;

            case 'opcion4':
                setState({...state, opcion4:e.target.value });
                break;
        }
        
    }
    console.log(opciones)
    console.log(state)
    const showText = (e, type) => {
        e.preventDefault();
        console.log(type)
        setOpciones({
            ...opciones, [type]:true
        })
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
                        { opciones.opcion1.length > 0 ?
                            <img src={opciones.opcion1} className="img-select" alt="img-default" /> : 
                            <select onChange={e => handelChange(e, 'opcion1')}>
                                <option> Elige</option>
                                {listImg.map( (item,key) => <option key={key} value={item.value} > {item.type} </option>)}
                            </select>
                        }
                        { opciones.show1 ?
                            <p> {opciones.text1} </p> :
                            <Fragment>
                                <input type="text" name="text1" onChange={e => setOpciones({...opciones, [e.target.name]:e.target.value }) } />
                                <button type="button" onClick={e => showText(e, 'show1')}><i class="fas fa-check"></i></button>
                            </Fragment>
                        }
                    </div>
                    <div className="img-txt"> 
                        { opciones.opcion2.length > 0 ?
                            <img src={opciones.opcion2} className="img-select" alt="img-default" /> : 
                            <select onChange={e => handelChange(e, 'opcion2')}>
                                <option> Elige</option>
                                {listImg.map( (item,key) => <option key={key} value={item.value} > {item.type} </option>)}
                            </select>
                        }
                        { opciones.show2 ?
                            <p> {opciones.text2} </p> :
                            <Fragment>
                                <input type="text" name="text2" onChange={e => setOpciones({...opciones, [e.target.name]:e.target.value }) } />
                                <button type="button" onClick={e => showText(e, 'show2')}><i class="fas fa-check"></i></button>
                            </Fragment>
                        }
                    </div>
                    <div className="img-txt"> 
                        { opciones.opcion3.length > 0 ?
                            <img src={opciones.opcion3} className="img-select" alt="img-default" /> : 
                            <select onChange={e => handelChange(e, 'opcion3')}>
                                <option> Elige</option>
                                {listImg.map( (item,key) => <option key={key} value={item.value} > {item.type} </option>)}
                            </select>
                        }
                        { opciones.show3 ?
                            <p> {opciones.text3} </p> :
                            <Fragment>
                                <input type="text" name="text3" onChange={e => setOpciones({...opciones, [e.target.name]:e.target.value }) } />
                                <button type="button" onClick={e => showText(e, 'show3')}><i class="fas fa-check"></i></button>
                            </Fragment>
                        }
                    </div>
                    <div className="img-txt"> 
                        { opciones.opcion4.length > 0 ?
                            <img src={opciones.opcion4} className="img-select" alt="img-default" /> : 
                            <select onChange={e => handelChange(e, 'opcion4')}>
                                <option> Elige</option>
                                {listImg.map( (item,key) => <option key={key} value={item.value} > {item.type} </option>)}
                            </select>
                        }
                        { opciones.show4 ?
                            <p> {opciones.text4} </p> :
                            <Fragment>
                                <input type="text" name="text4" onChange={e => setOpciones({...opciones, [e.target.name]:e.target.value }) } />
                                <button type="button" onClick={e => showText(e, 'show4')}><i class="fas fa-check"></i></button>
                            </Fragment>
                        }
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