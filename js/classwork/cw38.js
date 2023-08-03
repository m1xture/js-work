const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
// const allTags = tweets.reduce((acc, { tags }) => {
//     // console.log(acc);
//     acc.push(tags);
//     return acc;
// }, []);
// console.log(allTags);

//? spread и снова он тут...

// const allTags = tweets.reduce((acc, { tags }) => {
//   acc.push(...tags);
//   return acc;
// }, []);
// console.log(allTags);

//? flatMap

const flat = tweets.flatMap((tweet) => tweet.tags);
// console.log(flat);

//todo: Нужно с массива тегов создать статистику в виде обьекта
// {
//     js: 2,
//     html: 2,
//     css: 5,
// }
// console.log(allTags);
// const sortedTags = allTags.reduce((tagsStats, tag) => {
//     if (tagsStats[tag]) {
//         tagsStats[tag] += 1;
//         return tagsStats;
//     } else {
//         tagsStats[tag] = 1;
//         return tagsStats;
//         // tag = 'js';
//         // tagsStats[tag] = 1;
//         // {
//         //     js: 1,
//         // }
//     }
// }, {});
// console.log(sortedTags);

// const user = { name: "Matviy", }
// const key = "name";
// console.log(user[key]);
// console.log(user[key] === user.name);

// const sortedTags = allTags.reduce(
//   (tagsStats, tag) =>
//     tagsStats[tag]
//       ? { ...tagsStats, [tag]: tagsStats[tag] + 1 }
//       : { ...tagsStats, [tag]: 1 },
//   {}
// );
// console.log(sortedTags);

// const sortedTags = allTags.reduce(
//     (tagsStats, tag) => ({
//         ...tagsStats, [tag]: tagsStats[tag] ? tagsStats[tag] + 1 : 1
//     })
//         // tagsStats[tag]
//         //     ? { ...tagsStats, [tag]: tagsStats[tag] + 1 }
//         //     : { ...tagsStats, [tag]: 1 }
//     ,
//   {}
// );
// console.log(sortedTags);


//todo:


const stats = tweets.reduce((acc, { tags }) => { acc.push(...tags); return acc; }, []).reduce(
    (tagsStats, tag) => ({
      ...tagsStats,
      [tag]: tagsStats[tag] ? tagsStats[tag] + 1 : 1,
    }),
    {}
);
console.log(stats);