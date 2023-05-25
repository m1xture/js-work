//todo: #1

function logItems(array) {
   for (let i = 0; i < array.length; i++) {
      let numberOfElem = i + 1;
      console.log(`${numberOfElem} - ${array[i]}`);
   };
   return array;
};
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

//todo: #2

const calculateEngravingPrice = function (message, pricePerWord) {
   const messageArray = message.split(" ");
   const price = messageArray.length * pricePerWord;
   console.log(price);
   return price;
};
calculateEngravingPrice("s;ldlksflkds lalalala lalalalalalaa alalksjdjf lads", 101);

//todo: #3

function findLongestWord (string) {
   const strToArray = string.split(" ");
   let longestWord = strToArray[0];
   for (let i = 0; i < strToArray.length; i++) {
      if (strToArray[i].length > longestWord.length) {
         longestWord = strToArray[i];
      }
   }
   console.log(longestWord);
   return longestWord;
};

findLongestWord('May the force be with you');

// todo: #4

const formatString = function (str) {
   const strLength = str.length;
   let formatStr;
   if (strLength > 40) {
      formatStr = str.slice(0, 40) + "...";
      console.log(formatStr);
   } else {
      console.log(str);
   }
   // console.log(formatStr);
   return formatStr;
}

formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.');

//todo: #5

function checkForSpam (message) {
   const normalizeMessage = message.toLowerCase();
   let result = normalizeMessage.includes("sale") || normalizeMessage.includes("spam");
   console.log(result);
   return result;
}
checkForSpam('Get best salE offers now!');

//todo: #6

let input = Number(prompt("Type number here"));
const numbers = [];
let total = 0;

while (input) {
   // input = Number(prompt("Type number here"));
   if (!isNaN(input)) {
      numbers.push(input);
      input = Number(prompt("Type number one more time"));
   } else if (isNaN(input)) {
      break;
   } else if (input === null) {
      break;
   }
}

// console.log(numbers);


const addNumbers = function () {
   for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
      // console.log(total); 
   };
   console.log(total);
};
addNumbers();
