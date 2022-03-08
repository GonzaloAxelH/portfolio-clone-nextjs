import React from "react";
import BlogArticle from "./BlogArticle";
import { PublishingsContainer, ListRecentsArticles } from "./PublishingsStyles";

import { BlogsWrittings } from "../../data/Blogs";

export default function BlogPublishings({ limit }) {
  return (
    <PublishingsContainer>
      <ListRecentsArticles>
        {BlogsWrittings.slice(0, limit).map((el, index) => {
          return (
            <BlogArticle
              key={index}
              id={el.id}
              link={el.link}
              date={el.date}
              type={el.type}
              title={el.title}
              description={el.description}
              autor={el.autor}
              imgUrl={el.imgUrl}
            />
          );
        })}
      </ListRecentsArticles>
    </PublishingsContainer>
  );
}
