import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHome,  goBack} from '../../routes/coordinator'


/* 
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InBXYW51VVBUTjhDOEY0RlBnbU1YIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2NTEwMDU3ODF9.5pNjKYX7jiYWIcAKeOiBKVULDDK-VzjxfxKEAY0u-Os",
    "user": {
        "id": "pWanuUPTN8C8F4FPgmMX",
        "email": "astrodev@gmail.com.br"
    }
}
*/

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>LoginPage</h2>
      <div>
      <input placeholder="Login" />
      <input placeholder="Senha" />
      </div>
      <button onClick={() => goToAdminHome(navigate)}>Logar</button>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  );
};

export default LoginPage;
