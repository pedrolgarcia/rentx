import React from "react";
import { useNetInfo } from "@react-native-community/netinfo";

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

import { Car as CarModel } from "../../database/model/Car";

interface Props {
  data: CarModel;
  onPress: () => void;
}

function Car({ data, onPress, ...rest }: Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);

  const netInfo = useNetInfo();

  return (
    <Container onPress={onPress} {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{`R$ ${
              netInfo.isConnected === true ? data.price : "..."
            }`}</Price>
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
