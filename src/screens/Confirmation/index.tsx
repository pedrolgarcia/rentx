import React from "react";
import { StatusBar } from "expo-status-bar";
import { useWindowDimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Container, Content, Title, Message, Footer } from "./styles";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import ConfirmButton from "../../components/ConfirmButton";

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

function Confirmation() {
  const navigation = useNavigation();
  const route = useRoute();
  const { title, message, nextScreenRoute } = route?.params as Params;

  const { width } = useWindowDimensions();

  function handleConfirm() {
    navigation.navigate(nextScreenRoute || "Home");
  }

  return (
    <Container>
      <StatusBar translucent style="light" backgroundColor="transparent" />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>

        <Message>{message}</Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}

export default Confirmation;
