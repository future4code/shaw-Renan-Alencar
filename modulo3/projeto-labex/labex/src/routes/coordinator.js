// Geral
export const goBack = (navigate) => {
  navigate(-1);
};

//HomePage
export const goToListTrip = (navigate) => {
  navigate('/trips/list')
}

export const goToLoignPage = (navigate) => {
  navigate('/login')
}

// LoginPage 
export const goToAdminHome = (navigate) => {
  navigate("/admin/trips/list");
};

// AdminHomePage 
export const goToCreatTrip = (navigate) => {
  navigate("/admin/trips/create");
};

//ListTripsPage
export const goToApplicationForm = (navigate) => {
  navigate('/trips/application')
}
