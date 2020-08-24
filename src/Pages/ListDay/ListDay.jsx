import React, {useState, useEffect, Fragment} from 'react';
import { getOneDocument } from '../../Service/data';

function ListDay(props){
    
    const [state, setState] = useState({
        data:[
            'hola',
        ]
    })

    useEffect(
        ()=>{
            const url = window.location.pathname.split('/');
            const id = url[2]
            console.log(id)
        },[]
    )

    const handelChange = e => {
        const value = e.target.value;
        console.log(value)
    }

    const selectDocument = (e, data) =>{

    }

    const createTemplate = e =>{

    }

    return(
        <Fragment>
        <input type="text" onChange={handelChange} className="form-control inputSearch" placeholder="Buscar" />

        <h5> Lista por Documentos  </h5>
        <ul className="list-group">
            { state.data.map( (data, idx) => <li onClick={(e) => selectDocument(e, data) }  key={idx} className="list-group-item"> {data} </li>) }
        </ul>

        <button type="button" onClick={createTemplate} className="btn btn-primary">Nueva Plantilla</button>
    </Fragment>
    )
}

export default ListDay;