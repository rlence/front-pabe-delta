import React, {useState, Fragment} from 'react';
import './Template-footer.css';

function BodyFooter(props){

    const [state, setState] = useState({
        puntoImg1:'',
        puntoText1:'',
        show1:false,
        puntoImg2:'',
        puntoText2:'',
        show2:false,
        puntoImg3:'',
        puntoText3:'',
        show3:false,
        puntoImg4:'',
        puntoText4:'',
        show4:false,
        puntoImg5:'',
        puntoText5:'',
        show5:false,
        puntoImg6:'',
        puntoText6:'',
        show6:false,
    })

    const [images, setImages] = useState({
        puntoImg1:'',
        puntoImg2:'',
        puntoImg3:'',
        puntoImg4:'',
        puntoImg5:'',
        puntoImg6:'',
    })

    const handelClick = (e, type) => {
        e.preventDefault();
        switch(type){
            case 'puntoText1':
                setState({...state, show1:true})
                break;

            case 'puntoText2':
                setState({...state, show2:true})
                break;

            case 'puntoText3':
                setState({...state, show3:true})
                break;

            case 'puntoText4':
                setState({...state, show4:true})
                break;

            case 'puntoText5':
                setState({...state, show5:true})
                break;

            case 'puntoText6':
                setState({...state, show6:true})
                break;
        }
    }

    const handeltChange = e => {
        const name = e.target.name;

        if(name === 'puntoImg1' || name === 'puntoImg2' || name === 'puntoImg3' || name === 'puntoImg4' || name === 'puntoImg5' || name === 'puntoImg6'){
            const reader = new FileReader();
            reader.onload = (e) => {
                if(reader.readyState === 2){
                    setImages({...images, [name]:reader.result})
                }
            }
            reader.readAsDataURL(e.target.files[0]);
            setState({...state, [e.target.name]: e.target.files[0] });
            
        }else{
            setState({...state, [e.target.name]:e.target.value})
        }
    }

    console.log(state)
    return(
        <form onChange={ e => handeltChange(e)} > 
            <div className="red-box">
                <div className="header-red-box">
                    <p><b>Puntos de Bloqueo</b></p>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <input type="file" name="puntoImg1" />
                        {images.puntoImg1.length > 0 ? <img className="img-whitd-footer" src={images.puntoImg1} alt="photo" /> : null}
                        { state.show1 ? <p> {state.puntoText1} </p> : null } 
                        { state.show1 === false ? 
                            <Fragment>
                                <input type="text" name="puntoText1" />
                                <button type="button" onClick={e => handelClick(e, 'puntoText1')} > Guardar</button>
                            </Fragment>
                            : null
                        }
                        
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <input type="file" name="puntoImg2" />
                        {images.puntoImg2.length > 0 ? <img className="img-whitd-footer" src={images.puntoImg2} alt="photo" /> : null}
                        { state.show2 ? <p> {state.puntoText2} </p> : null } 
                        { state.show2 === false ? 
                            <Fragment>
                                <input type="text" name="puntoText2" />
                                <button type="button" onClick={e => handelClick(e, 'puntoText2')} > Guardar</button>
                            </Fragment>
                            : null
                        }
                        
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <input type="file" name="puntoImg3" />
                        {images.puntoImg3.length > 0 ? <img className="img-whitd-footer" src={images.puntoImg3} alt="photo" /> : null}
                        { state.show3 ? <p> {state.puntoText3} </p> : null } 
                        { state.show3 === false ? 
                            <Fragment>
                                <input type="text" name="puntoText3" />
                                <button type="button" onClick={e => handelClick(e, 'puntoText3')} > Guardar</button>
                            </Fragment>
                            : null
                        }
                        
                    </div>
                </div>
                <div className="row">
                <div className="col-md-4 col-sm-4">
                        <input type="file" name="puntoImg4" />
                        {images.puntoImg4.length > 0 ? <img className="img-whitd-footer" src={images.puntoImg4} alt="photo" /> : null}
                        { state.show4 ? <p> {state.puntoText4} </p> : null } 
                        { state.show4 === false ? 
                            <Fragment>
                                <input type="text" name="puntoText4" />
                                <button type="button" onClick={e => handelClick(e, 'puntoText4')} > Guardar</button>
                            </Fragment>
                            : null
                        }
                        
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <input type="file" name="puntoImg5" />
                        {images.puntoImg5.length > 0 ? <img className="img-whitd-footer" src={images.puntoImg5} alt="photo" /> : null}
                        { state.show5 ? <p> {state.puntoText5} </p> : null } 
                        { state.show5 === false ? 
                            <Fragment>
                                <input type="text" name="puntoText5" />
                                <button type="button" onClick={e => handelClick(e, 'puntoText5')} > Guardar</button>
                            </Fragment>
                            : null
                        }
                        
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <input type="file" name="puntoImg6" />
                        {images.puntoImg6.length > 0 ? <img className="img-whitd-footer" src={images.puntoImg6} alt="photo" /> : null}
                        { state.show6 ? <p> {state.puntoText1} </p> : null } 
                        { state.show6 === false ? 
                            <Fragment>
                                <input type="text" name="puntoText6" />
                                <button type="button" onClick={e => handelClick(e, 'puntoText6')} > Guardar</button>
                            </Fragment>
                            : null
                        }
                        
                    </div>
      
                </div>
            </div>
        </form>
    )
}

export default BodyFooter;