import React from 'react';


function Layout(props){

    return(
        <div>
            <div>
                encabezado
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )

}

export default Layout; 