import React from "react";
import { ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

import { Container, Title } from "./styles";

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
  mb?: number;
}

function Button({
  title,
  color,
  loading = false,
  light = false,
  enabled = true,
  mb = 0,
  onPress,
}: ButtonProps) {
  const theme = useTheme();

  return (
    <Container
      color={color ? color : theme.colors.main}
      onPress={onPress}
      enabled={enabled}
      style={{
        opacity: enabled === false || loading === true ? 0.5 : 1,
        marginBottom: mb,
      }}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={light ? theme.colors.header : theme.colors.shape}
        />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}

export default Button;
