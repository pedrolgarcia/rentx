import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  FormTitle,
  Form,
} from "./styles";

import BackButton from "../../../components/BackButton";
import Bullet from "../../../components/Bullet";
import Button from "../../../components/Button";
import PasswordInput from "../../../components/PasswordInput";

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
}

function SignUpSecondStep() {
  const navigation = useNavigation();

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const route = useRoute();
  const { user } = route?.params as Params;

  const theme = useTheme();

  function handleBack() {
    navigation.goBack();
  }

  function handleRegister() {
    if (!password || !passwordConfirm) {
      return Alert.alert("Informe a senha e a confirmação.");
    }

    if (password != passwordConfirm) {
      return Alert.alert("As senhas não são iguais.");
    }

    navigation.navigate("Confirmation", {
      title: "Conta criada!",
      message: `Agora é só fazer login\ne aproveitar`,
      nextScreenRoute: "SignIn",
    });
  }

  return (
    <KeyboardAvoidingView enabled behavior="position">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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

          <Form>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Repetir senha"
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
            />
          </Form>

          <Button
            title="Cadastrar"
            color={theme.colors.success}
            onPress={handleRegister}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default SignUpSecondStep;
