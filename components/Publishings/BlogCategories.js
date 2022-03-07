import React from "react";
import styled from "styled-components";
import Title from "../../components/Titles/Title";
import { BlogsWrittings } from "../../data/Blogs";
import Link from "next/link";
import Image from "next/image";
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
  img:hover {
    transition: 0.3s all;
    transform: scale(1.1);
  }
`;
const Article = styled.div`
  padding: 1em 0;
`;
export default function BlogCategories() {
  const [number, setNumberSelect] = React.useState(0);
  return (
    <ContainerBlogCategories>
      <HeaderSelectCategories>
        <NavOptions setNumberSelect={setNumberSelect} number={number} />
      </HeaderSelectCategories>
      <ContentDinamic>
        <ListArticles>
          {BlogsWrittings.map((el, index) => {
            return (
              <Article key={index}>
                <Link href={`/blog/${el.id}`}>
                  <a>
                    <ImageWrapper>
                      <Image
                      
                        blurDataURL={el.imgUrl}
                        src={el.imgUrl}
                     
                        alt="name"
                        width="100%"
                        height="120%"
                        layout="responsive"
                        objectFit="cover"
                        placeholder="blur"
                      />
                    </ImageWrapper>
                  </a>
                </Link>

                <Link href={`/blog/${el.id}`}>
                  <a>
                    <TitleArticle>{el.title}</TitleArticle>
                  </a>
                </Link>

                <Date>{el.date}</Date>

              </Article>
            );
          })}
        </ListArticles>
      </ContentDinamic>
    </ContainerBlogCategories>
  );
}

function NavOptions({ setNumberSelect, number }) {
  return (
    <ul>
      <ItemCategory active={number === 0} onClick={() => setNumberSelect(0)}>
        <span>All</span>
      </ItemCategory>

      <ItemCategory active={number === 1} onClick={() => setNumberSelect(1)}>
        <span>PROGRAMMING</span>
      </ItemCategory>

      <ItemCategory active={number === 2} onClick={() => setNumberSelect(2)}>
        <span>DESING</span>
      </ItemCategory>

      <ItemCategory active={number === 3} onClick={() => setNumberSelect(3)}>
        <span>CAREER</span>
      </ItemCategory>

      <ItemCategory active={number === 4} onClick={() => setNumberSelect(4)}>
        <span>PERSONAL</span>
      </ItemCategory>

      <ItemCategory active={number === 5} onClick={() => setNumberSelect(5)}>
        <span>REACT</span>
      </ItemCategory>

      <ItemCategory active={number === 6} onClick={() => setNumberSelect(6)}>
        <span>JAVASCRIPT</span>
      </ItemCategory>

      <ItemCategory active={number === 7} onClick={() => setNumberSelect(7)}>
        <span>PRODUCTIVITY</span>
      </ItemCategory>
    </ul>
  );
}
