import styled from "styled-components";
const ReactionWrapper = styled.div`
  width: 100px;
  max-width: 250px;
  position: relative;
  background: ${({ theme }) => theme.colorFondoReactions};
  border-radius: 12px;
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.1s all;
  &:after {
    content: "";
    background: ${({ theme }) => theme.colorTextBlue};
    transition: 0.2s all;
    border-radius: 13px;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: scale(0.92);
    transition: 0.1s all;
  }
  &:hover {
    &:after {
      transform: scale(1.05);
    }
  }
  div {
    font-size: 20px;
  }
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
`;

function Reaction({ type, icon, cant, onClick }) {
  return (
    <ReactionWrapper onClick={onClick}>
      <div>{icon}</div>
      <span>{cant}</span>
      <p>{type}</p>
    </ReactionWrapper>
  );
}

export default Reaction;
