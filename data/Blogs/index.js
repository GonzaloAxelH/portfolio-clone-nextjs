import BlogRestApiLaravel9 from "./Blog-rest-api-laravel/Blog";
import BlogjwtNode from "./Blog-jwt-node/Blog";
import BlogWeb3Etherium from "./Blog-web3-etherium/Blog";
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
    id: "ev78v78v789v89v909",
    title: "Introduccion a Etherium Development",
    type: "Infomativo",
    category: categorys.WEB3,
    date: "Mar 5, 2022",
    autor: "Gonzalo Axel Valdez",
    duration: "5 min de Lectura",
    link: "#",
    description:
      "Esta introducción a Ethereum se publicó originalmente en Sitio web de Bruno's Bitfalls, y se reproduce aquí con permiso.",
    imgUrl: "/imagesblog/web3/etherium.jpg",
    reactions: [0, 0, 0, 0],
    blogJsx: BlogWeb3Etherium,
  },
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
