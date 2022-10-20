import styled from "styled-components";

function Model({ img, onClick }) {
  return (
    <ModelBox
      onClick={onClick}
    >
      <img src={img} alt="Modelo" />
    </ModelBox>
  );
}

export default Model;

const ModelBox = styled.div`
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s;
  img {
    width: 100%;
    height: 100%;
  }

  &:hover{
    transform: scale(1.1);
    transition: 0.3s;
    box-shadow: 0 0 0.2rem 0rem #f92;
  }
`;
