import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import CheckIcon from "../Icons/CheckIcon";
const BlogArticleContainer = styled.div`
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

const Read = styled.span`
  display: flex;
  align-items: center;
  svg {
    color: ${(props) => props.stateColor};
  }
  span {
    color: ${(props) => props.stateColor};
    font-size: 13px;
  }
  .check {
    margin-right: 1em;
  }
`;
const ArticleFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colorTextSubtitle};
  span {
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 12px;

  overflow: hidden;
  img {
    transition: 0.3s all;
    border-radius: 12px;

    transform: scale(1);
  }
  img:hover {
    transition: 0.3s all;
  }

  .hover14 figure {
    position: relative;
  }
  .hover14 figure::before {
    position: absolute;
    top: 0;
    left: -90%;
    z-index: 2;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    -webkit-transform: skewX(-25deg);
    transform: skewX(-25deg);
  }
  .hover14 figure:hover::before {
    -webkit-animation: shine 0.75s;
    animation: shine 0.75s;
  }
  @-webkit-keyframes shine {
    100% {
      left: 125%;
    }
  }
  @keyframes shine {
    100% {
      left: 125%;
    }
  }
`;
export default function BlogArticle(props) {
  const { link, date, type, id, title, description, autor, imgUrl } = props;
  const stateApp = {
    development: { name: "Development", color: "#FAA933  " },
    completed: { name: "Completed", color: "#0d9488" },
    pending: { name: "Pending", color: "#EC4A4A" },
  };
  return (
    <BlogArticleContainer>
      <Link href={`/blog/${id}`}>
        <a>
          <ImageWrapper>
            <div className="hover14 ">
              <figure>
                <Image
                  blurDataURL={`${imgUrl}`}
                  src={`${imgUrl}`}
                  alt="name"
                  width="100%"
                  height="140%"
                  layout="responsive"
                  objectFit="cover"
                  placeholder="blur"
                />
              </figure>
            </div>
          </ImageWrapper>
        </a>
      </Link>

      <Link href={`/blog/${id}`}>
        <a>
          <TitleArticle>{title}</TitleArticle>
        </a>
      </Link>
      <ArticleFooter>
        <span>{date}</span>
        <Read stateColor={`#0d9488`}>
          <CheckIcon />
          <span className="check">
            Read
            <span> </span>
          </span>
        </Read>
      </ArticleFooter>
    </BlogArticleContainer>
  );
}
