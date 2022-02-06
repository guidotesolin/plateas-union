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

const createPrefAlta = () => {
  /* 
  Columna 1, sin pasillos, interrumpe escalera
  Columna 2-7 y 12-16, columnas con pasillos dobles
  Columna 8-12, columna con pasillos dobles y boca de salida
  */
  const sector = [];
  const col1 = [41];
  const col2 = [8, null, null, 39];
  const col3 = [null, null, null, null, null, null, null, null, null, null, 39];
  sector.push(createRow("PrefAlta", 1, col1));
  sector.push(createRow("PrefAlta", 2, col2));
  sector.push(createRow("PrefAlta", 3, col2));
  sector.push(createRow("PrefAlta", 4, col2));
  sector.push(createRow("PrefAlta", 5, col2));
  sector.push(createRow("PrefAlta", 6, col2));
  sector.push(createRow("PrefAlta", 7, col2));
  sector.push(createRow("PrefAlta", 8, col3));
  sector.push(createRow("PrefAlta", 9, col3));
  sector.push(createRow("PrefAlta", 10, col3));
  sector.push(createRow("PrefAlta", 11, col3));
  sector.push(createRow("PrefAlta", 12, col3));
  sector.push(createRow("PrefAlta", 13, col2));
  sector.push(createRow("PrefAlta", 14, col2));
  sector.push(createRow("PrefAlta", 15, col2));
  sector.push(createRow("PrefAlta", 16, col2));
  return sector;
};

const createSudoesteAlta = () => {
  /* 
  Columna 1, sin pasillos
  Columna 2-7, columnas con pasillos dobles
  Columnas 8-12 tienen los ingresos
  */
  const sector = [];
  const col1 = [82];
  const col2 = [12, null, null, 28, null, null, 10, null, null, 26];
  const col3 = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    28,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    26,
  ];
  sector.push(createRow("SudoesteAlta", 1, col1));
  sector.push(createRow("SudoesteAlta", 2, col2));
  sector.push(createRow("SudoesteAlta", 3, col2));
  sector.push(createRow("SudoesteAlta", 4, col2));
  sector.push(createRow("SudoesteAlta", 5, col2));
  sector.push(createRow("SudoesteAlta", 6, col2));
  sector.push(createRow("SudoesteAlta", 7, col2));
  sector.push(createRow("SudoesteAlta", 8, col3));
  sector.push(createRow("SudoesteAlta", 9, col3));
  sector.push(createRow("SudoesteAlta", 10, col3));
  sector.push(createRow("SudoesteAlta", 11, col3));
  sector.push(createRow("SudoesteAlta", 12, col3));
  sector.push(createRow("SudoesteAlta", 13, col2));
  sector.push(createRow("SudoesteAlta", 14, col2));
  sector.push(createRow("SudoesteAlta", 15, col2));
  sector.push(createRow("SudoesteAlta", 16, col2));

  return sector;
};

const createSudesteBaja = () => {
  /* 
  Columna 1, sin pasillos
  Columna 2, columnas con pasillos
  El resto de las columnas tiene la misma distribucion y tiene pasillos
  */
  const sector = [];
  const col1 = [68];
  const col = [22, null, 20, null, 24];
  sector.push(createRow("SudesteBaja", 1, col1));
  sector.push(createRow("SudesteBaja", 2, col));
  sector.push(createRow("SudesteBaja", 3, col));
  sector.push(createRow("SudesteBaja", 4, col));
  sector.push(createRow("SudesteBaja", 5, col));
  sector.push(createRow("SudesteBaja", 6, col));
  sector.push(createRow("SudesteBaja", 7, col));
  sector.push(createRow("SudesteBaja", 8, col));
  sector.push(createRow("SudesteBaja", 9, col));
  return sector;
};

const createPrefBaja = () => {
  const sector = [];
  // El mas simple: 6 columnas de 55 plateas sin pasillos
  sector.push(createRow("PrefBaja", 1, [55]));
  sector.push(createRow("PrefBaja", 2, [55]));
  sector.push(createRow("PrefBaja", 3, [55]));
  sector.push(createRow("PrefBaja", 4, [55]));
  sector.push(createRow("PrefBaja", 5, [55]));
  sector.push(createRow("PrefBaja", 6, [55]));
  return sector;
};

const createSudoesteBaja = () => {
  /* 
  Columna 1, la escalera come 4 lugares
  Columna 2, la escalera come 4 lugares y tiene pasillos
  El resto de las columnas tiene la misma distribucion y tiene pasillos
  */
  const sector = [];
  const col1 = [null, null, null, null, 65];
  const col2 = [null, null, null, null, 11, null, 30, null, 22];
  const col = [15, null, 30, null, 22];
  sector.push(createRow("SudoesteBaja", 1, col1));
  sector.push(createRow("SudoesteBaja", 2, col2));
  sector.push(createRow("SudoesteBaja", 3, col));
  sector.push(createRow("SudoesteBaja", 4, col));
  sector.push(createRow("SudoesteBaja", 5, col));
  sector.push(createRow("SudoesteBaja", 6, col));
  sector.push(createRow("SudoesteBaja", 7, col));
  sector.push(createRow("SudoesteBaja", 8, col));
  sector.push(createRow("SudoesteBaja", 9, col));
  sector.push(createRow("SudoesteBaja", 10, col));
  return sector;
};

const getSectores = () => {
  const sectoresDelEstadio = [
    {
      id: "Redonda",
      name: "Platea redonda",
    },
    {
      id: "SudesteAlta",
      name: "Platea sudeste alta",
    },
    {
      id: "PrefAlta",
      name: "Preferencial alta",
      distribution: createPrefAlta(),
    },
    {
      id: "SudoesteAlta",
      name: "Platea sudoeste alta",
      distribution: createSudoesteAlta(),
    },
    {
      id: "SudesteBaja",
      name: "Platea sudeste baja",
      distribution: createSudesteBaja(),
    },
    {
      id: "PrefBaja",
      name: "Preferencial baja",
      distribution: createPrefBaja(),
    },
    {
      id: "SudoesteBaja",
      name: "Platea sudoeste baja",
      distribution: createSudoesteBaja(),
    },
  ];
  return sectoresDelEstadio;
};

export default getSectores;
