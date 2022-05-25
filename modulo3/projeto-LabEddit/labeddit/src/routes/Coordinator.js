export const voltar = (navigate) => {
  navigate(-1);
};

export const login = (navigate) => {
  navigate('/');
};

export const cadastro = (navigate) => {
  navigate('/cadastro');
};

export const posts = (navigate) => {
  navigate('/posts');
};

export const detalhesPost = (navigate, id) => {
  navigate(`/detalhes/${id}`);
};

export const logout = (navigate) => {
  localStorage.removeItem("token");
  navigate('/');
};