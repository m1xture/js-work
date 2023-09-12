//todo: Method bind()

function sayHelloToWorld() {
  console.log("Hello World!", this);
}

sayHelloToWorld();

if (this === window) {
  console.log("it is the same");
}

//? Если есть строгий режим, то this в глобальной области это undefined.
//? А если нету строго режима, то обьект window

const programmer = {
  industry: "Kotlin, Swift, Python, Pascal",
  experience: "9 years",
  sayHello: sayHelloToWorld,
};

programmer.sayHello(); //? Контекст programmer

const programmer2 = {
  industry: "Fortan, php, java",
  experience: "9 years",
};

// programmer2.sayHelloToWorld(); //? Ошибка, но:

const h = sayHelloToWorld.bind(programmer2);
h();  //? Всё работает, мы вызвали функцию sayHelloToWorld в контексте programmer2
//desc: bind() не разу вызывает функцию,
//desc: Поэтому нужна предыдущая строка кода 'h();'
//desc: Так, bind часто используют для коллбеков

//todo: Method call()

const runFn = function () {
    console.log("Running...", this);
};

const andrew = {
    type: "Person",
};

// andrew.runFn(); //! Error, но так задумано
const learningAndrewToRun = runFn.call(andrew); //? Метод сразу вызывает функцию

//todo: Arrow functions and this

const speak = () => {
    console.log("La-la-la", this);
};

const obj = {
    a: 90,
    b: 12,
    sp: speak,
};

obj.sp(); //? Контекст window

//todo: Method apply()

const fn = function (a, b, c) {
    console.log("I am just a function! Honestly", this);
    console.log(a * b * c);
};

const obj2 = {
    k: 1.056,
};


fn.apply(obj2, [2, 3, 8]) //? Вызвали функцию в контексте obj2

