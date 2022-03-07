import React from "react";
import Space from "../../components/Parrafos/Space";
import Image from "next/image";
import styled from "styled-components";
import Button from "../../components/Buttons/Button";
import P from "../../components/Parrafos/P";
import Publishings from "../../components/Publishings/Publishings";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Titles/Title";
import Subtitle from "../../components/Titles/Subtitle";

import Layout from "../Layout";
import {
  ProyectsContainer,
  Titles,
  ItemProyect,
  ProyectInfo,
  ImageWrapper,
} from "../../styles/PageStyles/ProyectsPageStyles";

export default function Proyects({ onToggleTheme }) {
  return (
    <Layout onToggleTheme={onToggleTheme}>
      <ProyectsContainer>
        <Titles>
          <Subtitle>PROYECTS</Subtitle>
          <Title>A selection of my favorite works.</Title>
        </Titles>
        <ItemProyect>
          <ProyectInfo>
            <Title size={38}>Pomegradient</Title>
            <P>
              Pomegradient is a web-based gradient solutiuon currently in beta
              that allows you to find, save and craft gradients with a creative
              community!
            </P>
            <Button type="primary">Visit Pomegradient</Button>
          </ProyectInfo>

          <ImageWrapper>
            <Image
              blurDataURL={`https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1638221102%2Fmbpro_bundle_site_zg8jbe.png&w=3840&q=75`}
              src={`https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1638221102%2Fmbpro_bundle_site_zg8jbe.png&w=3840&q=75`}
              alt="name"
              width="100%"
              height={420}
              layout="fill"
              objectFit="contain"
              placeholder="blur"
            />
          </ImageWrapper>
        </ItemProyect>

        <ItemProyect>
          <ProyectInfo>
            <Title size={38}>Pomegradient</Title>
            <P>
              Pomegradient is a web-based gradient solutiuon currently in beta
              that allows you to find, save and craft gradients with a creative
              community!
            </P>
            <Button type="primary">Visit Pomegradient</Button>
          </ProyectInfo>
          <ImageWrapper>
            <Image
              blurDataURL={`https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1638225420%2Fpomegradient_ipadpro_vhapql.png&w=2048&q=75`}
              src={`https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1638225420%2Fpomegradient_ipadpro_vhapql.png&w=2048&q=75`}
              alt="name"
              width="100%"
              height={420}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </ImageWrapper>
        </ItemProyect>

        <ItemProyect>
          <ProyectInfo>
            <Title size={38}> Pomegradient</Title>
            <P>
              Pomegradient is a web-based gradient solutiuon currently in beta
              that allows you to find, save and craft gradients with a creative
              community!
            </P>
            <Button type="primary">Visit Pomegradient</Button>
          </ProyectInfo>
          <ImageWrapper>
            <Image
              blurDataURL={`https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1638226232%2Fnglimeade_ipadpro_blliap.png&w=1920&q=75`}
              src={`https://braydoncoyer.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fbraydoncoyer%2Fimage%2Fupload%2Fv1638226232%2Fnglimeade_ipadpro_blliap.png&w=1920&q=75`}
              alt="name"
              width="100%"
              height={420}
              layout="fill"
              objectFit="contain"
              placeholder="blur"
            />
          </ImageWrapper>
        </ItemProyect>
        <Space />
        <Title size={32}>I love to share my knowledge through writing.</Title>
        <P>Check out a few of my most recent publishings.</P>
        <Publishings limit={6} />
        <Space />
        <Footer />
      </ProyectsContainer>
    </Layout>
  );
}
