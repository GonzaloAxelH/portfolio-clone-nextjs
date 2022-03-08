import styled from "styled-components";

export const PublishingsContainer = styled.div`
  p {
    margin-bottom: 30px;
    font-size: 20px;
    color: ${({ theme }) => theme.colorText};
  }
`;
export const Subtitle = styled.h2`
  font-size: 33px;
  font-weight: 700;
  margin: 1em 0 1em 0em;
  color: ${({ theme }) => theme.colorText};

  @media (max-width: 768px) {
    font-size: 23px;
    text-align: center;
  }
`;

export const ListRecentsArticles = styled.div`
  display: grid;
  grid-gap: 1.4em;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 2em 0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const ShowMoreArticles = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const Beta = styled.span``;
