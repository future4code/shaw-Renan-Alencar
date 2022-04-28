import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../../constants/Base_url";

const TripDetailsPage = () => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${BASE_URL}/trip/:id`, {
        header: {
          auth: token,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  });

  return <div>TripDetailsPage</div>;
};

export default TripDetailsPage;
