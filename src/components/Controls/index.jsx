import styled from "styled-components";
import { useContext } from "react";
import TotemContext from "../../context/TotemContext";
import Slider from "@mui/material/Slider";
import Models from "./Models";
function Controls() {
  const {
    keyType,
    keyString,
    name,
    spinning,
    setKeyType,
    setKeyString,
    setName,
    setSpinning,
    speed,
    setSpeed,
  } = useContext(TotemContext);

  return (
    <>
      <ButtonBox>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Select value={keyType} onChange={(e) => setKeyType(e.target.value)}>
          <option value="">Tipo</option>
          <option value="Telefone">Telefone</option>
          <option value="CPF">CPF</option>
          <option value="CNPJ">CNPJ</option>
          <option value="Email">Email</option>
          <option value="Aleatorio">Chave 3</option>
        </Select>

        <Input
          type="text"
          value={keyString}
          onChange={(e) => setKeyString(e.target.value)}
        />
        <Button onClick={() => setSpinning((spinning) => !spinning)}>
          {spinning ? "Parar" : "Girar"}
        </Button>

        <MySlider
          hide={!spinning ? 1 : 0}
          value={speed}
          onChange={(e) => {
            setSpeed(e.target.value);
          }}
          min={0.01}
          max={0.2}
          step={0.01}
          color="primary"
          size="small"
          sx={{
            color: "white",
          }}
        />
      </ButtonBox>
      <Models />
    </>
  );
}

export default Controls;

const ButtonBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 0.2rem;
  font-size: 1rem;
  max-width: 45vw;
`;

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  transition: 0.2s;
  font-size: 1rem;

  &:hover {
    background-color: #f92;
    color: #fff;
  }
`;
const Input = styled.input`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  text-align: center;
  padding-right: 1rem;
  font-size: 1rem;
`;

const Select = styled.select`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  font-size: 1rem;

  text-align: center;
`;
const MySlider = styled(Slider)`
  width: 80% !important;
  overflow: hidden;
  transition: 0.2s;
  margin: 0.5rem auto;
  * {
    transition: 0.2s;
  }
  ${({ hide }) =>
    hide &&
    `
    opacity: 0;
    
  `}
`;
