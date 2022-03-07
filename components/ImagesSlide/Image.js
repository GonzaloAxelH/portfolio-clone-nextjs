import Link from "next/link";
import styled from "styled-components";
const ImageWrapper = styled.div`
  background-image: url(${(props) => props.fondo});
  background-size: contain;
  background-repeat: no-repeat;
`;

export default function Image({ imageurl, active, onClick }) {
  return (
    <ImageWrapper
      onClick={onClick}
      className={`option ${active ? "active" : ""}`}
      fondo={imageurl}
    >
      <div className="shadow"></div>
      <div className="label">
        <div className="icon">
          <i className="fas fa-walking"></i>
        </div>
        <div className="info">
          <div className="main">Blonkisoaz</div>
          <div className="sub">Omuke trughte a otufta</div>
        </div>
      </div>
    </ImageWrapper>
  );
}
