//todo: met25


const friend = {
    group: "FE-2",
    school: "Goiteens",
    teacher: "Tate-T"
};

const firstFriend = Object.create(friend);

// console.log(firstFriend.group);

firstFriend.friendName = 'met25';
// console.log(firstFriend);


//? #2 friend

const secondFriend = Object.create(friend);

secondFriend.friendName = "Senya";
// console.log(secondFriend);
secondFriend.showInfo = function () {
    return this.friendName;
}

const senyasClone = Object.create(secondFriend);

console.log(senyasClone.showInfo());