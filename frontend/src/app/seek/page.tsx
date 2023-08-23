"use client";
import Card from "@/components/Card";
import styled from "@emotion/styled";
import useFetchCharacters from "@/hooks/useFetchCharacters";
import Button from "@/components/Button";

export default function Home({
  searchParams: { page },
}: {
  searchParams: { page: number };
}) {
  const parsedPage = parseInt(page as any);
  const { charactersData } = useFetchCharacters(parsedPage);

  if (charactersData)
    return (
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px",
        }}
      >
        <h1
          style={{ color: "#cdffa3", marginBottom: "50px", fontSize: "22px" }}
        >
          {"HUMANOIDES IDENTIFICADOS"}
        </h1>
        <GridContainer>
          {charactersData.results.map(({ image, name, species }) => (
            <Card key={name} image={image} name={name} species={species} />
          ))}
        </GridContainer>

        <div style={{ margin: "24px", width: "100%" }}>
          {parsedPage != 0 && (
            <Button route={"?page=" + (parsedPage - 1)}>Previo</Button>
          )}

          <Button route={"?page=" + (parsedPage + 1)}>Siguiente</Button>
        </div>
      </main>
    );
}

// Estilos del grid responsivo
const GridContainer = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;
