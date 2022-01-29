import React, { useState, useEffect } from "react";
import styles from "../Styles/plateaStyles";
import { Grid, Typography, Button } from "@mui/material/";

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
    const seatsGrid = seats.map((seat, index) => {
      return (
        <Grid item key={index} style={{ marginLeft: "5px" }}>
          <div
            style={{
              background: "#FF0000",
              padding: "6px",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
              cursor: "pointer",
              color: "white",
            }}
          >
            {seat}
          </div>
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
      style={{ alignItems: "center" }}
    >
      <Grid item style={{ marginTop: "20px" }}>
        <Typography>{sector.name}</Typography>
      </Grid>
      <Grid item style={{ width: "95%", overflowX: "auto" }}>
        {rows &&
          seats &&
          rows.length > 0 &&
          seats.length > 0 &&
          rows.map((row, index) => {
            return (
              <Grid
                key={index}
                container
                direction="row"
                style={{ marginTop: "20px", alignItems: "center" }}
                wrap="nowrap"
              >
                <Grid>{row}:</Grid>
                {renderSeats()}
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
}
