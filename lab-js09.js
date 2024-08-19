// // ----------------------Lab01 Class------------------
// class Calculator {
//   constructor(initialValue = 0) {
//     this.value = initialValue;
//   }

//   add(number) {
//     this.value += number;
//   }

//   subtract(number) {
//     this.value -= number;
//   }

//   multiply(number) {
//     this.value *= number;
//   }

//   divide(number) {
//       this.value /= number;
//   }

//   show() {
//     console.log(`Value = ${this.value}`);
//   }
// }

// const calc = new Calculator(100);
// calc.add(7);       
// calc.subtract(8);  
// calc.multiply(9);  
// calc.divide(10);    
// calc.show();       

// // ------------------Lab02 Class----------------
// class Sale {
//   constructor(name, amount, price) {
//     this.name = name;
//     this.amount = amount;
//     this.price = price;
//   }

//   calcPrice() {
//     return this.amount * this.price;
//   }
// }

// class Beverage extends Sale {
//   constructor(name, amount, price) {
//     super(name, amount, price);
//   }
// }

// const beverage = new Beverage("Pepsi", 3, 19);

// console.log(beverage.name); 
// console.log(beverage.calcPrice()); 


// // ---------------------Lab02 Static-------------------
// let input = {};
// let input1 = [1,2,3,4];
// function isArray(input){
//   console.log(Array.isArray(input));
// }
// isArray(input) // false 
// isArray(input1)  // true


// // ---------------------Lab01 Obj,Value,entries----------
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = 0
// for(let i of Object.values(salaries)){
//   sum+=i
// }
// console.log(sum)


// // ---------------------Lab02-----------------
// function checkEmptyObj(obj) {
//   return Object.keys(obj).length === 0;
// }

// let empty = {};
// let nonEmpty = { key: "value" };

// console.log(checkEmptyObj(empty));   // true
// console.log(checkEmptyObj(nonEmpty));   //false


// // ----------------- Lab01 Rest-----------------
// function result(...numbers) {
//   return numbers.reduce((acc, num) => acc * num, 1);
// }

// console.log(result(2, 3, 4));  
// console.log(result(8, 10));    
// console.log(result(6, 7, 8, 9, 10)); 

// // ------------------- Lab02 Rest--------------------
// function filterOutOdds(...numbers){
//   let odd = []
//   let even = []
//   for(let i of numbers){
//     i % 2 ==0 ?even.push(i):odd.push(i) 
//   }
//   return `Even number: ${even} `
// }
// console.log(filterOutOdds(8,9,7,1,20))
// -----------or----------
// let filterOdds = (...nums) => {
//     let odd = nums.filter((item) => {
//       return item % 2 == 0
//     })
//     return odd
//   }
  
//   let result = filterOdds(1, 2, 3, 4, 5, 6, 7, 8)
//   console.log(result)

// // ------------------- Lab03 Rest--------------------
// function mergeObjects(...object){
// let merge = {};
// for (let i of object){
//   merge = {...merge,...i}
// }
// return merge
// }
// let object1 = {fname : 'Suphapinya'}
// let object2 = {lname : 'Nundechabordi'}
// let object3 = {nickName: 'Boeing'}

// console.log(mergeObjects(object1,object2,object3))

// // ----------------Lab04 Spread------------
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];
// let mergeNumber = [5,...nums1,-6,-1,...nums2]
// let sum = 0
// for(let i of mergeNumber){
//   sum+=i
// }
// console.log(sum)

// // ----------------Lab05 Spread------------
// function newArray(...arr){
//   let merge = [...arr[0]]
//   merge.length > merge.length-1 ? merge[3] = merge[3]**2 : 'not update'
//   return merge
// }

// let arr1 = [1,2,3,4,5,6,7,8]
// console.log(newArray(arr1))

// // ----------------Lab06 Spread------------
// function personalInfo(fname, lname, ...hobbies) {
//   return {
//     firstName: fname ,
//     lastName: lname,
//     hobbies: hobbies,
//     hobbyCount: count = hobbies.length
//   };
// }
// console.log(personalInfo('Mink','Doe','Reading','Singing','Swimming'));
// console.log(personalInfo('Apple','John','Drawing'));

// // ----------------Lab07 Spread------------
// function doubleAndReturnArgs(arr, ...nums) {
//   const result = nums.map(num => num * 2);
//   return [...arr, ...result];
// }

// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// console.log(doubleAndReturnArgs([2], 10, 4));
// console.log(doubleAndReturnArgs([2,4,5,6], 8, 9,10));

// // ----------------Lab09 Spread------------
// function cloneArray(arr) {
//   return [...arr];
// }

// const array = [1,2,3,4,5,6,7,8];
// const newArray = cloneArray(array);

// console.log(newArray);
// console.log(array === newArray); //false (not same reference)

// // ----------------Lab10 Spread------------
// function cloneObject(obj) {
//   return { ...obj };
// }

// const object = {apple:123,mink:456,boeing:789 };
// const newObject = cloneObject(object);

// console.log(newObject); 
// console.log(object === newObject); //false (not same reference)

// // --------------------Lab11 Destructuring--------------
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); //Maya
// console.log(second); // Marisa
// console.log(third); // Chi
//การใช้ Destructuring อ้างอิงถึงค่านั้นๆตามลำดับ

// // --------------------Lab12 Destructuring--------------
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // Raindrops on roses (= raindrops)
// console.log(whiskers); // whiskers on kittens (= whiskers)
// console.log(aFewOfMyFavoriteThings); // [ Bright copper kettles, warm woolen mittens ] (= aFewOfMyFavoriteThings)
//การใช้ Destructuring อ้างอิงถึงค่านั้นๆตามลำดับ

// // --------------------Lab13 Destructuring--------------
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // [ 10,30,20 ]  // override from rigth to left

// // --------------------Lab14 Destructuring--------------
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // 8 (= numPlanets)
// console.log(yearNeptuneDiscovered); // 1846 (= yearNeptuneDiscovered)
//การใช้ Destructuring อ้างอิงถึงค่านั้นๆตามลำดับ

// // --------------------Lab15 Destructuring--------------
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // { yearMarsDiscovered: 1659, yearNeptuneDiscovered: 1846 }
//การใช้ Destructuring อ้างอิงถึงค่านั้นๆตามลำดับ

// // --------------------Lab16 Destructuring--------------
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // Your name is Alejandro and you like purple
// console.log(getUserData({ firstName: 'Melissa' })); // Your name is Melissa and you like green
// console.log(getUserData({})); // Your name is undefined and you like green เนื่องจากไม่ได้กำหนดชื่อ
// // ตอนแรกคำตอบไม่ออกเนื่องจากไม่ได้ใส่ console.log ค่าจึงไม่ออกมา

// // --------------------Lab17 Destructuring--------------
// let guest = 'Jane';
// let admin = 'Pete';
// [guest,admin] = ['Pete','Jane']
// console.log(guest)
// console.log(admin)

// // --------------------Lab18 Destructuring--------------
// function checkAge(user = {firstName , lastName, age}){
//   let { firstName, lastName, age } = user
//   if (age <= 18){
//      return 'ไม่มีสิทธิ์เข้าใช้งาน'
//   }else{
//     return `Hello ${firstName} ${lastName}`
//   }
// }
// console.log(checkAge({firstName:'nana',lastName:'jojo',age:18}));
// console.log(checkAge({firstName:'nana',lastName:'jojo',age: 30}));

// // --------------------Lab19 Destructuring--------------
// let user = {
//   name: 'John',
//   years: 27
// };
// let {name,years:age,isAdmin='false'} = user
// console.log(name,age, isAdmin)

// // --------------------Lab21 Destructuring--------------
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [a, [b, [[[c, d], e], f]]] = arr
// console.log (a,b,c,d,e,f)

// // --------------------Lab22 Destructuring--------------
// const obj = { prop: 5, prop2: 10 };
// let { prop:a, prop2:b} = obj
// console.log(a)
// console.log(b)

// // --------------------Lab23 Destructuring--------------
// let a, b;
// { a, b } = { a: 1, b: 2 }; // Error (wrong syntax)
// -----------------------
// let {a, b} = { a: 1, b: 2 };
// console.log(a)
// console.log(b)

// // --------------------Lab24 Destructuring--------------
// const [, , , a, b] = [1, 2, 3]; //undefined เพราะ a = index3 ,b = index4 ซึ่งไม่มีค่า

// // --------------------Lab25 Destructuring--------------
// const q = { prop: 5, prop2: [10, 100] };
// let {prop:x , prop2:[,y]} = q
// console.log(x,y)

// // --------------------Lab26 Destructuring--------------
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// let {prop:x, prop2:{prop2:{nested:[,y,]}}} = q
// console.log(x,y)

// // --------------------Lab27 Destructuring--------------
// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];
// for(let key of names){
// let {firstName,lastName} = key
//   console.log(`Fullname: ${firstName} ${lastName}`)
// }

// // --------------------Lab28 Destructuring--------------
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];
// for(let key of users){
//   let {user,age ='unknown'} = key
//   console.log (user,age)
// }