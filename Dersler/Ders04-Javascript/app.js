//JS Giriş

console.log("Merhaba JavaScript");

// Değişkenler
// var a = 10; //Number
// var b = 3.14; //Number
// var c = "Javascript"; //String

// console.log(a);
// console.log(typeof a);

//console.log(a ,b, c);

// otomatik tip dönüşümleri
// var firstNumber = 10;
// var secondNumber = "20";
// var result = firstNumber - secondNumber;
// console.log(result);
// console.log(typeof result);

//hoisting
// var firstNumber;
// console.log(firstNumber);
// firstNumber = 20;
// deneme();
// function deneme() {
//     console.log("a fonksiyonu");
// }

// Boolen(true/false)

// var isActive = true;

// if (age) {
//     age >= 18 ? console.log("Ehliyet alabilir") : console.log("Ehliyet alamaz");
// }

// Undifined - Tanımsız
// var userName;
// console.log(userName);
// console.log(typeof userName);

//Null - Değer yok
// var isNull = null;
// console.log(isNull);
// console.log(typeof isNull);

// Object - Nesne
// var user = {
//     name: "Hakan",
//     age:30,
//     isActive: true,
//     notlar:{
//         mat: 90,
//         fizik: 80,
//     },
//     favariteFruits: ["elma","armut"],
// };

// console.log(user);
// console.log(typeof user);
// console.log(user.name);
// console.log(user.notlar.mat);

// Array - Dizi
// var fruits = ["elma" , "armut" , "muz"];
// console.log(fruits);
// console.log(typeof fruits);
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

// function - Fonksiyonlar
// function hello() {
//     console.log("Merhaba Javascript");
// }
// hello();
// console.log(hello);
// console.log(typeof hello);

// Date - Tarih
// var date = new Date();
// console.log(date);
// console.log(typeof date);

// var a = 10;
// var b =a;
// console.log("1-",a,b);
// a = 20;
// console.log("2-",a,b);

// var a = [10];
// var b =a;
// console.log("1-",a,b);
// a = [20];
// console.log("2-",a,b);
// console.log("3-",a * b);

// var a = [10,20,30,40,50];
// var b =a;
// console.log("1-",a,b);
// a[0] = 60;
// a.push(60);
// console.log("2-", a, b);

// Scope - Kapsam

// var a = 10;
// function scope(){
//     var b = 20;
//     console.log(a, b);
// }
// scope();
// if(true) {
//     let c = 30; //Block Scope
// }
// {
//     let d = 40; //Block Scope
// }
// console.log(a,b,c,d)

// Tip Dönüşümleri
// var a = "5";
// console.log(a,typeof a);
// a = Number(a);
// console.log(a,typeof a);

// var a = "deneme";
// console.log(a,typeof a);
// a = Number(a);
// console.log(a,typeof a);

// var a = 5 + "2";
// console.log(a);

// var a = 5 - "2";
// console.log(a, typeof a);

// Operatörler - Operators
// Atama operatörü (=)
// const a = 10;

// Aritmetik operatörler
// console.log(10 + 5);
// console.log(10 - 5);
// console.log(10 * 5);
// console.log(10 / 5);
// console.log(10 % 5);//mod alma
// console.log(10 ** 5);//üs alma

// Math Fonksiyonları

// let sonuc;
// sonuc = Math.PI;
// sonuc = Math.round(3.6);
// sonuc = Math.ceil(3.2);
// sonuc = Math.floor(3.9);
// sonuc = Math.sqrt(16);
// sonuc = Math.floor(Math.random() * 100);

// console.log(sonuc);

// String Methodları
let value;
const firstName = "Varol";
const lastName = "Maksutoğlu";
const department = "Yazılım";
const age = 30;

value = firstName + " " + lastName;
value = firstName;
value += " " + lastName;
value = firstName.length;
value = firstName.toUpperCase();
value = firstName.toLowerCase();
value = firstName[0];
value = firstName[firstName.length - 1];
value = firstName.indexOf("a");
value = firstName.includes("a");
value = firstName.concat(" ", lastName, " - ", "Yazılım");
value =
  "nİsim: " +
  firstName +
  "nSoyisim" +
  lastName +
  " " +
  " nYaş:" +
  " " +
  "nDepartman:" +
  department;

// Array Methodları

const langs = ["Python", "Java", "C++", "Javascript"];
const numbers = [43, 22, 35, 4, 12, 80, 50, 8, 99];

// value = numbers.length; // eleman sayısı
// value = numbers[0];//ilk eleman
// value = numbers[numbers.length - 1] // son eleman
// value = numbers.indexOf(12); // elemanın indexi
// value = numbers.includes(12); // elemanın varlığı
// value = numbers.push(100);// dizinin sonuna eleman ekler

// Object

const student = {
  fullName: "Varol Maksutoğlu",
  age: 30,
  adres: {
    city: "İstanbul",
    coutry: "Türkiye",
  },
  langs: ["Python", "Java", "Javascript"],
  work: function () {
    console.log("Çalışıyor...");
    return "Çalışıyor ...";
  },
};

// value = student;
// value = student.fullName;
// value = student.adres.city;
// value = student.langs[0];
// value = student.work();

console.log(value);
