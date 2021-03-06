import React, { useState, useEffect, Fragment } from "react";
import { getOneDocument, newTemplate } from "../../Service/data";
import {Redirect} from 'react-router-dom';
import "./listDay.css";

function ListDay(props) {

  const [state, setState] = useState({
    data: [],
    date: "",
    id: "",
  });

  const [originalist, setList] = useState([])
  const [nameTemplate, setName] = useState('');
  const [err, setErr] = useState({
      modal:'',
      errMessage:''
  })
  const [redirect, setRedirect] = useState({
      back:false,
      template:false,
      id:''
  })

  useEffect(() => {
    const url = window.location.pathname.split("/");
    const id = url[2];
    setState({ ...state, id: id });
    // eslint-disable-next-line 
    getDataDocument(id);
  }, []);
  console.log(state)
  console.log(redirect)
  const getDataDocument = (id) => {
    getOneDocument(id)
      .then((res) => {
        setState({ ...state, data: res.list, date: res.create_date });
        setList(res.list);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelChange = (e) => {
    const value = e.target.value;
    if(value.length === 0){
        setState({...state, data:originalist})
        return;
    }
    const filterList = [];
    originalist.map( date => { 
        if(date.name.includes(value)){
            filterList.push(date)
        }
    })
    setState({...state, data:filterList})
  };

  const selectDocument = (e, data) => {
    const saveLocal = JSON.stringify(data);
    sessionStorage.setItem('templateData', saveLocal);
    setRedirect({...redirect, id: data.name, template:true})
    console.log(`/template/${state.date}/${data.name}`)

  };

  const createTemplate = (e) => {
    
    if(nameTemplate.length <= 0){
        setErr({...err, modal:'Por favor agrega un nombre de plantilla'});
        return;
    }

    newTemplate(nameTemplate, state.date)
    .then( res => getDataDocument(state.date))
    .catch( err => console.log(err))
  };

  const goBack = e => {
    e.preventDefault();
    setRedirect({...redirect, back:true})
  }

  return (
    <Fragment>
      <input
        type="text"
        onChange={handelChange}
        className="form-control inputSearch"
        placeholder="Buscar"
      />

      <h5> Lista por Documentos </h5>
      <ul className="list-group">
        {state.data.map((data, idx) => (
          <li
            onClick={(e) => selectDocument(e, data)}
            key={idx}
            className="list-group-item"
          >
            {data.name}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Nueva Plantilla
      </button>

      <button
        type="button"
        className="btn btn-warning"
        onClick={goBack}
      >
        Atras
      </button>

      {/*  MODAL  */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Crear Plantilla
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
                <p> Agrega un nombre para la plantilla</p>
                <input type="text" onChange={ e => setName(e.target.value)} className="form-control" ></input>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-success" data-dismiss="modal" onClick={createTemplate}>
                Crear Plantilla
              </button>
            </div>

            { err.modal.length > 0 ?
                <div className="alert alert-danger" role="alert">
                {err.modal}
              </div>
              : null
            }
          </div>
        </div>
      </div>

    {redirect.template ? <Redirect to={`/template/${state.date}/${redirect.id}`} /> : null }  
    {redirect.back ? <Redirect to="/pabelist" /> : null}
    </Fragment>
  );
}

export default ListDay;
