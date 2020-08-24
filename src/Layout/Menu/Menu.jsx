import React from 'react';
import './menu.css';

function Menu(props){

    const HandelClick = e =>{
        e.preventDefault();
    }

    return(
        <div className="row col-sm-12 col-md-12 menu">     
            <p> Pabe Delta </p>
            <button type="button" className="btn btn-light"
                onClick={HandelClick}
            > Cerrar cesión </button>
        </div>
    )

}

export default Menu;