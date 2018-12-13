export function obtenerDiferenciaAnio(year) {
  return new Date().getFullYear() - year;
}

export function calcularMarca(modelo) {
  let incremento = 0;

  switch (modelo) {
    case 'europeo':
      incremento = 1.3;
      break;
    case 'americano':
      incremento = 1.15;
      break;
    case 'asiatico':
      incremento = 1.05;
      break;
    default:
      break;
  }

  return incremento;
}

export function obtenerPlan(plan) {
  return plan === 'basico' ? 1.2 : 1.5;
}
