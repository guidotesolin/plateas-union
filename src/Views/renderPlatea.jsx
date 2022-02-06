import React, { useEffect } from "react";
import styles from "../Styles/plateaStyles";
import { Grid, Typography } from "@mui/material/";

export default function RenderPlatea(props) {
  const classes = styles();
  const { sector } = props;

  const renderSeats = (seats) => {
    const seatsGrid = seats.map((seat, index) => {
      if (seat && seat.id) {
        return (
          <Grid item key={index}>
            <div className={classes.seat}>{renderNumber(seat.number)}</div>
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
      <Grid item>
        <Typography className={classes.sectorTitle}>{sector.name}</Typography>
      </Grid>
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
                {row && row.seats && renderSeats(row.seats)}
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
}
