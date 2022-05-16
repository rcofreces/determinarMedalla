let posiciónCarrera: number = Number(
  prompt("Ingrese posición en que terminó la carrera")
);

if (posiciónCarrera === 1) {
  console.log("Usted recibió Medalla de Oro");
} else {
  if (posiciónCarrera === 2) {
    console.log("Usted recibió Medalla de Plata");
  } else {
    if (posiciónCarrera === 3) {
      console.log("Usted recibió Medalla de Bronce");
    } else {
      console.log("Usted recibió Mención de Participación");
    }
  }
}
