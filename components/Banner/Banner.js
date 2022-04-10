import Image from "next/image";
import styled from "styled-components";
import Button from "../Buttons/Button";
import Space from "../Parrafos/Space";
import { motion } from "framer-motion";

const Slogan = styled.h1`
  font-size: 48px;
  font-weight: 800;
  line-height: 72px;
  color: ${({ theme }) => theme.colorText};
  span {
    color: rgb(20, 184, 166);
  }
  text-align: left;
  margin-bottom: 60px;
  flex: 5;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 34px;
    line-height: 48px;
    margin-bottom: 0.5em;
  }

  @media (max-width: 640px) {
    font-size: 34px;
  }
`;
const ImageMe = styled.div`
  flex: 1;
  width: 180px;
  min-width: 180px;
  height: 180px;
  margin-right: 1em;
  align-self: center;
  img {
    border-radius: 50%;
  }
  display: flex;
  justify-content: flex-end;
`;

const ButtonsBanner = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    button {
      width: 100%;
      font-size: 14px;
      margin-top: 1em;
    }
  }
`;
const Presentacion = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const BannerContainer = styled.div`
  padding-left: 4em;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
const Banner = () => {
  return (
    <BannerContainer>
      <Presentacion>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <Slogan>
            {/* eslint-disable-next-line react/no-unescaped-entities*/}
            I'm <span>Gonzalo</span> and I'm a student <br /> and fullstack
            developer <br /> and javascript specialist.
          </Slogan>
        </motion.div>
        <ImageMe>
          <Image
            src="https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Programmer-512.png"
            alt="Photo"
            width={180}
            height={180}
          />
        </ImageMe>
      </Presentacion>

      <ButtonsBanner>
        <Button onClick={() => router.push("/blog")} type="primary">
          Read the blog
        </Button>
        <Button onClick={() => router.push("/proyects")} type="secondary">
          A look at my projects
        </Button>
      </ButtonsBanner>
    </BannerContainer>
  );
};
export default Banner;
