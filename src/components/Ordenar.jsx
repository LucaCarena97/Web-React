export function Ordenar(a, b) {
  if (a.producto < b.producto) {
    return -1;
  }
  if (a.producto > b.producto) {
    return 1;
  }
  return 0;
}
