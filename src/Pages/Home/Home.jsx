import React, { useState } from "react";
import "./home.css";
import { loginUser } from "../../Service/login";
import { Redirect } from 'react-router-dom';

function Home(props) {
  const [state, setStata] = useState({
    email: "",
    password: "",
  });

  const [err, setError] = useState({
    err: false,
    messageErr: "",
  });

  const [redirect, setRedirect] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    loginUser(state.email, state.password)
        .then((res) => {
          setRedirect(true);
        })
        .catch((err) => {
          console.log(err)
            setError({ err:true, messageErr:err})
        });
  };

  return (
    <div className="card col-sm-12 col-md-8 offset-md-2">
      <div className="card-body column">
        <form
          onSubmit={handelSubmit}
          onChange={(e) =>
            setStata({ ...state, [e.target.name]: e.target.value })
          }
        >
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Email
              </span>
            </div>
            <input
              type="email"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              name="email"
            />
          </div>

          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Contraseña
              </span>
            </div>
            <input
              type="password"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              name="password"
            />
          </div>

          <button type="submit" className="btn btn-info">
            Iniciar Sesión
          </button>
        </form>

        { err.err ? 
            <div className="alert alert-danger" role="alert">
            {err.messageErr}
            </div>
            : null
        }

        {redirect ? <Redirect to="/pabelist" /> : null}

      </div>
    </div>
  );
}

export default Home;
