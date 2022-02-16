import React from "react";
import styles from "../Styles/plateaStyles";
import { Grid, Typography } from "@mui/material/";

export default function RenderPlatea(props) {
  const classes = styles();
  const { sector, selectedSeats, handleClick } = props;

  const createSelectedSeatObject = (seat, rowNumber) => {
    const object = {};
    const sectorName = sector && sector.name ? sector.name : "";
    const seatNumer = seat && seat.number ? seat.number : "";
    object.id = seat && seat.id ? seat.id : null;
    object.sectorId = sector && sector.id ? sector.id : null;
    object.name = `${sectorName} - Fila ${rowNumber} - Butaca ${seatNumer}`;
    object.price = sector && sector.price ? sector.price : 0;
    handleClick(object);
  };

  const renderSeats = (seats, rowNumber) => {
    const seatsGrid = seats.map((seat, index) => {
      if (seat && seat.id) {
        /*
        We are going to work with 4 types of seats:
        - Selected: Red background and with option to deselect. 
        - Available: White background and with option to select
        - Already busy: Gray background and no option to click.
        - No more capacity: the user has already chosen the 3 places available for buying. No option to click
        */
        let styleType = "";
        let onClickFunction = () => createSelectedSeatObject(seat, rowNumber);
        const notAvailable = seat && seat.taken;
        const isSelected =
          selectedSeats &&
          selectedSeats.length > 0 &&
          selectedSeats.find((item) => item && item.id && item.id === seat.id);
        const noMoreCapacity = selectedSeats.length >= 3;
        // Ask if the seat is selected
        if (isSelected) styleType = "isSelected";
        else {
          // The seat is not selected
          if (notAvailable) {
            // Not available
            styleType = "notAvailable";
            onClickFunction = undefined;
          } else if (noMoreCapacity) {
            styleType = "noCapacity";
            onClickFunction = undefined;
          }
          // If none of the above conditions are satisfied, then the seat is available.
        }
        return (
          <Grid item key={index}>
            <div
              className={`${classes.seat} ${styleType}`}
              onClick={onClickFunction}
            >
              {renderNumber(seat.number)}
            </div>
          </Grid>
        );
      } else {
        return (
          <Grid item key={index}>
            <div className={classes.emptySeat} />
          </Grid>
        );
      }
    });
    return seatsGrid;
  };

  const renderNumber = (number) => {
    if (number < 10) return `0${number}`;
    else return `${number}`;
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      className={classes.root}
    >
      <Grid item className={classes.sectorContainer}>
        {sector.distribution &&
          sector.distribution.length > 0 &&
          sector.distribution.map((row, index) => {
            return (
              <Grid
                key={index}
                container
                direction="row"
                className={classes.sector}
                wrap="nowrap"
              >
                <Grid>
                  <Typography className={classes.row}>
                    {renderNumber(row.order)}
                  </Typography>
                </Grid>
                {row && row.seats && renderSeats(row.seats, row.order)}
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
}
