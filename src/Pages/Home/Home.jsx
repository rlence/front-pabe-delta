import React, { useState } from "react";
import "./home.css";
import { loginUser } from "../../Service/login";

function Home(props) {
  const [state, setStata] = useState({
    email: "",
    password: "",
  });

  const [err, setError] = useState({
    err: false,
    messageErr: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    loginUser(state.email, state.password)
        .then((res) => {
            
        })
        .catch((err) => {
            setError({ err:true, messageErr:"Se produjo un error"})
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
              type="text"
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

      </div>
    </div>
  );
}

export default Home;
