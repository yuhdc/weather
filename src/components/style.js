import { motion } from "framer-motion";
//
import styled from "styled-components";

import def from "../image/def.jpg";
import clearsky from "../image/clearsky.jpg";
import cold from "../image/cold.jpg";
import rain from "../image/rain.jpg";
import snow from "../image/snow.jpg";
import night from "../image/night.jpg";

const imgA = [def, clearsky, cold, rain, snow, night];

export const Weather = styled(motion.div)`
  background-image: url(${(props) => imgA[props.case]});
  background-position: bottom;
  background-size: cover;
  object-fit: cover;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all ease-out 0.7s;
  text-align: center;
  width: 100%;
`;

export const Container = styled(motion.div)`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.75)
  );
  min-height: 100vh;
  padding: 25px;
`;
