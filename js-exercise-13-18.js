console.log("13. Create an object representing a person with properties like name, age, and address.");
let person = {
    name: "Jane Doe",
    age: "30",
    street: "Street 123",
    zipCode: 12345,
    city: "City",
    country: "Country",
};
console.log(person);
console.log("");

console.log("14. Write a function that takes an object and a property name and returns the value of that property.");
const getPropertyValue = (object, propertyName) => {
  return object[propertyName];
};
console.log(getPropertyValue(person, "name"));
console.log("");

console.log("15. Write a function that adds a new property to an object and another function that deletes a property.");
console.log("Add property");
const addProperty = (object, propertyName, propertyValue) => {
    object[propertyName] = propertyValue;
}
addProperty(person, "isStudent", true);
console.log(person);
console.log("");

console.log("Delete property");
const removeProperty = (object, propertyName) => {
    delete object[propertyName];
}
removeProperty(person, "isStudent");
console.log(person);
console.log("");

console.log("16. Create an object with nested objects representing different levels of information (e.g., a person with an address object).");
let personNested = {
    name: "Jane Doe",
    age: "30",
    address: {
      street: "Street 123",
      zipCode: 12345,
      city: "City",
      country: "Country",
    },
    ad: [
        { title: "Ad1", description: "This is ad description of Ad1" },
        { title: "Ad2", description: "This is ad description of Ad2" },
        { title: "Ad3", description: "This is ad description of Ad3" }
    ]
};
console.log(personNested);
console.log("");

console.log("17. Write a function that filters an object based on a condition.");
const filterAds = (person, predicate) => {
    return person.ad.filter(predicate);
};

const containsAd = ad => ad.title.includes("Ad");
console.log("Filtered Ads Title Contains Ad");
console.log(filterAds(personNested, containsAd));
console.log("");

const containsAd1 = ad => ad.title.includes("Ad1");
console.log("Filtered Ads Title Contains Ad1");
console.log(filterAds(personNested, containsAd1));
console.log("");

const filterObjects = (obj, predicate) => {
    return Object.keys(obj)
        .filter(key => predicate(obj[key], key))
        .reduce((result, key) => {
            result[key] = obj[key];
            return result;
        }, {});
};

const isArray = value => Array.isArray(value);
console.log(filterObjects(personNested, isArray));
console.log("");

console.log("18. Write a function that merges two objects, combining their properties.");
const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 }; //spread operator
};

const objectOne = {
    name: "Jane Doe",
    age: 30,
    address: {
        street: "Street 123",
        city: "City"
    }
};
console.log("Object One");
console.log(objectOne);

const objectTwo = {
    age: 25,
    address: {
        street: "New Street 456",
        zipCode: 12345
    },
    isStudent: true,
    program: "IT"
};
console.log("Object Two");
console.log(objectTwo);

const mergedObjects = mergeObjects(objectOne, objectTwo);
console.log("Merged Objects");
console.log(mergedObjects);