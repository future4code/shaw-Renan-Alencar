import React from "react";
import { useNavigate } from "react-router-dom";


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

  const goToAdminHome = () => {
    navigate("/admin/trips/list");
  };

  const toBack = () => {
    navigate(-1);
  };
  return (
    <div>
      LoginPage
      <button onClick={goToAdminHome}>Logar</button>
      <button onClick={toBack}>Voltar</button>
    </div>
  );
};

export default LoginPage;
