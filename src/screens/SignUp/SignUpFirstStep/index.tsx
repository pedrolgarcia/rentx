import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Header } from "./styles";

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
        <Bullet active={false} />
      </Header>
    </Container>
  );
}

export default SignUpFirstStep;
