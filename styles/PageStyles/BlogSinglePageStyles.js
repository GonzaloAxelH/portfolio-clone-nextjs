import styled from "styled-components";
export const ContainerBlog = styled.div`
  display: flex;
  flex-direction: column;
  .blog-content {
    display: flex;
  }

  .blog-relations {
    margin: 0 6em;
  }

  @media (max-width: 1160px) {
    .blog-content {
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
`;

export const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 25em 0 6em;
  @media (max-width: 1160px) {
    margin: 0 1em;
  }
`;
export const Puntuacion = styled.div`
  position: fixed;
  right: 4%;
  top: 5%;
  z-index: 1;
  h3,
  p,
  span {
    color: ${({ theme }) => theme.colorTextParrafo};
    text-align: center;
  }
  p {
    font-size: 14px;
  }
  span {
    font-size: 20px;
    font-weight: bold;

    color: ${({ theme }) => theme.colorTextParrafo2};
  }
  h3 {
    margin: 3em 0 1em 0;
    div {
      font-size: 13px;
      color: #6abecd;
    }
  }
  @media (max-width: 1160px) {
    position: relative;
    right: 0%;
    top: 0%;
  }
`;

export const Reactions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 1em;
  flex-wrap: wrap;

  @media (max-width: 1160px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  overflow: hidden;
  border-radius: 14px;
  height: 451px;
  width: 100%;
  margin-bottom: 30px;

  position: relative;
  transition: 0.3s all;
`;

export const Info = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;
export const DateAndViews = styled.div`
  span {
    color: ${({ theme }) => theme.colorTextParrafo2};
  }
  span:nth-child(1) {
    font-size: 20px;
  }

  span:nth-child(2) {
    font-size: 40px;
    margin: 0.1em;
    position: relative;
    top: -0.1em;
  }
  span:nth-child(3) {
    font-size: 18px;

    color: ${({ theme }) => theme.colorTextParrafo2};
  }
`;
export const UpdatedBlog = styled.div`
  color: ${({ theme }) => theme.colorTextParrafo2};
  font-size: 16px;
`;
export const TitleBlog = styled.h1`
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 48px;
  font-weight: 800;
  line-height: 53px;
  text-align: center;
  margin: 1em 0.4em 0.4em 0.4em;
  color: ${({ theme }) => theme.colorTextBlue};
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 560px) {
    font-size: 33px;
  }
`;
