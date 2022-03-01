import { makeStyles } from "@mui/styles";

const PlateaSyles = makeStyles(() => {
  return {
    root: { alignItems: "center", paddingTop: "15px", alignContent: "center" },
    sectorContainer: {
      marginTop: "20px",
      marginBottom: "20px",
      paddingLeft: "20px",
      paddingRight: "20px",
      width: "95%",
      overflowX: "auto",
      background: "#cfcfcf",
    },
    sector: { marginTop: "20px", alignItems: "center" },
    row: { paddingRight: "5px" },
    seat: {
      // Common properties
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      width: "30px",
      textAlign: "center",
      marginRight: "5px",
      // Available
      background: "#FFFFFF",
      color: "#000000",
      cursor: "pointer",
      // Not Available
      "&.notAvailable": {
        color: "#000000",
        background: "#6e6e6e",
        cursor: "not-allowed",
      },
      // Selected seat
      "&.isSelected": {
        background: "#FF0000",
        color: "#FFFFFF",
        fontWeight: 600,
      },
      // No more capacity to buy
      "&.noCapacity": {
        background: "#aaaaaa",
        color: "#000000",
        fontWeight: 600,
        cursor: "not-allowed",
      },
    },
    emptySeat: { width: "30px", marginRight: "5px", background: "#00ff00" },
  };
});

export default PlateaSyles;
