// const a = "Welcome to New York";
// const indexRes = a.indexOf("o");
// console.log(indexRes);


// const stringEnd = "LOrem ipsum dolor sip";
// console.log(stringEnd.endsWith("sip"));

// const stringStart = "Wfjdofjhfduiofh";
// console.log(stringStart.startsWith("Y"));


// todo: replace

// const str = "I am learning js very fast and eating fast";
// const str1 = str.replaceAll("fast", "slow");
// console.log(str1);


/*
 * Напиши скрипт перевірки підписки користувача при доступі до контенту
 * - Є три типи підписки: free, pro та vip.
 * - Отримати доступ можуть лише користувачі pro та vip
 */

// const free = "free";
// const pro = "pro";
// const vip = "VIP";
// let statusUser;
// statusUser = "VIP";
// const canGetAccess = statusUser !== free && statusUser === pro || statusUser === vip;
// console.log("Is it accessing to new content?", canGetAccess);


// console.log(Number(true));
// console.log(String(true));
// console.log(Boolean(null));
// console.log(isNaN("dsg"));

// const a = Number(454);
// console.log(Number.isNaN(a));

const mess = "welcome to Ukraine!";
console.log(mess.padStart(20, "? "));