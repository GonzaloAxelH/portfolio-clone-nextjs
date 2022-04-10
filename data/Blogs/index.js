import BlogRestApiLaravel9 from "./Blog-rest-api-laravel/Blog";
import BlogjwtNode from "./Blog-jwt-node/Blog";

export const categorys = {
  LARAVEL: "Laravel",
  NODE: "Node",
  C_SHARP: "C-SHARP",
  PERSONAL: "Personal",
  REACT: "React",
  ALL: "All",
  NEXTJS: "NextJS",
  JAVASCRIPT: "Javascript",
  CSS: "CSS",
  PRODUCTIVITY: "Productivity",
  PERSONAL: "Personal",
  WEB3: "Web3",
};

export const BlogsWrittings = [
  {
    id: "KHQSrInRrzW2PcZZa4dx",
    title: "API REST Basico en laravel 9 con base de datos Mysql",
    type: "Tutorial",
    category: categorys.LARAVEL,
    date: "Feb 25, 2022",
    autor: "Gonzalo Axel Valdez",
    duration: "20 min practica",
    link: "#",
    description:
      "En esta guia se pretende explicar la realizacion de una pequeña api hecha en laravel 9 ...",
    imgUrl: "/imagesblog/restapilaravel/laravel-9-rest-api-example.png",
    reactions: [0, 0, 0, 0],
    blogJsx: BlogRestApiLaravel9,
  },
  {
    id: "gwergwerfwerfvwefvefefef",
    title: "Autenticando un API Rest con NodeJS y JWT (JSON Web Tokens)",
    type: "Tutorial",
    category: categorys.NODE,
    date: "Mar 07, 2022",
    autor: "Gonzalo Axel Valdez",
    duration: "30 min practica",
    link: "#",
    description:
      "Hay distintos métodos para poder dar acceso a un API, por ejemplo la autenticación a través de tokens y es la que veremos usando JWT.",
    imgUrl: "/imagesblog/jwtnode/jwt.png",
    reactions: [0, 0, 0, 0],
    blogJsx: BlogjwtNode,
  },
];
