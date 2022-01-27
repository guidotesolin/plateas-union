import React, { useState, useEffect } from "react";
import styles from "../Styles/plateaStyles";
import { Grid, Typography } from "@mui/material/";

export default function RenderPlatea(props) {
  const classes = styles();
  const { sector } = props;
  const [rows, setRows] = useState([]);
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    if (sector) {
      if (sector.columnas) {
        const rowsAux = [];
        for (let i = 1; i <= sector.columnas; i++) rowsAux.push(i);
        setRows(rowsAux);
      }
      if (sector.filas) {
        const seatsAux = [];
        for (let i = 1; i <= sector.filas; i++) seatsAux.push(i);
        setSeats(seatsAux);
      }
    }
  }, [sector]);

  const renderSeats = () => {
    const seatsGrid = seats.map((item) => {
      return (
        <Grid item style={{ marginLeft: "5px" }}>
          <p>{item}</p>
        </Grid>
      );
    });
    return seatsGrid;
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item>
        <Typography>{sector.name}</Typography>
      </Grid>
      {rows &&
        seats &&
        rows.length > 0 &&
        seats.length > 0 &&
        rows.map((item) => {
          return (
            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid>{item}:</Grid>
                {renderSeats()}
              </Grid>
            </Grid>
          );
        })}
    </Grid>
  );
}
