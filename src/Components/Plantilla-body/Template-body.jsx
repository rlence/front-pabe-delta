import React, {useState} from 'react';
import BodyLeft from './Body-left';
import BodyRigth from './Body-rigth';

function TemplateBody(props){

    const [state, setState] = useState({
        firstImg:"",
        desactivacion:"",
        listDesactivacion:[],
        activacion:"",
        listActivacion:[],
        presentes:"",
        listPresentes:[],
        bloqueo:"",
        listBloqueo:[],
        residuales:"",
        listResiduales:[],
        puesta:"",
        listPuesta:[],
        pabe:"",
        pabeAmount:"",
        listPabe:[]


    }) 
    console.log(state)
    return(
        <form onChange={e => setState({...state, [e.target.name]:e.target.value})}>
            <div className="row">
                <div className="col-sm-6 col-md-6">
                    <BodyLeft  state={state} setState={setState} />
                </div>
                <div className="col-sm-6 col-md-6">
                    <BodyRigth state={state} setState={setState} />
                </div>
            </div>
        </form>
    )
}

export default TemplateBody;

