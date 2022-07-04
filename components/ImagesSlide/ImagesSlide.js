import { useState } from "react";
import styled from "styled-components";
import ImageComponent from "./Image.js";
const Wrapper = styled.div`
  display: flex;
  overflow-y: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 0.25s;
  height: 70vh;
  width: 100%;
  .credit {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: inherit;
  }
  .options {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    min-width: 600px;
    max-width: 900px;
    width: calc(100% - 100px);
    height: 100%;
    margin-left: 0;
  }
  @media (max-width: 600px) {
    .option {
      margin-left: 6em;
    }
  }
  .options .option {
    position: relative;
    overflow: hidden;
    min-width: 60px;
    margin: 10px;
    background-size: auto 120%;
    background-position: center;
    cursor: pointer;
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  }
  .options .option:nth-child(1) {
    --defaultBackground: #ed5565;
  }
  .options .option:nth-child(2) {
    --defaultBackground: #fc6e51;
  }
  .options .option:nth-child(3) {
    --defaultBackground: #ffce54;
  }
  .options .option:nth-child(4) {
    --defaultBackground: #2ecc71;
  }
  .options .option:nth-child(5) {
    --defaultBackground: #5d9cec;
  }
  .options .option:nth-child(6) {
    --defaultBackground: #ac92ec;
  }
  .options .option.active {
    flex-grow: 10000;
    transform: scale(1);
    max-width: 600px;

    margin: 0px;
    border-radius: 40px;
    background-size: cover;
    background-position: left;

    transform: scale(0.95);
  }
  .options .option.active .shadow {
    box-shadow: inset 0 -120px 120px -120px black,
      inset 0 -120px 120px -100px black;
  }
  .options .option.active .label {
    bottom: 20px;
    left: 20px;
  }
  .options .option.active .label .info > div {
    left: 0px;
    opacity: 1;
  }
  .options .option:not(.active) {
    flex-grow: 1;
    border-radius: 30px;
  }
  .options .option:not(.active) .shadow {
    bottom: -40px;
    box-shadow: inset 0 -120px 0px -120px black, inset 0 -120px 0px -100px black;
  }
  .options .option:not(.active) .label {
    bottom: 10px;
    left: 10px;
  }
  .options .option:not(.active) .label .info > div {
    left: 20px;
    opacity: 0;
  }
  .options .option .shadow {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 120px;
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  }
  .options .option .label {
    display: flex;
    position: absolute;
    right: 0px;
    height: 40px;
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  }
  .options .option .label .icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: white;
    color: var(--defaultBackground);
  }
  .options .option .label .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    color: white;
    white-space: pre;
  }
  .options .option .label .info > div {
    position: relative;
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95), opacity 0.5s ease-out;
  }
  .options .option .label .info .main {
    font-weight: bold;
    font-size: 1.2rem;
  }
  .options .option .label .info .sub {
    transition-delay: 0.1s;
  }
`;

export default function ImagesSlide() {
  const [activeImg, setActiveImg] = useState(3);
  return (
    <Wrapper>
      <div className="options">
        <ImageComponent
          onClick={() => setActiveImg(1)}
          active={activeImg === 1}
          imageurl="https://areknawo.com/content/images/2019/12/Cover-1.png"
        />
        <ImageComponent
          onClick={() => setActiveImg(2)}
          active={activeImg === 2}
          imageurl="https://consejoderedaccion.org/images/zoo/noticias/images/herramientas/eda8d07e2f8b89e75897e379264dc261_M.jpg"
        />
        <ImageComponent
          onClick={() => setActiveImg(3)}
          active={activeImg === 3}
          imageurl="https://www.creativefabrica.com/wp-content/uploads/2021/02/11/Masud-Personal-Portfolio-Website-Theme-Graphics-8542798-1-1-580x386.jpg"
        />
        <ImageComponent
          onClick={() => setActiveImg(4)}
          active={activeImg === 4}
          imageurl="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1997/posts/37445/image-upload/KRETON.jpg"
        />
        <ImageComponent
          onClick={() => setActiveImg(5)}
          active={activeImg === 5}
          imageurl="https://images.ctfassets.net/u77gi3ejnmxq/0cILHlSCLEiyYOEzcx4k2/e38b0fb922736d965f10bcf3b163d37c/JS_frameworks.png"
        />
      </div>
    </Wrapper>
  );
}
