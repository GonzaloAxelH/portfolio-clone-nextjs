import React from "react";
import Space from "../../components/Parrafos/Space";
import Image from "next/image";

import Button from "../../components/Buttons/Button";
import P from "../../components/Parrafos/P";
import Publishings from "../../components/Publishings/Publishings";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Titles/Title";
import Subtitle from "../../components/Titles/Subtitle";
import { useRouter } from "next/router";
import Layout from "../Layout";
import {
  ProyectsContainer,
  Titles,
  ItemProyect,
  ProyectInfo,
  ImageWrapper,
  State,
} from "../../styles/PageStyles/ProyectsPageStyles";
import Link from "next/link";

export default function Proyects({ onToggleTheme }) {
  const router = useRouter();
  return (
    <Layout onToggleTheme={onToggleTheme}>
      <ProyectsContainer>
        <Titles>
          <Subtitle>PROYECTS</Subtitle>
          <Title>A selection of my favorite works.</Title>
        </Titles>
        <ItemProyect>
          <ProyectInfo>
            <Link href="https://fastfoodilo.vercel.app/fastfood">
              <a target="_blank">
                <Title size={38}>
                  Fastfood <State>development</State>
                </Title>
              </a>
            </Link>
            <P size="16px">
              Proyecto de un sistema web completo de venta de comida rapida
              online, integrado con una plataforma de pagos en linea para que
              los clientes puedan pagar en linea y recibir su pedido en su casa.
            </P>

            <Link href="https://fastfoodilo.vercel.app/fastfood">
              <a target="_blank">
                <Button type="primary">Visita la web</Button>
              </a>
            </Link>
          </ProyectInfo>
          <Link href="https://fastfoodilo.vercel.app/fastfood">
            <a target="_blank">
              <ImageWrapper>
                <Image
                  blurDataURL={`/imagesproyect/fastfood-preview.png`}
                  src={`/imagesproyect/fastfood-preview.png`}
                  alt="name"
                  layout="fill"
                  placeholder="blur"
                />
              </ImageWrapper>
            </a>
          </Link>
        </ItemProyect>

        <Space />
        <Title size={32}>I love to share my knowledge through writing.</Title>
        <P>Check out a few of my most recent publishings.</P>
        <Publishings limit={30} />
        <Space />
        <Footer />
      </ProyectsContainer>
    </Layout>
  );
}
