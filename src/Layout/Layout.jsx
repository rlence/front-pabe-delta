import React from 'react';
import Menu from './Menu/Menu';
import './layout.css';

function Layout(props){

    const url = window.location.pathname.split("/");
    const path = url[1]

    return(
        <div className="container-fluid">
            <div>
               { path !== "template" ? <Menu /> : null }
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )

}

export default Layout; 