import React from 'react';
import Menu from './Menu/Menu';
import './layout.css';

function Layout(props){

    return(
        <div className="container-fluid">
            <div>
                <Menu />
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )

}

export default Layout; 