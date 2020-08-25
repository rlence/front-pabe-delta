import React, {useState} from 'react';
import BodyLeft from './Body-left';

function TemplateBody(props){

    const [state, setState] = useState({
        firstImg:"",
        desactivacion:"",
        listDesactivacion:[],
        activacion:"",
        listActivacion:[],

    }) 
    console.log(state)
    return(
        <form onChange={e => setState({...state, [e.target.name]:e.target.value})}>
            <div className="row">
                <div className="col-sm-6 col-md-6">
                    <BodyLeft  state={state} setState={setState} />
                </div>
                <div className="col-sm-6 col-md-6">

                </div>
            </div>
        </form>
    )
}

export default TemplateBody;

