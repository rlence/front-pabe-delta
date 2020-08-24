import React, {Fragment, useState, useEffect} from "react";
import { Redirect } from 'react-router-dom';
import './plantillaList.css';
import { createNewDocument, getDocuments } from '../../Service/data';

function PlantillaList(props) {

    const [ state, setState] = useState({
        loadding: false,
        redirect:false,
        id:""
    }) 

    useEffect(
        ()=>{

        }, []
    )

    const list =[
        '05-10-2020',
        'hola',
        'hola',
        'hola',
        'hola',
        'hola',
        'hola',
        'hola',
        'hola',
        'hola',
        'hola',
        'hola',
        'hola',
    ] 

    const selectDate = (e,data) => {
        e.preventDefault();
        setState({...state, redirect:true, id:data })

    }

    const createDocument = e => {
        e.preventDefault();
        createNewDocument()

    }

    const handelChange = e => {
        const value = e.target.value;
        console.log(value)
    }

  return (
    <Fragment>
        <input type="text" onChange={handelChange} className="form-control inputSearch" placeholder="Buscar" />

        <h5> Lista por días  </h5>
        <ul className="list-group">
            { list.map( (data, idx) => <li onClick={(e) => selectDate(e, data) }  key={idx} className="list-group-item"> {data} </li>) }
        </ul>

        <button type="button" onClick={createDocument} className="btn btn-primary">Nuevo</button>
        { state.redirect ? <Redirect to={`/listday/${state.id}`} /> : null } 
    </Fragment>

  );
}

export default PlantillaList;
