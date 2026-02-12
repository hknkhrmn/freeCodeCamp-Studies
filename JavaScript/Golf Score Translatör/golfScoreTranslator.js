function golfScore(par, strokes) {
  // Stroke 1 ise → Hole-in-one
  if (strokes === 1) {
    return "Hole-in-one!";
  }
  // Stroke, par'dan 2 veya daha fazla azsa → Eagle
  else if (strokes <= par - 2) {
    return "Eagle";
  }
  // Stroke, par'dan 1 azsa → Birdie
  else if (strokes === par - 1) {
    return "Birdie";
  }
  // Stroke, par'a eşitse → Par
  else if (strokes === par) {
    return "Par";
  }
  // Stroke, par'dan 1 fazlaysa → Bogey
  else if (strokes === par + 1) {
    return "Bogey";
  }
  // Stroke, par'dan 2 fazlaysa → Double Bogey
  else if (strokes === par + 2) {
    return "Double Bogey";
  }
  // Stroke, par'dan 3 veya daha fazlaysa → Go Home!
  else {
    return "Go Home!";
  }
}