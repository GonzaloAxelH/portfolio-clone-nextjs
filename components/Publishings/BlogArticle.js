import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
const BlogArticleContainer = styled.div`
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    font-size: 24px;

    color: ${({ theme }) => theme.colorTextBlue};
    font-weight: 700;
    line-height: 32px;
    margin: 8px 0 16px;
  }

  img {
    border-radius: 12px;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const TitleArticle = styled.h3`
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
const Date = styled.div`
  color: ${({ theme }) => theme.colorTextSubtitle};
`;
export default function BlogArticle(props) {
  const { link, date, type, id, title, description, autor, imgUrl } = props;
  return (
    <BlogArticleContainer>
      <Image
        blurDataURL={`${imgUrl}`}
        src={`${imgUrl}`}
        alt="name"
        width="100%"
        height="120%"
        layout="responsive"
        objectFit="cover"
        placeholder="blur"
      />
      <Link href={`/blog/${id}`}>
        <a>
          <TitleArticle>{title}</TitleArticle>
        </a>
      </Link>
      <Date>{date}</Date>
    </BlogArticleContainer>
  );
}
