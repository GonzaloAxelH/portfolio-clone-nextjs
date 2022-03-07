import styled from "styled-components";

const ButtonType = styled.button`
  background: ${(props) => props.background};
  border: none;
  padding: 16px 48px;
  border-radius: 50px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  cursor: pointer;
  margin-right: 1em;
  position: relative;
  text-align: center;
  &::after {
    content: "";
    position: absolute;
    left: -7px;
    top: -7px;
    padding: 3px 3px;
    width: 100%;
    height: 100%;
    border: 3px solid ${(props) => props.colorText};
    border-radius: 50px;
    transform: scale(0.7);
    transition: 0.2s all;
    z-index: -1;
  }
  &:hover {
    &:after {
      transform: scale(1);
    }
  }
`;
export default function Button({ type, children, fSize, onClick }) {
  let backgrounds = {
    primary: "rgb(30, 41, 59)",
    secondary: " rgb(229, 231, 235)",
  };
  let colors = {
    primary: "#fff",
    secondary: "rgb(30, 41, 59)",
  };
  return (
    <ButtonType
      onClick={onClick}
      fontSize={fSize === "small" ? "16px" : "20px"}
      color={colors[type] ? colors[type] : "#000"}
      background={backgrounds[type] ? backgrounds[type] : ""}
    >
      {children}
    </ButtonType>
  );
}
