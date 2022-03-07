import Layout from "../Layout";


import Title from "../../components/Titles/Title";
import Subtitle from "../../components/Titles/Subtitle";
import Space from "../../components/Parrafos/Space";
import P from "../../components/Parrafos/P";
import Image from "next/image";
import BlogCategories from "../../components/Publishings/BlogCategories";
import Footer from "../../components/Footer/Footer";
//Styles
import {
  BlogContainer,
  ImageWrapper,
  ArticleContainer,
  TodayBlog,
  ContentArticle,
  PickupsArticle,
  TitleArticle,
  Contact,
} from "../../styles/PageStyles/BlogPageStyles";


const Blog = ({ onToggleTheme }) => {
  return (
    <Layout onToggleTheme={onToggleTheme}>
      <BlogContainer>
        <Subtitle>MY BLOG</Subtitle>
        <Title>Insightful and helpful content curated for you.</Title>

        <TodayBlog>
          <ArticleContainer>
            <ImageWrapper>
              <Image
                blurDataURL={`https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1636414720%2Fphoto-1636150721221-b88b3c2299be_ylb5ma.jpg&w=750&q=75`}
                src={`https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1636414720%2Fphoto-1636150721221-b88b3c2299be_ylb5ma.jpg&w=750&q=75`}
                alt="name"
                width="100%"
                height={420}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
              />
            </ImageWrapper>
            <ContentArticle>
              <PickupsArticle></PickupsArticle>

              <TitleArticle>6 BEST Fonts for Programming in 2022</TitleArticle>
              <P>
                In this article, I share the top 6 best fonts to use for
                programming in 2022! Containing a blend of free and premium
                fonts, this list was curated from fonts with great legibility
                and beautiful in nature.
              </P>
            </ContentArticle>
          </ArticleContainer>
          <Contact></Contact>
        </TodayBlog>
        <Space />
        <BlogCategories />
        <Space />
        <Footer />
      </BlogContainer>
    </Layout>
  );
};


export default Blog;
