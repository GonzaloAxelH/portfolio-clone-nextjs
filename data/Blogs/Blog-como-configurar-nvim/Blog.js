import React from "react";

import HeaderBlog from "../../../components/BlogComponents/HeaderBlog/HeaderBlog";
import Code from "../../../components/BlogComponents/CodeComponent/Code";

import { CodeNpmInit } from "./codes";
import {
  TitleBlog,
  Parrafo,
  SubtitleBlog,
  ImageWrapper,
  DateAndViews,
  UpdatedBlog,
  Info,
} from "../../../components/BlogComponents/BlogPageStyles";

const InfoBlog = {
  title: "Neovim, Instalación y Configuración Básica",
  type: "Lectura",
  date: "Feb 22, 2022",
  autor: "Gonzalo Axel Valdez",
  duration: "15 min de Practica",
  link: "#",
  description:
    " Vim es un editor de texto basado en modos (un lugar para escribir, otro para insertar comandos, y así). Nació como mejora de Vi (1976). Su interfaz no es gráfica, sino basada en texto (aunque existen ...",
  imgUrl: "/imagesblog/instalguidevim/neovim.png",
};

const BlogComponent = (
  <>
    <HeaderBlog
      type={InfoBlog.type}
      date={InfoBlog.date}
      duration={InfoBlog.duration}
      autor={InfoBlog.autor}
    />
    <TitleBlog>{InfoBlog.title}</TitleBlog>
    <Info>
      <DateAndViews>
        <span>{InfoBlog.date}</span>
        <span>.</span>
        <span>1 views</span>
      </DateAndViews>
      <UpdatedBlog>(Not Updated)</UpdatedBlog>
    </Info>
    <ImageWrapper src={InfoBlog.imgUrl}></ImageWrapper>
    
    <SubtitleBlog>1.Que es vim ? </SubtitleBlog>
    <Parrafo>

      Muy Pronto ...
    </Parrafo>

    
    <Code code={CodeNpmInit} type="bash" pathFile="directory/" />
  </>
);

export default {
  info: InfoBlog,
  page: BlogComponent,
};
