import { createContext } from "react";

import B1 from "../assets/B1.jpeg";
import B2 from "../assets/B2.jpeg";
import B3 from "../assets/B3.jpeg";
import W1 from "../assets/W1.jpeg";
import W2 from "../assets/W2.jpeg";
import W3 from "../assets/W3.jpeg";
import qqr from "../assets/qr.png";

const TotemBlack = [B1, B2, B3];
const TotemWhite = [W1, W2, W3];

const TotemContext = createContext({
  keyType: "",
  keyString: "",
  name: "",
  imgs: TotemBlack,
  qr: qqr,
  spinning: false,
  speed: 0.01,

  setQr: () => {},
  setKeyType: () => {},
  setKey: () => {},
  setName: () => {},
  setImgs: () => {},
  setSpinning: () => {},
  setSpeed: () => {},
});

export default TotemContext;
