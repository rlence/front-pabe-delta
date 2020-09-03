import React, {Fragment, useState, useEffect} from "react";
import { Redirect } from 'react-router-dom';
import './plantillaList.css';
import { createNewDocument, getDocuments } from '../../Service/data';

function PlantillaList(props) {

    const [ state, setState] = useState({
        loadding: false,
        redirect:false,
        id:"",
        list:[]
    })
    const [originaList, setList] = useState([]); 

    useEffect(
        ()=>{
            stateInitial()
        }, []
    )

    const stateInitial = () =>{
        getDocuments()
        .then( res => {
            setState({
                ...state, list: res
            })
            setList(res);
        })
        .catch(err => console.log(err));
    }

    const selectDate = (e,data) => {
        e.preventDefault();
        setState({...state, redirect:true, id:data })

    }

    const createDocument = e => {
        e.preventDefault();
        createNewDocument()
        .then( res => {
            console.log(res)
            if(res === undefined){
                stateInitial();
            }
        })
        .catch( err => console.log('estoy en el err'))

    }

    const handelChange = e => {
        const value = e.target.value;
        if(value.length === 0){
            setState({...state, list:originaList})
            return;
        }
        const filterList = [];
        originaList.map( date => { 
            if(date.includes(value)){
                filterList.push(date)
            }
        })
        setState({...state, list:filterList})
    }

  return (
    <Fragment>
        <input type="text" onChange={handelChange} className="form-control inputSearch" placeholder="Buscar" />

        <h5> Lista por días  </h5>
        <ul className="list-group">
            { state.list.map( (data, idx) => <li onClick={(e) => selectDate(e, data) }  key={idx} className="list-group-item"> {data} </li>) }
        </ul>

        <button type="button" onClick={createDocument} className="btn btn-primary">Nuevo Documento</button>
        { state.redirect ? <Redirect to={`/listday/${state.id}`} /> : null } 
    </Fragment>

  );
}

export default PlantillaList;
