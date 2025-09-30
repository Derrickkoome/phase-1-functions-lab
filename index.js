// Code your solution in this file!
// 1. Distance from HQ in blocks
function distanceFromHqInBlocks(someValue) {
  const hq = 42; // Headquarters on 42nd Street
  return Math.abs(someValue - hq);
}

// 2. Distance from HQ in feet
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

// 3. Distance travelled in feet (between start and destination)
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// 4. Calculates fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // First 400 feet free
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after 400
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat fare
  } else {
    return 'cannot travel that far'; // Over 2500 feet
  }
}
