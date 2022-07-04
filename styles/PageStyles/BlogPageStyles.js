import styled from "styled-components";
export const BlogContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  height: 100%;
  padding: 1em 3em;
  min-height: 100vh;
  @media (max-width: 768px) {
    margin-top: 40px;

    padding: 1em 1em;
  }
`;

export const ContentArticle = styled.div``;
export const TodayBlog = styled.div`
  display: flex;
`;
export const PickupsArticle = styled.div``;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  border-radius: 12px;
  transition: 0.3s all;
  height: 420px;
`;

export const ArticleContainer = styled.div`
  flex: 6;
`;
export const Contact = styled.div`
  flex: 2;
  padding: 0 2em;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const TitleArticle = styled.h3`
  color: ${({ theme }) => theme.colorText};
  font-size: 24px;
  font-stretch: 100%;
  font-style: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 32px;
  tab-size: 4;
  text-align: left;
  text-indent: 0px;
  text-rendering: auto;
  text-shadow: none;
  text-size-adjust: 100%;
  text-transform: none;
  word-spacing: 0px;
  writing-mode: horizontal-tb;
  margin-top: 1em;
`;
