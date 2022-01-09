import LottieView from "lottie-react-native";
import React from "react";

import { Container } from "./styles";

import loadingCar from "../../assets/loadingCar.json";

function LoadAnimation() {
  return (
    <Container>
      <LottieView
        loop
        autoPlay
        source={loadingCar}
        style={{ height: 200 }}
        resizeMode="contain"
      />
    </Container>
  );
}

export default LoadAnimation;
