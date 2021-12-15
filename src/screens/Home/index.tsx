import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/logo.svg";
import Car from "../../components/Car";

import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";
import api from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";

function Home() {
  const navigation = useNavigation();

  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const carDataOne = {
    brand: "AUDI",
    name: "RS 5 Coupé",
    rent: {
      period: "AO DIA",
      price: 120,
    },
    thumbnail:
      "https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png",
  };
  const carDataTwo = {
    brand: "PORSCHE",
    name: "Panamera",
    rent: {
      period: "AO DIA",
      price: 240,
    },
    thumbnail:
      "https://www.pngkit.com/png/full/237-2375888_porsche-panamera-s.png",
  };

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  function handleCarDetails() {
    navigation.navigate("CarDetails");
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={cars}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Car data={carDataOne} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
}

export default Home;
