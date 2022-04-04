import React, { useEffect, useState } from "react";
import { FlatList, StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { format, parseISO } from "date-fns";

import {
  Appointments,
  AppointmentsQuantity,
  AppointmentsTitle,
  Container,
  Content,
  Header,
  SubTitle,
  Title,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from "./styles";

import BackButton from "../../components/BackButton";
import Car from "../../components/Car";
import LoadAnimation from "../../components/LoadAnimation";

import { Car as CarModel } from "../../database/model/Car";

import api from "../../services/api";

interface DataProps {
  id: string;
  car: CarModel;
  start_date: string;
  end_date: string;
}

function MyCars() {
  const theme = useTheme();
  const navigation = useNavigation();
  const screenIsFocused = useIsFocused();

  const [cars, setCars] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("rentals");
        const dataFormatted = response.data.map((data: DataProps) => {
          return {
            id: data.id,
            car: data.car,
            start_date: format(parseISO(data.start_date), "dd/MM/yyyy"),
            end_date: format(parseISO(data.end_date), "dd/MM/yyyy"),
          };
        });
        setCars(dataFormatted);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, [screenIsFocused]);

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton onPress={handleBack} color={theme.colors.shape} />
        <Title>Seus agendamentos estão aqui</Title>
        <SubTitle>Conforto, segurança e praticidade</SubTitle>
      </Header>

      {loading ? (
        <LoadAnimation />
      ) : (
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} onPress={() => {}} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.start_date}</CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.end_date}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      )}
    </Container>
  );
}

export default MyCars;
