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
    });

    const [err, setErr] = useState({
        show:false,
        message:''
    })
    
    const goback = e => {
        e.preventDefault();
        const url = window.location.pathname.split('/');
        setBack({ back:true, id: url[2]})
    }

    const dataSave= e =>{
        e.preventDefault();
        const {teamplateHaeder, templanteFooter, templatesBody} = templates;
        if(typeof teamplateHaeder === 'string' || typeof templatesBody === 'string' || typeof templanteFooter === 'string'){
            setErr({ show:true, message:"porfavor guardar todos los elementos antes de guardar la plantilla (Cabecera de plantilla, cuerpo de plantilla, Puntos de Bloqueo)"});
            return;
        }

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
                {err.show ? 
                    <div className="alert alert-danger" role="alert">
                        {err.message}
                    </div>
                    : null
                }
                <button type="button" onClick={goback} className="btn btn-secondary col-sm-6 col-md-6">Cancelar</button>
                <button type="button" onClick={dataSave} className="btn btn-success col-sm-6 col-md-6">Guardar</button>
            </div>
            {back.back ? <Redirect to={`/listday/${back.id}`} /> : null }
        </div>
    )
}

export default Template