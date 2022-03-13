import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import {
  Container,
  IconContainer,
  InputText,
  PassIconContainer,
  PasswordVisibilityButton,
} from "./styles";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

function PasswordInput({ iconName, ...rest }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const theme = useTheme();

  function handlePasswordVisibilityChange() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <Container>
      <IconContainer>
        <Feather name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>

      <InputText secureTextEntry={isPasswordVisible} {...rest} />

      <PasswordVisibilityButton onPress={handlePasswordVisibilityChange}>
        <PassIconContainer>
          <Feather
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={24}
            color={theme.colors.text_detail}
          />
        </PassIconContainer>
      </PasswordVisibilityButton>
    </Container>
  );
}

export default PasswordInput;
