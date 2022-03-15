import React from "react";

import { Container } from "./styles";

interface BulletProps {
  active: boolean;
}

function Bullet({ active }: BulletProps) {
  return <Container active={active}></Container>;
}

export default Bullet;
