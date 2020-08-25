import React, {Fragment} from 'react';
import './body-left.css';

function BodyLeft({state, setState}){

    const handelClick = (e, type) => {
        e.preventDefault();

        if(type == 'activacion'){
            const list = state.listActivacion;
            list.push(state.activacion);
            setState({...state, listActivacion:list, activacion:""})
        }else{
            const list = state.listDesactivacion;
            list.push(state.desactivacion);
            setState({...state, listDesactivacion:list, desactivacion:""})
        }
    }
   
    return(
        <Fragment>
            <div className="first-img">
                <input type="file" name="firstImg" />
            </div>
            <div className="column red-box">
                <div className="header-red-box">
                    <p><b>Procedimiento de Desactivación </b></p>
                </div>
                <div className="row">
                    <input type="text" name="desactivacion" value={state.desactivacion} />
                    <button type="button" onClick={e => handelClick(e,'desactivacion') } > guardar </button>
                </div>
                <ul>
                    {state.listDesactivacion.map( (desact, key) => <li key={key} >{desact}</li> )}
                </ul>
            </div>
            <div className="column red-box" >
                <div className="header-red-box">
                    <p><b>Procedimiento de Activación </b></p>
                </div>
                <div className="row">
                    <input type="text" name="activacion" value={state.activacion}/>
                    <button type="button" onClick={e => handelClick(e,'activacion') } > guardar </button>
                </div>
                <ul>
                    {state.listActivacion.map( (act, key) => <li key={key} >{act}</li> )}
                </ul>
            </div>
        </Fragment> 
    )

}

export default BodyLeft;