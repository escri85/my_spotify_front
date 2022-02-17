import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import "./Login.scss";
const Login = () => {
  const initial_state = {
    email: "",
    password: "",
  };

  const [perfil, setPerfil] = useState(initial_state);
  const [checked, setChecked] = useState(false);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(perfil);
  };
  const change = ({ target: { name, value } }) => {
    setPerfil({ ...perfil, [name]: value });
  };

 
    // <div className="container">
    //   <div>
    //     <form action="" onSubmit={onSubmit} className="login">
    //     <h1>LOGIN</h1>
    //       <label>
    //         <p>EMAIL</p>
    //         <InputText
    //           type="email"
    //           name="email"
    //           onChange={change}
    //           value={perfil.email}
    //         />
    //       </label>
    //       <label>
    //         <p>PASSWORD</p>

    //         <Password
    //           type="password"
    //           name="password"
    //           onChange={change}
    //           value={perfil.password}
    //           toggleMask
    //         />
    //       </label>
    //       <Boton type="submit">login</Boton>
    //       <div className="field-checkbox">
    //         <Checkbox
    //           inputId="binary"
    //           checked={checked}
    //           onChange={(e) => setChecked(e.checked)}
    //         />
    //         <label htmlFor="binary">{checked ? "Recordar" : "Recordar"}</label>
    //       </div>

    //       {/* <label htmlFor="check">
    //   <input type="checkbox" checked={checked} onChange={handleChange}/>
    //   Recuerdame
    //   </label> */}
    //       <div className="links">
    //         <Link to="/recuperar">olvidaste tu contraseña?</Link>
    //       </div>
    //     </form>
    //     <div></div>
    //   </div>
  
    // </div>
    return (
        <div className="kk">

    <div className="main">  	
    <input type="checkbox" id="chk" aria-hidden="true"/>

        <div className="signup">
            <form>
                <label for="chk" aria-hidden="true">Sign up</label>
                <p>EMAIL</p>
                <input type="email" name="email" placeholder="Email" required=""/>
                <p>PASSWORD</p>
                
                <Password
              type="password"
              name="password"
              onChange={change}
              value={perfil.password}
              toggleMask
            />
                <button>Sign up</button>
            </form>
        </div>

        <div className="login">
            <form>
                <label for="chk" aria-hidden="true">Login</label>
                <input type="email" name="email" placeholder="Email" required=""/>
                <input type="password" name="pswd" placeholder="Password" required=""/>
                <button>Login</button>
            </form>
        </div>
</div>
</div>


  )
}

export default Login;
