import { makeStyles } from "@mui/styles";

const MainStyles = makeStyles(() => {
  return {
    root: { alignItems: "center" },
    sectorTitle: { marginTop: "20px" },
    sectorContainer: { width: "95%", overflowX: "auto",paddingBottom: "20px" },
    sector: { marginTop: "20px",  alignItems: "center" },
    row: { marginRight: "5px" },
    seat: {
      background: "#FF0000",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      cursor: "pointer",
      color: "white",
      width: "30px",
      marginRight: "5px",
      textAlign: "center",
    },
    emptySeat: { width: "30px", marginRight: "5px", background: "#00ff00" },
  };
});

export default MainStyles;
