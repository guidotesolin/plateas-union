// Sectores del estadio
import { v4 as uuidv4 } from "uuid";

const createSeat = (rowId, number) => {
  const id = uuidv4();
  const taken = false;
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

const createRedonda = () => {
  const sector = [];
  const col1 = [107];
  const col2 = [35, null, 35, null, 36];
  sector.push(createRow("Redonda", 1, col1));
  sector.push(createRow("Redonda", 2, col2));
  sector.push(createRow("Redonda", 3, col2));
  sector.push(createRow("Redonda", 4, col2));
  sector.push(createRow("Redonda", 5, col2));
  sector.push(createRow("Redonda", 6, col2));
  sector.push(createRow("Redonda", 7, col2));
  sector.push(createRow("Redonda", 8, col2));
  return sector;
};

const createSudesteAlta = () => {
  /* 
  Columna 1, sin pasillos
  Columna 2-7 y 12-16, columnas con pasillos dobles
  Columna 8-12, columna con pasillos dobles y boca de salida
  */
  const sector = [];
  const col1 = [64];
  const col2 = [24, null, null, 8, null, null, 28];
  const col3 = [
    24,
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
  ];
  sector.push(createRow("SudesteAlta", 1, col1));
  sector.push(createRow("SudesteAlta", 2, col2));
  sector.push(createRow("SudesteAlta", 3, col2));
  sector.push(createRow("SudesteAlta", 4, col2));
  sector.push(createRow("SudesteAlta", 5, col2));
  sector.push(createRow("SudesteAlta", 6, col2));
  sector.push(createRow("SudesteAlta", 7, col2));
  sector.push(createRow("SudesteAlta", 8, col3));
  sector.push(createRow("SudesteAlta", 9, col3));
  sector.push(createRow("SudesteAlta", 10, col3));
  sector.push(createRow("SudesteAlta", 11, col3));
  sector.push(createRow("SudesteAlta", 12, col3));
  sector.push(createRow("SudesteAlta", 13, col2));
  sector.push(createRow("SudesteAlta", 14, col2));
  sector.push(createRow("SudesteAlta", 15, col2));
  sector.push(createRow("SudesteAlta", 16, col2));
  return sector;
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

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const getSectores = () => {
  const sectoresDelEstadio = [
    {
      id: "Redonda",
      name: "Platea Redonda Alta",
      distribution: createRedonda(),
      price: 14,
    },
    {
      id: "SudesteAlta",
      name: "Platea Sudeste Alta",
      distribution: createSudesteAlta(),
      price: 17,
    },
    {
      id: "PrefAlta",
      name: "Platea Preferencial Alta",
      distribution: createPrefAlta(),
      price: 20,
    },
    {
      id: "SudoesteAlta",
      name: "Platea Sudoeste Alta",
      distribution: createSudoesteAlta(),
      price: 17,
    },
    {
      id: "SudesteBaja",
      name: "Platea Sudeste Baja",
      distribution: createSudesteBaja(),
      price: 20,
    },
    {
      id: "PrefBaja",
      name: "Platea Preferencial Baja",
      distribution: createPrefBaja(),
      price: 28,
    },
    {
      id: "SudoesteBaja",
      name: "Platea Sudoeste Baja",
      distribution: createSudoesteBaja(),
      price: 20,
    },
  ];
  // Ya estan creados los sectores
  // Ahora vamos a asignarle un porcentaje de ocupación a cada sector
  // Distribuiremos cada platea al 60%
  const percentage = 0.6;
  sectoresDelEstadio.forEach((sec) => {
    // Primero vamos a contar el totalOfSeats de pleateas disponibles por cada sector
    let totalOfSeats = 0;
    if (sec.distribution && sec.distribution.length > 0) {
      sec.distribution.forEach((row) => {
        if (row.seats && row.seats.length > 0) {
          row.seats.forEach((seat) => {
            if (seat !== "empty") totalOfSeats++;
          });
        }
      });
    }
    // Calcular la cantidad de asientos que deberían estar ocupados para cumplir con el porcentaje
    const capacityToBeCompleted = Math.round(totalOfSeats * percentage);
    // En este array iremos guardando los valores random que estarán ocupados
    const randomValues = [];
    while (randomValues.length < capacityToBeCompleted) {
      const candidate = getRandomNumber(totalOfSeats);
      if (!randomValues.includes(candidate)) randomValues.push(candidate);
    }
    // Una vez que tenemos los asientos que estarán ocupados volvemos a mapear y modificamos los asientos
    let numberOfSeat = 0;
    if (sec.distribution && sec.distribution.length > 0) {
      sec.distribution.forEach((row) => {
        if (row && row.seats && row.seats.length > 0) {
          row.seats.forEach((seat) => {
            if (seat !== "empty" && randomValues.includes(numberOfSeat)) {
              seat.taken = true;
            }
            numberOfSeat++;
          });
        }
      });
    }
  });
  // Finalización de la distribución, con esto tenemos cada sector del estadio al 60%
  return sectoresDelEstadio;
};

export default getSectores;
