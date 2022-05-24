import React from "react";
import Layout from "../Layout";

// temas en base : https://preview.themeforest.net/item/eduman-education-online-courses-react-nextjs-template/full_screen_preview/37315333
// temas en base : http://preview.themeforest.net/item/courseplus-modern-learning-management-application/full_screen_preview/23651460

//https://codepen.io/aybukeceylan/pen/pobbEYB  -> zoom clone

const TutorialVideos = ({ onToggleTheme }) => {
  return <Layout blur={true} onToggleTheme={onToggleTheme}></Layout>;
};

export default TutorialVideos;
