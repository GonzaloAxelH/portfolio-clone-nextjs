import styled from "styled-components";
export const AboutContainer = styled.section`
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
export const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  transition: 0.3s all;
`;
export const ViewToolbox = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
  grid-gap: 1em;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    margin-right: 2em;
    margin-bottom: 2em;
  }

  @media (min-width: 1024px) {
    button {
      max-width: 60%;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    p,
    button {
      text-align: center;
    }
    text-align: center;
    justify-content: center;

    .content {
      margin-right: 0;
      justify-content: center;
    }
  }
`;
export const ContentAboutMe = styled.div``;
export const Titles = styled.div`
  text-align: center;
`;
export const Desbordamiento = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ParrafoGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageMe = styled.div`
  width: 280px;

  min-width: 180px;
  min-height: 180px;

  margin-right: 2em;
  align-self: center;
  img {
    border-radius: 50%;
  }
  display: flex;
  justify-content: flex-end;
`;
