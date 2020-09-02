import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import TemplateHeader from '../../Components/Plantilla-Header/Template-header';
import TemplateBody from '../../Components/Plantilla-body/Template-body';
import TemplateFooter from '../../Components/Plantilla-Footer/Template-footer';
import { saveData } from '../../Service/data';

function Template(props){

    const [templates, setTemplates] = useState({
        teamplateHaeder:"",
        templatesBody:"",
        templanteFooter:""
    });

    const [back, setBack] = useState({
        back: false,
        id:''
    })
    
    const goback = e => {
        e.preventDefault();
        const url = window.location.pathname.split('/');
        setBack({ back:true, id: url[2]})
    }

    const dataSave= e =>{
        e.preventDefault();
        saveData(templates)
        .then( res => {
            console.log(res);
            const url = window.location.pathname.split('/');
            setBack({ back:true, id: url[2]})

        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <div>
            <TemplateHeader  templates={templates}  setTemplates={setTemplates} />
            <TemplateBody templates={templates}  setTemplates={setTemplates}/>
            <TemplateFooter templates={templates}  setTemplates={setTemplates}/>
            <div className="footer-template">
                <button type="button" onClick={goback} class="btn btn-secondary col-sm-6 col-md-6">Cancelar</button>
                <button type="button" onClick={dataSave} class="btn btn-success col-sm-6 col-md-6">Guardar</button>
            </div>
            {back.back ? <Redirect to={`/listday/${back.id}`} /> : null }
        </div>
    )
}

export default Template