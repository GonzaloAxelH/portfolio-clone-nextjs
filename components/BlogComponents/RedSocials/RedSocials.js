import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import IconGithub from "../../Icons/IconGithub";
import IconCodepen from "../../Icons/IconCodepen";
const ImagesSocials = {
  twitterImg:
    "https://www.hostinger.es/tutoriales/wp-content/themes/tutorialsthemeuplift/public/images/social-icons/twitter.svg",
  copyLinkImg:
    "https://www.hostinger.es/tutoriales/wp-content/themes/tutorialsthemeuplift/public/images/social-icons/link.svg",
  facebookImg:
    "https://www.hostinger.es/tutoriales/wp-content/themes/tutorialsthemeuplift/public/images/social-icons/facebook.svg",
  linkedinImg:
    "https://www.hostinger.es/tutoriales/wp-content/themes/tutorialsthemeuplift/public/images/social-icons/linkedin.svg",
  emailImg:
    "https://www.hostinger.es/tutoriales/wp-content/themes/tutorialsthemeuplift/public/images/social-icons/mail.svg",
  githubImg:
    "https://icons-for-free.com/iconfiles/png/512/github+hub+icon+icon-1320194641335079152.png",
};
const ContainerSocialList = styled.div`
  position: fixed;
  display: flex;
  flex-direction: ${(props) => props.direction};
  svg {
    color: #727586;
  }
  a {
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    width: 21px;
    height: 21px;
  }
  .icon-big {
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export default function RedSocials({ direction }) {
  return (
    <ContainerSocialList direction={direction}>
      <Link href="#">
        <a>
          <img
            src={ImagesSocials.copyLinkImg}
            alt="name"
            width={27}
            height={27}
            layout="responsive"
          />
        </a>
      </Link>
      <Link href="#">
        <a>
          <img
            src={ImagesSocials.twitterImg}
            alt="name"
            width={27}
            height={27}
            layout="responsive"
          />
        </a>
      </Link>
      <Link href="#">
        <a>
          <img
            src={ImagesSocials.facebookImg}
            alt="name"
            width={27}
            height={27}
            layout="responsive"
          />
        </a>
      </Link>
      <Link href="#">
        <a>
          <img
            src={ImagesSocials.linkedinImg}
            alt="name"
            width={27}
            height={27}
            layout="responsive"
          />
        </a>
      </Link>
      <Link href="#">
        <a>
          <img src={ImagesSocials.emailImg} alt="name" width={27} height={27} />
        </a>
      </Link>
      <Link href="#">
        <a className="icon-big">
          <IconGithub />
        </a>
      </Link>
      <Link href="#">
        <a>
          <IconCodepen />
        </a>
      </Link>
    </ContainerSocialList>
  );
}
