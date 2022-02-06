import React, { useState, useEffect } from "react";
// import styles from "../Styles/mainStyles";
import { Grid, Select, MenuItem } from "@mui/material/";
// Views
import RenderPlatea from "./renderPlatea";
import Database from "../Data/sectores";

export default function MainView() {
  //const classes = styles();
  const [sectores, setSectores] = useState([]);
  const [selectedSector, setSelectedSector] = useState("");

  useEffect(() => {
    setSectores(Database);
  }, []);

  return (
    <Grid container>
      {sectores && sectores.length > 0 && (
        <Select
          value={selectedSector}
          onChange={(event) => setSelectedSector(event.target.value)}
        >
          {sectores.map((item) => {
            return (
              <MenuItem key={item.id} value={item}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      )}
      {sectores && sectores.length > 0 && (
        <RenderPlatea sector={selectedSector} />
      )}
    </Grid>
  );
}
