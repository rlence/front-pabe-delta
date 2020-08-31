import React, {Fragment, useState} from 'react';
import './body-left.css';

function BodyLeft({state, setState}){

    const [img, setImg] = useState('');
    const [show, setShow] = useState({
        img:false,
        input: true
    })

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

    const changeImg = e => {
        
        const reader = new FileReader();
        reader.onload = (e) => {
            if(reader.readyState === 2){
                setImg(reader.result);
                setShow({img:true, input:false})
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }
   
    return(
        <Fragment>
            <div className="first-img">
                { show.img ? <img src={img} className="img-first" /> : null }
            </div>
            {  <input type="file" name="firstImg" id="firtPhoto"  onChange={changeImg} />}
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