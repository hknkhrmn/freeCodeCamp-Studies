function mutation(arr) {
  const hedef = arr[0].toLowerCase();
  const aranan = arr[1].toLowerCase();


  for (let harf of aranan) {
    if (!hedef.includes(harf)) {
      return false;
    }
  }
  return true;
}


console.log (mutation(["hello", "hey"]));  // false
console.log (mutation(["Hakan", "hakhak"])); // true
console.log (mutation(["hakan", "hakan"])); // true