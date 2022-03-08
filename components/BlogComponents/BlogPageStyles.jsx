import styled from "styled-components";

export const ListaPasos = styled.div`
  li {
    font-size: 18px;

    line-height: 26px;
    font-weight: 400;
    letter-spacing: 0.3px;
    color: ${({ theme }) => theme.colorTextParrafoBlog};
  }
`;
export const Label = styled.span`
  font-family: "Fira Code", monospace;
  font-size: 15px;
  padding: 0.2em;
  font-style: italic;
  background-color: ${({ theme }) => theme.colorFondoLabelCode};
  border-radius: 7px;

  color: ${({ theme }) => theme.colorTextParrafoBlog};
`;

export const Parrafo = styled.p`
  color: ${({ theme }) => theme.colorTextParrafoBlog};
  font-size: 18px;
  margin-top: 1em;
  line-height: 26px;
  font-weight: 400;
  letter-spacing: 0.3px;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 18px;
  }

  padding-bottom: ${(props) => (props.pb ? props.pb : "20px")};
`;

export const SubtitleBlog = styled.h2`
  font-size: 26px;
  margin: 0.5em 0;
  color: ${({ theme }) => theme.colorTextBlue};
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
