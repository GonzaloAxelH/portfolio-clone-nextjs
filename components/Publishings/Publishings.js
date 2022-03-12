import styled from "styled-components";
import Article from "./Article";
import Button from "../Buttons/Button";
import { useEffect } from "react";
import ImagesSlide from "../ImagesSlide/ImagesSlide";
import {
  PublishingsContainer,
  Subtitle,
  ListRecentsArticles,
  ShowMoreArticles,
} from "./PublishingsStyles.jsx";

const Articles = [
  {
    id: 0,
    title: "FastFood Development PostgreSQL Socket.io",
    tags: [
      "Redis",
      "PostgreSQL",
      "Socket.io",
      "Nextjs",
      "Nodejs",
      "Reactjs",
      "Styled-components",
      "Firebase Auth",
      "Firebase Storage",
      "Firebase Realtime Database",
      "Paypal",
      "Stripe",
      "Heroku",
      "Vercel",
    ],
    imgUrl: "imagesproyect/fastfood-preview.png",
    link: "https://fastfood-sigma.vercel.app/",

    percentaje: "4%",
    state: "development",
    level: "AVANCED",
    linkGit: "#",
    date: "Mar 22, 2022",
  },
  {
    id: 1,
    title: "Google Keep Clone React Firebase 9 ",
    tags: ["Vanilla JS", "Wikipedia API"],
    imgUrl: "imagesproyect/google-keep.jpg",
    link: "https://github.com/GonzaloAxelH/google-keep-clone",

    percentaje: "50%",
    state: "development",
    level: "JUNIOR",
    linkGit: "#",
    date: "Feb 2, 2022",
  },
  {
    id: 1,
    title:
      "Search App Vanilla Js Buscador basico con seleccion de idioma Español Ingles",
    tags: ["Vanilla JS", "Wikipedia API"],
    imgUrl: "searchapp_vanillajs.png",
    link: "https://gonzaloaxelh.github.io/search-app-vanilla-js/",

    percentaje: "100%",
    state: "completed",
    level: "NEWBIE",
    linkGit: "#",
    date: "December 21, 2021",
  },
  {
    id: 2,
    title: "Porfolio clone Britanny Chiang construido con React",
    tags: ["Reactjs", "Animation.js"],
    imgUrl: "britanyportfolio.png",
    link: "https://portfolio-clone-a8ee0.web.app/",
    level: "JUNIOR",
    state: "completed",

    linkGit: "#",
    date: "December 21, 2021",
    percentaje: "100%",
  },

  {
    id: 5,
    title: " Ecomerce Website React, Redux, Expressjs and MongoDB",
    tags: ["Reactjs", "Redux", "Expressjs", "MongoDB"],
    imgUrl: "ecommerce.jpg",
    link: "#",
    state: "development",
    percentaje: "0%",
    date: "January 13,2022",
    linkGit: "#",
    level: "INTERMEDIO",
  },
  {
    id: 6,
    title:
      "Fullstack Authentication with Refresh Access Tokens (Node, Next.js, Typescript)",
    tags: ["Expressjs", "Next.js", "Typescript", "JWT"],
    imgUrl: "nodeauth.png",
    link: "",
    state: "development",
    percentaje: "0%",
    date: "january 14,2022",
    linkGit: "",
    level: "JUNIOR",
  },
  {
    id: 7,
    title:
      "Build Spotify with REACT.JS! (Next.js, Tailwind CSS, Spotify API, NextAuth, Recoil) ",
    tags: [
      "Next.js",
      "Typescript",
      "Spotify API",
      "NextAuth",
      "Recoil",
      "Tailwindcss",
    ],
    imgUrl: "spotify.webp",
    link: "",
    state: "development",
    percentaje: "0%",
    date: "Mar 1,2022",
    linkGit: "",
    level: "INTERMEDIO",
  },
  {
    id: 8,
    title:
      "Reddit Clone !! Fullstack React GraphQL Typescript Apollo GraphQL PostgreSQL Redis TypeORM",
    tags: [
      "React",
      "TypeScript",
      "GraphQL",
      "URQL / Apollo",
      "Node.js",
      "PostgreSQL",
      "MikroORM / TypeORM",
      "Redis",
      "Next.js",
      "TypeGraphQL",
      "Chakra UI",
    ],
    imgUrl: "",
    link: "",
    state: "pending",
    percentaje: "0%",
    date: "Mar 1,2022",
    linkGit: "",
    level: "GURU",
  },
  {
    id: 9,
    title: "Stack Overflow Page Clone Nextjs Express",
    tags: [
      "React",
      "TypeScript",
      "Reactjs",
      "StoryBook(Development components)",
      "Node.js",
      "Mongodb",
      "PostCSS",
      "Mongoose Avanced",
      "Testing",
    ],
    imgUrl: "",
    link: "",
    state: "development",
    percentaje: "0%",
    date: "january 19,2022",
    linkGit: "",
    level: "AVANCED",
  },
];
export default function Publishings({ limit }) {
  return (
    <PublishingsContainer>
      <ListRecentsArticles>
        {Articles.slice(0, limit ? limit : 3).map((article, key) => {
          return (
            <Article
              key={key}
              state={article.state}
              link={article.link}
              tags={article.tags}
              date={article.date}
              percentaje={article.percentaje}
              urlImg={article.imgUrl}
              level={article.level}
            >
              {article.title}
            </Article>
          );
        })}
      </ListRecentsArticles>
    </PublishingsContainer>
  );
}

Publishings.propTypes = {};
