import React from 'react';
import TemplateHeader from '../../Components/Plantilla-Header/Template-header';
import TemplateBody from '../../Components/Plantilla-body/Template-body';
import TemplateFooter from '../../Components/Plantilla-Footer/Template-footer';

function Template(props){

    return(
        <div>
            <TemplateHeader />
            <TemplateBody />
            <TemplateFooter />
            <div className="footer-template">
                <button type="button" class="btn btn-secondary">Cancelar</button>
                <button type="button" class="btn btn-success">Guardar</button>
            </div>
        </div>
    )
}

export default Template