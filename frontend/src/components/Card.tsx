import * as React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Card({
  image,
  name,
  species,
}: {
  image: string;
  name: string;
  species: string;
}) {
  return (
    <MuiCard sx={{ maxWidth: 300 }} style={{backgroundColor:"#003030"}}>
      <CardMedia sx={{ height: 240 }} image={image} title="green iguana" />
      <CardContent style={{backgroundColor:"#003030"}}>
        <Typography gutterBottom variant="h5" color="primary.main" component="div">
          {name}
        </Typography>
        <Typography variant="body2"  color="#cdffa3">
          Es un individuo de la especie {species}
        </Typography>
      </CardContent >
    </MuiCard>
  );
}
