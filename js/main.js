// Lightning Exercises Group 1
// Exercise 1
const mustang = {
    color: "red",
    make: "Ford",
    year: "2015"
};
console.log(mustang);

// Exercise 2
const animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];
console.log(animals);


// Exercise 3
const John = {
    "favorite food" : "steak-ums",
    "age" : 43,
    "hair color" : "red"

};

const Sarah = {
    "favorite food" : "steak",
    "age" : 16,
    "hair color" : "brown"

};

const Kevin = {
    "favorite food" : "potatoes",
    "age" : 20,
    "hair color" : "goldenrod"

};

const family = [John, Sarah, Kevin];

family.forEach(element => console.log(element));

// console.log(John);
// console.log(Sarah);
// console.log(Kevin);


// Lightning Exercises Group 2
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
};

// Exercise 1
console.log(empireStateBuilding.stories);
console.log(empireStateBuilding.height);
console.log(empireStateBuilding.squareFeet);
console.log(empireStateBuilding.eastWestLength);
console.log(empireStateBuilding.northSouthLength);

// Exercise 2
var addy = "address";
var built = "constructionDate";
var price = "cost";
var whoOwns = "owner";
var builder = "architect";

console.log(empireStateBuilding[addy]);
console.log(empireStateBuilding[built]);
console.log(empireStateBuilding[price]);
console.log(empireStateBuilding[whoOwns]);
console.log(empireStateBuilding[builder]);

// Lightning Exercises Group 3
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
};

// Exercise 1
for (var name in nashvilleSoftwareSchool.instructors.partTime) {
    console.log(nashvilleSoftwareSchool.instructors.partTime[name]);
}
for (var name in nashvilleSoftwareSchool.instructors.fullTime) {
    console.log(nashvilleSoftwareSchool.instructors.fullTime[name]);
}



// Exercise 2
console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);
console.log(nashvilleSoftwareSchool.instructors.partTime[0]);
