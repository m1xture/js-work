function updateLevel(level, xp) {
  let xpForCurrentLvl = 0;
  for (let i = 0; i < level; i++) {
    xpForCurrentLvl += 5 * Math.pow(i, 2) + 50 * i + 100;
  }
  // console.log(xpForCurrentLvl); //? 100

  let newLevel = 0; //? 1
  // const xpDifference = xp - xpForCurrentLvl;
  function calculateXPForLevel(lvl) {
    let xpForLevel = 0;
    for (let i = 0; i < lvl; i++) {
      xpForLevel += 5 * Math.pow(i, 2) + 50 * i + 100;
    }
    return xpForLevel;
  }
  while (xp >= calculateXPForLevel(newLevel + 1)) {
    newLevel++;
  }
  console.log(newLevel);
  // let betweenNums = 0;
  // function isInTheDifference(i) {
  //   return (
  //     xpDifference /
  //       (5 * Math.pow(i, 2) + 50 * i + 100 + xpForCurrentLvl + betweenNums) >=
  //     1
  //   );
  // }
  // for (let i = 0; isInTheDifference(i); i++) {
  //   newLevel++;
  //   betweenNums += 5 * Math.pow(i, 2) + 50 * i + 100;
  // }

  // console.log("lvl" + " " + (newLevel + level));
  // } else {
  // }
}

updateLevel(666, 666); //? 10

// let sum2 = 0;
// const rest = xp - sum;
// const sumForNext =
//   sum + sum + 5 * Math.pow(level + 1, 2) + 50 * (level + 1) + 100;
// // console.log(rest, sumForNext);
// for (let i = 1; i < Math.floor(xp / (5 * Math.pow(i, 2) + 50 * i + 100)); i++) {
//   console.log(i);
// }
// if (xp > sumForNext) {
//   // console.log("lalala");
// } else {
// }
