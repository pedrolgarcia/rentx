import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

import { Container, Title } from "./styles";

interface ButtonProps {
  title: string;
  color?: string;
  enabled?: boolean;
  loading?: boolean;
  onPress: () => void;
}

function Button({
  title,
  color,
  enabled = true,
  loading = false,
  onPress,
}: ButtonProps) {
  const theme = useTheme();

  return (
    <Container
      color={color ? color : theme.colors.main}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator size="small" color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}

export default Button;
