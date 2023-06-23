//todo: #1

const user = {
    hobby: "dancing",
    premium: null,
    addMood() {
        this.mood = "happy";
    },
    changeHobby() {
        this.hobby = "skydiving";
    },
    changeStatus() {
        this.premium = false;
    },
};

console.log(user);

user.addMood();
user.changeHobby();
user.changeStatus();

const userKeys = Object.keys(user);

for (const key of userKeys) {
    console.log(`${key}: ${user[key]}`);
};

//todo: #2

const countProps = (obj) => {
    const objProps = Object.keys(obj);
    let counter = 0;
    for (const prop of objProps) {
        counter += 1;
    }
};

//todo: #3

const findBestEmployee = (employees) => {
    
};