import React, {useState} from 'react';
import BodyLeft from './Body-left';
import BodyRigth from './Body-rigth';

function TemplateBody({ templates, setTemplates }){

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


    });

    const handelChange = e => {

        if(e.target.name === 'firstImg'){
            console.log('estoy aqui')
            setState({...state, [e.target.name]:e.target.files[0]})
        }else{
            console.log('estoy en el esle')
            setState({
                ...state,
                [e.target.name]:e.target.value   
            })
        }

    }
    
    const handelSubmit = e=>{
        e.preventDefault();
        setTemplates({
            ...templates,
            templatesBody:state
        })
    }

    return(
        <form onChange={handelChange}>
            <div className="row">
                <div className="col-sm-6 col-md-6">
                    <BodyLeft  state={state} setState={setState} />
                </div>
                <div className="col-sm-6 col-md-6">
                    <BodyRigth state={state} setState={setState} />
                </div>
            </div>
            <button type="submit" onClick={handelSubmit}  class="btn btn-success pre-save">Save</button>
        </form>
    )
}

export default TemplateBody;

