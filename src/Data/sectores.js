// Sectores del estadio

const getSectores = () => {
  const sectoresDelEstadio = [
    {
      id: 0,
      name: "Platea redonda",
    },
    {
      id: 1,
      name: "Platea sudeste alta",
    },
    {
      id: 2,
      name: "Preferencial alta",
    },
    {
      id: 3,
      name: "Platea sudoeste alta",
    },
    {
      id: 4,
      name: "Platea sudeste baja",
      columnas: 10,
      filas: [22, 20, 24],
    },
    {
      id: 5,
      name: "Preferencial baja",
      columnas: 6,
      filas: 55,
    },
    {
      id: 5,
      name: "Platea sudoeste baja",
    },
  ];
  return sectoresDelEstadio;
};

export default getSectores;
