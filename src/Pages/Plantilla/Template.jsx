import React from 'react';
import TemplateHeader from '../../Components/Plantilla-Header/Template-header';
import TemplateBody from '../../Components/Plantilla-body/Template-body';


function Template(props){

    return(
        <div>
            <TemplateHeader />
            <TemplateBody />
            <div className="footer-template">
                
            </div>
        </div>
    )
}

export default Template