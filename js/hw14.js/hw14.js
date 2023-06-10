const myObject = {
    name: 'La-la-la',
    age: 0,
    city: "k",
    occupation: "IT",
};

myObject.age = 

console.log(myObject); //? object
console.log(myObject.age); //? 13
console.log(myObject.lalala); //? undefined

//todo: #2

const basket = [
    {
        name: "banana",
        quantity: 3,
        isPopular: true,
        whoPicked: undefined,
        pit: null,
        vitamines: ["sucroze", "B1", "C"],
        producer: {
            name: "tree",
            type: "banana",
        }
    },
    {
        name: "apple",
        quantity: 16,
        isPopular: true,
        whoPicked: undefined,
        pit: null,
        vitamines: ["Ferum", "B1", "C"],
        producer: {
            name: "tree",
            type: "apple",
        }
    },
    {
        name: "pear",
        quantity: 10,
        isPopular: true,
        whoPicked: undefined,
        pit: null,
        vitamines: ["А", "B", "C"],
        producer: {
            name: "tree",
            type: "pear",
        }
    }
];
console.log(basket);
console.log(basket[1]);
console.log(basket[1].name);
console.log(basket);
console.log(basket[1].producer.type);

//todo: extra #1
//?Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:
//?imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
//?descr - опис, значення "Spacious apartment in the city center";
//?rating - рейтинг, значення 4;
//?price - ціна, значення 2153;
//?tags - метаінформація, масив ["premium", "promoted", "top"].

//?Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника. Додай йому наступні властивості:
//?name - ім'я власника, значення "Henry";
//?phone - телефон, значення "982-126-1588";
//?email - пошта, значення "henry.carter@aptmail.com".




const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",
    },
};

//? Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
//?aptRating - рейтинг;
//?aptDescr - опис;
//?aptPrice - ціна;
//?aptTags - теги.

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

//?Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.
// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис «квадратних дужок».

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.

const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];

const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[numberOfTags - 1];
console.log(lastTag);

//? Доповни код, оновивши значення властивостей об'єкта apartment:
// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".
// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".

apartment["price"] = 5000;
apartment["rating"] = 4.7;
apartment.owner.name = "Henry Sibola";
console.log(apartment.owner.name);
apartment.tags.push("trusted");
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
    country: "Jamaica",
    city: "KIngston",
};
console.log(apartment);

//todo: #4

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
    name,
    price,
    image,
    tags,
};

console.log(product.name);