import Layout from "./Layout";
import Publishings from "../components/Publishings/Publishings";
import Banner from "../components/Banner/Banner";
import Space from "../components/Parrafos/Space";
import UpdatesFrom from "../components/UpdatesForm/UpdatesFrom";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import BlogPublishings from "../components/Publishings/BlogPublishings";
import RedSocials from "../components/BlogComponents/RedSocials/RedSocials";
import { Title } from "../components/Titles/Title";
import Button from "../components/Buttons/Button";
import P from "../components/Parrafos/P";
import { useRouter } from "next/router";

const dev = process.env.NODE_ENV !== "production";
export const server = dev
  ? "http://localhost:3000"
  : "https://your_deployment.server.com";

const HomeContainer = styled.section`
  height: 100%;
  margin: 5em;

  padding: 0 2em;
  @media (max-width: 1024px) {
    margin: 2em 1em;
  }
  @media (max-width: 768px) {
    margin: 0.5em 1em;
    margin-left: 2em;
  }

  @media (max-width: 640px) {
    padding: 0em;
  }
`;
const SocialsContainer = styled.div`
  position: relative;
  top: 3em;
  left: 0.5em;
  @media (max-width: 768px) {
    display: none;
  }
`;
export default function Home({ onToggleTheme }) {
  const router = useRouter();
  return (
    <Layout blur={true} onToggleTheme={onToggleTheme}>
      <HomeContainer>
        <Banner />
        <Space />
        <Title size={32}>I love building clones of web applications.</Title>
        <P>Take a look at some of my recent personal projects.</P>
        <Publishings />
        <Button onClick={() => router.push("/proyects")} type="primary">
          See all proyects
        </Button>
        <Space />
        <Title size={32}>I love to share my knowledge through writing.</Title>
        <P>Check out a few of my most recent publishings.</P>
        <BlogPublishings limit={3} />
        <Button onClick={() => router.push("/blog")} type="primary">
          See all publications
        </Button>
        <Space />
        <UpdatesFrom />
        <Footer />
      </HomeContainer>
    </Layout>
  );
}
