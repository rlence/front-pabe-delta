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
        listPabe:[],
        opcion1:'',
        text1:"",
        opcion2:'',
        text2:"",
        opcion3:'',
        text3:"",
        opcion4:'',
        text4:"",
    });

    const handelChange = e => {
        console.log(e.target.name)
        if(e.target.name === 'firstImg'){

            console.log('estoy aqui')
            setState({...state, [e.target.name]:e.target.files[0]})

        }else if(e.target.name !== '') {
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
            <button type="submit" onClick={handelSubmit}  class="btn btn-success pre-save">Save Cuerpo de Plantilla </button>
        </form>
    )
}

export default TemplateBody;

