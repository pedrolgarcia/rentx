import React from "react";
import { useTheme } from "styled-components";

import { Container, Title } from "./styles";

interface ButtonProps {
  title: string;
  color?: string;
  enabled?: boolean;
  onPress: () => void;
}

function Button({ title, color, enabled = true, onPress }: ButtonProps) {
  const theme = useTheme();

  return (
    <Container
      color={color ? color : theme.colors.main}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled ? 1 : 0.5 }}
    >
      <Title>{title}</Title>
    </Container>
  );
}

export default Button;
