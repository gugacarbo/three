import { useEffect, useState } from "react";
import TotemContext from "./TotemContext";

import qqr from "../assets/qr.png";
import modelList, {
  TotemBlack,
  TotemPenta,
} from "../components/Controls/Models/ModelList";

function TotemProvider({ children }) {
  const [name, setName] = useState("André Batista");
  const [keyType, setKeyType] = useState("Telefone");
  const [keyString, setKeyString] = useState("(48) 98457-8389");
  const [qr, setQr] = useState(qqr);
  const [imgs, setImgs] = useState(TotemBlack);
  const [spinning, setSpinning] = useState(false);
  const [speed, setSpeed] = useState(0.02);

  const useList = {
    ...modelList,
    ...TotemPenta,
  };

  const handleChangeImages = (type) => {
    setImgs(useList[type]);
  };
  return (
    <TotemContext.Provider
      value={{
        name,
        setName,
        keyType,
        setKeyType,
        keyString,
        setKeyString,
        imgs,
        setImgs: handleChangeImages,
        qr,
        setQr,
        spinning,
        setSpinning,
        speed,
        setSpeed,
      }}
    >
      {children}
    </TotemContext.Provider>
  );
}
export default TotemProvider;
