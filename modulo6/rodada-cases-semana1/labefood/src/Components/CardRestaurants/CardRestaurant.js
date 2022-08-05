import React from "react";
import { useNavigate } from "react-router-dom";
import { goToRestaurant } from "../../Routes/coordinator";
import {
  BoxInf,
  ImgRestaurant,
  InfRestaurant,
  Main,
  NameRstaurant,
} from "./styled";

const CardRestaurant = ({ restaurant }) => {
  const navigate = useNavigate()

  return (
    <Main onClick={() => goToRestaurant(navigate, restaurant.id)}>
      <ImgRestaurant src={restaurant.logoUrl} />
      <NameRstaurant>{restaurant.name}</NameRstaurant>
      <BoxInf>
        <InfRestaurant>{restaurant.deliveryTime} min</InfRestaurant>
        <InfRestaurant>Frete R${restaurant.shipping},00</InfRestaurant>
      </BoxInf>
    </Main>
  );
};

export default CardRestaurant;
