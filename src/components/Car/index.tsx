import React from "react";

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from "./styles";

import GasolineSvg from "../../assets/gasoline.svg";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import { CarDTO } from "../../dtos/CarDTO";

interface Props {
  data: CarDTO;
  onPress: () => void;
}

function Car({ data, onPress, ...rest }: Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container onPress={onPress} {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent?.period}</Period>
            <Price>{`R$ ${data.rent?.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  );
}

export default Car;
