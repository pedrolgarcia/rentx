import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Header, Steps, Title, SubTitle } from "./styles";

import BackButton from "../../../components/BackButton";
import Bullet from "../../../components/Bullet";

function SignUpFirstStep() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBack} />
        <Steps>
          <Bullet active />
          <Bullet />
        </Steps>
      </Header>

      <Title>Crie sua{"\n"}conta</Title>
      <SubTitle>Faça seu cadastro de{"\n"}forma rápida e fácil.</SubTitle>
    </Container>
  );
}

export default SignUpFirstStep;
