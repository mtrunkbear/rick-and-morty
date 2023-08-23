"use client";
import React from "react";
import styled from "@emotion/styled";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "@mui/material/styles";
import Button from "@/components/Button";

const Home = () => {
  const theme = useTheme();
  return (
    <MainContainer>
      <HeadingContainer>
        <Heading color={theme.palette.primary.main}>
          HumanXtinct Shadow Agent
        </Heading>
      </HeadingContainer>

      <ContentContainer>
        <TypeAnimation
          sequence={[
            'Frente a la insurgencia  universal contra la amenaza humana debido a la tiranía liderada por Morty Malvado, se ha concebido el "HumanXtinct Shadow Agent", una herramienta que, mediante su pantalla, revela las emisiones energéticas de los humanos, permitiendo su precisa identificación para salvaguardar la estabilidad cósmica.',
            1000,
          ]}
          wrapper="span"
          speed={90}
          style={{
            fontSize: "20px",
            display: "inline-block",
            color: "#cdffa3",
          }}
          cursor={false}
        />
        <TypeAnimation
          sequence={[
            4000,
            "En símbolo de unidad contra el caos, esta invención personifica la lucha por mantener el orden en un cosmos amenazado por los terricolas.",
          ]}
          wrapper="span"
          speed={90}
          style={{
            fontSize: "20px",
            display: "inline-block",
            marginTop: "40px",
            color: "#cdffa3",
          }}
          cursor={false}
        />
      </ContentContainer>
      <Button route={"./seek?page=1"}>{"Rastrear Humanos"}</Button>
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.main`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  padding: 6rem;
  width:80%;
  justify-content: center;
`;

const HeadingContainer = styled.div`
  z-index: 10;
  padding-bottom: 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Heading = styled.h1<{ color: string }>`
  font-size: 1.5rem;
  color: ${({ color }) => color};
  width: 100%;
  text-align: center;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);

  padding: 2rem 0.5rem;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
    position: static;
    width: auto;
    padding: 1rem;
  }
`;

const ContentContainer = styled.div`
  font-family: monospace;
  width: 100%;
  min-height: 400px;
  @media (min-width: 1024px) {
    width: 75%;
  }
`;
