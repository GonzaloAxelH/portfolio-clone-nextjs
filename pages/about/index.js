import React from "react";
import Layout from "../Layout";
import Image from "next/image";

import Title from "../../components/Titles/Title";
import Subtitle from "../../components/Titles/Subtitle";
import Link from "../../components/Parrafos/Link";
import P from "../../components/Parrafos/P";

import Space from "../../components/Parrafos/Space";
import Button from "../../components/Buttons/Button";
import Footer from "../../components/Footer/Footer";
import BlogPublishings from "../../components/Publishings/BlogPublishings";

import WorkExperience from "../../components/WorkExperience/WorkExperience";
import UseTegnologies from "../../components/UseTegnologies/UseTegnologies";
//styled
import {
  ViewToolbox,
  Titles,
  AboutContainer,
  ParrafoGroup,
  ImageMe,
  ContentAboutMe,
  ImageWrapper,
  Desbordamiento,
} from "../../styles/PageStyles/AboutPageStyles";

export default function About({ onToggleTheme }) {
  return (
    <Layout blur={true} onToggleTheme={onToggleTheme}>
      <AboutContainer>
        <Titles>
          <Subtitle>ABOUT ME</Subtitle>
          <Title>Heres my story.</Title>
        </Titles>
        <ContentAboutMe>
          <Desbordamiento>
            <ImageMe>
              <Image
                src="https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Programmer-512.png"
                alt="Photo"
                width={280}
                height={280}
              />
            </ImageMe>
            <ParrafoGroup>
              <P>
                I’m Braydon, a developer, <Link to="#">creative coder</Link>,
                <Link to="#"> blogger </Link>and self-proclaimed designer who
                specializes in front-end development. My mission is to translate
                user-focussed designs into pixel-perfect websites or
                applications that run blazing fast.
              </P>
              <P>
                I’m currently working as a senior front end developer at
                LogicGate where I help develop an agile GRC cloud solution that
                combines powerful functionality <Link to="#">intuitive</Link>
                with design to enhance enterprise GRC programs.
              </P>
            </ParrafoGroup>
          </Desbordamiento>
          <P>
            Prior to LogicGate, I worked as a senior
            <Link to="#">full-stack </Link>engineer at Cognizant where I helped
            architect and develop full-stack RESTful microservices, train and
            prepare developers for delivery, and assist in leading the front-end
            practice in a lab-based working environment.
          </P>
          <P>
            Before Cognizant, I worked as a UI Developer for projekt202 helping
            craft design systems and building reusable component libraries for
            multi-million dollar companies.
          </P>
          <P>
            In a past life, I was an indie mobile developer making mobile games
            for iOS and Android, with one of my games outselling Angry Birds.
          </P>
          <P>
            You can find me on Twitter where I share tech-related tidbits and
            build in public, or you can follow me on GitHub. I often write about
            my findings on my blog and create cool things over on CodePen. I
            also help run a mediocre podcast.{" "}
          </P>
          <span style={{ color: "red", fontStyle: "italic" }}>
            * fictitious information for now
          </span>
          <Space />
          <Title size={36}>Tools</Title>

          <UseTegnologies />
          <Space />
          <WorkExperience />

          <Space />
          <Title size={32}>I love to share my knowledge through writing.</Title>
          <P>Check out a few of my most recent publishings.</P>

          <BlogPublishings limit={3} />
          <Space />
          <ViewToolbox>
            <div className="content">
              <Title size={36}>Interested in my gear?</Title>
              <P>
                I keep a list of software, applications, extensions, hardware
                and a list of supplies Ive used to set up my office for those
                who are interested.
              </P>
              <Button type="primary">Check out my toolbox</Button>
            </div>
            <ImageWrapper>
              <Image
                blurDataURL={`https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1637186547%2Ftoolbox_hardware.jpg&w=1920&q=75`}
                src={`https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1637186547%2Ftoolbox_hardware.jpg&w=1920&q=75`}
                alt="name"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                placeholder="blur"
              />
            </ImageWrapper>
          </ViewToolbox>
        </ContentAboutMe>
        <Footer />
      </AboutContainer>
    </Layout>
  );
}
