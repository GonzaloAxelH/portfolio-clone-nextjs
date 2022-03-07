import React from "react";
import BlogArticle from "./BlogArticle";
import styled from "styled-components";
import { PublishingsContainer, ListRecentsArticles } from "./PublishingsStyles";

import { BlogsWrittings } from "../../data/Blogs";

const Level = styled.span`
  font-size: 11px;
  border: 2px solid yellow;
  color: yellow;
  padding: 1px 5px;
  border-radius: 5px;
`;
const ShowMoreArticles = styled.div`
  display: flex;
  justify-content: flex-start;
`;
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
