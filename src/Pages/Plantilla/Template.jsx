import React, {useState} from 'react';
import TemplateHeader from '../../Components/Plantilla-Header/Template-header';
import TemplateBody from '../../Components/Plantilla-body/Template-body';
import TemplateFooter from '../../Components/Plantilla-Footer/Template-footer';

function Template(props){

    const [templates, setTemplates] = useState({
        teamplateHaeder:"",
        templatesBody:"",
        templanteFooter:""
    })  
    console.log(templates)
    return(
        <div>
            <TemplateHeader  templates={templates}  setTemplates={setTemplates} />
            <TemplateBody templates={templates}  setTemplates={setTemplates}/>
            <TemplateFooter templates={templates}  setTemplates={setTemplates}/>
            <div className="footer-template">
                <button type="button" class="btn btn-secondary col-sm-6 col-md-6">Cancelar</button>
                <button type="button" class="btn btn-success col-sm-6 col-md-6">Guardar</button>
            </div>
        </div>
    )
}

export default Template