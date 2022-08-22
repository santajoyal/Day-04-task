// //false
// var obj1 = {
//     name: "person1",
//     age:5,
// };
// var obj2 = {
//     age:5,
//     name:"person1",
// };
// console.log(JSON.stringify(obj1)===JSON.stringify(obj2));

// //true
// var obj1 = {
//     name: "person1",
//     age:5,
// };
// var obj2 = {
//     name:"person1",
//     age:5,
// };
// console.log(JSON.stringify(obj1)===JSON.stringify(obj2));



// const xhr = new XMLHttpRequest();

// xhr.open("GET", "https://restcountries.com/v3.1/all");
// xhr.send();

// xhr.responseType ="json";

// xhr.onload = function displayResult(){
//     const countries= xhr.response;
//     for(var i = 0 in countries){
//         // console.log(countries[i].flags.png);
//         console.log("country name :",countries[i].name.common);
//         console.log("region name :", countries[i].region);
//         console.log("subregion name:",countries[i].subregion);
//         console.log("no of population:",countries[i].population);
//     }
//     // console.log(countries[7].flags.png);
//     // console.log(countries.length);
//     // console.log(countries[0].name.common);
// };