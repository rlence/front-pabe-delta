import React, {Fragment, useState} from "react";
import { Redirect } from 'react-router-dom';
import './plantillaList.css';

function PlantillaList(props) {

    const [ state, setState] = useState({
        loadding: false,
        redirect:false
    }) 

    const list =[
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
        'hola',
    ] 

    const selectDate = (e,data) => {
        e.preventDefault();
        setState({...state, redirect:true })

    }

    const createDocument = e => {
        e.preventDefault();
    }

  return (
    <Fragment>
        <ul className="list-group">
            { list.map( (data, idx) => <li onClick={(e) => selectDate(e, data) }  key={idx} className="list-group-item"> {data} </li>) }
        </ul>

        <button type="button" onClick={createDocument} className="btn btn-primary">Nuevo</button>
        { state.redirect ? <Redirect to="/listday/data" /> : null } 
    </Fragment>

  );
}

export default PlantillaList;
