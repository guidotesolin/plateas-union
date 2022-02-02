// Sectores del estadio
import { v4 as uuidv4 } from "uuid";

const createSeat = (rowId, number) => {
  const id = uuidv4();
  const taken = null;
  return { id, rowId, number, taken };
};

const createRow = (sectorId, order, distribution) => {
  const rowObject = {};
  const rowId = uuidv4();
  const seats = [];
  let sum = 1;
  if (distribution && distribution.length > 0) {
    distribution.forEach((item) => {
      if (!item) seats.push("empty");
      else {
        for (let i = 1; i <= item; i++) {
          const seat = createSeat(rowId, sum);
          sum++;
          seats.push(seat);
        }
      }
    });
  }
  rowObject.id = rowId;
  rowObject.sectorId = sectorId;
  rowObject.order = order;
  rowObject.seats = seats;
  return rowObject;
};

const getSectores = () => {
  /* 
  SudoesteBaja distribucion
  Columna 1, la escalera come 4 lugares
  Columna 2, la escalera come 4 lugares y tiene pasillos
  El resto de las columnas tiene la misma distribucion y tiene pasillos
  */
  const sudoesteBaja = [];
  const col1 = [null, null, null, null, 65];
  const col2 = [null, null, null, null, 11, null, 30, null, 22];
  const col3 = [15, null, 30, null, 22];
  const col4 = [15, null, 30, null, 22];
  const col5 = [15, null, 30, null, 22];
  const col6 = [15, null, 30, null, 22];
  const col7 = [15, null, 30, null, 22];
  const col8 = [15, null, 30, null, 22];
  const col9 = [15, null, 30, null, 22];
  const col10 = [15, null, 30, null, 22];
  sudoesteBaja.push(createRow("SudoesteBaja", 1, col1));
  sudoesteBaja.push(createRow("SudoesteBaja", 2, col2));
  sudoesteBaja.push(createRow("SudoesteBaja", 3, col3));
  sudoesteBaja.push(createRow("SudoesteBaja", 4, col4));
  sudoesteBaja.push(createRow("SudoesteBaja", 5, col5));
  sudoesteBaja.push(createRow("SudoesteBaja", 6, col6));
  sudoesteBaja.push(createRow("SudoesteBaja", 7, col7));
  sudoesteBaja.push(createRow("SudoesteBaja", 8, col8));
  sudoesteBaja.push(createRow("SudoesteBaja", 9, col9));
  sudoesteBaja.push(createRow("SudoesteBaja", 10, col10));
  const sectoresDelEstadio = [
    {
      id: "Redonda",
      name: "Platea redonda",
      numberOfrows: 8,
    },
    {
      id: "SudesteAlta",
      name: "Platea sudeste alta",
      numberOfrows: 16,
    },
    {
      id: "PrefAlta",
      name: "Preferencial alta",
      numberOfrows: 16,
    },
    {
      id: "SudoesteAlta",
      name: "Platea sudoeste alta",
    },
    {
      id: "SudesteBaja",
      name: "Platea sudeste baja",
      columnas: 10,
      filas: 66,
      separacion: [22, 42],
    },
    {
      id: "PrefBaja",
      name: "Preferencial baja",
      columnas: 6,
      filas: 55,
    },
    {
      id: "SudoesteBaja",
      name: "Platea sudoeste baja",
      numberOfRows: 10,
      distribution: sudoesteBaja,
    },
  ];
  return sectoresDelEstadio;
};

export default getSectores;
