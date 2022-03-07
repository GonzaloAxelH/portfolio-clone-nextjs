import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";
import CheckIcon from "../Icons/CheckIcon";
import ListTags from "../Tags/ListTags";
import Link from "next/link";
const ArticleContainer = styled.div`
  border: none;
  background: transparent;
  height: 100%;
  img {
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const WrapperImg = styled.div`
  &:hover {
    filter: opacity(0.75);
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
`;
const Title = styled.h3`
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
const Level = styled.span`
  font-size: 10px;
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  padding: 1px 0.5em;
  border-radius: 5px;
  margin-left: 1em;
`;
const Show = styled.div`
  cursor: pointer;
  font-size: 14px;
  font-style: italic;
  color: ${({ theme }) => theme.colorTextSubtitle};
  margin-bottom: 1em;
`;
export default function Article({
  link,
  tags,
  urlImg,
  children,
  state,
  date,
  percentaje,
  level,
}) {
  const [tools, setTools] = useState(false);
  const stateApp = {
    development: { name: "Development", color: "#FAA933  " },
    completed: { name: "Completed", color: "#0d9488" },
    pending: { name: "Pending", color: "#EC4A4A" },
  };
  const colorsLevel = {
    NEWBIE: { name: "NEWBIE", color: "rgb(106, 190, 205)" },
    JUNIOR: { name: "JUNIOR", color: "rgb(170, 215, 66)" },
    INTERMEDIO: { name: "INTERMEDIO", color: "rgb(241, 182, 4)" },
    AVANCED: { name: "AVANCED", color: "rgb(244, 137, 37)" },
    GURU: { name: "GURU", color: "rgb(237, 44, 73)" },
  };

  return (
    <ArticleContainer>
      <Image
        blurDataURL={`/${state !== "pending" ? urlImg : "build.jpg"}`}
        src={`/${state !== "pending" ? urlImg : "build.jpg"}`}
        alt="name"
        width="100%"
        height="120%"
        layout="responsive"
        objectFit="cover"
        placeholder="blur"
      />

      <Link href={link}>
        <a target="_blank">
          <Title>
            {children}
            <Level color={colorsLevel[level] ? colorsLevel[level].color : ""}>
              {level}
            </Level>
          </Title>
        </a>
      </Link>
      <Show onClick={() => setTools(!tools)}>Show Tools</Show>
      {tools ? <ListTags listtags={tags} /> : null}
      <ArticleFooter>
        <span>{date}</span>
        <Read
          stateColor={
            stateApp[state] ? stateApp[state].color : stateApp[2].color
          }
        >
          <CheckIcon />
          <span>
            {Object.values(stateApp[state].name)}

            <span> </span>
            {percentaje}
          </span>
        </Read>
      </ArticleFooter>
    </ArticleContainer>
  );
}
