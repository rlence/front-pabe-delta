import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import './menu.css';

function Menu(props){

    const [redirect, setRedirect] = useState(false)

    const HandelClick = e =>{
        e.preventDefault();
        setRedirect(true);
    }

    return(
        <div className="row col-sm-12 col-md-12 menu">     
            <p> Pabe Delta </p>
            <button type="button" className="btn btn-light"
                onClick={HandelClick}
            > Cerrar cesión </button>
            {redirect ? <Redirect to="/" /> : null }
        </div>
    )

}

export default Menu;