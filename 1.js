function tentukanDeretGeometri(arr) {
  let deretGeometri = true;
  let pola = arr[1] / arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] / arr[i] !== pola) {
        deretGeometri = false;
        break;
    }
  }
  return deretGeometri;
}