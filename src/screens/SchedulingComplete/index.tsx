import React from "react";
import { StatusBar } from "expo-status-bar";
import { useWindowDimensions } from "react-native";

import { Container, Content, Title, Message, Footer } from "./styles";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import ConfirmButton from "../../components/ConfirmButton";

function SchedulingComplete() {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <StatusBar translucent style="light" backgroundColor="transparent" />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir{"\n"} até a concessionária da RENTX{"\n"}
          pegar o seu automóvel
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" />
      </Footer>
    </Container>
  );
}

export default SchedulingComplete;
