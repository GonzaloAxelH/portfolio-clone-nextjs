import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { categorys } from "../../data/Blogs";
import { BlogsWrittings } from "../../data/Blogs";
import Link from "next/link";
import Image from "next/image";
import CheckIcon from "../Icons/CheckIcon";
//containers
const HeaderSelectCategories = styled.div`
  max-width: 90vw;
  overflow: auto;
  ul {
    display: flex;
    flex-wrap: nowrap;
    padding: 0;
  }
  border-top: 1px solid ${({ theme }) => theme.colorBorder2};
  padding: 1em 0;
  border-bottom: 1px solid ${({ theme }) => theme.colorBorder2};
`;
const ContainerBlogCategories = styled.div`
  overflow: hidden;
`;
const ContentDinamic = styled.div``;

//items

const ItemCategory = styled.button`
  cursor: pointer;
  margin-right: 1em;
  margin-bottom: 0.4em;
  margin-top: 0.4em;
  padding: 10px 24px;
  background: transparent;
  border: 2px solid
    ${(props) => (props.active ? "rgb(20, 184, 166)" : "transparent")};
  border-radius: 999px;
  &:hover {
    border: 2px solid
      ${(props) =>
        props.active ? "rgb(20, 184, 166)" : props.theme.colorBorder2};
  }
  font-size: 16px;
  color: ${({ theme, active }) =>
    active ? "rgb(20, 184, 166)" : theme.colorTextParrafo2};
  span {
    font-weight: bold;
    font-size: 16px;
    font-stretch: 100%;
    font-style: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-weight: 500;
    height: auto;
    letter-spacing: normal;
    line-height: 24px;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: disc;
    tab-size: 4;
    text-align: center;
    text-indent: 0px;
    text-rendering: auto;
    text-shadow: none;
    text-size-adjust: 100%;
    text-transform: uppercase;
    width: auto;
    word-spacing: 0px;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  }
`;

const ListArticles = styled.div`
  display: grid;
  grid-gap: 1.4em;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 2em 0;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
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
  color: ${({ theme }) => theme.colorText};
`;
const ImageWrapper = styled.div`
  position: relative;
  border-radius: 12px;

  overflow: hidden;
  img {
    transition: 0.3s all;
    border-radius: 12px;
  }

  .hover14 figure {
    position: relative;
  }
  .hover14 figure::before {
    position: absolute;
    top: 0;
    left: -85%;
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
    -webkit-animation: shine 0.6s;
    animation: shine 0.6s;
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
const Article = styled.div`
  padding: 1em 0;
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
  margin-top: 1em;
  color: ${({ theme }) => theme.colorTextSubtitle};
`;

export default function BlogCategories() {
  const [categoryName, setCategoryName] = useState("All");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (categoryName === "All") {
      setPosts(BlogsWrittings);
    } else {
      setPosts(BlogsWrittings.filter((post) => post.category === categoryName));
    }
    console.log(categoryName);
  }, [categoryName]);
  return (
    <ContainerBlogCategories>
      <HeaderSelectCategories>
        <SelectCategory getCategory={(category) => setCategoryName(category)} />
      </HeaderSelectCategories>
      <ContentDinamic>
        <ListArticles>
          {posts.map((el, index) => {
            return (
              <Article key={index}>
                <Link href={`/blog/${el.id}`}>
                  <a>
                    <ImageWrapper>
                      <div className="hover14 ">
                        <figure>
                          <Image
                            blurDataURL={el.imgUrl}
                            src={el.imgUrl}
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

                <Link href={`/blog/${el.id}`}>
                  <a>
                    <TitleArticle>{el.title}</TitleArticle>
                  </a>
                </Link>
                <ArticleFooter>
                  <span>{el.date}</span>
                  <Read stateColor={`#0d9488`}>
                    <CheckIcon />
                    <span className="check">
                      Read
                      <span> </span>
                    </span>
                  </Read>
                </ArticleFooter>
              </Article>
            );
          })}
        </ListArticles>
      </ContentDinamic>
    </ContainerBlogCategories>
  );
}

function SelectCategory({ getCategory }) {
  const [category, setCategory] = useState("All");

  const changeCategory = (cat) => {
    setCategory(cat);
    getCategory(cat);
  };
  return (
    <ul>
      <ItemCategory
        active={category === categorys.ALL}
        onClick={() => changeCategory(categorys.ALL)}
      >
        <span>{categorys.ALL}</span>
      </ItemCategory>
      <ItemCategory
        active={category === categorys.LARAVEL}
        onClick={() => changeCategory(categorys.LARAVEL)}
      >
        <span>{categorys.LARAVEL}</span>
      </ItemCategory>
      <ItemCategory
        active={category === categorys.NODE}
        onClick={() => changeCategory(categorys.NODE)}
      >
        <span>{categorys.NODE}</span>
      </ItemCategory>
      <ItemCategory
        active={category === categorys.NEXTJS}
        onClick={() => changeCategory(categorys.NEXTJS)}
      >
        <span>{categorys.NEXTJS}</span>
      </ItemCategory>
      <ItemCategory
        active={category === categorys.CSS}
        onClick={() => changeCategory(categorys.CSS)}
      >
        <span>{categorys.CSS}</span>
      </ItemCategory>
      <ItemCategory
        active={category === categorys.PERSONAL}
        onClick={() => changeCategory(categorys.PERSONAL)}
      >
        <span>{categorys.PERSONAL}</span>
      </ItemCategory>
      <ItemCategory
        active={category === categorys.PRODUCTIVITY}
        onClick={() => changeCategory(categorys.PRODUCTIVITY)}
      >
        <span>{categorys.PRODUCTIVITY}</span>
      </ItemCategory>
      <ItemCategory
        active={category === categorys.JAVASCRIPT}
        onClick={() => changeCategory(categorys.JAVASCRIPT)}
      >
        <span>{categorys.JAVASCRIPT}</span>
      </ItemCategory>
      <ItemCategory
        active={category === categorys.WEB3}
        onClick={() => changeCategory(categorys.WEB3)}
      >
        <span>{categorys.WEB3}</span>
      </ItemCategory>
    </ul>
  );
}
