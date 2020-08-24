import React from 'react';
import Menu from './Menu/Menu';
import './layout.css';

function Layout(props){

    const goBack = e => {
        e.preventDefault();
        //window.history.go(-1);
    }

    return(
        <div className="container-fluid">
            <div>
                <Menu />
            </div>
            <div>
                {props.children}
            </div>
            <div className="footer">
                {/*<button type="button" onClick={goBack} className="btn btn-warning"> Atras </button>*/}
            </div>
        </div>
    )

}

export default Layout; 