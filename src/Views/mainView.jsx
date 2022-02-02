import React, { useState, useEffect } from "react";
// import styles from "../Styles/mainStyles";
import { Grid } from "@mui/material/";
// Views
import RenderPlatea from "./renderPlatea";
import Database from "../Data/sectores";

export default function MainView() {
  //const classes = styles();
  const [sectores, setSectores] = useState([]);

  useEffect(() => {
    setSectores(Database);
  }, []);

  return (
    <Grid container>
      {sectores && sectores.length > 0 && <RenderPlatea sector={sectores[6]} />}
    </Grid>
  );
}
