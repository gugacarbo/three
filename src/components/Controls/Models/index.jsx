import styled from "styled-components";
import { useContext } from "react";
import TotemContext from "../../../context/TotemContext";
import { useParams } from "react-router-dom";

import Model from "./Model";

import ModelsList, {  TotemPenta } from "./ModelList";

function Models() {
  const { setImgs } = useContext(TotemContext);
  const { client } = useParams();

  var Uselist = ModelsList;
  if (client === "penta") {
    Uselist = {
      ...ModelsList,
      ...TotemPenta,
    }
  }
  else{
    console.log("client", client);
  }

  return (
    <ModelsContent>
      {Object.keys(Uselist).map((key) => {
        return (
          <Model
            key={key}
            type={key}
            img={Uselist[key][0]}
            onClick={() => setImgs(key)}
          />
        );
      })}
    </ModelsContent>
  );
}

export default Models;

const ModelsContent = styled.div`
  position: absolute;
  bottom: 0.5rem;
  display: flex;
  height: 8rem;
  gap: 2rem;
`;
