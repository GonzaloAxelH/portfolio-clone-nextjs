import React from "react";
import Layout from "../Layout";

// temas en base : https://preview.themeforest.net/item/eduman-education-online-courses-react-nextjs-template/full_screen_preview/37315333
// temas en base : http://preview.themeforest.net/item/courseplus-modern-learning-management-application/full_screen_preview/23651460

//https://codepen.io/aybukeceylan/pen/pobbEYB  -> zoom clone

const TutorialVideos = ({ onToggleTheme }) => {
  return (
    <Layout blur={true} onToggleTheme={onToggleTheme}>
      <h1 style={{ textAlign: "center", margin: "1em" }}></h1>
      <div style={{ textAlign: "center" }}>
        <iframe
          showinfo={0}
          width="63.5%"
          height="490px"
          modestbranding={1}
          src="https://www.youtube.com/embed/rj7DOPPTkQA?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Layout>
  );
};

export default TutorialVideos;
