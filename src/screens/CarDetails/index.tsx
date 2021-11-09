import React from "react";

import { CarImages, Container, Header } from "./styles";

import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://www.pngkit.com/png/full/237-2375888_porsche-panamera-s.png",
          ]}
        />
      </CarImages>
    </Container>
  );
}

export default CarDetails;
