import React, { useState, useEffect } from "react";
import styles from "../Styles/mainStyles";
import {
  Grid,
  Select,
  MenuItem,
  Divider,
  Typography,
  Button,
} from "@mui/material/";
import axios from "axios";
// Data
import { v4 as uuidv4 } from "uuid";
import Database from "../Data/sectores";
import { AccessToken } from "../Data/mercadoPagoCredentials";
// Views
import RenderPlatea from "./renderPlatea";
import MercadoPago from "./mercadoPagoView";

export default function MainView() {
  const classes = styles();
  // This hook will be used to rotate between mobile and screen, displaying the stadium map or the select
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [sectores, setSectores] = useState([]);
  const [selectedSector, setSelectedSector] = useState("none");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    setSectores(Database);
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
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

  const handleSelectedSector = (name) => {
    if (sectores && sectores.length > 0) {
      const thisSector = sectores.find(
        (item) => item && item.name && item.name === name
      );
      if (thisSector) setSelectedSector(thisSector);
    }
  };

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

  const postOnMercadoPago = () => {
    const meliURL = `https://api.mercadopago.com/checkout/preferences?access_token=${AccessToken}`;
    const productName = "Pack de plateas"; // @TODO: CREAR MANEJO DE NOMBRES
    const productImg =
      "https://static.ellitoral.com//um/fotos/410416_tribuna_union.jpg"; // @TODO: CREAR MANEJO DE IMAGEN
    const params = {
      external_reference: uuidv4(),
      items: [
        {
          title: productName,
          description: "Plateas estadio 15 de abril",
          quantity: 1,
          unit_price: totalPrice,
          picture_url: productImg,
        },
      ],
    };
    axios
      .post(meliURL, params)
      .then((res) => {
        debugger;
        if (res && res.data && res.data.id) setPreferenceId(res.data.id);
        else {
          // @TODO: CREAR MANEJO DE ERRORES
        }
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      className={classes.root}
    >
      {/* Stadium map */}
      {sectores && sectores.length > 0 && screenWidth > 640 && (
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          className={classes.stadiumMap}
        >
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems="flex-end"
              style={{ justifyContent: "flex-start" }}
            >
              <Grid item>
                <Grid
                  container
                  direction="row"
                  alignItems="flex-start"
                  style={{ justifyContent: "flex-end" }}
                >
                  <Grid item>
                    <Typography
                      className={`${classes.sector} topLeft`}
                      onClick={() =>
                        handleSelectedSector("Platea Sudeste Alta")
                      }
                    >
                      Sudeste Alta
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      className={classes.sector}
                      onClick={() =>
                        handleSelectedSector("Platea Preferencial Alta")
                      }
                    >
                      Preferencial Alta
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      className={`${classes.sector} topRight`}
                      onClick={() =>
                        handleSelectedSector("Platea Sudoeste Alta")
                      }
                    >
                      Sudoeste Alta
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="row"
                  alignItems="flex-start"
                  style={{ justifyContent: "flex-end" }}
                >
                  <Grid item>
                    <Typography
                      className={classes.sector}
                      onClick={() =>
                        handleSelectedSector("Platea Sudeste Baja")
                      }
                    >
                      Sudeste Baja
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      className={classes.sector}
                      onClick={() =>
                        handleSelectedSector("Platea Preferencial Baja")
                      }
                    >
                      Preferencial Baja
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      className={classes.sector}
                      onClick={() =>
                        handleSelectedSector("Platea Sudoeste Baja")
                      }
                    >
                      Sudoeste Baja
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <div className={classes.divRedonda}></div>
            <Typography
              className={classes.redonda}
              onClick={() => handleSelectedSector("Platea Redonda Alta")}
            >
              Redonda
            </Typography>
          </Grid>
        </Grid>
      )}
      {selectedSector && selectedSector.name && screenWidth > 640 && (
        <Typography className={classes.sectorName}>
          {selectedSector.name}
        </Typography>
      )}
      {/* Mobile version */}
      {sectores && sectores.length > 0 && screenWidth <= 640 && (
        <Select
          value={
            selectedSector && selectedSector !== "none" && selectedSector.name
              ? selectedSector.name
              : "none"
          }
          onChange={(event) => handleSelectedSector(event.target.value)}
          className={classes.sectorSelect}
        >
          <MenuItem value={"none"}>Seleccione sector</MenuItem>
          <Divider />
          {sectores.map((item) => {
            return (
              <MenuItem key={item.id} value={item.name}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
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
          {!preferenceId ? (
            <Button onClick={postOnMercadoPago}>Generar link de pago</Button>
          ) : (
            <MercadoPago preferenceId={preferenceId} />
          )}
        </Grid>
      )}
    </Grid>
  );
}
