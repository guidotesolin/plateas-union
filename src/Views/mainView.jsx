import React, { useState, useEffect } from "react";
import styles from "../Styles/mainStyles";
import { Grid, Select, MenuItem, Divider, Typography } from "@mui/material/";
// Views
import RenderPlatea from "./renderPlatea";
import Database from "../Data/sectores";

export default function MainView() {
  const classes = styles();
  const [sectores, setSectores] = useState([]);
  const [selectedSector, setSelectedSector] = useState("none");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setSectores(Database);
  }, []);

  useEffect(() => {
    if (selectedSeats && selectedSeats.length > 0) {
      let total = 0;
      selectedSeats.forEach((seat) => {
        if (seat && seat.price) total = total + seat.price;
      });
      setTotalPrice(total);
    } else setTotalPrice(0);
  }, [selectedSeats]);

  const handleClickOnSeat = (seat) => {
    // Empty case
    if (selectedSeats.length === 0) setSelectedSeats([seat]);
    else {
      // There is some seat selected
      const updatedArray = [...selectedSeats];
      // Search for this seat
      const seatIndex = selectedSeats.findIndex(
        (item) => item && item.id && item.id === seat.id
      );
      // It's founded, then i have to deleted
      if (seatIndex !== -1) updatedArray.splice(seatIndex, 1);
      else updatedArray.push(seat);
      // Update the hook
      setSelectedSeats(updatedArray);
    }
  };

  const getTotalPrice = () => {
    let sum = 0;
    selectedSeats.forEach((seat) => {
      if (seat && seat.price) sum = sum + seat.price;
    });
    return `$${sum}`;
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      className={classes.root}
    >
      {sectores && sectores.length > 0 && (
        <Grid item>
          <Select
            value={selectedSector}
            onChange={(event) => setSelectedSector(event.target.value)}
            className={classes.sectorSelect}
          >
            <MenuItem value={"none"}>Seleccione sector</MenuItem>
            <Divider />
            {sectores.map((item) => {
              return (
                <MenuItem key={item.id} value={item}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
      )}
      {selectedSector !== "none" && sectores && sectores.length > 0 && (
        <RenderPlatea
          sector={selectedSector}
          selectedSeats={selectedSeats}
          handleClick={handleClickOnSeat}
        />
      )}
      {selectedSeats && selectedSeats.length > 0 && totalPrice > 0 && (
        <Grid item>
          <Typography>Asientos seleccionados:</Typography>
          <ul>
            {selectedSeats.map((item, index) => {
              return <li key={index}>{item.name}</li>;
            })}
          </ul>
          <Typography>Total a pagar: ${totalPrice}</Typography>
        </Grid>
      )}
    </Grid>
  );
}
