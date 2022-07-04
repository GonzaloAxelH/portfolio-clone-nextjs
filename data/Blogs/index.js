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
  LATEX: "LATEX",
};

export const BlogsWrittings = [
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
