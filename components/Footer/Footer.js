import ListGroup from "./ListGroup";
import styled from "styled-components";
import FormContact from "../Forms/FormContact";
import IconInstagram from "../Icons/IconInstagram";
import IconGithub from "../Icons/IconGithub";
import IconCodepen from "../Icons/IconCodepen";
import TweetIcon from "../Icons/TweetIcon";
import Link from "next/link";
const FooterContainer = styled.div`
  position: relative;
  background: transparent;
  margin: 3em 0;
  width: 100%;
  z-index: 100;
`;

const FooterSocials = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3em;
  justify-content: space-between;
  p {
    color: rgb(51, 65, 85);
    margin: 21.4px 0;
    font-size: 16px;
  }
  div {
    display: flex;
    align-items: center;
    svg {
      width: 28px;
      margin-left: 1em;
      color: rgb(51, 65, 85);
      cursor: pointer;
    }
  }
`;
const FooterInfo = styled.div`
  display: flex;

  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Directions = styled.div`
  display: flex;

  flex: 1;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }

  flex-wrap: wrap;
`;
const FormContainer = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  @media (max-width: 768px) {
    align-self: flex-start;
    width: 100%;
    margin: 3em 0;
  }
`;

export default function Footer() {
  const general = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Proyects",
      path: "/proyects",
    },
    {
      name: "Blog",
      path: "/blog",
    },
  ];

  const especifics = [
    {
      name: "Stats",
      path: "/",
    },
    {
      name: "Toolbox",
      path: "/",
    },
    {
      name: "Snippets",
      path: "/",
    },
  ];
  const extra = [
    {
      name: "Changelog",
      path: "/",
    },
    {
      name: "Newsletter",
      path: "/",
    },
    {
      name: "Resume",
      path: "/",
    },
  ];

  return (
    <FooterContainer>
      <FooterInfo>
        <Directions>
          <ListGroup list={general} title="GENERAL" />
          <ListGroup list={especifics} title="SPECIFICS" />
          <ListGroup list={extra} title="EXTRA" />
        </Directions>
        <FormContainer>
          <FormContact />
        </FormContainer>
      </FooterInfo>
      <FooterSocials>
        <p>© 2022 Gonzalo Axel Valdez (web personal aun en desarrollo)</p>
        <div>
          <Link href="https://github.com/GonzaloAxelh">
            <TweetIcon />
          </Link>
          <Link href="https://github.com/GonzaloAxelh">
            <IconInstagram />
          </Link>

          <Link href="https://github.com/GonzaloAxelh">
            <IconGithub />
          </Link>
          <Link href="https://github.com/GonzaloAxelh">
            <IconCodepen />
          </Link>
        </div>
      </FooterSocials>
    </FooterContainer>
  );
}

Footer.propTypes = {};
