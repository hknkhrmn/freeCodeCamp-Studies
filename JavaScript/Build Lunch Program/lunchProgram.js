// 1. Boş lunches dizisini oluştur
let lunches = [];

// 2. addLunchToEnd fonksiyonu
function addLunchToEnd(array, lunchItem) {
  array.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return array;
}

// 3. addLunchToStart fonksiyonu
function addLunchToStart(array, lunchItem) {
  array.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return array;
}

// 4. removeLastLunch fonksiyonu
function removeLastLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedItem = array.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  }
  return array;
}

// 5. removeFirstLunch fonksiyonu
function removeFirstLunch(array) {
  if (array.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removedItem = array.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  }
  return array;
}

// 6. getRandomLunch fonksiyonu
function getRandomLunch(array) {
  if (array.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomLunch = array[randomIndex];
    console.log(`Randomly selected lunch: ${randomLunch}`);
  }
}

// 7. showLunchMenu fonksiyonu
function showLunchMenu(array) {
  if (array.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${array.join(', ')}`);
  }
}