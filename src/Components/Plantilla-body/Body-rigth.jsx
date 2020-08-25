import React, { Fragment } from 'react';
import './body-rigth.css';

function BodyRigth({state, setState}){

    return (
      <Fragment>
        <div className="red-box">
          <div className="row">
            <div className="header-red-box ancho">
              <p>
                <b>Energías Presentes</b>
              </p>
            </div>
            <div className="header-grey-box ancho">
              <p>
                <b>Lugar del Bloqueo</b>
              </p>
            </div>

                <div className="row">
                    <div className="ancho">
                        texto input rojo
                    </div>
                    <div className="ancho">
                        texto input gris
                    </div>
                </div>
          </div>
        </div>
        
        <div className="red-box">
            <div className="row">
                <div className="header-red-box ancho">
                <p>
                    <b>Energías Residuales</b>
                </p>
                </div>
                <div className="header-grey-box ancho">
                <p>
                    <b>Puesta a Cero</b>
                </p>
                </div>

                <div className="row">
                    <div className="ancho">
                        texto input rojo
                    </div>
                    <div className="ancho">
                        texto input gris
                    </div>
                </div>
            </div>
        </div>

        <div className="red-box">
            <div className="header-red-box">
                <p><b>Requerimiento para PABE</b></p>
            </div>
            <div className="row">
                <div className="ancho">
                    texto
                </div>
                <div className="ancho">
                    img y texto
                </div>
            </div>
        </div>


        <div className="red-box">
          <div className="header-red-box">
            <p>
              <b>Paso PABE</b>
            </p>
          </div>
          <ol>
            <li>Notificar a todo el personal sobre el requerimiento de PABE</li>
            <li>Apagar los equipos usando el protocolo regular de apagado</li>
            <li>Localizar y aislar el equipo de toda fuente de energía</li>
            <li>
              Liberar cualquier energía almacenada (Medir la puesta a cero)
            </li>
            <li>
              Aislar, Bloquear y Etiquetar usando dispositivos, candados y
              tarjetas
            </li>
            <li>
              Después de asegurarse que no hay personal expuesto activar el
              equipo y asegurarse que no se active
            </li>
            <li className="text-green">Ejecutar el Trabajo</li>
            <li>
              Verificar el área (herramientas y personas) y remover candado y
              etiqueta
            </li>
            <li>
              Notificar la finalización del trabajo a todo el personal y activar
              el equipo
            </li>
          </ol>
        </div>
      </Fragment>
    );
}

export default BodyRigth;