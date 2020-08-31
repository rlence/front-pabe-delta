import React, {Fragment} from 'react';
import './body-footer.css';

function BodyFooter(props){

    return(
        <Fragment> 
            <div className="red-box">
                <div className="header-red-box">
                    <p><b>Puntos de Bloqueo</b></p>
                </div>
                <div className="row">
                    <input  type="file" name="img1"  />
                    <input  type="file" name="img2"  />
                    <input  type="file" name="img3"  />
                </div>
                <div className="row">
                    <input  type="file" name="img4"  />
                    <input  type="file" name="img5"  />
                    <input  type="file" name="img6"  />
                </div>
            </div>
        </Fragment>
    )
}

export default BodyFooter;