import styled from "styled-components";

export const State = styled.span`
  font-size: 13px;
  color: #faa933;
  border-radius: 999px;
  border: 2px solid #faa933;
  padding: 0.1em 0.5em;
`;
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
  padding-right: 5em;
  @media (min-width: 1024px) {
    margin-right: 1em;
    padding-right: 1em;
    button {
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    margin-right: 0em;
    padding-right: 0em;
    margin: auto;
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
  cursor: pointer;
  background-size: contain;
  background-position: center;
  transition: 0.3s all;
  height: 320px;
  border-radius: 12px;
  &:hover {
    filter: saturate(180%);
  }
  img {
    border-radius: 12px;
    animation-duration: 2s;
    animation-name: slidein;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    object-fit: cover;
  }
  @keyframes slidein {
    from {
      transform: translateY(0%);
    }

    to {
      transform: translateY(0%);
    }
  }
`;
