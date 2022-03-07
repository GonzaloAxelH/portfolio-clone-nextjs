import styled from "styled-components";
export const ProyectsContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  height: 100%;
  padding: 1em 6em;
  min-height: 100vh;
  @media (max-width: 768px) {
    margin-top: 40px;

    padding: 1em 2.5em;
  }
`;
export const Titles = styled.div`
  text-align: center;
  padding-bottom: 3em;
`;
export const ProyectInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4em;

  @media (min-width: 1024px) {
    button {
      max-width: 60%;
    }
  }
  @media (max-width: 768px) {
    margin-right: 0em;
    align-items: center;
    p {
      text-align: center;
    }
  }
`;
export const ItemProyect = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
  transition: 0.3s all;
  height: 420px;

  &:hover {
    filter: saturate(180%);
  }
  img {
    animation-duration: 2s;
    animation-name: slidein;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes slidein {
    from {
      transform: translateY(6%);
    }

    to {
      transform: translateY(0%);
    }
  }
`;
