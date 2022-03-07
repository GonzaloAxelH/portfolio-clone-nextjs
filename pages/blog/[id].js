
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../Layout";
import Title from "../../components/Titles/Title";
import P from "../../components/Parrafos/P";
import Reaction from "../../components/BlogComponents/Reactions/Reactions";
import Footer from "../../components/Footer/Footer";
import BlogPublishings from "../../components/Publishings/BlogPublishings";
import { useSelector } from "react-redux";
import HeaderBlog from "../../components/Header/HeaderBlog";
import { BlogsWrittings } from "../../data/Blogs";
//Styles
import {
  Reactions,
  Contenido,
  ContainerBlog,
  Puntuacion,
  TitleBlog,
  ImageWrapper,
  DateAndViews,
  UpdatedBlog,
  Info,
} from "../../styles/PageStyles/BlogSinglePageStyles";

const Blog = (props) => {
  const [post, setPost] = useState(false);
  const [reactions, setReactions] = useState([]);
  const allPosts = useSelector((state) => state.posts);
  const BlogJsx = () => {
    return BlogsWrittings.find((el) => el.id === props.id).blogJsx;
    //return BlogsWrittings[0].blogJsx;
  };

  useEffect(() => {
    const loadPost = allPosts.find((el) => el.id === props.id);
    setPost(loadPost);
  }, [allPosts]);

  const handleToggleClick = () => {
    alert("Just Subscribers");

  };

  return (
    <Layout onToggleTheme={props.onToggleTheme}>
      <ContainerBlog>
        <div className="blog-content">
          <Contenido>
            {post ? (
              <>
                <div>
                  <HeaderBlog
                    type={post.type}
                    date={post.date}
                    duration={post.duration}
                    autor={post.autor}
                  />
                  <TitleBlog>{post.title}</TitleBlog>
                  <Info>
                    <DateAndViews>
                      <span>{post.date}</span>
                      <span>.</span>
                      <span>1 views</span>
                    </DateAndViews>
                    <UpdatedBlog>(Updated Today)</UpdatedBlog>
                  </Info>
                  <ImageWrapper src={post.imgUrl}></ImageWrapper>
                  <BlogJsx />
                </div>
                <Puntuacion>
                  <h3>
                    ARTICLE REACTIONS <div> (Beta) </div>
                  </h3>
                  <Reactions>
                    <Reaction
                      type="LIKE"
                      icon="👍"
                      onClick={() => handleToggleClick("LIKE")}
                      cant={post.reactions[0]}
                    />
                    <Reaction
                      type="LOVE"
                      icon="❤️ "
                      onClick={() => handleToggleClick("LOVE")}
                      cant={post.reactions[1]}
                    />
                    <Reaction
                      type="CLAP"
                      icon=" 👏"
                      onClick={() => handleToggleClick("CLAP")}
                      cant={post.reactions[2]}
                    />
                    <Reaction
                      type="PARTY"
                      icon="🎉"
                      onClick={() => handleToggleClick("PARTY")}
                      cant={post.reactions[3]}
                    />
                  </Reactions>
                </Puntuacion>
                <Title size={32}>Articulos relacionados</Title>
                <P>Check out a few of my most recent publishings.</P>
                <BlogPublishings limit={3} />
                <Footer />
              </>
            ) : null}

          </Contenido>
        </div>
      </ContainerBlog>
    </Layout>
  );
};


Blog.getInitialProps = (context) => {
  const { id } = context.query;
  console.log({ id });
  return { id };
};


export default Blog;
